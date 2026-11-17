"use client";

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { useState, useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

