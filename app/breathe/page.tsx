"use client";
import React, { useEffect, useRef } from 'react';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';

const BreathePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: any) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden text-slate-900">
      
      {/* 1. HEADER / COUNTDOWN */}
      <header className="w-full py-6 text-center bg-gradient-to-r from-[#fdf4ff] via-[#f5f3ff] to-[#fdf4ff] border-b border-purple-100 relative z-20">
        <h1 className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide">
          International Climate Change Conference 2026
        </h1>
        <div className="text-red-600 font-mono text-2xl mt-2 font-bold tracking-widest">
          48d 03h 25m 40s
        </div>
      </header>

      {/* 2. HERO VIDEO SECTION (120vh) */}
      <section className="relative w-full h-[120vh] overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://i.dawn.com/primary/2026/02/02133207bb4c3b2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white via-white/30 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/30 to-transparent z-10"></div>
      </section>

      {/* 3. BREATHE PAKISTAN BRANDING SECTION */}
      <section className="bg-white pt-20 pb-10 px-4 flex flex-col items-center">
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-16">
          <a href="#" className="text-[#6B8E4E] hover:text-green-800 font-medium text-lg">Projects</a>
          <a href="#" className="text-[#6B8E4E] hover:text-green-800 font-medium text-lg">Journalism</a>
          <a href="#" className="text-[#6B8E4E] hover:text-green-800 font-medium text-lg">Partners</a>
          <a href="#" className="text-[#6B8E4E] hover:text-green-800 font-medium text-lg">Contact</a>
          <div className="flex items-center gap-4 ml-4">
            <Linkedin size={22} className="text-[#6B8E4E]" />
            <Instagram size={22} className="text-[#6B8E4E]" />
          </div>
        </nav>

        <div className="flex flex-col items-center text-center max-w-2xl">
          <div className="flex items-center gap-6 mb-4">
             {/* Simple Leaf Logo Placeholder */}
             <div className="w-24 h-24 bg-[#1A5D2E] rounded-full flex items-center justify-center text-white">
                <span className="text-4xl">B</span>
             </div>
            <div className="text-left">
              <span className="text-xl font-semibold block uppercase tracking-tight">DawnMedia</span>
              <span className="text-5xl md:text-7xl font-bold block leading-none">Breathe</span>
              <span className="text-5xl md:text-7xl font-bold block leading-none">Pakistan</span>
            </div>
          </div>
          <p className="text-sm md:text-lg font-bold tracking-[0.3em] mt-4">LET'S WEATHER THE CHANGE - TOGETHER</p>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-700 mt-24 mb-20 italic">Act now.</h2>
        </div>
      </section>

      {/* 4. EVENTS TIMELINE SECTION (New) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Feb 2025 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span>
              <span className="text-red-800 font-bold uppercase tracking-wider">February 2025</span>
              <div className="h-[1px] bg-gray-200 flex-grow ml-2"></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3">International Climate Change Conference 2025</h3>
            <p className="text-gray-600 italic mb-4">Jinnah Convention Centre, Islamabad<br/>February 6 & 7, 2025</p>
            <p className="text-gray-600 leading-relaxed mb-6">A two-day climate change conference featuring over 90 international and local speakers, approximately 2,000 attendees, and 15 sessions focused on stronger climate governance and global advocacy.</p>
            <a href="#" className="text-red-800 font-bold hover:underline flex items-center gap-1">View →</a>
          </div>

          {/* Oct 2025 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span>
              <span className="text-red-800 font-bold uppercase tracking-wider">October 2025</span>
              <div className="h-[1px] bg-gray-200 flex-grow ml-2"></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3">The Air We Breathe</h3>
            <p className="text-gray-600 italic mb-4">Expo Centre, Lahore<br/>October 11, 2025</p>
            <p className="text-gray-600 leading-relaxed mb-6">A focussed conference on Air Pollution.</p>
            <a href="#" className="text-red-800 font-bold hover:underline flex items-center gap-1">View →</a>
          </div>

          {/* April 2026 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span>
              <span className="text-red-800 font-bold uppercase tracking-wider">April 2026</span>
              <div className="h-[1px] bg-gray-200 flex-grow ml-2"></div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3">International Climate Change Conference 2026</h3>
            <p className="text-gray-600 leading-relaxed mb-6">Following the inaugural Breathe Pakistan International Climate Change Conference 2025, Dawn Media reaffirms its commitment to engaging stakeholders and the public in driving climate action and keeping this urgent issue at the forefront.</p>
          </div>
        </div>
      </section>

      {/* 5. CLIMATE PROJECTS CARD SECTION (New) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#fcfdfe] rounded-[48px] border border-blue-50 shadow-sm overflow-hidden p-8 md:p-16">
          
          {/* Card Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b border-gray-100 pb-10">
            <div className="w-32 h-32 flex-shrink-0">
               {/* Tree Icon Placeholder */}
               <img src="https://cdn-icons-png.flaticon.com/512/490/490091.png" alt="Tree" className="w-full h-full object-contain opacity-80" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl text-[#6B8E4E] font-medium tracking-tight">Climate Projects</h2>
              <p className="text-gray-500 text-lg mt-2 font-light">Explore our initiatives.</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            
            {/* Project 1 */}
            <div className="flex gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">🪨</div>
              <div>
                <h4 className="text-xl font-bold text-[#722F1E] mb-2">Carbon Footprint Calculator</h4>
                <p className="text-gray-600 leading-relaxed">Track and understand your carbon emissions</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">📜</div>
              <div>
                <h4 className="text-xl font-bold text-[#722F1E] mb-2 leading-tight">Declaration on Rights of Nature & Climate Justice</h4>
                <p className="text-gray-600 leading-relaxed">Champion climate democracy — because an inclusive, sustainable future is possible</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">📝</div>
              <div>
                <h4 className="text-xl font-bold text-[#722F1E] mb-2">Sign the Declaration</h4>
                <p className="text-gray-600 leading-relaxed">Raise your voice. Pledge your support for Climate Action.</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">👥</div>
              <div>
                <h4 className="text-xl font-bold text-[#722F1E] mb-2">Events</h4>
                <p className="text-gray-600 leading-relaxed">Stay informed about upcoming speakers, sessions, and how to register</p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="flex gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-3xl">⚠️</div>
              <div>
                <h4 className="text-xl font-bold text-[#722F1E] mb-2">Climate Alerts with Alerti</h4>
                <p className="text-gray-600 leading-relaxed">From warning to action - stay ahead of climate risks and protect what matters.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="h-40"></footer>
    </div>
  );
};

export default BreathePage;