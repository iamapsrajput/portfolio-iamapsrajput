"use client";

import { GraduationCap, Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBackground } from "@/components/ui/section-background";
import { SectionHeader } from "@/components/ui/section-header";
import { TagChip } from "@/components/ui/tag-chip";
import { cn } from "@/lib/utils";

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  description: string;
  keyCourses: readonly string[];
}

export interface CertificationEntry {
  id: string;
  name: string;
  level: string | null;
  provider: string;
}

interface EducationCertificationsProps {
  education: readonly EducationEntry[];
  certifications: readonly CertificationEntry[];
  className?: string;
}

export function EducationCertifications({
  education,
  certifications,
  className,
}: EducationCertificationsProps) {
  return (
    <section
      id="education"
      className={cn(
        "relative border-b border-border/40 bg-muted/20 py-20",
        className
      )}
    >
      <SectionBackground />
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeader
          title="Education & Certifications"
          subtitle="Committed to lifelong learning—formal education paired with industry certifications."
        />

        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Education column */}
          <div className="space-y-5">
            <Reveal delay={0.05}>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-foreground">Education</h3>
              </div>
            </Reveal>
            <div className="space-y-5">
              {education.map((entry, idx) => (
                <Reveal key={entry.institution} delay={0.1 + idx * 0.08}>
                  <article
                    className="rounded-xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
                    style={{
                      boxShadow:
                        "0 4px 6px -1px hsl(var(--foreground) / 0.05), 0 2px 4px -2px hsl(var(--foreground) / 0.05)",
                    }}
                  >
                    {/* Institution: large, bold */}
                    <h4 className="mb-1 text-lg font-bold text-foreground">
                      {entry.institution}
                    </h4>
                    {/* Degree: highlighted, bold */}
                    <p className="mb-3 text-base font-semibold text-primary">
                      {entry.degree}
                    </p>
                    {/* Period & GPA: secondary but clear */}
                    <div className="mb-4 text-sm font-medium text-muted-foreground">
                      {entry.period}
                      {entry.gpa ? (
                        <>
                          <span className="mx-1.5">·</span>
                          <span>GPA: {entry.gpa}</span>
                        </>
                      ) : null}
                    </div>
                    {/* Description: body text */}
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                    {/* Key courses: label + tags */}
                    {entry.keyCourses.length > 0 && (
                      <>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Key Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {entry.keyCourses.map((course) => (
                            <TagChip key={course} variant="secondary">
                              {course}
                            </TagChip>
                          ))}
                        </div>
                      </>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications column — amber accent so certs catch the eye */}
          <div className="space-y-5">
            <Reveal delay={0.05}>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/15 text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-400">
                  <Award className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Certifications
                </h3>
              </div>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-1">
              {certifications.map((cert, idx) => (
                <Reveal key={`${cert.id}-${cert.name}`} delay={0.1 + idx * 0.06}>
                  <article className="flex items-start gap-4 rounded-xl border border-amber-500/20 bg-card/60 p-4 shadow-sm backdrop-blur-sm transition-all hover:border-amber-500/40 hover:bg-amber-500/5 dark:border-amber-400/20 dark:hover:border-amber-400/35 dark:hover:bg-amber-400/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/15 text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-400">
                      <Award className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground">
                        {cert.id}: {cert.name}
                        {cert.level ? ` ${cert.level}` : ""}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {cert.provider}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
