"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GradientBorderCard({
  children,
  className,
  hover = true,
}: GradientBorderCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative rounded-xl border border-border/40 bg-card/40 p-px backdrop-blur-sm shadow-lg shadow-black/5",
        className
      )}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 via-primary/15 to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative rounded-xl bg-card/90 backdrop-blur-md border border-border/20">{children}</div>
    </motion.div>
  );
}
