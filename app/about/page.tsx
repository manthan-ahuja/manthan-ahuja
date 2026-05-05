import { SectionHeader } from '@/components/SectionHeader';

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <SectionHeader eyebrow="About NINESEC" title="We architect trust like mission-critical infrastructure." copy="Our role is to design, harden, and orchestrate cyber operations so your business can move at full speed." />
      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-2xl font-bold">Story</h3>
          <p className="mt-3 text-slate">NINESEC was built for teams tired of fragmented controls and reactive firefighting. We treat defense as an operational network: instrumented, layered, and always observable.</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-accentSoft p-8">
          <h3 className="text-2xl font-bold">Mission</h3>
          <p className="mt-3 text-slate">Convert risk into clarity through precise security architecture and measurable execution.</p>
        </article>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {['Precision first', 'Partnership over projects', 'Evidence over assumptions'].map((v) => (
          <div key={v} className="relative rounded-2xl border border-slate-200 bg-white p-6">
            <div className="tech-line absolute inset-x-6 top-8" />
            <p className="pt-8 font-semibold">{v}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
