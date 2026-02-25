'use client'
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const editorPicks = [
  {
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=600&h=400&fit=crop",
    title: "The shutdown of USAID and the deeper crisis behind it",
    author: "Shuyan (Michael) Huang"
  },
  {
    image: "https://images.unsplash.com/photo-1585647346783-2810ef2a39d8?w=600&h=400&fit=crop",
    title: "When floods come back, they find the same people waiting",
    author: "Ehsan Leghari"
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2add85202685?w=600&h=400&fit=crop",
    title: "Net metering billing: Who pays the price for Pakistan’s new solar regime?",
    author: "Manzoor Ahmed Alizai | Rimsha Rehan"
  },
  {
    image: "https://images.unsplash.com/photo-1574943320219-555621f57d6e?w=600&h=400&fit=crop",
    title: "Between grand claims and thin allocations, who really owns Karachi’s crisis?",
    author: "Imran Ayub"
  }
];

export default function PrismPage() {
  return (
    <div className="bg-white min-h-screen font-serif">
      <header className="px-4 py-4 md:px-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-center">
          <div className="text-2xl md:text-3xl font-black tracking-tighter">DAWN</div>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase">P R I S M</h1>
          </div>
          <div className="flex justify-end gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                <Icon size={16} fill="white" />
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="bg-black text-white py-2 text-center">
        <p className="text-[12px] md:text-sm tracking-wider font-sans font-light">
          Illuminating experiences and expertise
        </p>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center px-4 md:px-10">
            <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] mb-8 text-[#1a1a1a]">
              From paper to action: The missing link in Pakistan’s response to climate change
            </h2>
            <div className="max-w-xl mx-auto space-y-4">
              <p className="text-lg md:text-2xl font-sans font-light leading-relaxed text-[#333]">
                Climate change in Pakistan is no longer just about risk recognition or finance mobilisation; it is about converting resources into a timely response.
              </p>
              <p className="text-sm md:text-base font-sans font-medium text-gray-600 mt-6 italic">
                Sahar Arshad Mahmood
              </p>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&q=80&w=1200" 
              alt="Climate Change" 
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-6 font-serif">Editor’s Picks</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {editorPicks.map((pick, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[4/3] overflow-hidden mb-3">
                <img 
                  src={pick.image} 
                  alt={pick.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <h4 className="font-serif text-[19px] leading-tight text-[#1a1a1a] mb-2">
                {pick.title}
              </h4>
              <p className="text-sm text-gray-500 font-sans">
                {pick.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}