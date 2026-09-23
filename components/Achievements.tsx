'use client';

import { motion } from 'framer-motion';
import { Trophy, type LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce, EASE_OUT } from '@/lib/animations';

const ACHIEVEMENTS: {
  title: string;
  desc: string;
  tag: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'TechVista — DesignLens',
    desc: 'Built an AI-powered UI/design analysis platform that evaluates website screenshots and delivers actionable design insights.',
    tag: 'Project / Hackathon',
    icon: Trophy,
  },
  {
    title: 'Smart India Hackathon — SmartMandi',
    desc: 'Developed a capacity-aware digital procurement platform enabling farmers to register, book slots, and track procurement status.',
    tag: 'Hackathon',
    icon: Trophy,
  },
  {
    title: 'HelpdeskAI',
    desc: 'Created an AI-assisted helpdesk solution to streamline query resolution and improve support workflows.',
    tag: 'Project',
    icon: Trophy,
  },
  {
    title: 'Code for the Nation — Unseen India',
    desc: 'Participated in a collaborative build focused on showcasing the unseen facets of India through technology.',
    tag: 'Hackathon',
    icon: Trophy,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span variants={fadeInUp} className="block text-sm font-semibold text-accent">
          04 — Achievements
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experience &amp; highlights
        </motion.h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.4, ease: EASE_OUT }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/30"
            >
              {/* Animated accent line on left */}
              <div className="absolute top-0 left-0 h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                >
                  <Icon size={18} />
                </motion.div>
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
          );
        })}
      </div>
    </section>
  );
}
