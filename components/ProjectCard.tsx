"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string; // /public/images/* or remote URL
  href: string;  // GitHub or live link
};

export default function ProjectCard({
  p,
  className,
}: {
  p: Project;
  className?: string;
}) {
  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "glass flex w-[320px] shrink-0 snap-start flex-col overflow-hidden",
        className
      )}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      aria-label={`${p.title} — open project`}
    >
      <div className="relative h-48 w-full bg-white/5">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 320px"
          priority={false}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-white/80 line-clamp-3">{p.description}</p>
      </div>
    </motion.a>
  );
}
