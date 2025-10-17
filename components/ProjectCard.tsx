"use client";

import { useRef } from "react";
import TiltedCard from "./TiltedCard";
import IframePreview from "./IframePreview";
import { Project } from "../types/project";

const CLICK_SLOP_PX = 8;
const CLICK_TIME_MS = 600;

export default function ProjectCard({ project }: { project: Project }) {
  const downRef = useRef<{ x: number; y: number; t: number } | null>(null);

  const media =
    project.preview.type === "iframe" ? (
      <IframePreview src={project.preview.src} title={project.title} />
    ) : undefined;

  const imgSrc = project.preview.type === "image" ? project.preview.src : undefined;
  const alt = project.preview.alt ?? project.title;

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    downRef.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const d = downRef.current;
    if (!d) return;
    const dx = Math.abs(e.clientX - d.x);
    const dy = Math.abs(e.clientY - d.y);
    const dt = Date.now() - d.t;

    // Treat tiny, quick gestures as "click" to open the site
    if (dx < CLICK_SLOP_PX && dy < CLICK_SLOP_PX && dt < CLICK_TIME_MS) {
      window.open(project.href, "_blank", "noopener,noreferrer");
    }
    downRef.current = null;
  }

  return (
    <div
      className="relative mx-auto w-[360px] select-none"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* Tilted media card */}
      <TiltedCard
        imageSrc={imgSrc}
        content={media}
        altText={alt}
        containerHeight="500px"
        imageHeight="360px"
        imageWidth="360px"
        scaleOnHover={1.06}
        rotateAmplitude={12}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent
        overlayContent={
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-xl bg-black/40 px-3 py-2 text-white backdrop-blur-sm">
            <div className="text-sm font-semibold">{project.title}</div>
          </div>
        }
      />

      {/* Description & CTA — always visible, not covered */}
      <div className="mt-3 space-y-2 text-center">
        <p className="text-sm text-white/85">{project.description}</p>
        <div className="flex justify-center gap-2">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 backdrop-blur"
          >
            Open site
          </a>
        </div>
      </div>
    </div>
  );
}

