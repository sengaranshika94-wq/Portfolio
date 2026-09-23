'use client';

import { motion } from 'framer-motion';

const SKILLS = [
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Redis',
  'REST APIs',
  'JWT Authentication',
  'GenAI / Gemini',
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="text-sm font-semibold text-accent">02 — Skills</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="cursor-default rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent hover:shadow-md hover:shadow-accent/5"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
