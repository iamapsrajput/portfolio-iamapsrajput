import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_EMAIL = process.env.CONTACT_EMAIL_TO || "iamapsrajput@outlook.com";

export async function sendEmail({
  to,
  subject,
  html,
  from = "Portfolio <noreply@iamapsrajput.com>",
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  if (!resend) {
    console.warn("Resend API key not configured. Email would be sent to:", {
      to,
      subject,
    });
    // In development, you might want to log the email content
    if (process.env.NODE_ENV === "development") {
      console.log("Email content:", html);
    }
    return { success: false, error: "Email provider not configured" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
}

export async function sendBookingNotification(data: {
  name: string;
  email: string;
  company?: string;
  goal: string;
  timezone?: string;
  notes?: string;
}) {
  const html = `
    <h2>New Consultation Booking Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    <p><strong>Goal:</strong> ${data.goal}</p>
    ${data.timezone ? `<p><strong>Timezone:</strong> ${data.timezone}</p>` : ""}
    ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ""}
    <p><em>Please confirm this booking by email.</em></p>
  `;

  return await sendEmail({
    to: CONTACT_EMAIL,
    subject: `New Consultation Booking: ${data.name}`,
    html,
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;

  return await sendEmail({
    to: CONTACT_EMAIL,
    subject: `Contact Form: ${data.subject}`,
    html,
  });
}

export async function sendBookingConfirmation(data: {
  name: string;
  email: string;
}) {
  const html = `
    <h2>Thank you for your booking request!</h2>
    <p>Hi ${data.name},</p>
    <p>Thank you for requesting a consultation. I've received your request and will confirm the meeting details by email shortly.</p>
    <p>Best regards,<br>Ajay Rajput</p>
  `;

  return await sendEmail({
    to: data.email,
    subject: "Consultation Booking Request Received",
    html,
  });
}
