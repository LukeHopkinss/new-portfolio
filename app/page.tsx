/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import LiquidEther from "../components/Background/LiquidEther";
import Navbar from "../components/Navbar";
import { projects } from "../lib/projects";
import SingleCardCarousel from "../components/SingleCardCarousel";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Full-screen Liquid Ether background */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={["#efedf5", "#efedf5", "#0a0a0a"]}
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
          I'm <span className="font-semibold">Luke Hopkins</span>, a computer science and cybersecurity student
          focused on computer security, full-stack apps, and data-driven design. I ship projects that bridge
          research and real-world impact.
        </motion.p>
      </section>

      {/* Projects: Single-card carousel with arrows (no scrollbar) */}
      <section className="relative -mt-10 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-white/60">Projects</h2>
          <SingleCardCarousel projects={projects} />
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Luke Hopkins. All rights reserved.
      </footer>
    </main>
  );
}

