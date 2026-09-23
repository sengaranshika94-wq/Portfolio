'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiImagedotsc as SiImagekit,
  SiVercel,
} from 'react-icons/si';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { LogoLoop, type LogoLoopItem } from '@/components/LogoLoop';

const frontendLogos: LogoLoopItem[] = [
  { node: <SiReact color="#61DAFB" />, title: 'React' },
  { node: <SiNextdotjs color="#FFFFFF" />, title: 'Next.js' },
  { node: <SiTypescript color="#3178C6" />, title: 'TypeScript' },
  { node: <SiTailwindcss color="#06B6D4" />, title: 'Tailwind CSS' },
  { node: <SiJavascript color="#F7DF1E" />, title: 'JavaScript' },
];

const backendLogos: LogoLoopItem[] = [
  { node: <SiNodedotjs color="#5FA04E" />, title: 'Node.js' },
  { node: <SiExpress color="#FFFFFF" />, title: 'Express' },
  { node: <SiMongodb color="#47A248" />, title: 'MongoDB' },
  { node: <SiPostgresql color="#4169E1" />, title: 'PostgreSQL' },
  { node: <SiPrisma color="#5A67D8" />, title: 'Prisma' },
  { node: <SiRedis color="#FF4438" />, title: 'Redis' },
  { node: <SiGit color="#F05032" />, title: 'Git' },
  { node: <SiGithub color="#FFFFFF" />, title: 'GitHub' },
  { node: <SiGooglegemini color="#8E75B2" />, title: 'Gemini / GenAI' },
  { node: <SiImagekit color="#4B78FF" />, title: 'ImageKit' },
  { node: <SiVercel color="#FFFFFF" />, title: 'Vercel' },
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
        </motion.span>        <motion.h2 variants={fadeInUp} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I{' '}
          <span className="bg-gradient-to-r from-accent via-sky-300 to-sky-400 bg-clip-text text-transparent">
            work with
          </span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Tools I use to build full-stack and AI-powered applications.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8 space-y-3 sm:space-y-4">
          <LogoLoop
            logos={frontendLogos}
            speed={40}
            hoverSpeed={18}
            direction="left"
            gap={52}
            fadeOut
            fadeOutColor="hsl(222 47% 6%)"
            ariaLabel="Frontend technologies"
          />
          <LogoLoop
            logos={backendLogos}
            speed={38}
            hoverSpeed={17}
            direction="right"
            gap={48}
            fadeOut
            fadeOutColor="hsl(222 47% 6%)"
            ariaLabel="Backend, data, AI, and developer tools"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}