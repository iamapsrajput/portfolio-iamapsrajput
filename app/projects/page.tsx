"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { personalProjects } from "@/config/content";
import { Button } from "@/components/ui/button";
import { GradientBorderCard } from "@/components/ui/gradient-border-card";
import { TagChip } from "@/components/ui/tag-chip";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24">
          <SectionHeader
            title="Projects"
            subtitle="Building scalable infrastructure and AI-powered solutions"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2"
          >
            {personalProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.1}>
                <GradientBorderCard>
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="mb-1 text-2xl font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                      {project.status === "in-development" && (
                        <TagChip variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                          In Development
                        </TagChip>
                      )}
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Highlights:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <TagChip key={tech} variant="secondary">
                            {tech}
                          </TagChip>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            View on GitHub
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/projects/${project.id}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </GradientBorderCard>
              </Reveal>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
