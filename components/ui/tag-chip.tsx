"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TagChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
  onClick?: () => void;
  active?: boolean;
}

export function TagChip({
  children,
  className,
  variant = "default",
  onClick,
  active = false,
}: TagChipProps) {
  const baseStyles = "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300";

  const variants = {
    default: "bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 border border-border/40",
    primary: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
    secondary: "bg-muted/80 text-muted-foreground hover:bg-muted border border-border/40",
  };

  const activeStyles = active
    ? "ring-2 ring-primary/50 bg-primary/20"
    : "";

  const Component = onClick ? motion.button : motion.span;

  return (
    <Component
      className={cn(baseStyles, variants[variant], activeStyles, className)}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : undefined}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
}
