'use client'
import React from 'react';
import { Menu, Search } from "lucide-react";

export default function ImagesPage() {
    return (
        <main className="bg-[#fdf3f7] min-h-screen font-sans antialiased text-[#1a1a1a]">

            <header className="bg-[#eed2dc] pt-10 pb-6 px-4 md:px-6 relative">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto">
                    <button className="text-[#922a50]">
                        <Menu size={24} />
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 top-4">
                        <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-black flex items-baseline select-none">
                            IM<span className="relative inline-block -translate-y-1 scale-x-110">A</span>GES
                        </h1>
                    </div>

                    <button className="text-[#922a50]">
                        <Search size={22} />
                    </button>
                </div>

                <nav className="flex justify-start md:justify-center items-center gap-6 md:gap-10 mt-12 uppercase font-bold text-[11px] md:text-[13px] text-[#922a50] tracking-widest overflow-x-auto no-scrollbar whitespace-nowrap px-4">
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

            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 mb-20">

                    <div className="lg:col-span-1 space-y-10 order-2 lg:order-1">
                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=350&fit=crop" className="w-full h-52 md:h-44 object-cover" alt="img" />
                            <div className="text-right mt-2">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Celebrity</span>
                            </div>
                            <h2 className="text-[22px] md:text-[19px] font-black uppercase leading-[1] mt-1 text-right tracking-tight">
                                Lizzie Mcguire star Robert Carradine dies at age 71
                            </h2>
                            <p className="text-[11px] text-gray-400 mt-2 text-right uppercase font-bold tracking-tighter">Images Staff</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1460666819451-751237887ec3?w=500&h=350&fit=crop" className="w-full h-52 md:h-44 object-cover" alt="img" />
                            <div className="text-right mt-2">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                            </div>
                            <h2 className="text-[22px] md:text-[19px] font-black uppercase leading-[1] mt-1 text-right tracking-tight">
                                Zahra Mansoor’s solo show grapples with the nature of intimacy and unresolved relationships
                            </h2>
                            <p className="text-[11px] text-gray-400 mt-2 text-right uppercase font-bold tracking-tighter">Nusrat Khawaja</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 text-center order-1 lg:order-2">
                        <div className="relative group cursor-pointer overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&h=750&fit=crop" className="w-full h-[400px] md:h-[500px] object-cover" alt="img" />
                            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 rounded-xl shadow-2xl max-w-[220px] md:max-w-[280px] text-left">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200"></div>
                                    <span className="font-bold text-[10px] md:text-xs tracking-tighter">rania.</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-gray-600 leading-tight">what does that even mean 😭😭😭</p>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-4">
                            <span className="text-[#20c0eb] text-[11px] font-bold uppercase tracking-[0.2em]">Comment</span>
                            <h1 className="text-[28px] md:text-[34px] font-black uppercase leading-[0.95] mt-3 tracking-tighter">
                                Have you heard the new PSL team names, because X has and it’s shocked
                            </h1>
                            <p className="text-[#7d7d7d] text-[16px] md:text-[18px] mt-4 max-w-[550px] mx-auto font-medium leading-tight">
                                The Hyderabad Houston Kingsmen? The Pindiz? The Sialkot Stallionz? What is going on?
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-10 md:space-y-12 order-3">
                        <div className="flex gap-4 cursor-pointer items-start">
                            <div className="flex-1">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                                <h3 className="text-[15px] md:text-sm font-black uppercase leading-[1.1] mt-1 tracking-tight">
                                    BAFTA slur sparks storm as BBC faces questions over what it aired — and what it cut
                                </h3>
                                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-tighter">Images Staff | AFP</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1533488765986-dfa2a9939ca1?w=200&h=150&fit=crop" className="w-24 md:w-20 h-20 md:h-16 object-cover flex-shrink-0" alt="img" />
                        </div>

                        <div className="flex gap-4 cursor-pointer items-start">
                            <div className="flex-1">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                                <h3 className="text-[15px] md:text-sm font-black uppercase leading-[1.1] mt-1 tracking-tight">
                                    The 2026 MET Gala’s dress code is ‘Fashion is Art’
                                </h3>
                                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-tighter">Images Staff</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1541019177344-245388765986?w=200&h=150&fit=crop" className="w-24 md:w-20 h-20 md:h-16 object-cover flex-shrink-0" alt="img" />
                        </div>

                        <div className="flex gap-4 cursor-pointer items-start">
                            <div className="flex-1">
                                <span className="text-[#20c0eb] text-[10px] font-bold uppercase tracking-widest">Comment</span>
                                <h3 className="text-[15px] md:text-sm font-black uppercase leading-[1.1] mt-1 tracking-tight">
                                    The 10 unspoken rules of attending an iftar dawat
                                </h3>
                                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-tighter">Images Staff</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=150&fit=crop" className="w-24 md:w-20 h-20 md:h-16 object-cover flex-shrink-0" alt="img" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10">
                    <p className="text-center text-[10px] text-gray-400 uppercase font-bold mb-10 tracking-widest">Images Staff</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
                        <div className="md:col-span-4 group cursor-pointer">
                            <div className="text-right mb-4">
                                <span className="text-[#ff7f50] text-[11px] font-bold uppercase tracking-widest">Culture</span>
                                <h2 className="text-[32px] font-black uppercase leading-[0.9] mt-2 tracking-tighter">
                                    Why don’t you get to see any cool Pakistani indie films?
                                </h2>
                                <p className="text-[11px] text-gray-400 mt-2 font-bold uppercase">Zil E Huma</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&h=800&fit=crop" className="w-full h-[500px] object-cover grayscale brightness-50" alt="indie" />
                        </div>

                        <div className="md:col-span-8 grid grid-cols-1 gap-12">
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden mb-4">
                                    <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&h=500&fit=crop" className="w-full h-[350px] object-cover" alt="fiza" />
                                </div>
                                <div className="text-right">
                                    <span className="text-[#20c0eb] text-[11px] font-bold uppercase tracking-widest">Comment</span>
                                    <h2 className="text-[28px] md:text-[34px] font-black uppercase leading-[0.95] mt-2 tracking-tighter">
                                        Netizens need a Fiza Ali in their lives after seeing how she defended her guest on live tv
                                    </h2>
                                    <p className="text-[11px] text-gray-400 mt-2 font-bold uppercase">Images Staff</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=350&fit=crop" className="w-full h-56 object-cover mb-4" alt="zara" />
                                    <div className="text-right">
                                        <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Celebrity</span>
                                        <h2 className="text-[19px] font-black uppercase leading-[1] mt-1 tracking-tight">
                                            Zara Noor Abbas opens up about industry friendships, personal growth, and where things stand with sajal aly
                                        </h2>
                                        <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Images Staff</p>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&h=350&fit=crop" className="w-full h-56 object-cover mb-4" alt="art" />
                                    <div className="text-right">
                                        <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                                        <h2 className="text-[19px] font-black uppercase leading-[1] mt-1 tracking-tight">
                                            Select excerpts from Mohammed Hanif’s The Rebel English Academy
                                        </h2>
                                        <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Mohammed Hanif</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}