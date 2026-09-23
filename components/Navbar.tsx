'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-accent"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border/60 bg-background/80 backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Terminal size={15} />
            </span>
            <span>Anshika Sengar</span>
          </motion.button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  activeSection === item.href.slice(1)
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-md bg-accent/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {/* underline indicator */}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen((p) => !p)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[57px] left-0 right-0 z-40 overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    'rounded-md py-2.5 text-left text-sm font-medium transition-colors',
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
