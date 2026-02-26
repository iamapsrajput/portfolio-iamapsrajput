"use client";

import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
  className?: string;
  reducedMotion?: boolean;
}

/**
 * Animated background: floating shapes, grid pattern, gradient orbs.
 */
export function SectionBackground({ className, reducedMotion }: SectionBackgroundProps) {
  if (reducedMotion) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className
        )}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden
    >
      {/* Floating geometric shapes (template style) */}
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/10 blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 h-24 w-24 rounded-lg bg-blue-500/20 rotate-45 animate-bounce" />
      <div className="absolute bottom-32 left-1/4 h-16 w-16 rounded-full bg-primary/15 animate-ping" />
      <div className="absolute bottom-20 right-1/3 h-20 w-20 rounded-lg bg-blue-400/10 rotate-12 float-animation" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-gradient-to-l from-blue-400/15 via-primary/10 to-transparent blur-2xl" />
    </div>
  );
}
