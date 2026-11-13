"use client";

import { useState } from "react";
import Link from "next/link";

import { ArrowUpRight, Menu, X } from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import CVButton from "@/components/ui/CVButton";
import ThemeToggle from "@/components/layout/ThemeToggle";

const navigation = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={{ y: shouldReduceMotion ? 0 : -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl"
    >
      <div className="container-main flex h-[76px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="text-2xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-105">
            RT<span className="accent-text">.</span>
          </span>

          <span className="hidden border-l border-[var(--border)] pl-3 text-[10px] uppercase tracking-[0.18em] text-gray-500 sm:block">
            Portfolio personnel
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 text-xs md:flex">
          {navigation.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.2 + index * 0.08,
              }}
            >
              <Link
                href={item.href}
                className="nav-link relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#3987ff] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <ThemeToggle />

          {/* Language placeholder */}
          <button
            type="button"
            aria-label="Changer de langue"
            className="hidden text-[11px] font-medium tracking-widest text-gray-400 transition hover:text-[var(--foreground)] sm:block"
          >
            FR <span className="text-gray-600">/</span> EN
          </button>

          {/* Contact */}
          <Link
            href="#contact"
            className="group hidden items-center gap-2 border border-[var(--border)] px-4 py-2.5 text-xs text-[var(--foreground)] transition-all duration-300 hover:border-[#3987ff] hover:text-[#3987ff] sm:flex"
          >
            Discutons
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <div className="hidden sm:block">
            <CVButton />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--foreground)] transition hover:border-[#3987ff] hover:text-[#3987ff] md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.18,
                }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] md:hidden"
          >
            <div className="container-main flex flex-col gap-5 py-7">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-[var(--foreground)] transition hover:text-[#3987ff]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-[var(--border)] pt-5">
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm accent-text"
                >
                  Me contacter
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="pt-2">
                <CVButton />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
