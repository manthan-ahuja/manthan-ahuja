'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Cybersecurity', '/cybersecurity'], ['Case Studies', '/case-studies'], ['Contact', '/contact']
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-cloud/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight">NINESEC</Link>
        <div className="hidden gap-1 md:flex">
          {links.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={`relative rounded-full px-4 py-2 text-sm transition ${active ? 'text-ink' : 'text-slate hover:text-ink'}`}>
                {label}
                {active && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-accentSoft" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
