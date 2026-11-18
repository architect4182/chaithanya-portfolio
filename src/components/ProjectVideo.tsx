"use client";

import React, { useRef, useEffect } from "react";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ProjectVideo({ src, poster, style, className }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play video smoothly when visible
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Autoplay policy prevented playback, silent fallback to poster
              });
            }
          } else {
            // Pause video and free hardware decoder resources when offscreen
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "150px",
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      suppressHydrationWarning
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "20px",
        zIndex: 0,
        ...style,
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
