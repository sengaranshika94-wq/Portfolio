'use client';

import { useRef, useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { Github, Linkedin, FileText, ArrowDown, Sparkles, Code2 } from 'lucide-react';
import { staggerContainer, fadeInUp, EASE_OUT } from '@/lib/animations';

const buttons = [
  { label: 'View Projects', href: '#projects', primary: true, icon: ArrowDown },
  { label: 'Resume', href: '#', primary: false, icon: FileText },
  { label: 'GitHub', href: 'https://github.com/anshikasengar', primary: false, icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anshikasengar', primary: false, icon: Linkedin },
];

const floatingIcons = [
  { icon: Code2, x: '8%', y: '20%', delay: 0, size: 28, depth: 18 },
  { icon: Github, x: '85%', y: '15%', delay: 1.5, size: 24, depth: 26 },
  { icon: Sparkles, x: '12%', y: '70%', delay: 0.8, size: 22, depth: 12 },
  { icon: FileText, x: '88%', y: '65%', delay: 2.2, size: 26, depth: 22 },
];

const roles = [
  'Full-Stack Developer',
  'React & Next.js Developer',
  'AI Explorer',
  'Practical Product Builder',
];

const nameWords = 'Anshika Sengar'.split(' ');

// Starting letter index of each word, for a continuous stagger across the name
const nameOffsets = (() => {
  let cursor = 0;
  return nameWords.map((w) => {
    const start = cursor;
    cursor += w.length + 1;
    return start;
  });
})();

// Deterministic pseudo-random so server and client render identical stars
const seeded = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const stars = Array.from({ length: 34 }, (_, i) => ({
  left: `${(seeded(i) * 100).toFixed(2)}%`,
  top: `${(seeded(i + 41) * 100).toFixed(2)}%`,
  size: 1.5 + seeded(i + 83) * 2,
  duration: 2.5 + seeded(i + 127) * 3,
  delay: seeded(i + 173) * 4,
  white: i % 3 === 0,
}));

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-3 flex h-7 items-center justify-center overflow-hidden text-lg font-medium text-accent sm:text-xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1 inline-block h-[1.05em] w-[2px] shrink-0 bg-accent"
      />
    </div>
  );
}

function FloatIcon({
  f,
  index,
  nx,
  ny,
}: {
  f: (typeof floatingIcons)[number];
  index: number;
  nx: MotionValue<number>;
  ny: MotionValue<number>;
}) {
  const Icon = f.icon;
  const x = useTransform(nx, (v) => v * f.depth);
  const y = useTransform(ny, (v) => v * f.depth);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + index * 0.2, duration: 0.5, ease: EASE_OUT }}
      className="absolute hidden md:block"
      style={{ left: f.x, top: f.y }}
    >
      <motion.div style={{ x, y }}>
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card/40 text-accent/40 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:text-accent">
            <Icon size={f.size} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const orbY = useTransform(smoothProgress, [0, 1], [0, -140]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0]);

  // Cursor spotlight + normalized position for icon parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.6 });
  const spotY = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.6 });
  const rawNX = useMotionValue(0);
  const rawNY = useMotionValue(0);
  const nx = useSpring(rawNX, { stiffness: 60, damping: 20 });
  const ny = useSpring(rawNY, { stiffness: 60, damping: 20 });
  const [tracking, setTracking] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    mouseX.set(localX);
    mouseY.set(localY);
    rawNX.set((localX / rect.width) * 2 - 1);
    rawNY.set((localY / rect.height) * 2 - 1);
    if (!tracking) setTracking(true);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Twinkling starfield */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className={`absolute rounded-full ${s.white ? 'bg-white' : 'bg-accent'}`}
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
            animate={{ opacity: [0.12, 0.65, 0.12], scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          />
        ))}
      </div>

      {/* Cursor-following spotlight */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: tracking ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ x: spotX, y: spotY }}
        className="pointer-events-none absolute -left-72 -top-72 hidden h-[640px] w-[640px] rounded-full bg-accent/[0.07] blur-[120px] md:block"
      />

      {/* Animated accent orb with scroll parallax */}
      <motion.div
        style={{ y: orbY }}
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

      {/* Floating icons with mouse parallax */}
      {floatingIcons.map((f, i) => (
        <FloatIcon key={i} f={f} index={i} nx={nx} ny={ny} />
      ))}

      {/* Content with scroll parallax + fade */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-2xl"
      >
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          animate="show"
          className="text-center"
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

          {/* Per-letter name reveal, gradient on the last name */}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {nameWords.map((w, wi) => (
              <span
                key={w}
                className={`mr-[0.25em] inline-block overflow-hidden ${
                  wi === 1
                    ? 'bg-gradient-to-r from-accent via-sky-300 to-sky-400 bg-clip-text text-transparent'
                    : ''
                }`}
              >
                {w.split('').map((ch, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ y: '115%' }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.35 + (nameOffsets[wi] + ci) * 0.045,
                      duration: 0.55,
                      ease: EASE_OUT,
                    }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Rotating role with blinking caret */}
          <RoleRotator />

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
                  className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    btn.primary
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20'
                      : 'border border-border bg-card/50 text-foreground hover:border-accent/40 hover:bg-accent/5'
                  }`}
                >
                  {/* Shine sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <Icon
                    size={16}
                    className="relative transition-transform group-hover:-translate-y-0.5"
                  />
                  <span className="relative">{btn.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
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
