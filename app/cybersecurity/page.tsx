import { NetworkVisual } from '@/components/NetworkVisual';
import { SectionHeader } from '@/components/SectionHeader';

export default function CybersecurityPage() {
  return (
    <div className="space-y-12">
      <SectionHeader eyebrow="Command Center" title="Observe. Filter. Respond. Reinforce." copy="A visualized defense cycle designed for real-time confidence." />
      <section className="grid gap-6 lg:grid-cols-2">
        <NetworkVisual />
        <div className="space-y-4">
          {['Data Flow Ingestion', 'Threat Detection & Correlation', 'Firewall + Zero Trust Layers', '24/7 Monitoring & Incident Response'].map((step, i) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Stage 0{i + 1}</p>
              <h3 className="mt-1 text-lg font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
