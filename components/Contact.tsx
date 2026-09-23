'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const CONTACT_LINKS: {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: 'Email', value: 'anshikasengar@gmail.com', href: 'mailto:anshikasengar@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/anshikasengar', href: 'https://github.com/anshikasengar', icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/anshikasengar', href: 'https://linkedin.com/in/anshikasengar', icon: Linkedin },
  { label: 'Resume', value: 'View / Download', href: '#', icon: FileText },
];

function ContactCard({ link, index }: { link: typeof CONTACT_LINKS[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const glowLeft = useTransform(glowX, (v) => `${v}px`);
  const glowTop = useTransform(glowY, (v) => `${v}px`);

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((cy - e.clientY) / rect.height) * 4);
    rotateY.set(((e.clientX - cx) / rect.width) * 4);
    glowX.set(e.clientX - rect.left - 100);
    glowY.set(e.clientY - rect.top - 100);
    glowOpacity.set(1);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowOpacity.set(0);
  };

  const Icon = link.icon;

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      whileHover={{ y: -3 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-background/50 p-4 text-left transition-colors duration-200 hover:border-accent/40"
    >
      <motion.div
        style={{ left: glowLeft, top: glowTop, opacity: glowOpacity }}
        className="pointer-events-none absolute h-48 w-48 rounded-full bg-accent/10 blur-[40px]"
      />

      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon size={18} />
      </div>
      <div className="relative flex-1 min-w-0">
        <p className="text-xs font-medium text-muted-foreground">{link.label}</p>
        <p className="truncate text-sm font-semibold">{link.value}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="relative text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-shadow duration-300 hover:shadow-[0_0_60px_-15px] hover:shadow-accent/25 md:p-16"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
        </motion.div>

        <div className="relative z-10">
          <motion.span variants={fadeInUp} className="block text-sm font-semibold text-accent">
            06 — Contact
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-md text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Let&apos;s build something useful.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-md text-muted-foreground"
          >
            Open to internships, collaborations, and interesting projects. Feel
            free to reach out.
          </motion.p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {CONTACT_LINKS.map((link, i) => (
              <ContactCard key={link.label} link={link} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
