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
                            <div className="text-right mt-2"><span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Celebrity</span></div>
                            <h2 className="text-[22px] md:text-[19px] font-black uppercase leading-[1] mt-1 text-right tracking-tight">Lizzie Mcguire star Robert Carradine dies at age 71</h2>
                            <p className="text-[11px] text-gray-400 mt-2 text-right uppercase font-bold tracking-tighter">Images Staff</p>
                        </div>
                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1460666819451-751237887ec3?w=500&h=350&fit=crop" className="w-full h-52 md:h-44 object-cover" alt="img" />
                            <div className="text-right mt-2"><span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span></div>
                            <h2 className="text-[22px] md:text-[19px] font-black uppercase leading-[1] mt-1 text-right tracking-tight">Zahra Mansoor’s solo show grapples with intimacy</h2>
                            <p className="text-[11px] text-gray-400 mt-2 text-right uppercase font-bold tracking-tighter">Nusrat Khawaja</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 text-center order-1 lg:order-2">
                        <div className="relative group cursor-pointer overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&h=750&fit=crop" className="w-full h-[400px] md:h-[500px] object-cover" alt="img" />
                            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-2xl max-w-[220px] text-left">
                                <p className="text-[10px] md:text-xs text-gray-600 leading-tight">what does that even mean 😭😭😭</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="text-[#20c0eb] text-[11px] font-bold uppercase tracking-[0.2em]">Comment</span>
                            <h1 className="text-[28px] md:text-[34px] font-black uppercase leading-[0.95] mt-3 tracking-tighter">Have you heard the new PSL team names, because X has and it’s shocked</h1>
                        </div>
                    </div>

                    <div className="lg:col-span-1 space-y-10 order-3">
                        <div className="flex gap-4 cursor-pointer items-start">
                            <div className="flex-1">
                                <span className="text-[#ff7f50] text-[10px] font-bold uppercase tracking-widest">Culture</span>
                                <h3 className="text-[15px] font-black uppercase leading-[1.1] mt-1">BAFTA slur sparks storm as BBC faces questions</h3>
                            </div>
                            <img src="https://images.unsplash.com/photo-1533488765986-dfa2a9939ca1?w=200&h=150&fit=crop" className="w-24 h-20 object-cover flex-shrink-0" alt="img" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                        <div className="md:col-span-4 group cursor-pointer">
                            <div className="text-right mb-4">
                                <span className="text-[#ff7f50] text-[11px] font-bold uppercase tracking-widest">Culture</span>
                                <h2 className="text-[32px] font-black uppercase leading-[0.9] mt-2 tracking-tighter">Why don’t you get to see any cool Pakistani indie films?</h2>
                            </div>
                            <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&h=800&fit=crop" className="w-full h-[450px] object-cover grayscale brightness-50" alt="indie" />
                        </div>
                        <div className="md:col-span-8 space-y-12">
                            <div className="group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&h=500&fit=crop" className="w-full h-[320px] object-cover mb-4" alt="fiza" />
                                <div className="text-right">
                                    <span className="text-[#20c0eb] text-[11px] font-bold uppercase tracking-widest">Comment</span>
                                    <h2 className="text-[28px] md:text-[34px] font-black uppercase leading-[0.95] mt-2 tracking-tighter">Netizens need a Fiza Ali in their lives</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="gaza" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Culture</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">Palestinian-Syrian director’s Gaza ‘Genocide’ comment prompts walkout</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">Reuters</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1546519156-d81a3ae9729d?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="hoops" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Culture</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">Stephen Curry’s GOAT hoops past Wuthering Heights to top North American box office</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">AFP</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1514302240736-b1fee5985889?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="bafta" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Culture</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">One battle after another wins big at Britain’s BAFTA film awards</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">Reuters</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="ai" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Culture</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">French cinema stars warn AI is ‘plundering’ industry</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">AFP</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="lyari" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Culture</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">The heart of Lyari lives on through the quiet strength of ammas sitting on doorsteps</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">Hazaran Rahim Dad</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1619194472461-1209b5327242?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="food" />
                            <span className="text-[#14b8a6] text-[10px] font-bold uppercase">Local</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">K&N’s SmartCooking Recipes: Mexican Style Nugget Shawarma</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">Publishing Partner</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="saba" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Celebrity</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">Saba Qamar says a ‘Jinn’ slapped her makeup artist during a shoot for her new show</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">Images Staff</p>
                        </div>

                        <div className="group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop" className="w-full h-44 object-cover mb-3" alt="prod" />
                            <span className="text-[#ff7f50] text-[10px] font-bold uppercase">Celebrity</span>
                            <h3 className="text-[17px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">Producer Umer Mukhtar threatens legal action against content creator Mahnoor Rahim</h3>
                            <p className="text-[10px] text-gray-400 mt-2 text-right uppercase font-bold">Images Staff</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}