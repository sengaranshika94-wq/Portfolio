'use client';

import { motion } from 'framer-motion';
import {
  Braces, Component, Server, Database, Palette, Shield,
  GitBranch, Zap, Sparkles, type LucideIcon
} from 'lucide-react';
import {
  fadeInUp, staggerContainer, scaleIn, viewportOnce, EASE_OUT
} from '@/lib/animations';
import { Card } from '@/components/ui/card';

type Skill = { name: string; icon: LucideIcon };
type SkillCategory = { title: string; icon: LucideIcon; skills: Skill[] };

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Braces,
    skills: [{ name: 'JavaScript', icon: Braces }],
  },
  {
    title: 'Frontend',
    icon: Component,
    skills: [
      { name: 'React', icon: Component },
      { name: 'HTML', icon: Component },
      { name: 'CSS', icon: Palette },
      { name: 'Tailwind CSS', icon: Palette },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Server },
      { name: 'REST APIs', icon: Zap },
    ],
  },
  {
    title: 'Database & Cache',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
    ],
  },
  {
    title: 'Tooling',
    icon: GitBranch,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
    ],
  },
  {
    title: 'Security & AI',
    icon: Shield,
    skills: [
      { name: 'JWT Authentication', icon: Shield },
      { name: 'GenAI / Gemini', icon: Sparkles },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span variants={fadeInUp} className="block text-sm font-semibold text-accent">
          02 — Skills
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Technologies I work with
        </motion.h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: EASE_OUT } }}
              >
                <Card className="group relative h-full overflow-hidden border-border/60 bg-card/40 p-5 backdrop-blur-sm transition-colors hover:border-accent/30">
                  {/* Glow on hover */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-2.5 mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"
                    >
                      <CatIcon size={18} />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="relative flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -3, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.15, ease: EASE_OUT }}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-secondary/40 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          <Icon size={12} className="text-accent/60" />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
