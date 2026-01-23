"use client";

import { Lenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <Lenis root>
      {children}
    </Lenis>
  );
}
