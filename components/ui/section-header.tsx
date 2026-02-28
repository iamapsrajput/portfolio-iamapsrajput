"use client";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/** Section title + optional subtitle, matching template gradient (from-foreground via-primary to-blue-500). */
export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("text-center mb-8", className)}>
      <h2
        className="heading-title mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
