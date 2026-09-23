'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowDown, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const buttons = [
  {
    label: 'View Projects',
    href: '#projects',
    primary: true,
    icon: ArrowDown,
  },
  { label: 'Resume', href: '#', primary: false, icon: FileText },
  { label: 'GitHub', href: 'https://github.com/anshikasengar', primary: false, icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anshikasengar', primary: false, icon: Linkedin },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 grid-bg opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Animated accent orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-[420px] w-[420px] rounded-full bg-accent blur-[120px]"
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <Sparkles size={13} className="text-accent" />
            BCA Student &amp; Aspiring Developer
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Anshika Sengar
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg font-medium text-accent sm:text-xl"
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-lg text-balance text-base text-muted-foreground sm:text-lg"
        >
          Building practical web experiences with React, Node.js, and modern AI
          technologies.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {buttons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith('http') ? '_blank' : undefined}
                rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  btn.primary
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20'
                    : 'border border-border bg-card/50 text-foreground hover:border-accent/40 hover:bg-accent/5'
                }`}
              >
                <Icon size={16} className="transition-transform group-hover:-translate-y-0.5" />
                {btn.label}
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
