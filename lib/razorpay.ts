import Razorpay from "razorpay";
import * as crypto from "crypto";

let razorpayInstance: Razorpay | null = null;

function getRazorpayInstance(): Razorpay {
  if (!razorpayInstance) {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error(
        "RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment variables"
      );
    }
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }
  return razorpayInstance;
}

export const razorpay = new Proxy({} as Razorpay, {
  get(_target, prop) {
    return getRazorpayInstance()[prop as keyof Razorpay];
  },
});

/**
 * Verify Razorpay payment signature
 */
export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string = process.env.RAZORPAY_KEY_SECRET!
): boolean {
  const payload = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return expectedSignature === signature;
}

/**
 * Verify Razorpay webhook signature
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string = process.env.RAZORPAY_WEBHOOK_SECRET!
): boolean {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return expectedSignature === signature;
}

/**
 * Create a Razorpay order
 */
export async function createOrder(
  amount: number,
  currency: string = "INR",
  receipt?: string,
  notes?: Record<string, string>
) {
  const options = {
    amount: amount * 100, // Convert to paise
    currency,
    receipt: receipt || `receipt_${Date.now()}`,
    notes: notes || {},
  };

  return await razorpay.orders.create(options);
}
