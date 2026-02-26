"use client";

import Link from "next/link";
import { siteConfig, services } from "@/config/content";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: `https://github.com/${siteConfig.github}`,
      icon: Github,
      ariaLabel: "GitHub profile",
    },
    {
      name: "LinkedIn",
      href: `https://linkedin.com/in/${siteConfig.linkedin}`,
      icon: Linkedin,
      ariaLabel: "LinkedIn profile",
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      ariaLabel: "Send email",
    },
    {
      name: "Website",
      href: siteConfig.website,
      icon: ExternalLink,
      ariaLabel: "Personal website",
    },
  ];

  return (
    <footer className="relative border-t border-border/40 bg-muted/20">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-3 text-lg font-semibold">{siteConfig.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. {siteConfig.description.slice(0, 80)}…
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.ariaLabel}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{siteConfig.location}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-border/40 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/refunds" className="hover:text-foreground">Refunds</Link>
            <Link href="/disclaimer" className="hover:text-foreground">Disclaimer</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Keywords: DevOps Portfolio, Cloud Engineer, AWS, Kubernetes, CI/CD
        </p>
      </div>
    </footer>
  );
}
