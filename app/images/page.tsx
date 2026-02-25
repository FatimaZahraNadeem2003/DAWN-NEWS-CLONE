'use client'
import React from 'react';
import { Menu, Search } from "lucide-react";

const ArticleCard = ({ 
  image, 
  category, 
  title, 
  author, 
  textAlign = 'right',
  categoryColor = '#ff7f50'
}: { 
  image: string; 
  category: string; 
  title: string; 
  author: string; 
  textAlign?: 'left' | 'right';
  categoryColor?: string;
}) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="aspect-video overflow-hidden mb-3">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className={textAlign === 'right' ? 'text-right' : 'text-left'}>
        <span style={{ color: categoryColor }} className="text-[10px] font-bold uppercase tracking-widest">
          {category}
        </span>
        <h3 className="text-[18px] md:text-[20px] font-black uppercase leading-[1.1] mt-1 tracking-tighter">
          {title}
        </h3>
        <p className="text-[10px] text-gray-500 mt-2 text-right uppercase font-bold tracking-tighter italic">
          {author}
        </p>
      </div>
    </div>
  );
};

export default function ImagesPage() {
    return (
        <main className="bg-[#fdf3f7] min-h-screen font-sans antialiased text-[#1a1a1a]">

            <header className="bg-[#eed2dc] pt-10 pb-6 px-4 md:px-6 relative">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto">
                    

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

                <div className="bg-[#f0d8df] -mx-4 md:-mx-6 px-4 md:px-12 py-16 mb-20 text-black">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 flex flex-col">
                            <div className="text-right mb-4">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Culture</p>
                                <h1 className="text-3xl md:text-4xl font-black uppercase leading-[1.1] mt-4 tracking-tighter">
                                    Who's afraid of the big bad mom-to-be? Exploring why maternity leave in Pakistan is such a 'problem'
                                </h1>
                                <p className="text-sm mt-4 font-medium italic">Annam Lodhi</p>
                            </div>
                            <div className="mt-auto aspect-[4/5] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1508962914676-139429cf6978?w=800" alt="Clock" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            <ArticleCard image="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800" category="Culture" title="BBC on alert for political messages, swearing during upcoming BAFTA awards" author="Images Staff" />
                            <ArticleCard image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800" category="Culture" title="Review: Starfleet Academy boldly goes where no Trek should — into Archies territory" author="Mohammad Kamran Jawaid" />
                            <ArticleCard image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800" category="Culture" title="You can now audition for Pakistan's Got Talent" author="Images Staff" />
                            <ArticleCard image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800" category="Culture" title="Sarmad Khoosat's Lali premieres at Berlinale, turning Berlin into a celebration of Pakistani cinema" author="Images Staff" />
                        </div>
                    </div>
                </div>

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 pt-10 border-t border-gray-200">
                    <div className="lg:col-span-4">
                        <div className="bg-white border border-gray-300 rounded-sm overflow-hidden flex flex-col h-full max-w-[400px] mx-auto lg:mx-0">
                            <div className="p-3 flex items-center justify-between border-b">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[8px] font-bold">IM</div>
                                    <p className="text-xs font-bold leading-none">dawn_images <span className="font-normal text-gray-500">and</span> dawn.t...</p>
                                </div>
                                <button className="bg-[#0095f6] text-white text-[10px] font-bold px-3 py-1 rounded">View profile</button>
                            </div>
                            <div className="bg-[#9c867c] flex flex-col items-center justify-center p-8 text-center text-white min-h-[400px]">
                                <h2 className="text-2xl font-serif italic mb-2 opacity-70">IMAGES</h2>
                                <h1 className="text-3xl font-black leading-tight uppercase">Ben & Jerry's has a history of supporting Palestine</h1>
                                <p className="mt-4 text-sm font-medium">The recent resignation of one of the co-founders is one of many pro-Palestine actions undertaken by the company</p>
                                <img src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=400" className="mt-6 w-40 h-40 rounded-md object-cover border-4 border-white" alt="Ice cream" />
                            </div>
                            <div className="p-4 bg-white text-black">
                                <div className="flex gap-4 mb-2"><span className="text-xl">♡</span> <span className="text-xl">💬</span> <span className="text-xl">✈</span></div>
                                <p className="text-xs font-bold">193 likes</p>
                                <p className="text-xs mt-1 leading-relaxed"><span className="font-bold">dawn_images</span> One of the co-founders of ice cream brand Ben & Jerry's...</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        <ArticleCard image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" category="Celebrity" title="Producer Umer Mukhtar threatens legal action against content creator Mahnoor Rahim" author="Images Staff" categoryColor="#ff7f50" />
                        <ArticleCard image="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600" category="Culture" title="BBC on alert for political messages, swearing during upcoming BAFTA awards" author="Images Staff" />
                        <ArticleCard image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600" category="Culture" title="Review: Starfleet Academy boldly goes where no Trek should — into Archies territory" author="Mohammad Kamran Jawaid" />
                        <ArticleCard image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" category="Culture" title="You can now audition for Pakistan's Got Talent" author="Images Staff" />
                    </div>
                </section>

                <section className="pt-10 border-t border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {[
                            { cat: "Culture", title: "Sarmad Khoosat's Lali premieres at Berlinale, turning Berlin into a celebration", auth: "Images Staff" },
                            { cat: "Culture", title: "'You are almost perfect': Ushna Shah pens open letter to Maryam Nawaz", auth: "Images Staff" },
                            { cat: "Celebrity", title: "Eric Dane, Grey's Anatomy and Euphoria actor, dies at 53", auth: "Reuters" },
                            { cat: "Culture", title: "The Royal Shakespeare Company is bringing Game of Thrones to the stage", auth: "Images Staff" },
                            { cat: "Culture", title: "Shireen Kamran's paintings reward patience over quick interpretation", auth: "Amra Ali" },
                            { cat: "Culture", title: "The voice of Hind Rajab's Kaouther Ben Hania refuses award after Israeli General", auth: "Images Staff" },
                            { cat: "Culture", title: "Over 80 film heavyweights slam Berlinale for 'shielding Israel from criticism'", auth: "Images Staff" },
                            { cat: "Culture", title: "'I've stopped calling myself a celebrity': Sarwat Gilani on industry jealousy", auth: "Images Staff" },
                        ].map((item, idx) => (
                            <ArticleCard 
                                key={idx} 
                                image={`https://picsum.photos/seed/${idx + 10}/600/400`} 
                                category={item.cat} 
                                title={item.title} 
                                author={item.auth} 
                                textAlign="left" 
                                categoryColor={item.cat === "Celebrity" ? "#ff7f50" : "#a04060"}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <footer className="bg-[#eed2dc] mt-20 px-4 md:px-12 py-16 border-t border-black/10">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div className="text-[80px] md:text-[140px] font-black leading-[0.8] tracking-tighter uppercase font-serif italic select-none">
                        IMAGES
                    </div>
                    
                    <div className="flex flex-col gap-8 text-right w-full md:w-auto">
                        <div className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-[#922a50]">
                            <a href="#" className="hover:underline">Contact Us</a>
                            <a href="#" className="hover:underline">Facebook</a>
                            <a href="#" className="hover:underline">Twitter</a>
                            <a href="#" className="hover:underline">Instagram</a>
                            <a href="#" className="hover:underline">TikTok</a>
                            <a href="#" className="hover:underline">Social Media Guidelines</a>
                            <a href="#" className="hover:underline">Code of Ethics</a>
                            <a href="#" className="hover:underline">Terms of Use</a>
                            <a href="#" className="hover:underline">Contribution Guidelines</a>
                        </div>
                        
                        <div className="flex flex-wrap justify-end gap-x-5 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                            <a href="#">Dawn.com</a>
                            <a href="#">Cityfm89</a>
                            <a href="#">Aurora</a>
                            <a href="#">Dawnnews</a>
                            <span className="opacity-50">Copyright © 2024</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}