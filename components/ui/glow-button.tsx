"use client";

import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends ButtonProps {
  glow?: boolean;
}

export function GlowButton({
  children,
  className,
  glow = true,
  ...props
}: GlowButtonProps) {
  return (
    <motion.div
      whileHover={glow ? { scale: 1.03 } : undefined}
      whileTap={glow ? { scale: 0.97 } : undefined}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Button
        className={cn(
          "relative overflow-hidden shadow-lg shadow-primary/10",
          glow &&
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/30 before:via-primary/50 before:to-primary/30 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 hover:shadow-primary/20",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
