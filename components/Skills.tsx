'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, viewportOnce, EASE_OUT } from '@/lib/animations';

const SKILLS: { name: string; category: string }[] = [
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Git', category: 'Tooling' },
  { name: 'GitHub', category: 'Tooling' },
  { name: 'Redis', category: 'Cache' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'JWT Authentication', category: 'Security' },
  { name: 'GenAI / Gemini', category: 'AI' },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span variants={fadeInUp} className="block text-sm font-semibold text-accent">
          02 — Skills
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Technologies I work with
        </motion.h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="group relative cursor-default overflow-hidden rounded-lg border border-border bg-card px-4 py-2"
            >
              <div className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent/8 transition-transform duration-300 group-hover:scale-y-100" />
              <span className="relative text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
                {skill.name}
              </span>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-foreground px-2 py-0.5 text-[10px] font-medium text-background opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-8">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
