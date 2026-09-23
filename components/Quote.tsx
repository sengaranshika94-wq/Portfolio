'use client';

import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';
import { EASE_OUT } from '@/lib/animations';

export function Quote() {
  const words = "Code is poetry written in logic.".split(" ");

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        {/* Large decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
              <QuoteIcon size={24} className="text-accent" />
            </div>
          </div>
        </motion.div>

        {/* Word-by-word reveal */}
        <blockquote className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: EASE_OUT }}
                className={`inline-block ${i === 3 ? 'text-gradient' : ''}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </blockquote>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '3rem' }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + words.length * 0.1, duration: 0.6, ease: EASE_OUT }}
          className="mx-auto mt-6 h-0.5 rounded-full bg-accent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 + words.length * 0.1, duration: 0.5 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          — Anshika Sengar
        </motion.p>
      </motion.div>
    </section>
  );
}
