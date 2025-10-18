"use client";

import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoClassName?: string;
};

export default function Navbar({
  logoSrc = "/logo/cat-logo.jpg",
  logoAlt = "Logo",
  logoWidth = 88,
  logoHeight = 88,
  logoClassName = "rounded-md object-cover",
}: NavbarProps) {
  return (
    <header className="relative z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" aria-label="Go to home" className="inline-flex items-center gap-2">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className={logoClassName}
              priority
            />
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

