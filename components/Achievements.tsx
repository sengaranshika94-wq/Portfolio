'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'TechVista — DesignLens',
    desc: 'Built an AI-powered UI/design analysis platform that evaluates website screenshots and delivers actionable design insights.',
    tag: 'Project / Hackathon',
  },
  {
    title: 'Smart India Hackathon — SmartMandi',
    desc: 'Developed a capacity-aware digital procurement platform enabling farmers to register, book slots, and track procurement status.',
    tag: 'Hackathon',
  },
  {
    title: 'HelpdeskAI',
    desc: 'Created an AI-assisted helpdesk solution to streamline query resolution and improve support workflows.',
    tag: 'Project',
  },
  {
    title: 'Code for the Nation — Unseen India',
    desc: 'Participated in a collaborative build focused on showcasing the unseen facets of India through technology.',
    tag: 'Hackathon',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="text-sm font-semibold text-accent">
          04 — Achievements
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Experience &amp; highlights
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group relative rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Trophy size={18} />
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground">
                  {a.tag}
                </span>
                <h3 className="mt-1 text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
