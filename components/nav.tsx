"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";
import { motion } from "framer-motion";
import { MobileNav } from "@/components/ui/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { User, Code, Briefcase, GraduationCap, FolderKanban, FileText, Mail } from "lucide-react";

const anchorLinks = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#projects", label: "Projects", icon: FolderKanban },
];

const pageLinks = [
  { href: "/services", label: "Services", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

const allCenterLinks = [...anchorLinks, ...pageLinks];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconsOnly = scrolled;
  const profileImageUrl = siteConfig.profileImageUrl;

  return (
    <header className="sticky top-0 z-50 w-full px-2 pt-2 sm:px-2.5 sm:pt-2.5 md:px-3 md:pt-3 lg:px-4 lg:pt-4">
      {/* Floating header bar: starts near avatar, ends near contact; responsive for all screen ratios */}
      <nav
        className={`w-full min-w-0 rounded-2xl border border-border/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-200 ${
          scrolled
            ? "bg-background shadow-[0_2px_8px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2),0_4px_16px_-4px_rgba(0,0,0,0.15)]"
            : "bg-background/95 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
        }`}
      >
        <div className="container relative mx-auto flex h-14 md:h-16 items-center justify-between gap-2 px-3 sm:px-4 md:px-4 lg:px-5 min-w-0 max-w-[100vw]">
        <motion.div
          className="flex min-w-0 flex-shrink-0 items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/#about" className="flex items-center gap-3" aria-label="Home">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/50 bg-muted ring-2 ring-background">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt=""
                  width={36}
                  height={36}
                  className="object-cover"
                  unoptimized={profileImageUrl.endsWith(".svg")}
                />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" aria-hidden />
              )}
            </span>
            <span className="text-xl font-bold tracking-tight transition-colors hover:text-primary truncate">
              {siteConfig.name}
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-6">
          {allCenterLinks.map((link) => {
            const Icon = link.icon;
            const isAnchor = link.href.startsWith("#");
            const content = (
              <>
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {!iconsOnly && <span className="whitespace-nowrap">{link.label}</span>}
              </>
            );
            const className =
              "flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group py-2 rounded-md px-2 lg:px-3 " +
              (iconsOnly ? "justify-center min-w-[2.5rem]" : "");
            if (isAnchor) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={className}
                  aria-label={link.label}
                >
                  {content}
                  {!iconsOnly && (
                    <span className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  )}
                </a>
              );
            }
            return (
              <Link key={link.href} href={link.href} className={className} aria-label={link.label}>
                {content}
                {!iconsOnly && (
                  <span className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          {iconsOnly ? (
            <Button asChild size="icon" className="h-9 w-9 rounded-full">
              <Link href="/contact" aria-label="Contact">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild size="sm">
              <Link href="/book">Book Consultation</Link>
            </Button>
          )}
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        </div>
      </nav>
      {/* Slightly darker gray band separating header from page content */}
      <div
        className="mt-2.5 h-1.5 w-full rounded-full bg-muted/70 dark:bg-muted/50"
        aria-hidden
      />
    </header>
  );
}
