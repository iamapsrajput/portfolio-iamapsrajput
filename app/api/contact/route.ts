import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { rateLimit, getClientIP, checkHoneypot } from "@/lib/security";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = await getClientIP();
    const rateLimitResult = rateLimit(ip, 5, 60000); // 5 requests per minute

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const validated = contactSchema.parse(body);

    // Check honeypot
    if (!checkHoneypot(validated.honeypot)) {
      // Silent fail for bots
      return NextResponse.json({ success: true });
    }

    // Send notification
    await sendContactNotification({
      name: validated.name,
      email: validated.email,
      subject: validated.subject,
      message: validated.message,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid form data", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
