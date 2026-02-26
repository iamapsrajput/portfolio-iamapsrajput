import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  goal: z.string().min(10, "Please describe your goal (at least 10 characters)").max(500),
  timezone: z.string().optional(),
  notes: z.string().max(1000).optional(),
  honeypot: z.string().max(0).optional(), // Honeypot field
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0).optional(), // Honeypot field
});

export const paymentSchema = z.object({
  amount: z.number().positive("Amount must be positive").max(1000000),
  currency: z.string().default("INR"),
  description: z.string().max(500).optional(),
  invoiceId: z.string().max(100).optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
