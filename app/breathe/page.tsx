import React from 'react';

const BreathePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      <header className="w-full py-6 text-center bg-gradient-to-r from-[#fdf4ff] via-[#f5f3ff] to-[#fdf4ff] border-b border-purple-100">
        <h1 className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide">
          International Climate Change Conference 2026
        </h1>
        <div className="text-red-600 font-mono text-2xl mt-2 font-bold tracking-widest">
          48d 03h 25m 40s
        </div>
      </header>

      <section className="relative w-full h-[120vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://youtu.be/QSNa8U1yGrM"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      </section>

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default BreathePage;