"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import {
  siteConfig,
  skills,
  personalProjects,
  experience,
  awards,
  skillImages,
  projectImages,
  experienceLogos,
  resumeUrl,
} from "@/config/content";
import { Download, Mail, MapPin, ExternalLink, Rocket, Linkedin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GlowButton } from "@/components/ui/glow-button";
import { TagChip } from "@/components/ui/tag-chip";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { SkillCard } from "@/components/ui/skill-card";
import { SkillsModal } from "@/components/ui/skills-modal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import { SectionBackground } from "@/components/ui/section-background";

// All skills flat for grid + count
const allSkillsFlat = Object.values(skills).flat();
const topSkillsForGrid = allSkillsFlat.slice(0, 12);

function getProjectTags() {
  const set = new Set<string>();
  personalProjects.forEach((p) => p.stack.forEach((t) => set.add(t)));
  return ["All", ...Array.from(set)];
}

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("All");
  const projectTags = useMemo(() => getProjectTags(), []);
  const filteredProjects =
    projectFilter === "All"
      ? personalProjects
      : personalProjects.filter((p) =>
          (p.stack as readonly string[]).includes(projectFilter)
        );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1">
        {/* Hero — About (template: gradient name, role in glass card, scroll pill) */}
        <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-border/40">
          <SectionBackground />
          <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
            <Reveal>
              <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, hsl(var(--foreground) / 0.88) 0%, hsl(var(--foreground)) 14%, hsl(var(--primary)) 55%, rgb(59 130 246) 100%)",
                  }}
                >
                  {siteConfig.name}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 blur-xl" />
                <div className="relative rounded-2xl border border-primary/20 bg-card/40 p-6 shadow-2xl backdrop-blur-sm">
                  <h2 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary)) 14%, rgb(59 130 246) 50%, hsl(var(--primary)) 100%)",
                      }}
                    >
                      {siteConfig.tagline}
                    </span>
                  </h2>
                  <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-blue-500" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Building scalable infrastructure aligned with company requirements.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Link
                  href="/book"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-4 font-semibold text-lg text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket className="h-5 w-5 shrink-0 group-hover:animate-bounce" aria-hidden />
                    Let&apos;s Connect
                    <span className="h-2 w-2 shrink-0 rounded-full bg-white/80 animate-pulse" aria-hidden />
                  </span>
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
                </Link>
                <a
                  href={`https://linkedin.com/in/${siteConfig.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-blue-500/30 bg-card/60 px-6 py-4 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-lg"
                >
                  <Linkedin className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-12" aria-hidden />
                  <span>Visit LinkedIn profile</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/30">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-2 h-3 w-1 rounded-full bg-primary"
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="relative border-b border-border/40 bg-muted/20 py-24">
          <SectionBackground />
          <div className="container relative z-10 mx-auto px-4">
            <SectionHeader
              title="Technical Skills"
              subtitle="A curated selection of my expertise in DevOps and Cloud Computing"
            />
            <Reveal delay={0.1}>
              <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6">
                {topSkillsForGrid.map((skill) => (
                  <SkillCard
                    key={skill}
                    name={skill}
                    imageSrc={skillImages[skill]}
                  />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col items-center gap-4">
                <SkillsModal />
                <p className="text-center text-sm text-muted-foreground">
                  …and plenty more technologies I&apos;m exploring &amp; mastering every day.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Resume (optional) */}
        {resumeUrl && (
          <section className="relative border-b border-border/40 bg-muted/20 py-24">
            <SectionBackground />
            <div className="container relative z-10 mx-auto px-4 text-center">
              <SectionHeader
                title="My Resume"
                subtitle="View my professional qualifications and experience as a DevOps and Cloud Engineer."
              />
              <Reveal delay={0.2}>
                <GlowButton asChild size="lg">
                  <a href={resumeUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </GlowButton>
              </Reveal>
            </div>
          </section>
        )}

        {/* Professional Experience — timeline format */}
        <section id="experience" className="relative border-b border-border/40 bg-background py-24">
          <SectionBackground />
          <div className="container relative z-10 mx-auto px-4">
            <SectionHeader
              title="Professional Experience"
              subtitle="Highlights of my career and key roles showcasing my skills & impact."
            />
            <ExperienceTimeline
              data={experience.map((exp) => ({
                role: exp.role,
                company: exp.company,
                period: exp.period,
                highlights: [...exp.highlights],
                companyLogo: experienceLogos[exp.company],
                location: exp.location,
                description: exp.description,
              }))}
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="relative border-b border-border/40 bg-muted/20 py-24">
          <SectionBackground />
          <div className="container relative z-10 mx-auto px-4">
            <SectionHeader
              title="My Projects"
              subtitle="A collection of innovative projects showcasing technical expertise & creativity."
            />
            <Reveal delay={0.1}>
              <p className="mb-6 text-center text-sm text-muted-foreground">
                Total projects: {personalProjects.length}
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-2">
                <span className="mr-2 text-sm text-muted-foreground">Filter by tags:</span>
                {projectTags.map((tag) => (
                  <TagChip
                    key={tag}
                    variant="primary"
                    active={projectFilter === tag}
                    onClick={() => setProjectFilter(tag)}
                  >
                    {tag}
                  </TagChip>
                ))}
              </div>
            </Reveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, idx) => {
                const projectImage = projectImages[project.id];
                return (
                <Reveal key={project.id} delay={idx * 0.08}>
                  <article className="group overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80 modern-card">
                    <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      {projectImage ? (
                        <Image
                          src={projectImage}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          unoptimized={projectImage.endsWith(".svg")}
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/50">
                          {project.title.slice(0, 1)}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="mb-1 font-semibold">{project.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <TagChip key={tech} variant="secondary">
                            {tech}
                          </TagChip>
                        ))}
                      </div>
                      {project.links.github && (
                        <Button asChild variant="outline" size="sm" className="mt-4 w-full sm:w-auto">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                          >
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
              })}
            </motion.div>
            <Reveal delay={0.2}>
              <div className="mt-10 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">
                    Show All ({personalProjects.length}) Projects
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Awards */}
        {awards.length > 0 && (
          <section className="border-b border-border/40 bg-background py-20">
            <div className="container mx-auto px-4">
              <SectionHeader title="Awards & Recognition" />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mx-auto max-w-2xl space-y-4"
              >
                {awards.map((award, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
                      <h3 className="mb-2 font-semibold">{award.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{award.company}</p>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </div>
                  </Reveal>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Connect */}
        <section id="connect" className="relative border-b border-border/40 bg-muted/20 py-24">
          <SectionBackground />
          <div className="container relative z-10 mx-auto px-4">
            <SectionHeader
              title="Connect With Me"
              subtitle="Have a project in mind or a question? Reach out and let's turn your ideas into reality."
            />
            <Reveal delay={0.2}>
              <div className="mx-auto max-w-xl space-y-6 text-center">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    {siteConfig.email}
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    {siteConfig.location}
                  </div>
                </div>
                <GlowButton asChild size="lg">
                  <Link href="/contact">Send Message</Link>
                </GlowButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
