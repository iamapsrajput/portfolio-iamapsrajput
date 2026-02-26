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
    <Reveal className={cn("text-center mb-12", className)}>
      <h2
        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent"
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
