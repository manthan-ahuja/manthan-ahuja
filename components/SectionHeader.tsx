export function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-slate">{copy}</p>
    </div>
  );
}
