import { NextRequest, NextResponse } from "next/server";
import { paymentSchema } from "@/lib/validators";
import { rateLimit, getClientIP } from "@/lib/security";
import { createOrder } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = await getClientIP();
    const rateLimitResult = rateLimit(ip, 10, 60000); // 10 requests per minute

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const validated = paymentSchema.parse(body);

    // Server-side amount validation (never trust client)
    if (validated.amount <= 0 || validated.amount > 1000000) {
      return NextResponse.json(
        { error: "Invalid payment amount" },
        { status: 400 }
      );
    }

    // Create order
    const order = await createOrder(
      validated.amount,
      validated.currency,
      validated.invoiceId,
      {
        description: validated.description || "Service fees",
        invoice_id: validated.invoiceId || "",
      }
    );

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        notes: order.notes,
      },
    });
  } catch (error) {
    console.error("Create order error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid payment data", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}
