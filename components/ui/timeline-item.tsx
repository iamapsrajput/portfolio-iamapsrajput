"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  /** Optional: path to company logo (e.g. "/experience/company.png") */
  companyLogo?: string;
  className?: string;
  index?: number;
}

const LOGO_SIZE = 48;

export function TimelineItem({
  role,
  company,
  period,
  highlights,
  companyLogo,
  className,
  index = 0,
}: TimelineItemProps) {
  return (
    <Reveal delay={index * 0.1} className={cn("relative", className)}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="relative overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 modern-card">
          <div className="absolute right-4 top-4 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {period}
          </div>
          {companyLogo && (
            <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-muted">
              <Image
                src={companyLogo}
                alt=""
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className="object-contain"
                unoptimized={companyLogo.endsWith(".svg")}
              />
            </div>
          )}
          <CardHeader className={cn("pr-28", companyLogo && "pl-20")}>
            <CardTitle className="text-xl">{role}</CardTitle>
            <CardDescription className="text-base">
              {company} • {period}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </Reveal>
  );
}
