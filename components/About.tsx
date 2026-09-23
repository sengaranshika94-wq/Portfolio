'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles, Rocket } from 'lucide-react';

const highlights = [
  { icon: Code2, title: 'Full-Stack', desc: 'React & Node.js' },
  { icon: Sparkles, title: 'AI-Curious', desc: 'Gemini & GenAI' },
  { icon: Rocket, title: 'Builder', desc: 'Practical products' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid gap-12 md:grid-cols-5"
      >
        <div className="md:col-span-2">
          <span className="text-sm font-semibold text-accent">01 — About</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A bit about me
          </h2>
        </div>

        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a 3rd-year BCA student with a strong interest in full-stack
            development and AI. I enjoy turning ideas into practical products —
            from design analysis tools to mood-based music apps. I&apos;m
            constantly learning, building, and exploring how modern web
            technologies and GenAI can solve real problems.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/30"
                >
                  <Icon size={20} className="text-accent" />
                  <p className="mt-2 text-sm font-semibold">{h.title}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
