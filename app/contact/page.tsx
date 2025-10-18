"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import LiquidEther from "../../components/Background/LiquidEther";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">About Me</h1>
        <p className="mt-3 max-w-2xl text-white/80">
          I'm a junior at NYU Tandon School of Engineering, originally from San Diego, studying Computer Science and Cybersecurity.
          I care about building thoughtful full-stack applications with security baked in from day one, with clean architecture, reliable infrastructure, and defense in depth.
          Outside of code you'll find me rock climbing, working out, reading, trying new food, and exploring music; fakemink is on repeat right now.
          I'm Ethiopian and Vietnamese and love sharing and learning from both cultures.
          I also like <a href="https://anilist.co/user/LukeHopkins/" className="underline">anime</a> and will always entertain conversation about it.
        </p>

        {/* content grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Photo */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Image
                src="/contact/portfolio-pic.jpg"
                alt="Picture of Luke Hopkins"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, 92vw"
              />
            </div>
          </div>

          {/* Links & details */}
          <div className="space-y-6">
            <section>
              <h2 className="text-sm uppercase tracking-widest text-white/70">Get in touch!</h2>
              <ul className="mt-3 space-y-2 text-white/90">
                <li>
                  <a
                    href="mailto:luke.hopkins@outlook.com"
                    className="rounded-md px-1 underline-offset-4 hover:underline"
                  >
                    luke.hopkins@outlook.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-widest text-white/70">Links</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="https://github.com/LukeHopkinss"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
                >
                  GitHub
                </Link>
                <Link
                  href="/contact/Luke Hopkins - Resume 2025 PDF.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
                >
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/luke-hopkins-compsci/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
                >
                  LinkedIn
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
