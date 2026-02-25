'use client'
import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SportPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white font-sans text-gray-900">
        <Header/>
        <Navbar/>

      <section className="flex flex-col md:flex-row gap-8 mb-16 border-b pb-12 border-gray-200">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
            alt="FIFA Boss"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-serif font-bold leading-tight mb-4 hover:text-blue-800 cursor-pointer">
            FIFA boss {`'very reassured'`} about World Cup in Mexico despite violence
          </h1>
          <p className="text-gray-500 text-lg mb-2 leading-snug">
            Mexico is one of the three host countries for the World Cup,
            along with the United States and Canada.
          </p>
          <p className="text-gray-400 text-sm mb-8">25 Feb, 2026</p>

          <div>
            <h3 className="text-red-700 font-bold text-lg mb-3">Related</h3>
            <ul className="space-y-4">
              <li className="font-bold border-b border-gray-100 pb-2 hover:text-blue-700 cursor-pointer">
                {`'All guarantees World Cup will be held in Mexico'`}
              </li>
              <li className="font-bold border-b border-gray-100 pb-2 hover:text-blue-700 cursor-pointer">
                25 Mexican troops die in violence after drug kingpin killed
              </li>
              <li className="font-bold border-b border-gray-100 pb-2 hover:text-blue-700 cursor-pointer">
                {`Mexican president reviews 2026 World Cup preparations with FIFA's Infantino`}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mb-16 border-b pb-12 border-gray-200">
        <div className="lg:col-span-1">
          <span className="text-red-600 font-semibold block mb-2 text-sm">Cricket</span>
          <h2 className="text-3xl font-serif font-bold leading-tight mb-4 hover:underline cursor-pointer">
            New Zealand ready for Sri {`Lanka's`} spin challenge, says Santner
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            {`"But I think you pick a squad of 15, knowing that you could potentially be in both countries on slightly slower wickets, on some flat ones as well." he says.`}
          </p>
        </div>

        <div className="lg:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600"
            alt="Cricket player"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" className="w-full h-32 object-cover" />
            <h4 className="font-bold text-md leading-tight hover:text-blue-700 cursor-pointer">Sesko on target as {`'ruthless'`} United edge Everton</h4>
          </div>
          <div className="space-y-2">
            <img src="https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=400" className="w-full h-32 object-cover border" />
            <h4 className="font-bold text-md leading-tight hover:text-blue-700 cursor-pointer">France welcomes Olympic flag as 2030 Winter Games loom</h4>
          </div>
          <div className="space-y-2">
            <img src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?w=400" className="w-full h-32 object-cover" />
            <h4 className="font-bold text-md leading-tight hover:text-blue-700 cursor-pointer">{`'Our fate`} is not in our {`hands':`} Shaheen on T20 World Cup semi-final...</h4>
          </div>
          <div className="space-y-2">
            <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400" className="w-full h-32 object-cover" />
            <h4 className="font-bold text-md leading-tight hover:text-blue-700 cursor-pointer">Paris St Germain defender Achraf Hakimi to face trial for rape</h4>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-10 mb-16 border-t pt-8 border-gray-200">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif font-bold leading-tight mb-6 underline decoration-black underline-offset-4 hover:text-blue-800 cursor-pointer">
            Pakistan fans are left replaying one missed catch after England wins T20 match
          </h2>
          <p className="text-gray-500 text-lg mb-2">
            They might just spend the night figuring out how Usman Tariq managed to drop Jacob {`Bethell's`} catch.
          </p>
          <p className="text-gray-400 text-sm">25 Feb, 2026</p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?w=800" 
            alt="Cricket Match Action"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-16 border-t border-gray-300 pt-8">
        {[
          { title: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e3adca174f?w=300", date: "24 Feb, 2026", desc: "ECB asks franchises to be wary of discrimination." },
          { title: "Have you heard the new PSL team names, because X has and it's shocked", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300", date: "24 Feb, 2026", desc: "The Hyderabad Houston Kingsmen? The Pindiz? The Sialkot Stallionz?" },
          { title: "NZ can ride wave of support as India's 'second favourite team'", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300", date: "Updated 24 Feb, 2026", desc: "Hopefully we could turn the sea of blue into some black shirts." },
          { title: "South Africa announce eight home Tests for 2026-27", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300", date: "24 Feb, 2026", desc: "South Africa are currently in third place in the standings." },
          { title: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=300", date: "23 Feb, 2026", desc: "Secure a colossal 107-run victory, with Shimron Hetmyer blasting 85." },
          { title: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1540747913346-19e3adca174f?w=300", date: "23 Feb, 2026", desc: "England struggled against spin, says Sahibzada Farhan." }
        ].map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex gap-4 mb-3">
              <img src={item.img} className="w-24 h-24 object-cover shrink-0" />
              <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-blue-800 cursor-pointer">{item.title}</h3>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <span className="text-red-700 text-xs font-bold mr-2">Cricket</span>
              <span className="text-gray-400 text-xs">{item.date}</span>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-4 border-t-4 border-gray-300 py-8 mb-4">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-serif font-bold">In Depth</h2>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { text: "INTERVIEW: 'I could feel the trophy in my hands before the final' — Shahid Afridi on 2009 World T20 glory", img: "https://images.unsplash.com/photo-1540747913346-19e3adca174f?w=400" },
            { text: "That's not cricket: How 'creeping Hindutva' stumped sportsmanship ahead of the T20 World Cup", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400" },
            { text: "Rashid Latif on T20 World Cup squad: Too many spin-bowling all-rounders disrupt team balance", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
            { text: "Pakistan's Babar problem — and why it's not just about strike rate", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400" }
          ].map((item, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden group cursor-pointer">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-3">
                <p className="text-white text-sm font-bold leading-tight">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-4 border-t border-gray-200 py-8">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-serif font-bold">Popular</h2>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "'Our fate is not in our hands': Shaheen on T20 World Cup semi-final prospects", img: "https://images.unsplash.com/photo-1540747913346-19e3adca174f?w=400" },
            { title: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400" },
            { title: "England captain Brook says a 'shame' if Pakistan players snubbed for Hundred", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
            { title: "India battle for T20 World Cup survival after 'messing up on grand scale'", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400" }
          ].map((item, idx) => (
            <div key={idx} className="cursor-pointer group">
              <img src={item.img} className="w-full aspect-video object-cover mb-2" />
              <span className="text-red-700 font-bold text-xs uppercase block mb-1">Cricket</span>
              <h3 className="font-serif font-bold text-md leading-tight group-hover:text-blue-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
          <Footer/>
    </div>
  );
};

export default SportPage;