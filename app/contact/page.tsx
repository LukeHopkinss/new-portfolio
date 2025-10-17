export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-3 text-white/80">
          We'll draft this page fully later. For now, add your preferred channels here.
        </p>
        <ul className="mt-8 space-y-3 text-white/80">
          <li>email: you@example.com</li>
          <li>github: github.com/yourname</li>
          <li>linkedin: linkedin.com/in/yourname</li>
        </ul>
      </div>
    </div>
  );
}
