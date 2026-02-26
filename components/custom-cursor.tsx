"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Custom cursor: small dot that follows the mouse (template-style).
 * Only active on viewports that support hover (no touch).
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: none)");
    if (media.matches) return;
    setActive(true);
    return () => setActive(false);
  }, []);

  useEffect(() => {
    if (!active) return;
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.closest("a, button, [role='button'], input, select, textarea, [tabindex]:not([tabindex='-1'])");
      setIsPointer(!!interactive);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.body.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, [active]);

  if (!active) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        opacity: { duration: 0.2 },
      }}
      style={{ left: position.x, top: position.y }}
      aria-hidden
    >
      <div
        className={`rounded-full bg-primary transition-all duration-200 ${isPointer ? "h-4 w-4" : "h-2 w-2"}`}
      />
    </motion.div>
  );
}
