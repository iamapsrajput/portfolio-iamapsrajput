"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PolicySectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/** Single accordion section for policy/legal pages. Uses native details/summary for accessibility. */
export function PolicySection({
  id,
  title,
  children,
  defaultOpen = false,
  className,
}: PolicySectionProps) {
  return (
    <details
      id={id}
      open={defaultOpen}
      className={cn(
        "group rounded-xl border border-border/50 bg-card/60 shadow-sm backdrop-blur-sm [&[open]]:border-primary/20",
        className
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-foreground transition-colors hover:bg-muted/30 hover:text-primary [&::-webkit-details-marker]:hidden">
        <span className="pr-2">{title}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </details>
  );
}
