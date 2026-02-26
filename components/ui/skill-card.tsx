"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  imageSrc?: string;
  className?: string;
}

const ICON_SIZE = 32;

/**
 * Skill card: rounded-xl, border-primary/20, hover lift, glow on hover.
 */
export function SkillCard({ name, imageSrc, className }: SkillCardProps) {
  const initial = name.slice(0, 2).toUpperCase();

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col items-center rounded-xl border border-primary/20 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl shadow-lg",
        className
      )}
      role="listitem"
      aria-label={name}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect on hover (template) */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 via-blue-500/10 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt=""
              width={ICON_SIZE}
              height={ICON_SIZE}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              unoptimized={imageSrc.endsWith(".svg")}
            />
          ) : (
            <span className="text-xs font-semibold text-primary" aria-hidden>
              {initial}
            </span>
          )}
        </div>
        <span className="line-clamp-2 text-center text-xs font-medium leading-tight text-foreground">
          {name}
        </span>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/30" />
    </motion.div>
  );
}
