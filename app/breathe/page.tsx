'use client'
import React, { useEffect, useRef } from 'react';

const BreathePage = () => {
  // 1. useRef ko 'HTMLVideoElement' ka type dein
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 2. Browser policy ki wajah se play() promise return karta hai
      videoRef.current.play().catch((error: any) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <header className="w-full py-6 text-center bg-white border-b border-purple-100 relative z-20">
        <h1 className="text-3xl font-light text-slate-800">
          International Climate Change Conference 2026
        </h1>
      </header>

      {/* Main Section with 120vh */}
      <section className="relative w-full h-[120vh] bg-black overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://i.dawn.com/primary/2026/02/02133207bb4c3b2.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default BreathePage;