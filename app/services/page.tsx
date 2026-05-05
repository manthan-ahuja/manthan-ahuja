import { ServiceCard } from '@/components/ServiceCard';
import { SectionHeader } from '@/components/SectionHeader';

const services = [
  { title: 'Attack Surface Intelligence', description: 'Continuously map exposed assets and risky paths.', points: ['External visibility graph', 'Priority-based remediation', 'Executive reporting'] },
  { title: 'Cloud Security Engineering', description: 'Guardrails and controls for modern cloud stacks.', points: ['Policy automation', 'Runtime hardening', 'Identity segmentation'] },
  { title: 'SOC Modernization', description: 'Build lower-noise workflows and accelerated response.', points: ['Playbook orchestration', 'Telemetry tuning', 'Response drill cadence'] }
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <SectionHeader eyebrow="Services" title="Connected capabilities. One defense network." copy="Each service is a node in your command architecture, designed to interoperate and evolve." />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.title} {...service} />)}
      </section>
    </div>
  );
}
