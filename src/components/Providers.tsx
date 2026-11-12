"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { LightboxProvider } from "./ui/Lightbox";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LightboxProvider>{children}</LightboxProvider>
    </MotionConfig>
  );
}
