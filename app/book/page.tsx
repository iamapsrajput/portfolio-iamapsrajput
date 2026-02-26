"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useToast } from "@/components/ui/use-toast";
import { bookingSchema, type BookingFormData } from "@/lib/validators";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui/section-header";

export default function BookPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    company: "",
    goal: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    notes: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Client-side validation
      const validated = bookingSchema.parse(formData);

      // Check honeypot
      if (validated.honeypot && validated.honeypot.length > 0) {
        // Silent fail for bots
        return;
      }

      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking");
      }

      toast({
        title: "Booking request submitted!",
        description:
          "Thank you for your request. I&apos;ll confirm the meeting details by email shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        goal: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        notes: "",
        honeypot: "",
      });

      // Optionally redirect after a delay
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to submit booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl">
            <SectionHeader
              title="Book a Consultation"
              subtitle="Fill out the form below to request a consultation. I&apos;ll confirm the meeting details by email."
            />

            <Reveal delay={0.2}>
              <GradientBorderCard>
                <Card className="border-0 bg-transparent shadow-none">
                  <CardHeader>
                    <CardTitle>Consultation Request</CardTitle>
                    <CardDescription>
                      No payment required upfront. We&apos;ll discuss your needs and confirm the
                      meeting.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field - hidden from users */}
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={(e) =>
                          setFormData({ ...formData, honeypot: e.target.value })
                        }
                        className="hidden"
                        aria-hidden="true"
                      />

                      <div>
                        <Label htmlFor="name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="goal">
                          What would you like to discuss?{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="goal"
                          required
                          rows={4}
                          value={formData.goal}
                          onChange={(e) =>
                            setFormData({ ...formData, goal: e.target.value })
                          }
                          placeholder="Describe your goals, challenges, or what you'd like help with..."
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Input
                          id="timezone"
                          type="text"
                          value={formData.timezone}
                          readOnly
                          className="mt-1 bg-muted"
                        />
                        <p className="mt-1 text-xs text-muted-foreground">
                          Automatically detected. You can change this if needed.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          placeholder="Any additional information or preferred meeting times..."
                          className="mt-1"
                        />
                      </div>

                      <GlowButton
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                      </GlowButton>
                    </form>
                  </CardContent>
                </Card>
              </GradientBorderCard>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
