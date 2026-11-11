import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

const navigation = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#080a0f]/90 backdrop-blur-xl">
      <div className="container-main flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tighter">
            RT<span className="accent-text">.</span>
          </span>
          <span className="hidden border-l border-white/15 pl-3 text-[10px] uppercase tracking-[0.18em] text-gray-500 sm:block">
            Portfolio personnel
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-xs md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <span className="hidden text-[11px] font-medium tracking-widest text-gray-400 sm:block">
            FR <span className="text-gray-700">/</span> EN
          </span>

          <Link
            href="#contact"
            className="hidden items-center gap-2 border border-white/20 px-4 py-2.5 text-xs transition hover:border-[#3987ff] hover:text-[#3987ff] sm:flex"
          >
            Discutons <ArrowUpRight size={14} />
          </Link>

          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center text-white">
              <Menu size={23} />
            </summary>
            <nav className="absolute right-0 top-10 flex w-52 flex-col gap-5 border border-white/10 bg-[#10141c] p-5 text-sm shadow-2xl">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
              <Link href="#contact" className="accent-text">
                Me contacter ↗
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
