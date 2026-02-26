"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useToast } from "@/components/ui/use-toast";
import { contactSchema, type ContactFormData } from "@/lib/validators";
import { siteConfig } from "@/config/content";
import { Mail, Github, Linkedin, ExternalLink, MapPin } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";

export default function ContactPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Client-side validation
      const validated = contactSchema.parse(formData);

      // Check honeypot
      if (validated.honeypot && validated.honeypot.length > 0) {
        // Silent fail for bots
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I&apos;ll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      console.error("Contact error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: `https://github.com/${siteConfig.github}`,
      icon: Github,
      ariaLabel: "GitHub profile",
    },
    {
      name: "LinkedIn",
      href: `https://linkedin.com/in/${siteConfig.linkedin}`,
      icon: Linkedin,
      ariaLabel: "LinkedIn profile",
    },
    {
      name: "Website",
      href: siteConfig.website,
      icon: ExternalLink,
      ariaLabel: "Personal website",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              title="Contact"
              subtitle="Get in touch via the form below or through social media"
            />

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Reveal delay={0.2}>
                <GradientBorderCard>
                  <Card className="border-0 bg-transparent shadow-none">
                    <CardHeader>
                      <CardTitle>Send a Message</CardTitle>
                      <CardDescription>
                        Fill out the form and I&apos;ll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot field */}
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
                          <Label htmlFor="subject">
                            Subject <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">
                            Message <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Your message..."
                            className="mt-1"
                          />
                        </div>

                        <GlowButton
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </GlowButton>
                      </form>
                    </CardContent>
                  </Card>
                </GradientBorderCard>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0.3}>
                  <GradientBorderCard>
                    <Card className="border-0 bg-transparent shadow-none">
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label className="mb-2 block text-sm font-semibold">Email</Label>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <Mail className="h-4 w-4" />
                            {siteConfig.email}
                          </a>
                        </div>
                        <div>
                          <Label className="mb-2 block text-sm font-semibold">Location</Label>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {siteConfig.location}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </GradientBorderCard>
                </Reveal>

                <Reveal delay={0.4}>
                  <GradientBorderCard>
                    <Card className="border-0 bg-transparent shadow-none">
                      <CardHeader>
                        <CardTitle>Connect</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-4">
                          {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                              <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                aria-label={link.ariaLabel}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Icon className="h-6 w-6" />
                              </motion.a>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </GradientBorderCard>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
