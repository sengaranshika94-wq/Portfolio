'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { fadeInUp, viewportOnce, EASE_OUT } from '@/lib/animations';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span variants={fadeInUp} className="block text-sm font-semibold text-accent">
          05 — Education
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Education
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE_OUT } }}
          className="mt-10 relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8"
        >
          {/* Animated accent bar */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="absolute left-0 top-0 h-full w-1 origin-top bg-accent"
          />

          <div className="flex items-start gap-5">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
            >
              <GraduationCap size={24} />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor of Computer Applications (BCA)
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <BookOpen size={12} />
                  </motion.span>
                  Currently in 3rd Year
                </motion.span>
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
