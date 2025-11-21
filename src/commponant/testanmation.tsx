"use client";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltWrapper({ children }: { children: React.ReactNode }) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return <div ref={tiltRef}>{children}</div>;
}
