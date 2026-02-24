'use client'
import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ChevronDown } from "lucide-react";

// --- TypeScript Interfaces ---
interface NewsItemProps {
    title: string;
    desc: string;
    img: string;
    time: string;
}

interface AnalysisItemProps {
    title: string;
    text: string;
    img: string;
}

export default function BusinessPage() {
    // 1. Stock Market Data
    const stockData = [
        { company: "AGSML", price: "9.12", change: "1", per: "12.32", vol: "908,236" },
        { company: "CHBL", price: "9.48", change: "1", per: "11.79", vol: "4,738,151" },
        { company: "ITTEFAQ", price: "8.11", change: "0.77", per: "10.49", vol: "1,840,521" },
        { company: "TRSM", price: "11.17", change: "1.02", per: "10.05", vol: "1,065,592" },
        { company: "FIBLM", price: "11.52", change: "1.05", per: "10.03", vol: "204,471" },
    ];

    // 2. Sidebar Feed Data
    const sidebarNews = [
        { title: "England captain Brook says a 'shame' if Pakistan players snubbed", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
        { title: "Over 80 terrorists killed as armed forces strike 7 camps", img: "https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=100&h=100&fit=crop" },
        { title: "Nadra to issue CNICs for first-time registrants", img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=100&h=100&fit=crop" },
        { title: "‘Effective immediately’: Trump announces hike in US tariff", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=100&h=100&fit=crop" },
        { title: "Claim about Pakistan interest loans is ‘misleading’", img: "https://images.unsplash.com/photo-1611974715853-288ee1574673?w=100&h=100&fit=crop" },
        { title: "Cricket politics again", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=100&h=100&fit=crop" },
    ];

    // 3. Newspaper Grid Headlines
    const newspaperHeadlines = [
        "Index tumbles 5,478 points on security jitters", "Nepra urges completion of key NGC projects", "FBR chief's accountability sought in cigarette theft case", "Trade gap widens 42pc with nine countries to $9bn",
        "OGDCL quarterly profit slumps to Rs35bn", "Acquisition of FWBL", "The spirit of giving", "In favour of frontier bond markets",
        "Tariffs as a ladder, not a wall", "Ongoing energy transitions", "A diseased mango season", "The ecological cost of pesticides",
        "Political approach to resolving problems", "KSE 100-share index fluctuations", "Rupee report: Weekly rupee-dollar parity", "COMPANY NEWS",
        "CORPORATE WINDOW: A mirage of stability", "Working from the office", "Amazon dethrones Walmart", "Data points",
        "The US's 2025 growth rate", "Data is the new oil", "Tariff refunds", "A strategic model for global risk resilience"
    ];

    return (
        <main className="bg-white min-h-screen">
            <Header />
            <Navbar />

            <div className="max-w-[1350px] mx-auto px-4 py-8">
                
                {/* --- ROW 1: MAIN HERO GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    
                    {/* LEFT (Hero & Table) */}
                    <div className="lg:col-span-4 border-r pr-6">
                        <h1 className="text-[28px] font-serif font-bold leading-tight mb-4">Bloodbath continues as KSE-100 shreds over 1,400 points on Tuesday</h1>
                        <img src="https://images.unsplash.com/photo-1611974715853-288ee1574673?w=600&h=400&fit=crop" className="w-full h-auto mb-4 shadow-sm" alt="Stock" />
                        <p className="text-[14px] text-gray-800 font-medium mb-6 leading-snug">Despite recent sharp falls, experts classify the KSE-100's current state as a correction, not a bear market.</p>
                        
                        <div className="bg-[#94B15C] text-center py-2 text-white font-bold text-[14px] italic border border-[#94B15C]">PSX Highlights of the Day</div>
                        <table className="w-full text-[11px] text-center border border-t-0">
                            <thead className="bg-[#6D7278] text-white font-bold">
                                <tr>
                                    <th className="py-2 border-r border-white/20">Company</th><th className="py-2 border-r border-white/20">Price</th><th className="py-2 border-r border-white/20">Change %</th><th className="py-2">Volume</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-gray-700">
                                {stockData.map((row, i) => (
                                    <tr key={i} className="border-b">
                                        <td className="py-3 border-r">{row.company}</td><td className="py-3 border-r">{row.price}</td><td className="py-3 border-r text-green-700">{row.per} ▲</td><td className="py-3">{row.vol}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* CENTER (Editorial Carousel & Highlights) */}
                    <div className="lg:col-span-5 border-r px-4">
                        <div className="relative mb-6">
                            <img src="https://i.pinimg.com/736x/8f/3e/7b/8f3e7b23f5b02a2817830b567d16277d.jpg" className="w-full h-[300px] object-contain bg-orange-50/30" alt="Remittances" />
                            <div className="absolute top-4 right-4 flex gap-1"><div className="w-1.5 h-1.5 rounded-full border border-orange-400"></div><div className="w-1.5 h-1.5 rounded-full border border-orange-400"></div><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div></div>
                            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 shadow-sm"><ChevronLeft size={20} className="text-red-900"/></button>
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 shadow-sm"><ChevronRight size={20} className="text-red-900"/></button>
                        </div>
                        <h2 className="text-[22px] font-serif font-bold leading-tight mb-8">Remittances cannot replace FDI and are not enough to kick-start industrialisation</h2>
                        
                        <span className="bg-[#F18805] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest mb-6 inline-block">Highlights</span>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                            <div className="cursor-pointer group"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop" className="w-full h-[120px] object-cover mb-2" alt="H1"/><h3 className="text-[14px] font-bold font-serif leading-tight group-hover:underline">Ongoing energy transitions</h3></div>
                            <div className="cursor-pointer group"><img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=200&fit=crop" className="w-full h-[120px] object-cover mb-2" alt="H2"/><h3 className="text-[14px] font-bold font-serif leading-tight group-hover:underline">In favour of frontier bond markets</h3></div>
                        </div>
                    </div>

                    {/* RIGHT (Authors & Ad) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-[13px] font-bold border-b-2 border-black pb-2 mb-6 uppercase tracking-widest">Top Authors</h3>
                        <ol className="space-y-4 mb-10">
                            {["News Desk", "Iftikhar A. Khan", "Malik Asad", "Imtiaz Ali"].map((name, i) => (
                                <li key={i} className="flex items-baseline gap-3 group cursor-pointer">
                                    <span className="text-2xl text-gray-300 font-serif italic">{i + 1}.</span>
                                    <span className="text-[20px] font-bold group-hover:text-red-800">{name}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="bg-blue-50 p-4 border relative cursor-pointer">
                             <span className="absolute top-[-15px] left-1/2 -translate-x-1/2 text-[9px] text-gray-400">Advertisement</span>
                             <img src="https://static.pakwheels.com/2024/09/Deepal-S05-1.jpg" className="w-full h-auto" alt="Ad" />
                        </div>
                    </div>
                </div>

                {/* --- ROW 2: DETAILED NEWS FEED --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t pt-12 mb-16">
                    <div className="lg:col-span-4 space-y-10 border-r pr-6">
                        <NewsItem title="Gold falls from three-week high on profit-booking" desc="Gold prices declined by 1.2pc to $5,167.28, ending a four-session rally." img="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=300&h=200&fit=crop" time="7 Hours Ago" />
                        <NewsItem title="Pakistan attracts 79 new foreign firms" desc="Foreign participation has expanded through equity transactions." img="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=300&h=200&fit=crop" time="5 Hours Ago" />
                        <div className="bg-[#FAF7F2] p-4 border-t border-red-800">
                             <span className="text-red-800 text-[10px] font-bold uppercase mb-2 block">Branded Content</span>
                             <h4 className="font-bold font-serif text-[15px]">K&N’s SmartCooking: Mexican Nugget Shawarma</h4>
                             <img src="https://images.unsplash.com/photo-1619194472461-1209b5327242?w=200&h=120&fit=crop" className="w-full mt-2 mb-2" alt="food" />
                        </div>
                    </div>
                    
                    <div className="lg:col-span-5 border-r px-4 space-y-10">
                        <div className="text-center border-b pb-8">
                             <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-4">Advertisement</span>
                             <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=250&fit=crop" className="w-full grayscale brightness-75" alt="Climate" />
                             <h3 className="text-xl font-bold font-serif mt-4 text-[#006699]">Climate change knows no borders...</h3>
                        </div>
                        <AnalysisItem title="The spirit of giving" text="Charitable donations in Pakistan have grown faster than the broader economy." img="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=200&h=140&fit=crop" />
                        <AnalysisItem title="Ongoing energy transitions" text="A growing number of industrial units are installing behind-the-meter solar." img="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=140&fit=crop" />
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        <div className="flex border rounded overflow-hidden mb-8 h-10">
                            <button className="flex-1 bg-black text-white text-[11px] font-bold uppercase">24 Hours</button>
                            <button className="flex-1 bg-white text-black text-[11px] font-bold uppercase border-l hover:bg-gray-50">3 Days</button>
                        </div>
                        {sidebarNews.map((news, i) => (
                            <div key={i} className="flex gap-3 border-b border-gray-50 pb-4 last:border-0 group cursor-pointer">
                                <img src={news.img} className="w-[75px] h-[55px] object-cover flex-shrink-0" alt="s" />
                                <h5 className="text-[12px] font-bold leading-tight font-serif group-hover:text-red-800">{news.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ROW 3: NEWSPAPER HEADLINES GRID --- */}
                <div className="border-t border-gray-200 pt-10 mb-16">
                    <span className="bg-[#F18805] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">Newspaper</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mt-10">
                        {newspaperHeadlines.map((text, i) => (
                            <h6 key={i} className="text-[14.5px] font-serif font-bold leading-tight hover:text-red-800 cursor-pointer">{text}</h6>
                        ))}
                    </div>
                </div>

                {/* --- ROW 4: CALENDAR SECTION --- */}
                <div className="flex flex-col items-center py-20 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="border border-gray-400 p-1.5 bg-white shadow-sm"><CalendarIcon size={24} className="text-black" /></div>
                        <div className="border border-gray-400 px-6 py-2 min-w-[340px] text-gray-600 text-sm font-sans">Tuesday, February 24, 2026</div>
                    </div>
                    <div className="w-[340px] shadow-2xl rounded-lg p-6 border border-gray-100 bg-white">
                        <div className="flex justify-between items-center mb-6 px-1 text-gray-600 font-bold">
                            <ChevronLeft size={20} className="text-gray-300"/><div className="flex items-center gap-1 font-medium">February <ChevronDown size={14}/> 2026</div><ChevronRight size={20} className="text-gray-300"/>
                        </div>
                        <div className="grid grid-cols-7 text-center text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-tighter">
                            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><div key={d}>{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-y-1 text-center text-[15px]">
                            {[26,27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,1].map((day,i)=>(
                                <div key={i} className={`h-10 flex items-center justify-center cursor-pointer rounded-full transition-all
                                    ${day===24 && i > 20 ? 'bg-blue-500 text-white font-bold shadow-md' : (i < 6 || i > 33) ? 'text-gray-200' : 'text-gray-600 hover:bg-gray-100'}
                                `}>{day}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}

// --- Helper Components ---
function NewsItem({ title, desc, img, time }: NewsItemProps) {
    return (
        <div className="flex gap-4 items-start border-b border-gray-50 pb-8 last:border-0">
            <div className="flex-1">
                <h3 className="text-[19px] font-serif font-bold leading-tight hover:underline cursor-pointer">{title}</h3>
                <p className="text-[12.5px] text-gray-600 mt-2 font-serif leading-snug">{desc}</p>
                <p className="text-[9px] text-gray-400 mt-3 font-bold uppercase tracking-widest">{time}</p>
            </div>
            <img src={img} className="w-24 h-20 object-cover flex-shrink-0" alt="n" />
        </div>
    );
}

function AnalysisItem({ title, text, img }: AnalysisItemProps) {
    return (
        <div className="flex gap-6 items-start border-b border-gray-50 pb-8 last:border-0 group cursor-pointer">
             <div className="flex-1">
                <h4 className="font-bold text-[18px] font-serif leading-tight group-hover:text-red-800 transition-colors">{title}</h4>
                <p className="text-[14px] text-gray-600 mt-2 font-serif">{text}</p>
             </div>
             <img src={img} className="w-32 h-24 object-cover flex-shrink-0" alt="a" />
        </div>
    );
}