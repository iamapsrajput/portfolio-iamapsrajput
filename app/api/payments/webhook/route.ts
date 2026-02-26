import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/razorpay";
import { sendEmail } from "@/lib/email";

// Store processed webhook IDs to prevent duplicate processing
const processedWebhooks = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("RAZORPAY_WEBHOOK_SECRET not configured");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    const verified = verifyWebhookSignature(body, signature, webhookSecret);

    if (!verified) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);
    const eventId = event.event;

    // Idempotency check
    if (processedWebhooks.has(eventId)) {
      console.log("Webhook already processed:", eventId);
      return NextResponse.json({ success: true, message: "Already processed" });
    }

    // Process webhook events
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      console.log("Payment captured:", {
        paymentId: payment.id,
        orderId: payment.order_id,
        amount: payment.amount,
        currency: payment.currency,
        timestamp: new Date().toISOString(),
      });

      // Send notification email
      await sendEmail({
        to: process.env.CONTACT_EMAIL_TO || "iamapsrajput@outlook.com",
        subject: `Payment Received: ${payment.id}`,
        html: `
          <h2>Payment Captured</h2>
          <p><strong>Payment ID:</strong> ${payment.id}</p>
          <p><strong>Order ID:</strong> ${payment.order_id}</p>
          <p><strong>Amount:</strong> ${payment.amount / 100} ${payment.currency}</p>
          <p><strong>Status:</strong> ${payment.status}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        `,
      });

      processedWebhooks.add(eventId);
    } else if (event.event === "payment.failed") {
      const payment = event.payload.payment.entity;
      console.log("Payment failed:", {
        paymentId: payment.id,
        orderId: payment.order_id,
        error: payment.error_description,
        timestamp: new Date().toISOString(),
      });

      processedWebhooks.add(eventId);
    } else if (event.event === "order.paid") {
      const order = event.payload.order.entity;
      console.log("Order paid:", {
        orderId: order.id,
        amount: order.amount,
        timestamp: new Date().toISOString(),
      });

      processedWebhooks.add(eventId);
    }

    // Clean up old webhook IDs periodically (keep last 1000)
    if (processedWebhooks.size > 1000) {
      const ids = Array.from(processedWebhooks);
      processedWebhooks.clear();
      ids.slice(-500).forEach((id) => processedWebhooks.add(id));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
