"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  companyLogo?: string;
  location?: string;
  description?: string;
}

export function ExperienceTimeline({
  data,
  className,
}: {
  data: ExperienceEntry[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;
      requestAnimationFrame(() => {
        setHeight(ref.current?.getBoundingClientRect().height ?? 0);
      });
    };
    if (typeof ResizeObserver !== "undefined" && ref.current) {
      const ro = new ResizeObserver(updateHeight);
      ro.observe(ref.current);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn("w-full font-sans md:px-10", className)} ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-8">
        {data.map((entry, idx) => (
          <div
            key={`${entry.company}-${idx}`}
            className="flex justify-start pt-6 first:pt-4 md:pt-16 md:gap-8 first:md:pt-6"
          >
            <div className="sticky top-32 z-40 flex max-w-xs flex-col self-start md:flex-row lg:max-w-sm md:w-full items-center">
              <div className="absolute left-3 h-10 w-10 shrink-0 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center md:left-3">
                <div className="h-4 w-4 rounded-full border border-border bg-muted" />
              </div>
              <h3 className="hidden md:block text-sm font-bold text-muted-foreground md:pl-20 md:text-base">
                {entry.period}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-base font-bold text-muted-foreground md:hidden">
                {entry.period}
              </h3>
              <Reveal delay={idx * 0.08}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {entry.companyLogo ? (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted p-1 shadow">
                        <Image
                          src={entry.companyLogo}
                          alt=""
                          width={48}
                          height={48}
                          className="object-contain"
                          unoptimized={entry.companyLogo.endsWith(".svg")}
                        />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/80 text-muted-foreground" aria-hidden>
                        <Briefcase className="h-6 w-6" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{entry.role}</h4>
                      <p className="text-sm text-muted-foreground">
                        {entry.company}
                        {entry.location ? ` • ${entry.location}` : ""}
                      </p>
                      <p className="text-sm text-muted-foreground">{entry.period}</p>
                    </div>
                  </div>
                  {entry.description && (
                    <p className="text-sm text-muted-foreground">{entry.description}</p>
                  )}
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
                    {entry.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        ))}

        <div
          aria-hidden
          style={{ height: height ? `${height}px` : undefined }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] bg-gradient-to-b"
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary via-blue-500 to-transparent"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
}
