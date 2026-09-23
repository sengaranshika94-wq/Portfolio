'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Rocket, type LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce, EASE_OUT } from '@/lib/animations';

const highlights: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: 'Full-Stack', desc: 'React & Node.js' },
  { icon: Sparkles, title: 'AI Explorer', desc: 'Gemini & GenAI' },
  { icon: Rocket, title: 'Product Builder', desc: 'Practical web apps' },
];

const floatingChips = [
  { label: 'Problem Solver', className: 'left-[-18%] top-[14%]', delay: 0.2 },
  { label: 'Fast Learner', className: 'right-[-14%] top-[4%]', delay: 0.9 },
  { label: 'Creative', className: 'left-[-10%] bottom-[18%]', delay: 1.6 },
  { label: 'Detail-Obsessed', className: 'right-[-18%] bottom-[26%]', delay: 2.3 },
];

export function About() {
  const [photoHovered, setPhotoHovered] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid items-center gap-16 lg:grid-cols-2"
      >
        {/* Animated photo */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto flex w-60 flex-col items-center sm:w-64"
        >
          <div className="relative w-full">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.65, 0.45] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-10 -z-10 rounded-full bg-accent/55 blur-[80px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-5 -z-10 rounded-full bg-primary/45 blur-[60px]"
            />

            <motion.div className="pointer-events-none absolute -inset-6 rounded-full border border-accent/30">
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px_4px] shadow-accent/80" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                scale: photoHovered ? 1.06 : 1,
                rotate: photoHovered ? -2 : 0,
              }}
              transition={{
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.3, ease: EASE_OUT },
                rotate: { duration: 0.3, ease: EASE_OUT },
              }}
              onHoverStart={() => setPhotoHovered(true)}
              onHoverEnd={() => setPhotoHovered(false)}
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-accent/80 via-primary/60 to-accent/70 p-[3px] shadow-[0_0_50px_-6px] shadow-accent/50 ring-1 ring-accent/40"
            >
              <div className="overflow-hidden rounded-[calc(2rem-3px)] ring-1 ring-background/60">
                <Image
                  src="/me.jpeg"
                  alt="Anshika Sengar working on a laptop"
                  width={1599}
                  height={1599}
                  className="h-full w-full object-cover brightness-110 saturate-110"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border/60 bg-card/90 px-3 py-1 text-xs font-medium shadow-lg backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </motion.div>

            {floatingChips.map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ delay: 0.6 + chip.delay, duration: 0.4, ease: EASE_OUT }}
                className={`absolute z-10 hidden sm:block ${chip.className}`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: chip.delay,
                  }}
                  className="glass rounded-lg border border-border/50 px-2.5 py-1 text-xs font-semibold text-accent shadow-sm"
                >
                  {chip.label}
                </motion.div>
              </motion.div>
            ))}

            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4], rotate: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 -top-4 text-accent"
            >
              <Sparkles size={18} />
            </motion.span>
          </div>
        </motion.div>

        {/* Content */}
        <div>
          <motion.div variants={fadeInUp}>
            <span className="text-sm font-semibold text-accent">01 — About</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A bit about me
            </h2>
          </motion.div>

          <div className="mt-6 space-y-3">
            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              I&apos;m Anshika Sengar, a third-year BCA student and full-stack
              developer focused on building useful, user-friendly web
              applications.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              I work with{' '}
              <span className="font-medium text-foreground">
                React, Next.js, TypeScript, Node.js, and MongoDB
              </span>
              , and I&apos;m exploring AI integrations with{' '}
              <span className="font-medium text-foreground">Gemini</span>.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Through projects like DesignLens and Sonara, I&apos;ve practiced
              taking ideas from{' '}
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text font-semibold text-transparent">
                concept to working product
              </span>{' '}
              — designing interfaces, connecting backend services, and
              refining the user experience.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              I&apos;m looking for an opportunity to contribute to real
              products, collaborate with a team, and keep growing as a
              developer.
            </motion.p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => {
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
