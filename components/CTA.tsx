import Link from 'next/link';

export function CTA() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
      <h3 className="text-3xl font-extrabold">Build your command layer before the next incident.</h3>
      <p className="mt-2 max-w-2xl text-slate">Turn fragmented security tooling into one orchestrated response network with NINESEC.</p>
      <Link href="/contact" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90">Launch a security briefing</Link>
    </section>
  );
}
