type SectionLabelProps = {
  number: string;
  label: string;
};

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="eyebrow">
      <span className="font-mono accent-text">{number}</span>
      <span>{label}</span>
    </div>
  );
}
