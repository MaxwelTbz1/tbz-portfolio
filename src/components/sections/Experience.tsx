"use client";

import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

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

function ScrollReveal({
  progress,
  start,
  end,
  children,
  className,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const opacity = useTransform(progress, [start, end], [0, 1]);

  const y = useTransform(progress, [start, end], [22, 0]);

  return (
    <motion.div
      style={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const itemRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 88%", "start 30%"],
  });

  const markerScale = useTransform(scrollYProgress, [0.05, 0.35], [0.5, 1]);

  const markerOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0.25, 1]);

  return (
    <article ref={itemRef} className="relative pb-20 pl-8 last:pb-0 md:pl-14">
      {/* Timeline marker */}
      <motion.span
        style={
          shouldReduceMotion
            ? { scale: 1, opacity: 1 }
            : { scale: markerScale, opacity: markerOpacity }
        }
        className="absolute -left-[4px] top-1 z-10 h-[9px] w-[9px] rounded-full bg-[#3987ff] shadow-[0_0_16px_rgba(57,135,255,0.5)]"
      />

      <div className="grid gap-8 md:grid-cols-[190px_1fr]">
        {/* Date and category */}
        <div>
          <ScrollReveal progress={scrollYProgress} start={0.05} end={0.24}>
            <p className="font-mono text-xs text-[#3987ff]">
              {experience.period}
            </p>

            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              {experience.category}
            </p>
          </ScrollReveal>
        </div>

        {/* Main content */}
        <div>
          {/* Role */}
          <ScrollReveal progress={scrollYProgress} start={0.17} end={0.36}>
            <div className="flex flex-wrap items-start justify-between gap-4">
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
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal progress={scrollYProgress} start={0.32} end={0.51}>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)]">
              {experience.description}
            </p>
          </ScrollReveal>

          {/* Responsibilities */}
          <div className="mt-7">
            <ScrollReveal progress={scrollYProgress} start={0.45} end={0.58}>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em]">
                Contributions
              </p>
            </ScrollReveal>

            <ul className="space-y-3">
              {experience.responsibilities.map((item, i) => (
                <li key={item}>
                  <ScrollReveal
                    progress={scrollYProgress}
                    start={0.52 + i * 0.065}
                    end={0.65 + i * 0.065}
                  >
                    <div className="flex gap-3 text-xs leading-6 text-[var(--muted)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3987ff]" />
                      {item}
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <ScrollReveal progress={scrollYProgress} start={0.82} end={0.98}>
            <div className="mt-7 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-[var(--border)] px-3 py-2 text-[10px] text-[var(--muted)] transition-colors duration-300 hover:border-[#3987ff]/50 hover:text-[#3987ff]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="section-spacing border-y border-[var(--border)]"
    >
      <div className="container-main">
        <SectionLabel number="03" label="Professional journey" />

        <div className="mt-7 mb-16 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            L'expérience
            <br />
            <span className="text-[var(--muted)]">construit l'expertise.</span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            Mon parcours dans le développement logiciel, les responsabilités
            assumées et les compétences développées à travers la pratique.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative ml-2 md:ml-0">
          {/* Background line */}
          <div className="absolute left-0 top-0 h-full w-px bg-[var(--border)]" />

          {/* Scroll-linked line */}
          <motion.div
            className="absolute left-0 top-0 h-full w-px origin-top bg-[#3987ff]"
            style={{
              scaleY: shouldReduceMotion ? 1 : lineProgress,
            }}
          />

          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.role}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs text-[var(--muted)] transition hover:text-[#3987ff]"
          >
            Échanger sur mon parcours
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
