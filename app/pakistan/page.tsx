'use client'
import React, { useState } from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ChevronDown } from "lucide-react";

export default function PakistanPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <Navbar />

            <div className="max-w-[1350px] mx-auto px-4 py-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                    
                    <div className="lg:col-span-5 border-r border-gray-200 pr-6">
                        <h1 className="text-3xl font-serif font-bold leading-tight mb-4 hover:underline cursor-pointer">
                            PTI objects to ‘secrecy’ after Imran Khan undergoes follow-up treatment for eye ailment at Pims
                        </h1>
                        <img src="https://images.unsplash.com/photo-1576089238240-df71df4191fe?w=600&h=400&fit=crop" className="w-full h-auto mb-4" alt="Imran Khan" />
                        <p className="text-sm text-gray-800 font-medium mb-4">Doctor terms ex-PM “clinically stable”; law minister says process carried out at night due to {`"security`}, operational {`considerations"`}; sisters again head to Adiala.</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">Updated about 2 hours ago</p>
                        
                        <div className="border-t pt-4">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Related</span>
                            <ul className="mt-3 space-y-4">
                                <li className="text-[15px] font-serif hover:text-red-800 cursor-pointer">Imran Khan underwent {`'20-minute`} medical {`procedure'`} at {`Islamabad's`} Pims, confirms info minister</li>
                                <li className="text-[15px] font-serif border-t pt-4 hover:text-red-800 cursor-pointer">Former cricket captains, including {`India's`} Gavaskar and Kapil, issue humanitarian appeal for jailed Imran</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-4 border-r border-gray-200 pr-6">
                        <div className="relative group mb-6">
                            <img src="https://images.unsplash.com/photo-1579913741631-f88610bb476c?w=600&h=400&fit=crop" className="w-full h-[250px] object-cover" alt="Border" />
                            <div className="absolute top-4 right-4 flex gap-1">
                                <div className="w-2 h-2 rounded-full border border-white"></div>
                                <div className="w-2 h-2 rounded-full border border-white"></div>
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                            <button className="absolute left-0 top-1/2 bg-white/90 p-1"><ChevronLeft size={20}/></button>
                            <button className="absolute right-0 top-1/2 bg-white/90 p-1"><ChevronRight size={20}/></button>
                        </div>
                        <h2 className="text-2xl font-serif font-bold leading-tight mb-6">Editorial: In the long term, the escalation of hostilities is in the interest of neither Pakistan nor Afghanistan</h2>
                        
                        <div className="mt-10">
                            <span className="bg-[#94B15C] text-white text-[10px] font-bold px-2 py-0.5 uppercase">Highlights</span>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=150&fit=crop" className="w-full h-[100px] object-cover mb-2" alt="pindi" />
                                    <p className="text-[13px] font-bold leading-tight font-serif">Have you heard the new PSL team names, because X has and {`it's`} shocked</p>
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=150&fit=crop" className="w-full h-[100px] object-cover mb-2" alt="art" />
                                    <p className="text-[13px] font-bold leading-tight font-serif">Zahra Mansoor’s solo show grapples with the nature of intimacy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="bg-[#E4222D] p-4 text-white relative mb-8">
                            <div className="flex justify-between items-start">
                                <p className="text-3xl font-black italic tracking-tighter uppercase leading-none">Ramadan<br/>Mubarak</p>
                                <img src="https://logos-world.net/wp-content/uploads/2021/08/KNs-Logo.png" className="w-12 brightness-200" alt="KNs"/>
                            </div>
                            <div className="bg-white text-[#E4222D] rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold absolute top-12 right-2 border-4 border-[#E4222D] shadow-lg">
                                <span className="text-[10px] leading-none">SAVE</span>
                                <span className="text-[12px] leading-none">UP TO</span>
                                <span className="text-xl">RS.200</span>
                            </div>
                            <div className="mt-16 space-y-1">
                                <p className="text-[10px] font-bold opacity-80 uppercase">Free Home Delivery</p>
                                <p className="text-lg font-bold">0800-11156</p>
                            </div>
                        </div>

                        <h3 className="text-[13px] font-bold border-b-2 border-black pb-2 mb-6 uppercase tracking-widest">Top Authors</h3>
                        <ol className="space-y-4">
                            {["News Desk", "Iftikhar A. Khan", "Malik Asad", "Imtiaz Ali", "Syed Irfan Raza"].map((name, i) => (
                                <li key={i} className="flex items-baseline gap-3 group cursor-pointer">
                                    <span className="text-2xl text-gray-300 font-serif italic">{i + 1}.</span>
                                    <span className="text-[22px] font-bold group-hover:text-red-800">{name}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:col-span-12 lg:grid-cols-12 gap-8 mb-10">
                    
                    <div className="lg:col-span-4 space-y-10 border-r pr-6">
                        <div className="flex gap-4">
                            <img src="https://images.unsplash.com/photo-1545147388-58309485740a?w=120&h=80&fit=crop" className="w-24 h-20 object-cover" alt="news" />
                            <div>
                                <h4 className="font-bold text-[16px] font-serif leading-tight">Police constable martyred as unidentified assailants open fire in Wana</h4>
                                <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">34 Minutes Ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4 border-t pt-8">
                            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=80&fit=crop" className="w-24 h-20 object-cover" alt="news" />
                            <div>
                                <h4 className="font-bold text-[16px] font-serif leading-tight">DSP among 6 police personnel martyred in Kohat terrorist attack</h4>
                                <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Updated 10 Minutes Ago</p>
                            </div>
                        </div>

                        <div className="bg-[#FAF7F2] p-4 border-t-2 border-red-800 mt-10">
                             <span className="text-red-700 text-[10px] font-bold uppercase tracking-widest">Branded Content</span>
                             <h4 className="font-bold font-serif text-[18px] mt-3">Faisal Town Group partners with Punjab govt for 500,000 Tree Plantation Drive</h4>
                             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop" className="w-full mt-3 mb-2" alt="branded" />
                             <p className="text-[13px] text-gray-600">The initiative sets a target of planting 500,000 saplings during 2026...</p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-10 border-r pr-6">
                         <div className="grid grid-cols-2 gap-8">
                             <div>
                                 <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=150&fit=crop" className="w-full h-[120px] object-cover mb-2" alt="food" />
                                 <p className="text-[14px] font-bold font-serif leading-tight">The 10 unspoken rules of attending an iftar dawat</p>
                             </div>
                             <div>
                                 <img src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=200&h=150&fit=crop" className="w-full h-[120px] object-cover mb-2" alt="food" />
                                 <p className="text-[14px] font-bold font-serif leading-tight">Zara Noor Abbas opens up about industry friendships, personal growth</p>
                             </div>
                         </div>
                         <div className="flex justify-center my-10 border-y py-6">
                             <div className="bg-blue-50 p-4 w-full text-center">
                                 <span className="text-[10px] text-gray-400 uppercase">Advertisement</span>
                                 <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=100&fit=crop" className="w-full h-auto mt-2" alt="Ad climate" />
                             </div>
                         </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="flex border rounded overflow-hidden mb-6 h-10">
                            <button className="flex-1 bg-black text-white text-[11px] font-bold uppercase">24 Hours</button>
                            <button className="flex-1 bg-white text-black text-[11px] font-bold uppercase border-l">3 Days</button>
                        </div>
                        <div className="space-y-5">
                            {[
                                "England captain Brook says a 'shame' if Pakistan players snubbed",
                                "Over 80 terrorists killed as armed forces strike 7 camps",
                                "Nadra to issue CNICs for first-time registrants without birth certificate",
                                "‘Effective immediately’: Trump announces hike in US global tariff rate",
                                "Claim about Pakistan paying interest on external loans is misleading"
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 border-b pb-4 last:border-0 group cursor-pointer">
                                    <div className="w-16 h-12 bg-gray-100 flex-shrink-0"></div>
                                    <h5 className="text-[13px] font-bold leading-tight font-serif group-hover:text-red-800">{text}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t pt-10 mb-16">
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        
                        <div>
                            <span className="bg-[#60833F] text-white text-[10px] font-bold px-2 py-0.5 uppercase mb-4 inline-block">Sindh</span>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-[18px] font-serif leading-tight mb-3">CM Sindh asks mayor to complete two key underpasses in a month</h4>
                                    <div className="flex gap-4">
                                        <img src="https://images.unsplash.com/photo-1545147388-58309485740a?w=120&h=80&fit=crop" className="w-24 h-20 object-cover" alt="sindh" />
                                        <p className="text-[13px] text-gray-700">Rs38.83bn allocated for Karachi, Rs13.15bn spent so far during current financial year, Murad told.</p>
                                    </div>
                                </div>
                                <div className="border-t pt-6">
                                    <h4 className="font-bold text-[18px] font-serif leading-tight mb-2">No relief for consumers as official efforts fail, food prices soar in Karachi</h4>
                                    <div className="flex gap-4">
                                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=80&fit=crop" className="w-24 h-20 object-cover" alt="sindh" />
                                        <p className="text-[13px] text-gray-700">Fruits, vegetables and meat are being sold at prices set by vendors at their own whims.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="bg-[#60833F] text-white text-[10px] font-bold px-2 py-0.5 uppercase mb-4 inline-block">Punjab</span>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-[18px] font-serif leading-tight mb-3">PA set to pass law to strengthen safeguards against property grab</h4>
                                    <div className="flex gap-4">
                                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=80&fit=crop" className="w-24 h-20 object-cover" alt="punjab" />
                                        <p className="text-[13px] text-gray-700">District-level tribunals headed by ASJs mandated to decide cases within 30 days.</p>
                                    </div>
                                </div>
                                <div className="border-t pt-6">
                                    <h4 className="font-bold text-[18px] font-serif leading-tight mb-2">Court orders to unfreeze YouTuber Ducky Bhai’s bank accounts</h4>
                                    <div className="flex gap-4">
                                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=120&h=80&fit=crop" className="w-24 h-20 object-cover" alt="punjab" />
                                        <p className="text-[13px] text-gray-700">Magistrate Naeem Wattoo also granted him limited permission to upload videos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 border-l pl-6">
                        <h3 className="text-[13px] font-bold border-b pb-2 mb-6 uppercase tracking-widest">Top Reads Today</h3>
                        <div className="relative group mb-4">
                             <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=500&fit=crop" className="w-full h-[350px] object-cover" alt="top read" />
                             <button className="absolute left-[-15px] top-1/2 bg-black text-white rounded-full p-1 shadow-xl"><ChevronLeft size={16}/></button>
                             <button className="absolute right-[-15px] top-1/2 bg-black text-white rounded-full p-1 shadow-xl"><ChevronRight size={16}/></button>
                             <div className="flex justify-center gap-1.5 mt-4">
                                {[1,2,3,4,5].map(d => <div key={d} className={`w-1.5 h-1.5 rounded-full ${d===4?'bg-red-800':'bg-gray-300'}`}></div>)}
                             </div>
                        </div>
                        <p className="text-[16px] font-bold font-serif leading-tight text-center px-2">T20 World Cup: How will Pakistan carry forward their bits-and-pieces campaign?</p>
                        
                        <div className="mt-12 border-t pt-8 flex justify-center">
                            <img src="https://i.pinimg.com/736x/8f/3e/7b/8f3e7b23f5b02a2817830b567d16277d.jpg" className="w-full opacity-80" alt="cartoon" />
                        </div>
                    </div>
                </div>

                <div className="border-y py-10 mb-16">
                    <span className="bg-[#60833F] text-white text-[10px] font-bold px-2 py-0.5 uppercase mb-6 inline-block">Newspaper</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                        {[
                            "Imran receives follow-up eye treatment at PIMS",
                            "‘Karachi province’ debate spills into upper house",
                            "Secretaries warned of contempt in missing person case",
                            "ECP to hear PB-21 plea",
                            "‘Suicide bomber’ among four terrorists killed in Pishin: ISPR",
                            "IHC larger bench rules CJ is ‘sole master of roster’",
                            "Opposition demands immediate scheduling of Imran’s cases",
                            "AJK to launch 5G from March 10, PM Rathore says",
                            "Balochistan lawmakers raise alarm over low gas, power issues",
                            "Two Afghan women among eight killed in Panjgur shootings",
                            "Senate to take up 46-point agenda in today’s sitting",
                            "Parties ready to file nominations for NA-256 by-polls"
                        ].map((headline, i) => (
                            <h6 key={i} className="text-[15px] font-serif font-bold leading-tight hover:text-red-800 cursor-pointer">{headline}</h6>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center py-10 border-t">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="border border-gray-400 p-1 rounded-sm"><CalendarIcon size={20} /></div>
                        <div className="border border-gray-400 px-4 py-1.5 min-w-[300px] text-sm text-gray-600">Tuesday, February 24, 2026</div>
                    </div>
                    <div className="w-[320px] shadow-2xl rounded-lg p-5 border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <ChevronLeft size={18} className="text-gray-300"/>
                            <div className="flex items-center gap-2 text-gray-600 font-medium">February <ChevronDown size={14}/> 2026</div>
                            <ChevronRight size={18} className="text-gray-300"/>
                        </div>
                        <div className="grid grid-cols-7 text-center text-[12px] font-bold text-gray-500 mb-4">
                            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><div key={d}>{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-y-1">
                             {[26,27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,1].map((day,i)=>(
                                 <div key={i} className={`h-9 flex items-center justify-center text-sm cursor-pointer
                                    ${day===24 && i > 10 ? 'bg-blue-500 text-white rounded-full shadow-lg font-bold' : 
                                      (i < 6 || (day < 10 && i > 25)) ? 'text-gray-200' : 'text-gray-600 hover:bg-gray-100 rounded-full'}
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