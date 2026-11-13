"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
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

  const duration = shouldReduceMotion ? 0 : 0.7;

  const ease = [0.22, 1, 0.36, 1] as const;

  // Animation commune des éléments
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease,
      },
    },
  };

  // Apparition progressive des enfants
  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.13,
      },
    },
  };

  // Animation du nom
  const titleReveal: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 55,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1,
        ease,
      },
    },
  };

  return (
    <section className="hero-glow relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      <div className="container-main relative">
        {/* Informations supérieures */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mb-20 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <motion.div variants={fadeUp} className="eyebrow">
            <span>Backend Engineer</span>
            <span className="text-gray-700">/</span>
            <span>Open to opportunities</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <MapPin size={14} className="accent-text" />
            Bénin, Afrique de l'Ouest
          </motion.div>
        </motion.div>

        {/* Présentation principale */}
        <div className="relative">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-500"
            >
              Bonjour, je suis
            </motion.p>

            <motion.h1
              variants={titleReveal}
              initial="hidden"
              animate="visible"
              className="hero-title"
            >
              RÉGIS
              <br />
              <span className="outline-text">TCHIBOZO.</span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-10 border-t border-[var(--border)] pt-9 md:grid-cols-2 md:gap-16"
          >
            <motion.div variants={fadeUp}>
              <p className="max-w-xl text-2xl font-medium leading-relaxed tracking-tight text-gray-200 md:text-3xl">
                Je transforme des idées en{" "}
                <span className="accent-text">systèmes backend</span> fiables et
                bien structurés.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-start justify-between gap-7"
            >
              <p className="max-w-lg text-sm leading-8 text-gray-400">
                Développeur backend spécialisé dans l'écosystème Node.js et
                TypeScript. Je conçois des API REST, structure les données et
                développe des services applicatifs pensés pour répondre à des
                besoins réels.
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.div variants={fadeUp}>
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
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link
                    href="#about"
                    className="group inline-flex items-center gap-3 border border-[var(--border)] px-5 py-3.5 text-xs text-[var(--foreground)] transition-all duration-300 hover:border-[#3987ff] hover:text-[#3987ff]"
                  >
                    En savoir plus
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 border-t border-[var(--border)] pt-8"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 flex items-center gap-3"
          >
            <Code2 size={16} className="accent-text" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
              Technologies & outils
            </span>
          </motion.div>

          <div className="grid gap-9 md:grid-cols-3">
            {technologyGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <motion.p
                  variants={fadeUp}
                  className="mb-5 text-xs font-semibold text-[var(--foreground)]"
                >
                  {group.category}
                </motion.p>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  {group.technologies.map(({ name, Icon }) => (
                    <motion.div
                      key={name}
                      variants={fadeUp}
                      whileHover={
                        shouldReduceMotion ? undefined : { y: -4, scale: 1.04 }
                      }
                      title={name}
                      className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-gray-400 transition-colors duration-300 hover:border-[#3987ff]/60 hover:bg-[#3987ff]/10 hover:text-[#3987ff]"
                    >
                      <Icon size={19} aria-hidden="true" className="shrink-0" />

                      <span className="text-[11px] font-medium">{name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indication de défilement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 1.4 }}
          className="mt-16 flex justify-end"
        >
          <Link
            href="#about"
            aria-label="Défiler vers la section à propos"
            className="group hidden items-center gap-3 text-xs text-gray-500 transition-colors hover:text-[#3987ff] md:flex"
          >
            <span className="uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown
              size={17}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
