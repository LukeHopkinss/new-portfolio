"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "../types/project";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

type Props = { projects: Project[] };

export default function SingleCardCarousel({ projects }: Props) {
  const [index, setIndex] = useState(0);
  const dirRef = useRef<1 | -1>(1); // animation direction

  const prev = () => {
    dirRef.current = -1;
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };
  const next = () => {
    dirRef.current = 1;
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    const down = (e: MouseEvent | TouchEvent) => {
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      dx = 0;
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
      window.addEventListener("touchmove", move as any, { passive: true });
      window.addEventListener("touchend", up as any);
    };
    const move = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      dx = x - startX;
    };
    const up = () => {
      if (dx < -40) next();
      if (dx > 40) prev();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move as any);
      window.removeEventListener("touchend", up as any);
    };
    el.addEventListener("mousedown", down);
    el.addEventListener("touchstart", down as any, { passive: true });
    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("touchstart", down as any);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move as any);
      window.removeEventListener("touchend", up as any);
    };
  }, []);

  const current = projects[index];

  return (
    <div className="relative w-full select-none">
      {/* arrows */}
      <button
        onClick={prev}
        aria-label="Previous project"
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur hover:bg-white/20"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next project"
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur hover:bg-white/20"
      >
        <ArrowRight />
      </button>

      {/* stage: allow vertical overflow so title/description aren't clipped */}
      <div
        ref={containerRef}
        className="mx-auto flex w-full items-start justify-center overflow-x-hidden overflow-y-visible px-12 py-6 min-h-[640px]"
      >
        <AnimatePresence initial={false} custom={dirRef.current} mode="popLayout">
          <motion.div
            key={current.id}
            custom={dirRef.current}
            initial={{ opacity: 0, x: dirRef.current * 60, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -dirRef.current * 60, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ProjectCard project={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="mt-2 flex justify-center gap-1.5">
        {projects.map((p, i) => (
          <button
            key={p.id}
            aria-label={`Go to ${p.title}`}
            onClick={() => {
              dirRef.current = i > index ? 1 : -1;
              setIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
