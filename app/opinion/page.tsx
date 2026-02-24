'use client'
import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ChevronDown } from "lucide-react";

// --- TypeScript Interfaces ---
interface SectionItemProps {
    title: string;
    text: string;
    border?: boolean;
}

interface GridItemProps {
    img: string;
    title: string;
    desc: string;
    author: string;
    border?: boolean;
}

export default function OpinionPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <Navbar />

            <div className="max-w-[1300px] mx-auto px-4 py-10">
                
                {/* --- 1. OPINION TITLE --- */}
                <h1 className="text-5xl font-serif font-bold text-black border-b border-gray-100 pb-4 mb-20">
                    Opinion
                </h1>

                {/* --- 2. MAIN FEATURE (Arifa Noor) --- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-24 px-10">
                    <div className="flex-1 text-center md:text-left order-2 md:order-1">
                        <h2 className="text-[48px] font-serif font-bold leading-tight mb-8">Up in the air</h2>
                        <div className="max-w-[500px] mx-auto md:mx-0">
                            <p className="text-[22px] font-serif leading-relaxed text-gray-800 italic">
                                Much of the Basant goodwill has been squandered by news of an unnecessary expense.
                            </p>
                            <p className="mt-6 text-[18px] font-bold font-sans tracking-tight uppercase">Arifa Noor</p>
                        </div>
                    </div>
                    <div className="relative order-1 md:order-2">
                        <div className="absolute top-5 left-5 w-full h-full bg-[#BBBBBB]"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=450&fit=crop" 
                            className="relative z-10 w-[300px] h-[350px] object-cover filter grayscale border-[6px] border-white shadow-sm" 
                            alt="Arifa Noor" 
                        />
                    </div>
                </div>

                {/* --- 3. OPINION GRID (3 Grayscale items) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-100 pt-16 mb-10">
                    <OpinionGridItem 
                        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                        title="Addressing Trump’s curiosity"
                        desc="Trump and Witkoff should be able to understand Iran by simply reading about the life of American peace activist Rachel Corrie."
                        author="Jawed Naqvi"
                    />
                    <OpinionGridItem 
                        img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                        title="Eye for an eye"
                        desc="Some physical features are stereotyped in history."
                        author="Shahzad Sharjeel"
                        border
                    />
                    <OpinionGridItem 
                        img="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                        title="Faith of voters"
                        desc="A mature democracy does not fear identity."
                        author="Taha Ahmed"
                        border
                    />
                </div>
                <div className="flex justify-end pr-10 mb-20"><button className="text-[#CC0000] text-[13px] font-bold uppercase hover:underline">Read More</button></div>

                {/* --- 4. EDITORIAL SECTION --- */}
                <div className="border-t border-gray-200 pt-10">
                    <h2 className="text-[48px] font-serif font-bold text-black mb-10">Editorial</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-100 pt-12 mb-20">
                        <SimpleTextItem title="Afghan strikes" text="IN the wake of the recent wave of terrorist attacks targeting Pakistan, with most of the atrocities linked to ..." />
                        <SimpleTextItem title="Tug of war" text="THE timing may be questioned, but the issue is not new. The PPP and the MQM-P are once again engaging in their old..." border />
                        <SimpleTextItem title="Easier CNIC access" text="NADRA’S decision to issue CNICs to first-time applicants without requiring them to produce a birth certificate is ..." border />
                    </div>
                </div>

                {/* --- 5. BRANDED CONTENT (K&N's Mexican Shawarma) --- */}
                <div className="bg-[#FAF7F2] p-8 border-t border-[#8B0000] mb-24">
                    <span className="text-[#8B0000] text-[10px] font-bold uppercase tracking-widest block mb-6">Branded Content</span>
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <img src="https://images.unsplash.com/photo-1619194472461-1209b5327242?w=600&h=400&fit=crop" className="md:w-[480px] h-auto" alt="Shawarma" />
                        <div>
                            <h3 className="text-[24px] font-serif font-bold leading-tight mb-4">K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma</h3>
                            <p className="text-[16px] font-serif text-gray-700 leading-relaxed">A hearty Mexican style nugget shawarma wrapped in warm tortillas with creamy sour cream fresh salsa sautéed vegetables and crispy fries for a bold and satisfying bite.</p>
                        </div>
                    </div>
                </div>

                {/* --- 6. ANALYSIS & COMMENT --- */}
                <div className="mb-24">
                    <h2 className="text-[48px] font-serif font-bold text-black border-b pb-4 mb-12">Analysis & Comment</h2>
                    <div className="flex flex-col md:flex-row items-center gap-16 px-6">
                        <div className="md:w-5/12 text-center md:text-left">
                            <h3 className="text-[42px] font-serif font-bold leading-tight mb-8">A jolt that may trip K-Electric</h3>
                            <p className="text-[20px] font-serif text-gray-800 leading-relaxed mb-6 italic">Nepra’s surprise tariff cut may ripple far beyond Karachi’s power grid as KE’s profits sink.</p>
                            <p className="text-[18px] font-bold font-sans">Nasir Jamal</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1545147388-58309485740a?w=800&h=450&fit=crop" className="md:w-7/12 grayscale brightness-90" alt="KE" />
                    </div>
                </div>

                {/* --- 7. ARTICLE GRID (Taliban/Water flow) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t pt-16 mb-24">
                    <div className="pr-8 border-r pb-12">
                        <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=240&fit=crop" className="w-full h-[220px] object-cover mb-6" alt="Taliban" />
                        <h3 className="text-[24px] font-serif font-bold leading-tight mb-4">Taliban seek quid pro quo from US</h3>
                        <p className="text-[16px] font-serif text-gray-700">Kabul is now looking to secure concessions before complying with the Trump administration’s wishes.</p>
                    </div>
                    <div className="px-8 border-r pb-12">
                        <img src="https://images.unsplash.com/photo-1545147388-58309485740a?w=400&h=240&fit=crop" className="w-full h-[220px] object-cover mb-6" alt="Water" />
                        <h3 className="text-[24px] font-serif font-bold leading-tight mb-4">Sindh and Punjab at odds over water data</h3>
                        <p className="text-[16px] font-serif text-gray-700">Sindh officials claim discrepancies in data shared by Punjab authorities; Punjab seeks proof.</p>
                    </div>
                    <div className="pl-8 pb-12">
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop" className="w-full h-[220px] object-cover mb-6" alt="Breaching" />
                        <h3 className="text-[24px] font-serif font-bold leading-tight mb-4">Why breaching is ‘not an option’ for Sindh</h3>
                        <p className="text-[16px] font-serif text-gray-700">Irrigation minister says Punjab’s strategy can’t be emulated downstream due to topography.</p>
                    </div>
                </div>

                {/* --- 8. CARTOON --- */}
                <div className="border-t pt-10 mb-24">
                    <h2 className="text-[48px] font-serif font-bold mb-10">Cartoon</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y py-10">
                        <div className="pr-8 border-r flex justify-center h-[280px]"><img src="https://i.pinimg.com/736x/8f/3e/7b/8f3e7b23f5b02a2817830b567d16277d.jpg" className="h-full grayscale opacity-80" alt="C1"/></div>
                        <div className="px-8 border-r flex justify-center h-[280px]"><img src="https://i.pinimg.com/736x/8f/3e/7b/8f3e7b23f5b02a2817830b567d16277d.jpg" className="h-full grayscale opacity-80" alt="C2"/></div>
                        <div className="pl-8 flex justify-center h-[280px]"><img src="https://i.pinimg.com/736x/8f/3e/7b/8f3e7b23f5b02a2817830b567d16277d.jpg" className="h-full grayscale opacity-80" alt="C3"/></div>
                    </div>
                </div>

                {/* --- 9. LETTERS GRID (6 Columns) --- */}
                <div className="mb-24">
                    <h2 className="text-[48px] font-serif font-bold mb-10">Letters</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 border-t pt-12">
                        <LetterItem title="Battery plants" text="PAKISTAN plans to introduce a National Lithium-Ion Battery Policy..." />
                        <LetterItem title="Unnecessary checks" text="OVERSEAS Pakistanis play a crucial role in remittances..." border />
                        <LetterItem title="Fire experts" text="THIS is with reference to the report of Gul Plaza fire..." border />
                        <LetterItem title="Water springs" text="THE abrupt shortage of water in Buner calls for attention..." border />
                        <LetterItem title="Revolution" text="ON Jan 5, while on my way to market, I saw roads cleaned..." border />
                        <LetterItem title="Peace Music" text="PEACE THROUGH MUSIC: I want to highlight a group's effort..." border />
                    </div>
                </div>

                {/* --- 10. 50 YEARS AGO --- */}
                <div className="border-t pt-10">
                    <h2 className="text-[48px] font-serif font-bold mb-10">50 Years Ago</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 border-t pt-12">
                        <VoiceItem title="1976: Pakistan-BD trade" text="ISLAMABAD: The Federal Commerce Minister Mir Afzal Khan today said..." />
                        <VoiceItem title="1976: ‘No guerrilla war’" text="STOCKHOLM: Prime Minister Zulfikar Ali Bhutto reiterated tonight..." border />
                        <VoiceItem title="1976: ‘Democracy is goal’" text="STOCKHOLM: Prime Minister Zulfikar Ali Bhutto declared democracy..." border />
                    </div>
                </div>

                {/* --- 11. CALENDAR --- */}
                <div className="flex flex-col items-center py-20 border-t mt-20">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="border border-gray-400 p-2 bg-white"><CalendarIcon size={24}/></div>
                        <div className="border border-gray-400 px-6 py-2 min-w-[340px] text-gray-600 font-sans">Tuesday, February 24, 2026</div>
                    </div>
                    <div className="w-[340px] shadow-2xl rounded-lg p-6 border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <ChevronLeft className="text-gray-300"/><span className="font-bold text-gray-700">February 2026</span><ChevronRight className="text-gray-300"/>
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 text-center text-sm font-medium">
                            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><div key={d} className="text-gray-400 text-xs font-bold">{d}</div>)}
                            {Array.from({length: 28}, (_, i) => i + 1).map(day => (
                                <div key={day} className={`h-9 flex items-center justify-center cursor-pointer transition-all ${day === 24 ? 'bg-[#5D9CEC] text-white rounded-full shadow-lg font-bold' : 'hover:bg-gray-100 text-gray-600'}`}>
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}

// --- Helper Components with TS Props ---

function OpinionGridItem({ img, title, desc, author, border }: GridItemProps) {
    return (
        <div className={`px-8 ${border ? 'md:border-l border-gray-200' : ''} pb-12`}>
            <div className="relative mb-14 w-fit mx-auto md:mx-0">
                <div className="absolute top-4 left-4 w-full h-full bg-[#BBBBBB]"></div>
                <img src={img} className="relative z-10 w-[180px] h-[180px] object-cover filter grayscale border-[4px] border-white" alt={author} />
            </div>
            <h3 className="text-[26px] font-serif font-bold leading-tight mb-4 hover:underline cursor-pointer">{title}</h3>
            <p className="text-[16px] font-serif text-gray-700 leading-snug mb-6">{desc}</p>
            <p className="font-bold text-[16px] uppercase tracking-tighter">{author}</p>
        </div>
    );
}

function SimpleTextItem({ title, text, border }: SectionItemProps) {
    return (
        <div className={`pb-10 ${border ? 'md:border-l border-gray-200 md:px-10' : 'pr-10'}`}>
            <h3 className="text-[24px] font-serif font-bold leading-tight mb-4 hover:underline cursor-pointer">{title}</h3>
            <p className="text-[17px] font-serif text-gray-800 leading-relaxed">{text}</p>
        </div>
    );
}

function LetterItem({ title, text, border }: SectionItemProps) {
    return (
        <div className={`px-4 pb-12 ${border ? 'md:border-l border-gray-200' : ''}`}>
            <h4 className="text-[18px] font-serif font-bold leading-tight mb-4 hover:text-red-800 cursor-pointer">{title}</h4>
            <p className="text-[14px] font-serif text-gray-800 leading-relaxed">{text}</p>
        </div>
    );
}

function VoiceItem({ title, text, border }: SectionItemProps) {
    return (
        <div className={`pb-10 ${border ? 'md:border-l border-gray-200 md:px-10' : 'pr-10'}`}>
            <h4 className="text-[20px] font-serif font-bold leading-tight mb-4">{title}</h4>
            <p className="text-[16px] font-serif text-gray-800 leading-relaxed">{text}</p>
        </div>
    );
}