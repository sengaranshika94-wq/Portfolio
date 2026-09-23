'use client';

import { motion } from 'framer-motion';

const BLOBS = [
  { size: 500, top: '-10%', left: '5%', delay: 0, duration: 18, color: '199 89% 48%' },
  { size: 400, top: '30%', left: '80%', delay: 3, duration: 22, color: '160 60% 45%' },
  { size: 350, top: '70%', left: '15%', delay: 6, duration: 20, color: '199 89% 48%' },
  { size: 300, top: '50%', left: '60%', delay: 9, duration: 16, color: '190 70% 40%' },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]" />

      {/* Floating gradient blobs */}
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: blob.delay * 0.3 }}
          className="absolute"
          style={{ top: blob.top, left: blob.left }}
        >
          <motion.div
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -50, 30, 0],
              scale: [1, 1.15, 0.9, 1],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: blob.delay,
            }}
            className="rounded-full blur-[100px]"
            style={{
              width: blob.size,
              height: blob.size,
              background: `hsl(${blob.color} / 0.12)`,
            }}
          />
        </motion.div>
      ))}

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 dot-bg opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_80%)]" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
