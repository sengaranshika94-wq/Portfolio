import type { Variants } from 'framer-motion';

export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const staggerContainer = (stagger = 0.06, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

export const whileHoverLift = {
  y: -4,
  transition: { duration: 0.2, ease: EASE_OUT },
};

export const viewportOnce = { once: true, margin: '-60px' } as const;
