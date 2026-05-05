'use client';

import { motion } from 'framer-motion';

export function ServiceCard({ title, description, points }: { title: string; description: string; points: string[] }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-glow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate">
        {points.map((point) => (
          <li key={point} className="translate-x-0 transition group-hover:translate-x-1">• {point}</li>
        ))}
      </ul>
    </motion.article>
  );
}
