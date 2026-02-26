import { NextRequest, NextResponse } from "next/server";
import { verifyPaymentSignature } from "@/lib/razorpay";
import { rateLimit, getClientIP } from "@/lib/security";
import { z } from "zod";

const verifySchema = z.object({
  orderId: z.string(),
  paymentId: z.string(),
  signature: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = await getClientIP();
    const rateLimitResult = rateLimit(ip, 20, 60000); // 20 requests per minute

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validated = verifySchema.parse(body);

    // Verify signature
    const verified = verifyPaymentSignature(
      validated.orderId,
      validated.paymentId,
      validated.signature
    );

    if (!verified) {
      return NextResponse.json(
        { error: "Payment signature verification failed" },
        { status: 400 }
      );
    }

    // Log successful verification (in production, store in database)
    console.log("Payment verified:", {
      orderId: validated.orderId,
      paymentId: validated.paymentId,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      verified: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid verification data" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
