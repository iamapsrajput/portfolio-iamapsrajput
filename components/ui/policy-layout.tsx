"use client";

import Link from "next/link";
import { useCallback } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PolicyNavItem {
  id: string;
  label: string;
}

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  navItems: PolicyNavItem[];
  children: React.ReactNode;
  className?: string;
}

export function PolicyLayout({
  title,
  lastUpdated,
  navItems,
  children,
  className,
}: PolicyLayoutProps) {
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <div className={cn("container mx-auto px-4 py-10 md:py-12", className)}>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mx-auto max-w-4xl">
            <h1 className="heading-title mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mb-8 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>

            {/* Mobile: jump to section dropdown */}
            <div className="mb-8 lg:hidden">
              <label htmlFor="policy-nav-mobile" className="sr-only">
                Jump to section
              </label>
              <div className="relative">
                <select
                  id="policy-nav-mobile"
                  className="w-full appearance-none rounded-xl border border-border/50 bg-card/80 py-3 pl-4 pr-10 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  defaultValue=""
                  onChange={(e) => {
                    const id = e.target.value;
                    if (id) scrollToSection(id);
                  }}
                >
                  <option value="">Jump to section…</option>
                  {navItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-12">
              <nav
                aria-label="Page sections"
                className="hidden lg:block"
              >
                <div className="sticky top-28 space-y-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    On this page
                  </p>
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <article className="min-w-0 space-y-4">
                {children}
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
