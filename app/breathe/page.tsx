"use client";
import React, { useEffect, useRef } from 'react';
import { 
  Linkedin, 
  Instagram, 
  Play, 
  Building2, 
  Phone, 
  Mail 
} from 'lucide-react';

const BreathePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => console.error("Video failed:", error));
    }
  }, []);

  const articles = [
    {
      img: "https://i.dawn.com/primary/2024/08/66cc379cc83e4.jpg",
      time: "Published about 10 hours ago",
      title: "From paper to action: The missing link in Pakistan&apos;s response to climate change",
      author: "Sahar Arshad Mahmood"
    },
    {
      img: "https://i.dawn.com/primary/2024/06/6666e6c434934.jpg",
      time: "Published 2 days ago",
      title: "Increased risk of glacial floods in Gilgit-Baltistan due to above-normal temperatures: PMD",
      author: "News Desk"
    },
    {
      img: "https://i.dawn.com/primary/2024/02/65d70e4179364.jpg",
      time: "Updated 22 Feb, 2026 10:53am",
      title: "Over 400 trees relocated to make way for underpasses on Rawalpindi&apos;s Peshawar Road",
      author: "Aamir Yasin"
    },
    {
      img: "https://i.dawn.com/primary/2024/08/66c46a6f68c35.jpg",
      time: "Published 12 Feb, 2026 12:02pm",
      title: "When floods come back, they find the same people waiting",
      author: "Ehsan Leghari"
    }
  ];

  const videos = [
    { title: "What Diseases Are Spreading Due to Air Pollution in Lahore? | Dawn News" },
    { title: "GENERAL SESSION 1: \"Federal-Provincial Air Plan & Governance\" | Air We Breathe Conference" },
    { title: "Rising Climate Change Impacts in Pakistan | How Can Prevention Be Possible? | Afia Salam" },
    { title: "GENERAL SESSION 8: A Health Crisis in the Smog | Air We Breathe Conference" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <header className="w-full py-6 text-center bg-linear-to-r from-[#fdf4ff] via-[#f5f3ff] to-[#fdf4ff] border-b border-purple-100 relative z-20">
        <h1 className="text-3xl md:text-4xl font-light text-slate-800 tracking-wide">
          International Climate Change Conference 2026
        </h1>
        <div className="text-red-600 font-mono text-2xl mt-2 font-bold tracking-widest">
          48d 03h 25m 40s
        </div>
      </header>

      <section className="relative w-full h-[120vh] overflow-hidden bg-black">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://i.dawn.com/primary/2026/02/02133207bb4c3b2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
        <div className="absolute top-0 w-full h-48 bg-linear-to-b from-white via-white/30 to-transparent z-10"></div>
        <div className="absolute bottom-0 w-full h-48 bg-linear-to-t from-white via-white/30 to-transparent z-10"></div>
      </section>

      <section className="bg-white pt-20 pb-10 flex flex-col items-center">
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 text-[#6B8E4E] font-medium">
          {["Projects", "Journalism", "Partners", "Contact"].map(item => (
            <a key={item} href="#" className="hover:text-green-800 transition-colors">{item}</a>
          ))}
          <div className="flex gap-4 ml-4"><Linkedin size={20} /><Instagram size={20} /></div>
        </nav>
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-20 h-20 bg-[#1A5D2E] rounded-full flex items-center justify-center text-white text-3xl font-bold">B</div>
            <div className="text-left">
              <p className="text-lg font-semibold uppercase leading-tight">DawnMedia</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.8]">Breathe<br />Pakistan</h1>
            </div>
          </div>
          <p className="font-bold tracking-[0.3em] mt-6 text-sm">LET&apos;S WEATHER THE CHANGE - TOGETHER</p>
          <h2 className="text-5xl md:text-6xl font-serif italic text-slate-700 mt-20 mb-10">Act now.</h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100 grid md:grid-cols-3 gap-12">
        {[
          { date: "February 2025", title: "International Climate Change Conference 2025", desc: "A two-day climate change conference featuring over 90 international speakers...", sub: "Jinnah Convention Centre, Islamabad" },
          { date: "October 2025", title: "The Air We Breathe", desc: "A focussed conference on Air Pollution.", sub: "Expo Centre, Lahore" },
          { date: "April 2026", title: "International Climate Change Conference 2026", desc: "Following the inaugural Breathe Pakistan... Dawn Media reaffirms its commitment." }
        ].map((event, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase mb-4">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span> {event.date} <div className="h-px bg-gray-200 grow"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            {event.sub && <p className="text-sm italic text-gray-500 mb-3">{event.sub}</p>}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.desc}</p>
            {i < 2 && <a href="#" className="text-red-800 font-bold">View →</a>}
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-[#fcfdfe] rounded-[40px] border border-blue-50 p-10 md:p-16 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b pb-10">
            <img src="https://cdn-icons-png.flaticon.com/512/490/490091.png" className="w-24 opacity-70" alt="tree" />
            <div className="text-center md:text-left">
              <h2 className="text-4xl text-[#6B8E4E] font-medium">Climate Projects</h2>
              <p className="text-gray-400">Explore our initiatives.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { icon: "🪨", title: "Carbon Footprint Calculator", desc: "Track and understand your carbon emissions" },
              { icon: "📜", title: "Declaration on Rights of Nature", desc: "Champion climate democracy — sustainable future" },
              { icon: "📝", title: "Sign the Declaration", desc: "Raise your voice. Pledge your support." },
              { icon: "👥", title: "Events", desc: "Stay informed about upcoming speakers" },
              { icon: "⚠️", title: "Climate Alerts", desc: "From warning to action - stay ahead of risks" }
            ].map((p, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-3xl">{p.icon}</span>
                <div><h4 className="font-bold text-[#722F1E] text-lg">{p.title}</h4><p className="text-gray-600 text-sm">{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-5xl text-[#6B8E4E] font-light tracking-widest mb-4">Climate Journalism</h2>
        <h3 className="text-[#6B8E4E] text-2xl font-bold mb-8 opacity-80">Dawn Editorial</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-4 aspect-4/3 relative h-48">
                <img src={art.img} alt="news" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-gray-500">{art.time}</span>
                <span className="bg-[#e9f2e3] text-[#6B8E4E] text-[10px] px-2 py-0.5 rounded-full font-bold">Breathe</span>
              </div>
              <h4 className="font-bold text-lg leading-tight mb-4 hover:text-blue-900">{art.title}</h4>
              <p className="text-sm text-gray-500">{art.author}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="text-red-800 text-2xl font-medium hover:underline">Read More Coverage →</a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-[#6B8E4E] text-2xl font-bold mb-8 opacity-80">Dawn Media</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, i) => (
            <div key={i} className="bg-white border border-blue-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-200 mb-4 group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white group-hover:bg-red-700 transition-colors">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mb-8 leading-snug">{vid.title}</p>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#25408f] rounded flex items-center justify-center text-[10px] text-white font-bold">DAWN</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#f1f5f1] text-[#6B8E4E] px-10 py-2 rounded-full font-bold tracking-widest hover:bg-[#e2ede2]">EXPLORE</button>
        </div>
      </section>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-10 border-t border-gray-100">
            <h2 className="text-[#98B679] text-2xl font-bold">From the Blog</h2>
            <button className="bg-[#415934] text-white px-8 py-2 rounded-md font-bold text-sm tracking-widest">SUBMIT</button>
          </div>
          <div className="flex justify-between items-center py-10 border-t border-gray-100">
            <h2 className="text-[#98B679] text-2xl font-bold">Mycelium Warriors</h2>
            <button className="bg-[#415934] text-white px-8 py-2 rounded-md font-bold text-sm tracking-widest">SUBMIT</button>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="space-y-6 text-slate-500 text-sm">
              <div className="flex gap-4">
                <Building2 size={20} className="text-slate-400 shrink-0" />
                <p>Haroon House<br />Dr Ziauddin Ahmed Road<br />Karachi 74200<br />Pakistan</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-slate-400 shrink-0" />
                <p>+92 111-444-777</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-slate-400 shrink-0" />
                <a href="mailto:breathepakistan@dawn.com">breathepakistan@dawn.com</a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Linkedin size={32} className="text-slate-600" fill="currentColor" />
              <Instagram size={32} className="text-slate-600" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default BreathePage;