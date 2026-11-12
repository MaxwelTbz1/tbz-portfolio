import { FileText, ArrowUpRight } from "lucide-react";

export default function CVButton() {
  return (
    <a
      href="/cv-regis-tchibozo.pdf"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 border border-[var(--border)] px-5 py-3 text-xs font-medium text-[var(--foreground)] transition hover:border-[#3987ff] hover:text-[#3987ff]"
    >
      <FileText size={15} />
      Voir mon CV
      <ArrowUpRight size={14} />
    </a>
  );
}
