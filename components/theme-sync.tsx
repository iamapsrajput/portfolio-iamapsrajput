"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * When theme is "system", sync document class with prefers-color-scheme
 * so the correct theme is applied even if next-themes resolves it wrong.
 */
export function ThemeSync() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const isDark = media.matches;
      document.documentElement.classList.toggle("dark", isDark);
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  return null;
}
