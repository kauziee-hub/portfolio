"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "./Icons";

// A muted, looping product video that only plays while it is on screen,
// so a page full of walkthroughs stays light. Respects reduced motion.
export function AutoVideo({
  src,
  poster,
  label,
  className = "",
  controls = true,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  controls?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [userPaused, src]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover object-top"
      />
      {controls && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-ink/75 text-white backdrop-blur transition-colors hover:bg-ink"
        >
          {playing ? <Pause width={14} height={14} /> : <Play width={14} height={14} />}
        </button>
      )}
    </div>
  );
}
