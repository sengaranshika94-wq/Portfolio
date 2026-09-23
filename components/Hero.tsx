'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowDown, Sparkles, Code2 } from 'lucide-react';
import { staggerContainer, fadeInUp, EASE_OUT } from '@/lib/animations';

const word = "Anshika Sengar".split(" ");

const buttons = [
  { label: 'View Projects', href: '#projects', primary: true, icon: ArrowDown },
  { label: 'Resume', href: '#', primary: false, icon: FileText },
  { label: 'GitHub', href: 'https://github.com/anshikasengar', primary: false, icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anshikasengar', primary: false, icon: Linkedin },
];

const floatingIcons = [
  { icon: Code2, x: '8%', y: '20%', delay: 0, size: 28 },
  { icon: Github, x: '85%', y: '15%', delay: 1.5, size: 24 },
  { icon: Sparkles, x: '12%', y: '70%', delay: 0.8, size: 22 },
  { icon: FileText, x: '88%', y: '65%', delay: 2.2, size: 26 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated accent orb */}
      <motion.div
        style={{ y: heroY.get() * -100 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-[420px] w-[420px] rounded-full bg-accent blur-[120px]"
        />
      </motion.div>

      {/* Floating icons */}
      {floatingIcons.map((f, i) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.2, duration: 0.5, ease: EASE_OUT }}
            className="absolute hidden md:block"
            style={{ left: f.x, top: f.y }}
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card/40 text-accent/40 backdrop-blur-sm">
                <Icon size={f.size} />
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="glass inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={13} className="text-accent" />
            </motion.span>
            BCA Student &amp; Aspiring Developer
          </motion.span>
        </motion.div>

        {/* Word-by-word name reveal */}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {word.map((w, wi) => (
            <span key={wi} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + wi * 0.15, duration: 0.6, ease: EASE_OUT }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeInUp}
          className="mt-3 text-lg font-medium text-accent sm:text-xl"
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-5 max-w-lg text-balance text-base text-muted-foreground sm:text-lg"
        >
          Building practical web experiences with React, Node.js, and modern AI
          technologies.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {buttons.map((btn) => {
            const Icon = btn.icon;
            return (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith('http') ? '_blank' : undefined}
                rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  btn.primary
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20'
                    : 'border border-border bg-card/50 text-foreground hover:border-accent/40 hover:bg-accent/5'
                }`}
              >
                <Icon size={16} className="transition-transform group-hover:-translate-y-0.5" />
                {btn.label}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
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
