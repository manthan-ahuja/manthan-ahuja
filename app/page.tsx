import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { NetworkVisual } from '@/components/NetworkVisual';
import { SectionHeader } from '@/components/SectionHeader';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Command-grade security</p>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Where threat signals become decisive action.</h1>
          <p className="mt-5 max-w-xl text-lg text-slate">NINESEC engineers your cybersecurity stack as a living network: visible, measurable, and always on watch.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/services" className="rounded-full bg-accent px-6 py-3 font-semibold text-white">Explore Services</Link>
            <Link href="/contact" className="rounded-full border border-slate-300 px-6 py-3 font-semibold">Book Briefing</Link>
          </div>
        </div>
        <NetworkVisual />
      </section>
      <section className="space-y-8">
        <SectionHeader eyebrow="System Modules" title="Core defense units" copy="Every module is purpose-built and connected through one command fabric." />
        <div className="grid gap-5 md:grid-cols-3">
          {['Detection Mesh', 'Response Engine', 'Resilience Framework'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold">{item}</h3>
              <p className="mt-2 text-sm text-slate">Fast telemetry, low-noise alerts, and coordinated control.</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
