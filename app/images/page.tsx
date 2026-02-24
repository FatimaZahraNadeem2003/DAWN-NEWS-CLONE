'use client'
import React from 'react';
import { Menu, Search } from "lucide-react";

export default function ImagesPage() {
    return (
        <main className="bg-[#fdf3f7] min-h-screen font-sans antialiased text-[#1a1a1a]">
            
            <header className="bg-[#eed2dc] pt-10 pb-6 px-6 relative">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto">
                    <button className="text-[#922a50]">
                        <Menu size={24} />
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 top-4">
                        <h1 className="text-7xl font-serif tracking-tighter text-black flex items-baseline">
                            IM<span className="relative inline-block -translate-y-1 scale-x-110">A</span>GES
                        </h1>
                    </div>

                    <button className="text-[#922a50]">
                        <Search size={22} />
                    </button>
                </div>

                <nav className="flex justify-center items-center gap-10 mt-12 uppercase font-bold text-[13px] text-[#922a50] tracking-widest">
                    <span className="cursor-pointer hover:opacity-70">Latest</span>
                    <span className="cursor-pointer hover:opacity-70">Celebrity</span>
                    <span className="cursor-pointer hover:opacity-70">Culture</span>
                    <span className="cursor-pointer hover:opacity-70">Comment</span>
                    <span className="cursor-pointer hover:opacity-70">Local</span>
                    <span className="cursor-pointer italic font-serif text-lg lowercase tracking-normal flex items-center">
                        <span className="opacity-60 mr-0.5">H</span>er.
                    </span>
                </nav>
            </header>

            <div className="max-w-[1400px] mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-1 space-y-10">
                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop" className="w-full h-44 object-cover" alt="Robert" />
                            <div className="text-right mt-2">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Celebrity</span>
                            </div>
                            <h2 className="text-[19px] font-black uppercase leading-[1.1] mt-1 text-right tracking-tight">
                                Lizzie Mcguire star Robert Carradine dies at age 71
                            </h2>
                            <p className="text-[11px] text-gray-400 mt-2 text-right uppercase font-bold">Images Staff</p>
                        </div>

                        <div className="group cursor-pointer pt-4">
                            <img src="https://images.unsplash.com/photo-1460666819451-751237887ec3?w=400&h=300&fit=crop" className="w-full h-44 object-cover" alt="Art" />
                            <div className="text-right mt-2">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                            </div>
                            <h2 className="text-[19px] font-black uppercase leading-[1.1] mt-1 text-right tracking-tight">
                                Zahra Mansoor’s solo show grapples with the nature of intimacy and unresolved relationships
                            </h2>
                            <p className="text-[11px] text-gray-400 mt-2 text-right uppercase font-bold">Nusrat Khawaja</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 text-center">
                        <div className="relative group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop" className="w-full h-[500px] object-cover" alt="Graffiti" />
                            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-2xl max-w-[280px] text-left">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                                    <span className="font-bold text-xs">rania.</span>
                                </div>
                                <p className="text-xs text-gray-600">what does that even mean 😭😭😭</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-[#20c0eb] text-[11px] font-bold uppercase tracking-[0.2em]">Comment</span>
                            <h1 className="text-[34px] font-black uppercase leading-[0.95] mt-3 tracking-tighter">
                                Have you heard the new PSL team names, because X has and it’s shocked
                            </h1>
                            <p className="text-[#7d7d7d] text-lg mt-4 max-w-[550px] mx-auto font-medium leading-tight">
                                The Hyderabad Houston Kingsmen? The Pindiz? The Sialkot Stallionz? What is going on?
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-12">
                        <div className="flex gap-4 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                                <h3 className="text-sm font-black uppercase leading-tight mt-1 tracking-tight">
                                    BAFTA slur sparks storm as BBC faces questions over what it aired — and what it cut
                                </h3>
                                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Images Staff | AFP</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1533488765986-dfa2a9939ca1?w=100&h=100&fit=crop" className="w-20 h-16 object-cover" alt="Bafta" />
                        </div>

                        <div className="flex gap-4 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                                <h3 className="text-sm font-black uppercase leading-tight mt-1 tracking-tight">
                                    The 2026 MET Gala’s dress code is ‘Fashion is Art’
                                </h3>
                                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Images Staff</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1541019177344-245388765986?w=100&h=100&fit=crop" className="w-20 h-16 object-cover" alt="Met" />
                        </div>

                        <div className="flex gap-4 cursor-pointer">
                            <div className="flex-1">
                                <span className="text-[#20c0eb] text-[10px] font-bold uppercase tracking-widest">Comment</span>
                                <h3 className="text-sm font-black uppercase leading-tight mt-1 tracking-tight">
                                    The 10 unspoken rules of attending an iftar dawat
                                </h3>
                                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Images Staff</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop" className="w-20 h-16 object-cover" alt="Iftar" />
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}