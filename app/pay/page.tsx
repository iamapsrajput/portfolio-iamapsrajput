"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useToast } from "@/components/ui/use-toast";
import Script from "next/script";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { AlertCircle, Shield, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PayPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const paymentMode = process.env.NEXT_PUBLIC_PAYMENT_MODE || "FULL";

  const handleSimplePayment = () => {
    const paymentLink = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK;
    if (!paymentLink) {
      toast({
        title: "Error",
        description: "Payment link not configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }
    window.open(paymentLink, "_blank");
  };

  const handleFullPayment = async () => {
    if (!razorpayLoaded) {
      toast({
        title: "Error",
        description: "Payment gateway is loading. Please wait a moment.",
        variant: "destructive",
      });
      return;
    }

    const amountNum = parseFloat(amount);
    if (!amountNum || amountNum <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid payment amount.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create order on server
      const response = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountNum,
          currency: "INR",
          description: "Service fees",
          invoiceId: invoiceId || undefined,
        }),
      });

      const data = (await response.json()) as
        | { error?: string }
        | {
            order: {
              id: string;
              amount: number;
              currency: string;
              notes: { description?: string };
            };
          };

      if (!response.ok) {
        throw new Error(
          ("error" in data ? data.error : undefined) || "Failed to create payment order"
        );
      }

      const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKeyId) {
        toast({
          title: "Error",
          description: "Payment gateway not configured. Please contact support.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const order = "order" in data ? data.order : null;
      if (!order) {
        throw new Error("Invalid response from payment server");
      }

      const options = {
        key: razorpayKeyId,
        amount: order.amount,
        currency: order.currency,
        name: "Ajay Rajput",
        description: order.notes.description || "Service fees",
        order_id: order.id,
        handler: async function (response: any) {
          // Verify payment on server
          const verifyResponse = await fetch("/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            }),
          });

          const verifyData = (await verifyResponse.json()) as {
            verified?: boolean;
          };

          if (verifyResponse.ok && verifyData.verified) {
            toast({
              title: "Payment successful!",
              description: "Your payment has been processed successfully.",
            });
            // Reset form
            setAmount("");
            setInvoiceId("");
          } else {
            toast({
              title: "Payment verification failed",
              description: "Please contact support if payment was deducted.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          email: "",
          contact: "",
        },
        theme: {
          color: "#000000",
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setIsLoading(false);
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl">
            <SectionHeader
              title="Pay Service Fees"
              subtitle="Secure payment processing via Razorpay"
            />

            <Reveal delay={0.2}>
              <GradientBorderCard>
                <Card className="border-0 bg-transparent shadow-none">
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>
                      Enter the payment amount and any invoice reference if provided.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {paymentMode === "SIMPLE" ? (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="invoiceId">Invoice/Reference ID (Optional)</Label>
                          <Input
                            id="invoiceId"
                            type="text"
                            placeholder="Enter invoice or reference ID"
                            value={invoiceId}
                            onChange={(e) => setInvoiceId(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <GlowButton
                          onClick={handleSimplePayment}
                          size="lg"
                          className="w-full"
                        >
                          Pay via Payment Link
                        </GlowButton>
                        <p className="text-xs text-muted-foreground">
                          You will be redirected to Razorpay's secure payment page.
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleFullPayment();
                        }}
                        className="space-y-6"
                      >
                        <div>
                          <Label htmlFor="amount">
                            Amount (INR) <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="amount"
                            type="number"
                            step="0.01"
                            min="1"
                            required
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="invoiceId">Invoice/Reference ID (Optional)</Label>
                          <Input
                            id="invoiceId"
                            type="text"
                            placeholder="Enter invoice or reference ID"
                            value={invoiceId}
                            onChange={(e) => setInvoiceId(e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <GlowButton
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isLoading || !razorpayLoaded}
                        >
                          {isLoading ? "Processing..." : "Proceed to Payment"}
                        </GlowButton>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </GradientBorderCard>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 space-y-4">
                <GradientBorderCard>
                  <div className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-2 font-semibold">What happens next?</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>Payment is processed securely through Razorpay</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>You'll receive a confirmation email with payment details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>Payment confirmation is verified via webhook</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </GradientBorderCard>

                <div className="flex items-start gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Payments are confirmed via
                    webhook. If you experience any issues, please contact support with your payment
                    reference ID.
                  </p>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Payments are processed securely by Razorpay. Your payment information is
                  encrypted and secure.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      {paymentMode === "FULL" && (
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          onLoad={() => setRazorpayLoaded(true)}
        />
      )}
    </div>
  );
}
