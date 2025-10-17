"use client";

import { useState } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

export default function IframePreview({ src, title, className }: Props) {
  const [blocked, setBlocked] = useState(false);
  return blocked ? (
    <div className={`flex h-full w-full items-center justify-center bg-white/5 ${className || ""}`}>
      <div className="rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-xs text-white/80">
        Preview blocked by site (X-Frame-Options). <span className="underline">Open project to view.</span>
      </div>
    </div>
  ) : (
    <iframe
      src={src}
      title={title}
      className={`h-full w-full pointer-events-none ${className || ""}`}
      loading="lazy"
      referrerPolicy="no-referrer"
      sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      onError={() => setBlocked(true)}
    />
  );
}

