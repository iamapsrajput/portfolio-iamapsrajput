"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { services } from "@/config/content";
import { Button } from "@/components/ui/button";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowButton } from "@/components/ui/glow-button";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24">
          <SectionHeader
            title="Services"
            subtitle="Professional DevOps and cloud infrastructure consulting services tailored to your needs"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.1}>
                <GradientBorderCard>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </GradientBorderCard>
              </Reveal>
            ))}
          </motion.div>

          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 max-w-2xl">
              <GradientBorderCard>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Pricing Model</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    All services are priced based on scope and requirements. I provide custom
                    quotes and invoicing for each engagement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">
                        Custom quotes based on project scope
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">
                        Book first, pay later - no upfront payment required
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">
                        Transparent invoicing and payment terms
                      </span>
                    </div>
                  </div>
                </div>
              </GradientBorderCard>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 text-center">
              <GlowButton asChild size="lg">
                <Link href="/book">Book a Consultation</Link>
              </GlowButton>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
