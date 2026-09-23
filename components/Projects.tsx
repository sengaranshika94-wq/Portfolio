'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, type LucideIcon } from 'lucide-react';

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
    <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
      {label}
    </span>
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
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
    >
      <Icon size={15} />
      {children}
    </a>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <ArrowUpRight size={12} /> Featured
            </span>
          </div>
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
              <a
                href={project.links.demo}
                target={project.links.demo.startsWith('http') ? '_blank' : undefined}
                rel={project.links.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            <ProjectLink href={project.links.github} icon={Github}>
              GitHub
            </ProjectLink>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-accent/10 to-secondary">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-accent/20">
                {project.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-border/40"
    >
      <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent/5 to-secondary">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <span className="relative text-3xl font-bold text-accent/20 transition-transform duration-500 group-hover:scale-110">
          {project.name.charAt(0)}
        </span>
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="text-sm font-semibold text-accent">03 — Projects</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Featured work
        </h2>
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
