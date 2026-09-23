'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Rocket, type LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce, EASE_OUT } from '@/lib/animations';

const highlights: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: 'Full-Stack', desc: 'React & Node.js' },
  { icon: Sparkles, title: 'AI-Curious', desc: 'Gemini & GenAI' },
  { icon: Rocket, title: 'Builder', desc: 'Practical products' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-12 md:grid-cols-5"
      >
        <motion.div variants={fadeInUp} className="md:col-span-2">
          <span className="text-sm font-semibold text-accent">01 — About</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A bit about me
          </h2>
        </motion.div>

        <div className="md:col-span-3">
          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I&apos;m a 3rd-year BCA student with a strong interest in full-stack
            development and AI. I enjoy turning ideas into practical products —
            from design analysis tools to mood-based music apps. I&apos;m
            constantly learning, building, and exploring how modern web
            technologies and GenAI can solve real problems.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE_OUT } }}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/30"
                >
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/5 transition-all duration-300 group-hover:scale-150 group-hover:bg-accent/10" />
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon size={20} className="text-accent" />
                    </motion.div>
                    <p className="mt-2 text-sm font-semibold">{h.title}</p>
                    <p className="text-xs text-muted-foreground">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
