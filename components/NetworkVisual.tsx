'use client';

import { motion } from 'framer-motion';

export function NetworkVisual() {
  const nodes = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-200 bg-white grid-scan">
      {nodes.map((n) => (
        <motion.span key={n} className="absolute h-2 w-2 rounded-full bg-accent" style={{ left: `${8 + (n * 7) % 90}%`, top: `${12 + (n * 13) % 75}%` }} animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.6, 1] }} transition={{ duration: 2 + (n % 5), repeat: Infinity }} />
      ))}
      <motion.div className="absolute inset-0" animate={{ backgroundPositionX: ['0%', '100%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.15), transparent)', backgroundSize: '50% 100%' }} />
    </div>
  );
}
