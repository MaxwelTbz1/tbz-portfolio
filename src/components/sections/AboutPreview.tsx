"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { motion, useReducedMotion } from "motion/react";

const titleLines = ["Comprendre.", "Concevoir.", "Construire."];

const paragraphs = [
  {
    text: "Je suis Régis TCHIBOZO, développeur orienté backend, passionné par la conception de solutions logicielles structurées et utiles.",
    className: "text-lg leading-9 text-gray-200",
  },
  {
    text: "Mon parcours dans le développement web m'a conduit progressivement du frontend vers le backend. Cette évolution m'a permis de mieux comprendre les différentes couches d'une application et la manière dont elles communiquent.",
    className: "mt-6 text-sm leading-8 text-gray-400",
  },
  {
    text: "Aujourd'hui, je concentre mon travail sur Node.js, TypeScript, Express.js, les API REST et la gestion des données avec MongoDB.",
    className: "mt-5 text-sm leading-8 text-gray-400",
  },
];

const qualities = [
  {
    number: "01",
    title: "Approche structurée",
    description:
      "Des solutions pensées pour être compréhensibles et maintenables.",
  },
  {
    number: "02",
    title: "Apprentissage continu",
    description:
      "Une progression construite à travers la pratique et les projets réels.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-spacing border-y border-white/[0.07] bg-[#0c0f15]"
    >
      <div className="container-main grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        {/* Left column */}
        <div>
          <motion.div
            variants={reveal}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <SectionLabel number="02" label="About me" />
          </motion.div>

          <motion.h2
            variants={stagger}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            {titleLines.map((line, index) => (
              <motion.span
                key={line}
                variants={reveal}
                className={`block ${index === 2 ? "accent-text" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Right column */}
        <motion.div
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          {paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph.text}
              variants={reveal}
              className={paragraph.className}
            >
              {paragraph.text}
            </motion.p>
          ))}

          {/* Personal qualities */}
          <motion.div
            variants={stagger}
            className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-7 sm:grid-cols-2"
          >
            {qualities.map((quality) => (
              <motion.div
                key={quality.number}
                variants={reveal}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.25 },
                      }
                }
                className="group"
              >
                <span className="font-mono text-xs text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                  {quality.number}
                </span>

                <h3 className="mt-3 text-sm font-medium transition-colors duration-300 group-hover:text-blue-300">
                  {quality.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
