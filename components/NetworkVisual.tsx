'use client';

import { motion } from 'framer-motion';

export function NetworkVisual() {
  const nodes = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-200 bg-white grid-scan">
      <motion.div className="absolute inset-0" animate={{ opacity: [0.45, 0.85, 0.45] }} transition={{ duration: 3, repeat: Infinity }}>
        {nodes.map((n) => (
          <motion.span key={n} className="absolute h-2 w-2 rounded-full bg-accent" style={{ left: `${8 + (n * 7) % 90}%`, top: `${10 + (n * 11) % 78}%` }} animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.7, 1] }} transition={{ duration: 1.8 + (n % 5), repeat: Infinity, delay: n * 0.08 }} />
        ))}
      </motion.div>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-accent/40"
          style={{ top: `${15 + i * 13}%`, left: '-10%', width: '120%' }}
          animate={{ x: ['-4%', '4%', '-4%'], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div className="absolute inset-0" animate={{ backgroundPositionX: ['0%', '100%'] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }} style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.18), transparent)', backgroundSize: '45% 100%' }} />
    </div>
  );
}
