export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 text-sm text-slate md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} NINESEC. Cyber Defense Command Network.</p>
        <p>Secure by design. Fast in response.</p>
      </div>
    </footer>
  );
}
