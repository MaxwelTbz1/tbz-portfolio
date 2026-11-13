"use client";

import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const experiences = [
  {
    period: "2025 — Présent",
    category: "EXPÉRIENCE PROFESSIONNELLE",
    role: "Backend Engineer",
    organization: "Friym",
    description:
      "Contribution au développement et à la maintenance du backend de la plateforme, avec une responsabilité particulière sur le service social.",
    responsibilities: [
      "Développement de fonctionnalités liées aux contenus et aux interactions.",
      "Conception et évolution d'API REST.",
      "Structuration et gestion des données avec MongoDB et Mongoose.",
      "Maintenance, correction et amélioration des services existants.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    period: "Parcours continu",
    category: "ÉVOLUTION TECHNIQUE",
    role: "Du frontend au backend",
    organization: "Développement web",
    description:
      "Une évolution progressive vers l'ingénierie backend, après une première expérience de développement frontend.",
    responsibilities: [
      "Développement d'interfaces web avec React et Next.js.",
      "Approfondissement de JavaScript et TypeScript.",
      "Apprentissage de l'architecture des applications et des échanges client-serveur.",
      "Approfondissement de GraphQL et des architectures API.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Progression de la ligne verticale selon le défilement.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="section-spacing border-y border-[var(--border)]"
    >
      <div className="container-main">
        <SectionLabel number="03" label="Professional journey" />

        {/* Section heading */}
        <div className="mt-7 mb-16 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            L'expérience
            <br />
            <span className="text-[var(--muted)]">construit l'expertise.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm leading-7 text-[var(--muted)]"
          >
            Mon parcours dans le développement logiciel, les responsabilités
            assumées et les compétences développées à travers la pratique.
          </motion.p>
        </div>

        {/* Animated timeline */}
        <div ref={timelineRef} className="relative ml-2 md:ml-0">
          {/* Base line */}
          <div className="absolute left-0 top-0 h-full w-px bg-[var(--border)]" />

          {/* Animated line */}
          <motion.div
            className="absolute left-0 top-0 h-full w-px origin-top bg-[#3987ff]"
            style={{
              scaleY: shouldReduceMotion ? 1 : lineProgress,
            }}
          />

          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              variants={itemVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative pb-16 pl-8 last:pb-0 md:pl-14"
            >
              {/* Timeline marker */}
              <motion.span
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        scale: 0.5,
                        opacity: 0.4,
                      }
                }
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  boxShadow:
                    "0 0 0 6px rgba(57, 135, 255, 0.12), 0 0 18px rgba(57, 135, 255, 0.45)",
                }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className={`absolute -left-[4px] top-1 z-10 h-[9px] w-[9px] rounded-full ${
                  index === 0 ? "bg-[#3987ff]" : "bg-[var(--muted)]"
                }`}
              />

              <div className="grid gap-8 md:grid-cols-[190px_1fr]">
                {/* Period */}
                <motion.div variants={childVariants}>
                  <p className="font-mono text-xs text-[#3987ff]">
                    {experience.period}
                  </p>

                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    {experience.category}
                  </p>
                </motion.div>

                {/* Experience content */}
                <div>
                  <motion.div
                    variants={childVariants}
                    className="flex flex-wrap items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-[var(--muted)]">
                        {experience.organization}
                      </p>
                    </div>

                    {index === 0 && (
                      <span className="border border-[#3987ff]/30 px-3 py-1.5 text-[9px] uppercase tracking-widest text-[#3987ff]">
                        Current
                      </span>
                    )}
                  </motion.div>

                  <motion.p
                    variants={childVariants}
                    className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)]"
                  >
                    {experience.description}
                  </motion.p>

                  {/* Responsibilities */}
                  <motion.div variants={childVariants} className="mt-7">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em]">
                      Contributions
                    </p>

                    <ul className="space-y-3">
                      {experience.responsibilities.map((item) => (
                        <motion.li
                          key={item}
                          variants={childVariants}
                          className="flex gap-3 text-xs leading-6 text-[var(--muted)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3987ff]" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    variants={childVariants}
                    className="mt-7 flex flex-wrap gap-2"
                  >
                    {experience.technologies.map((technology) => (
                      <motion.span
                        key={technology}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                y: -3,
                                borderColor: "rgba(57, 135, 255, 0.5)",
                                color: "#3987ff",
                              }
                        }
                        transition={{ duration: 0.2 }}
                        className="border border-[var(--border)] px-3 py-2 text-[10px] text-[var(--muted)]"
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact link */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-16 border-t border-[var(--border)] pt-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs text-[var(--muted)] transition hover:text-[#3987ff]"
          >
            Échanger sur mon parcours
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
