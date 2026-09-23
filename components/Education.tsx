'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="text-sm font-semibold text-accent">05 — Education</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-10 relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor of Computer Applications (BCA)
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <BookOpen size={12} />
                  Currently in 3rd Year
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Pursuing a BCA degree with a focus on full-stack development,
                databases, and AI. Actively building projects and participating
                in hackathons alongside coursework.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
