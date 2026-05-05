'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CTA } from '@/components/CTA';
import { NetworkVisual } from '@/components/NetworkVisual';
import { SectionHeader } from '@/components/SectionHeader';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <AnimatedSection>
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Command-grade security</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-5xl font-black leading-tight md:text-7xl">Where threat signals become decisive action.</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-5 max-w-xl text-lg text-slate">NINESEC engineers your cybersecurity stack as a living network: visible, measurable, and always on watch.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex gap-3">
              <Link href="/services" className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow">Explore Services</Link>
              <Link href="/contact" className="rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:border-accent hover:text-accent">Book Briefing</Link>
            </motion.div>
          </div>
          <NetworkVisual />
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <section className="space-y-8">
          <SectionHeader eyebrow="System Modules" title="Core defense units" copy="Every module is purpose-built and connected through one command fabric." />
          <div className="grid gap-5 md:grid-cols-3">
            {['Detection Mesh', 'Response Engine', 'Resilience Framework'].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold">{item}</h3>
                <p className="mt-2 text-sm text-slate">Fast telemetry, low-noise alerts, and coordinated control.</p>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.15}><CTA /></AnimatedSection>
    </div>
  );
}
