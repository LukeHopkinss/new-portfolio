"use client";

import { motion } from "framer-motion";
import LiquidEther from "../components/Background/LiquidEther";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projects";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Full-screen Liquid Ether background */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={['#efedf5', '#efedf5', '#0a0a0a']}
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
          // Make sure the container has height (full screen)
          style={{ width: '100%', height: '100%' }}
          className="pointer-events-none"
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-semibold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Building usable tools,
          <br className="hidden md:block" /> intelligent systems,
          <br className="hidden md:block" /> and delightful web experiences.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-white/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          I’m <span className="font-semibold">Luke Hopkins</span>, a software engineer focused on
          computer security, full-stack apps, and data-driven design. I ship projects that bridge
          research and real-world impact.
        </motion.p>
      </section>

      {/* Floating glass carousel */}
      <section className="relative -mt-10 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-sm uppercase tracking-widest text-white/60">Projects</h2>
          <div className="reel relative flex snap-x snap-mandatory gap-6 overflow-x-auto rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] [scrollbar-width:thin]">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} p={p} className={i % 2 ? "mt-6" : "-mt-2"} />
            ))}
          </div>
          <p className="mt-3 text-xs text-white/60">Scroll sideways ↔</p>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Luke Hopkins. All rights reserved.
      </footer>
    </main>
  );
}
