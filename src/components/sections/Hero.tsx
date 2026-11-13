"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin, Code2 } from "lucide-react";

import {
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { FaServer } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

const technologyGroups = [
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Express.js", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Mongoose", Icon: SiMongoose },
      { name: "REST API", Icon: FaServer },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: SiBootstrap },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: SiPostman },
      { name: "VS Code", Icon: DiVisualstudio },
    ],
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="hero-glow relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      <div className="container-main relative">
        {/* Top information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mb-20 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <div className="eyebrow">
            <span>Backend Engineer</span>
            <span className="text-gray-700">/</span>
            <span>Open to opportunities</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={14} className="accent-text" />
            Bénin, Afrique de l'Ouest
          </div>
        </motion.div>

        {/* Main title */}
        <div className="relative">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-500"
          >
            Bonjour, je suis
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hero-title"
          >
            RÉGIS
            <br />
            <span className="outline-text">TCHIBOZO.</span>
          </motion.h1>

          {/* Description */}
          <div className="mt-12 grid gap-10 border-t border-[var(--border)] pt-9 md:grid-cols-2 md:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ delay: 0.25 }}
            >
              <p className="max-w-xl text-2xl font-medium leading-relaxed tracking-tight text-gray-200 md:text-3xl">
                Je transforme des idées en{" "}
                <span className="accent-text">systèmes backend</span> fiables et
                bien structurés.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-start justify-between gap-7"
            >
              <p className="max-w-lg text-sm leading-8 text-gray-400">
                Développeur backend spécialisé dans l'écosystème Node.js et
                TypeScript. Je conçois des API REST, structure les données et
                développe des services applicatifs pensés pour répondre à des
                besoins réels.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-[#3987ff] px-5 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
                >
                  Explorer mes projets
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="#about"
                  className="group inline-flex items-center gap-3 border border-[var(--border)] px-5 py-3.5 text-xs text-[var(--foreground)] transition-all duration-300 hover:border-[#3987ff] hover:text-[#3987ff]"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technology stack */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mt-20 border-t border-[var(--border)] pt-8"
        >
          <div className="mb-8 flex items-center gap-3">
            <Code2 size={16} className="accent-text" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
              Technologies & outils
            </span>
          </div>

          <div className="grid gap-9 md:grid-cols-3">
            {technologyGroups.map((group, groupIndex) => (
              <div key={group.category}>
                <p className="mb-5 text-xs font-semibold text-[var(--foreground)]">
                  {group.category}
                </p>

                <div className="flex flex-wrap gap-3">
                  {group.technologies.map(({ name, Icon }, index) => (
                    <motion.div
                      key={name}
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 12,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        delay: 0.15 + groupIndex * 0.12 + index * 0.055,
                      }}
                      title={name}
                      className="group flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#3987ff]/60 hover:bg-[#3987ff]/10 hover:text-[#3987ff] sm:h-14 sm:w-14"
                    >
                      <Icon size={22} aria-hidden="true" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
