"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkillCard } from "@/components/ui/skill-card";
import { skills, skillImages } from "@/config/content";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const totalSkillsCount = Object.values(skills).flat().length;

export function SkillsModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-blue-500 px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-primary hover:shadow-xl"
        >
          <span className="relative z-10">Show All ({totalSkillsCount})</span>
          <span className="absolute inset-0 bg-white/20 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">All Skills & Expertise</DialogTitle>
          <DialogDescription>
            Comprehensive list of technologies and tools I work with
          </DialogDescription>
        </DialogHeader>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-6 space-y-8"
        >
          {Object.entries(skills).map(([category, items], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIdx * 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {items.map((skill) => (
                  <SkillCard
                    key={skill}
                    name={skill}
                    imageSrc={skillImages[skill]}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
