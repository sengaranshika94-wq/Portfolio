'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/anshikasengar', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/anshikasengar', icon: Linkedin },
  { label: 'Email', href: 'mailto:anshikasengar@gmail.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">Anshika Sengar</p>
          <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
        </div>

        <div className="flex items-center gap-2">
          {FOOTER_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-accent/40 hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
