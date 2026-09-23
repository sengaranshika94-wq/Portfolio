'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';

const FOOTER_LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'GitHub', href: 'https://github.com/anshikasengar', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anshikasengar', icon: Linkedin },
  { label: 'Email', href: 'mailto:anshikasengar@gmail.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <p className="text-sm font-semibold">Anshika Sengar</p>
          <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
        </motion.div>

        <div className="flex items-center gap-2">
          {FOOTER_LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
