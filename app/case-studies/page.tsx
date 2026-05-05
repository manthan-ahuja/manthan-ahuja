'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeader } from '@/components/SectionHeader';

const cases = [
  ['Fintech Platform', 'Reduced incident triage time by 62% through detection pipeline redesign.'],
  ['Healthcare Group', 'Deployed secure segmentation model across 43 clinical systems.'],
  ['Global SaaS', 'Built command-level visibility dashboard for multi-cloud posture.']
];

export default function CaseStudiesPage() {
  return (
    <AnimatedSection>
      <div className="space-y-12">
        <SectionHeader eyebrow="Proof" title="Client impact measured in speed, resilience, and confidence." copy="Representative outcomes from complex operating environments." />
        <div className="grid gap-5 md:grid-cols-3">
          {cases.map(([name, impact], i) => (
            <motion.article key={name} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-3 text-slate">{impact}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
