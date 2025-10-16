import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-3 py-4">
          {/* Logo placeholder (top right). Replace with your logo asset */}
          <div className="glass px-3 py-1 text-sm font-semibold tracking-wide">
            LOGO
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            contact
          </Link>
        </div>
      </div>
    </header>
  );
}
