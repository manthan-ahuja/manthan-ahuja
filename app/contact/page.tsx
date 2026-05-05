export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
      <h1 className="mt-2 text-4xl font-black">Start your security command briefing.</h1>
      <p className="mt-3 text-slate">Tell us your environment, risks, and priorities. We will design the right response architecture.</p>
      <form className="mt-8 space-y-4">
        {['Name', 'Work Email', 'Company'].map((label) => (
          <label key={label} className="block">
            <span className="mb-1 block text-sm font-medium">{label}</span>
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent" />
          </label>
        ))}
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Project Scope</span>
          <textarea rows={5} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-accent" />
        </label>
        <button className="rounded-full bg-accent px-6 py-3 font-semibold text-white">Send Request</button>
      </form>
    </section>
  );
}
