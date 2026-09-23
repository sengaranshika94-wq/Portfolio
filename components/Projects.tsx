'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce, EASE_OUT } from '@/lib/animations';

type Project = {
  name: string;
  description: string;
  tech: string[];
  links: { demo?: string; github: string };
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: 'DesignLens',
    description:
      'AI-powered UI/design analysis platform that analyzes website screenshots and provides design insights with visual markers.',
    tech: ['React', 'Node.js', 'Gemini', 'MongoDB'],
    links: { demo: '#', github: 'https://github.com/anshikasengar' },
    featured: true,
  },
  {
    name: 'Sonara',
    description:
      'Full-stack mood-based music application with authentication, song management, Redis-based session handling, and ImageKit media uploads.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'ImageKit'],
    links: { demo: '#', github: 'https://github.com/anshikasengar' },
  },
  {
    name: 'AAYAM OS',
    description:
      'A futuristic productivity interface designed as a calm, futuristic operating-system-inspired web experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    links: { demo: '#', github: 'https://github.com/anshikasengar' },
  },
  {
    name: 'SmartMandi',
    description:
      'Capacity-aware digital procurement management platform designed to help farmers register, book procurement slots, track queues, and monitor procurement/payment status.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
    links: { github: 'https://github.com/anshikasengar' },
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
    >
      {label}
    </motion.span>
  );
}

function ProjectLink({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: EASE_OUT }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
    >
      <Icon size={15} />
      {children}
    </motion.a>
  );
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const maxTilt = 6;
    rotateX.set(((cy - e.clientY) / rect.height) * maxTilt);
    rotateY.set(((e.clientX - cx) / rect.width) * maxTilt);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const glowLeft = useTransform(glowX, (v) => `${v}px`);
  const glowTop = useTransform(glowY, (v) => `${v}px`);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set(e.clientX - rect.left - 160);
    glowY.set(e.clientY - rect.top - 160);
    glowOpacity.set(1);
  };
  const handleMouseLeave = () => glowOpacity.set(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10"
    >
      {/* Spotlight glow following mouse */}
      <motion.div
        style={{ left: glowLeft, top: glowTop, opacity: glowOpacity }}
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-accent/10 blur-[60px]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="mb-3 flex items-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
            >
              <ArrowUpRight size={12} /> Featured
            </motion.span>
          </motion.div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target={project.links.demo.startsWith('http') ? '_blank' : undefined}
                rel={project.links.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                <ExternalLink size={15} /> Live Demo
              </motion.a>
            )}
            <ProjectLink href={project.links.github} icon={Github}>
              GitHub
            </ProjectLink>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:block"
        >
          <TiltCard className="relative h-48 w-48 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent/10 to-secondary">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-5xl font-bold text-accent/20">
                {project.name.charAt(0)}
              </span>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-border/40"
    >
      {/* Sliding accent bar on top */}
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent transition-all duration-400 group-hover:w-full" />

      <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent/5 to-secondary">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.span
          className="relative text-3xl font-bold text-accent/20"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          {project.name.charAt(0)}
        </motion.span>
      </div>

      <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.links.demo && (
          <ProjectLink href={project.links.demo} icon={ExternalLink}>
            Live Demo
          </ProjectLink>
        )}
        <ProjectLink href={project.links.github} icon={Github}>
          GitHub
        </ProjectLink>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span variants={fadeInUp} className="block text-sm font-semibold text-accent">
          03 — Projects
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Featured work
        </motion.h2>
      </motion.div>

      <div className="mt-10">
        <FeaturedProject project={featured} />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
