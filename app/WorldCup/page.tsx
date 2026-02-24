'use client'
import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Play } from "lucide-react";

export default function WorldCupPage() {
    return (
        <main className="bg-white min-h-screen font-sans">
            <Header />
            <Navbar />

            <div className="bg-[#000033] w-full py-4 px-4 md:px-10 flex justify-between items-center border-b border-white/10">
                <h1 className="text-white text-5xl font-serif font-bold tracking-tighter">DAWN</h1>
                <div className="flex items-center gap-4">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/2024_ICC_Men%27s_T20_World_Cup_logo.svg/1200px-2024_ICC_Men%27s_T20_World_Cup_logo.svg.png" 
                        alt="WC Logo" className="h-16 w-auto"
                    />
                    <div className="text-white leading-tight">
                        <p className="text-[11px] font-bold opacity-70 uppercase tracking-widest">ICC Men's T20</p>
                        <p className="text-2xl font-bold uppercase tracking-tighter leading-none">World Cup</p>
                        <p className="text-[10px] font-bold text-yellow-500 tracking-widest">INDIA & SRI LANKA 2026</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 py-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    <div className="lg:col-span-5">
                        <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop" className="w-full h-[400px] object-cover" alt="Main" />
                        <div className="mt-6">
                            <h2 className="text-4xl font-serif font-bold leading-tight hover:text-blue-900 cursor-pointer">
                                Sahibzada, Babar keep momentum going for Pakistan with fresh boundaries
                            </h2>
                            <p className="mt-4 text-lg text-gray-700 font-serif">Two wickets down for Green Shirts at the end of powerplay; Faheem out, Shaheen Shah Afridi back in.</p>
                            <p className="mt-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase">Updated 7 minutes ago</p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#000044] rounded-xl overflow-hidden relative shadow-2xl min-h-[520px] flex flex-col justify-between">
                        <div className="p-8 relative z-10">
                            <h3 className="text-yellow-500 text-3xl font-bold leading-none mb-6">ICC Men's T20<br/>World Cup 2026</h3>
                            <div className="inline-block border-b-2 border-white pb-1 mb-6">
                                <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Live Score</span>
                            </div>
                            <p className="text-white font-bold text-lg">Super Eights, 45th match</p>
                            <p className="text-white/80">Pakistan vs England</p>
                        </div>
                        <div className="bg-black/80 p-8 pt-12 border-t-4 border-orange-500 rounded-t-[50px]">
                            <div className="flex justify-between items-center text-center">
                                <div>
                                    <img src="https://flagcdn.com/w80/pk.png" className="w-12 mx-auto border border-white/20" alt="PAK"/>
                                    <p className="text-white font-bold mt-2">Pakistan*</p>
                                    <p className="text-white text-2xl font-bold">69/2</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-red-600 px-3 py-1 rounded-full flex items-center gap-2 mb-4 animate-pulse">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        <span className="text-white text-[10px] font-bold uppercase">Live</span>
                                    </div>
                                    <p className="text-gray-400 text-xs">1st innings</p>
                                    <p className="text-white font-bold">9.5 overs</p>
                                </div>
                                <div>
                                    <img src="https://flagcdn.com/w80/gb-eng.png" className="w-12 mx-auto border border-white/20" alt="ENG"/>
                                    <p className="text-white font-bold mt-2">England</p>
                                    <p className="text-white text-2xl font-bold">0/0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white p-6 border rounded-lg">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                            <span className="text-red-700 text-[10px] font-bold uppercase tracking-widest">Live</span>
                        </div>
                        <div className="space-y-6 relative border-l-2 border-gray-100 pl-6">
                            {[
                                { t: "7:13pm", d: "Over 9: Pakistan's score reaches 66 in a boundary-less over" },
                                { t: "7:09pm", d: "Over 8: Adil Rashid concedes 6 runs in an uneventful over" },
                                { t: "7:06pm", d: "Over 7: Sam Curran concedes 9 runs off his first over" },
                                { t: "7:06pm", d: "No sixes by Pakistan batters in powerplay" }
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[31px] top-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white ring-4 ring-white"></div>
                                    <p className="text-gray-400 text-[11px] font-bold mb-1">{item.t}</p>
                                    <p className="text-sm font-semibold leading-snug">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="bg-[#003399] inline-block px-3 py-1 mb-6">
                        <span className="text-white font-bold text-xs uppercase tracking-widest">Editor's Picks</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "T20 World Cup: How will Pakistan carry forward their bits-and-pieces campaign in the Super 8s?", author: "Rameen Salman", time: "5 hours ago", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop" },
                            { title: "Pakistan is not among the fancied sides for the T20 World Cup. But could the odds-makers be underrating our chances?", author: "News Desk", time: "2 hours ago", img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=500&h=300&fit=crop" },
                            { title: "Zimbabwe surprise as T20 World Cup Super Eights begin without Australia", author: "AFP", time: "20 Feb, 2026", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=300&fit=crop" }
                        ].map((post, i) => (
                            <div key={i}>
                                <img src={post.img} className="w-full h-[220px] object-cover mb-4" alt="pick" />
                                <h3 className="text-[19px] font-serif font-bold leading-tight hover:underline cursor-pointer">{post.title}</h3>
                                <p className="text-[11px] text-gray-500 mt-3 font-bold uppercase tracking-wider">{post.author} <span className="ml-1 opacity-50">Published about {post.time}</span></p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-1">
                        <img src="https://images.unsplash.com/photo-1508344928928-7165b67de128?w=500&h=300&fit=crop" className="w-full h-[220px] object-cover mb-4" alt="news" />
                        <h3 className="text-[19px] font-serif font-bold leading-tight">Bold calls, soft results: 5 takeaways from Pakistan’s loss to India</h3>
                        <p className="text-[11px] text-gray-500 mt-2 font-bold uppercase">Brashna Kasi <span className="opacity-50 ml-1">15 Feb, 2026</span></p>
                    </div>
                    <div className="md:col-span-1">
                        <img src="https://images.unsplash.com/photo-1593787467001-f394bb2201c1?w=500&h=300&fit=crop" className="w-full h-[220px] object-cover mb-4" alt="news" />
                        <h3 className="text-[19px] font-serif font-bold leading-tight">‘Bit of a disaster’: Pakistan assailed for poor performance after India run riot</h3>
                        <p className="text-[11px] text-gray-500 mt-2 font-bold uppercase">News Desk <span className="opacity-50 ml-1">Updated 15 Feb, 2026</span></p>
                    </div>
                    <div className="md:col-span-1 bg-black text-white p-1 relative group cursor-pointer">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1522860335819-457284b3c179?w=500&h=300&fit=crop" className="w-full h-[220px] object-cover opacity-80" alt="vid" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-red-600 rounded-2xl px-4 py-2 flex items-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play fill="white" size={24} />
                                </div>
                            </div>
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-blue-900 px-2 py-0.5 text-[10px] font-bold">
                                <span>DAWN NEWS</span>
                            </div>
                        </div>
                        <div className="p-4 bg-[#0a0a0a]">
                            <h3 className="text-[18px] font-serif font-bold leading-tight">West Indies Smash 254! 19 Sixes Record | Pakistan vs England Preview | Over & Out</h3>
                            <p className="text-[10px] text-gray-400 mt-3 font-bold uppercase">Published about 15 hours ago</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#000044] rounded-sm p-8 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/2024_ICC_Men%27s_T20_World_Cup_logo.svg/1200px-2024_ICC_Men%27s_T20_World_Cup_logo.svg.png" className="w-96" alt=""/>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
                         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/2024_ICC_Men%27s_T20_World_Cup_logo.svg/1200px-2024_ICC_Men%27s_T20_World_Cup_logo.svg.png" className="h-14" alt=""/>
                         <h2 className="text-white text-5xl font-black italic tracking-tighter">SUPER 8 STANDINGS</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <div className="bg-[#F18805] text-center py-2 text-black font-black text-xl mb-1 uppercase italic tracking-widest">Group 1</div>
                            <table className="w-full text-white text-sm font-bold">
                                <thead className="text-[11px] text-yellow-500 uppercase tracking-widest border-b border-white/20">
                                    <tr>
                                        <th className="py-3 text-left">Team</th>
                                        <th>Mat</th><th>Won</th><th>Lost</th><th>NRR</th><th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {[
                                        { t: "West Indies", f: "jm", m: 1, w: 1, l: 0, nrr: "+5.350", p: 2 },
                                        { t: "South Africa", f: "za", m: 1, w: 1, l: 0, nrr: "+3.800", p: 2 },
                                        { t: "India", f: "in", m: 1, w: 0, l: 1, nrr: "-3.800", p: 0 },
                                        { t: "Zimbabwe", f: "zw", m: 1, w: 0, l: 1, nrr: "-5.350", p: 0 }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                            <td className="py-4 text-left flex items-center gap-3">
                                                <img src={`https://flagcdn.com/w40/${row.f}.png`} className="w-6 border border-white/20" alt=""/>
                                                <span className="uppercase italic tracking-tighter text-lg">{row.t}</span>
                                            </td>
                                            <td>{row.m}</td><td>{row.w}</td><td>{row.l}</td>
                                            <td className="text-blue-300">{row.nrr}</td>
                                            <td className="text-yellow-400 text-lg">{row.p}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <div className="bg-[#F18805] text-center py-2 text-black font-black text-xl mb-1 uppercase italic tracking-widest">Group 2</div>
                            <table className="w-full text-white text-sm font-bold">
                                <thead className="text-[11px] text-yellow-500 uppercase tracking-widest border-b border-white/20">
                                    <tr>
                                        <th className="py-3 text-left">Team</th>
                                        <th>Mat</th><th>Won</th><th>Lost</th><th>NRR</th><th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {[
                                        { t: "England", f: "gb-eng", m: 1, w: 1, l: 0, nrr: "+2.550", p: 2 },
                                        { t: "New Zealand", f: "nz", m: 1, w: 0, l: 0, nrr: "0", p: 1 },
                                        { t: "Pakistan", f: "pk", m: 1, w: 0, l: 0, nrr: "0", p: 1 },
                                        { t: "Sri Lanka", f: "lk", m: 1, w: 0, l: 1, nrr: "-2.550", p: 0 }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                            <td className="py-4 text-left flex items-center gap-3">
                                                <img src={`https://flagcdn.com/w40/${row.f}.png`} className="w-6 border border-white/20" alt=""/>
                                                <span className="uppercase italic tracking-tighter text-lg">{row.t}</span>
                                            </td>
                                            <td>{row.m}</td><td>{row.w}</td><td>{row.l}</td>
                                            <td className="text-blue-300">{row.nrr}</td>
                                            <td className="text-yellow-400 text-lg">{row.p}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <div className="bg-gray-700 inline-block px-3 py-1 mb-8">
                        <span className="text-white font-bold text-xs uppercase tracking-widest">Latest Stories</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Sahibzada hopes Pakistan players will feature in The Hundred", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "T20 World Cup: Pakistan warn England's flaky batting to expect a trial by spin", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "NZ can ride wave of support as India’s ‘second favourite team’", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "West Indies thrash Zimbabwe in T20 World Cup clash after piling up 254-6", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "India battle for T20 World Cup survival after ‘messing up on grand scale’", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },
                            { t: "Australia face tough questions after flop campaign", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop" },
                            { t: "West Indies wary of Zimbabwe’s Muzarabani", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" },
                            { t: "Captain Brook says England ready against Sri Lanka...", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop" },

                        ].map((post, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="overflow-hidden mb-3">
                                    <img src={post.img} className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform" alt="story" />
                                </div>
                                <h4 className="text-[16px] font-serif font-bold leading-tight group-hover:text-red-700">{post.t}</h4>
                                <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider">AFP <span className="opacity-50 ml-1">Published a day ago</span></p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}