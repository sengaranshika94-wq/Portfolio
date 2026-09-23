'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'anshikasengar@gmail.com',
    href: 'mailto:anshikasengar@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/anshikasengar',
    href: 'https://github.com/anshikasengar',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anshikasengar',
    href: 'https://linkedin.com/in/anshikasengar',
    icon: Linkedin,
  },
  {
    label: 'Resume',
    value: 'View / Download',
    href: '#',
    icon: FileText,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center md:p-16"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <span className="text-sm font-semibold text-accent">06 — Contact</span>
          <h2 className="mx-auto mt-4 max-w-md text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to internships, collaborations, and interesting projects. Feel
            free to reach out.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {CONTACT_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 text-left transition-colors duration-200 hover:border-accent/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-semibold">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
