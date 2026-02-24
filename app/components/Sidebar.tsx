'use client'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className="space-y-10">
      <div className="bg-[#a31a1a] p-5 text-white">
        <h3 className="text-sm font-bold border-b border-red-400 pb-2 mb-3 text-center tracking-widest">RAMAZAN TIMINGS</h3>
        <select className="w-full bg-white text-black p-1 text-xs mb-4">
          <option>Karachi</option>
          <option>Lahore</option>
          <option>Islamabad</option>
        </select>
        <table className="w-full text-[11px] font-bold">
          <thead>
            <tr className="border-b border-red-400">
              <th className="text-left pb-1">Date</th>
              <th className="text-center pb-1">Sehri</th>
              <th className="text-right pb-1">Iftaar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-red-800/30">
              <td className="py-2">2026-02-23</td>
              <td className="text-center py-2">5:42 am</td>
              <td className="text-right py-2">6:32 pm</td>
            </tr>
            <tr className="border-b border-red-800/30">
              <td className="py-2">2026-02-24</td>
              <td className="text-center py-2">5:41 am</td>
              <td className="text-right py-2">6:32 pm</td>
            </tr>
            <tr>
              <td className="py-2">2026-02-25</td>
              <td className="text-center py-2">5:40 am</td>
              <td className="text-right py-2">6:33 pm</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-center text-[10px] italic border-t border-red-400 pt-2">
          Sponsored by
        </div>
        <div className="mt-2 flex justify-center">
          <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/K%26N%27s_Logo.svg/1200px-K%26N%27s_Logo.svg.png" alt="KNs" className="h-10 invert brightness-200" />
        </div>
      </div>

      <div className="border-t-4 border-black pt-2">
        <h3 className="text-red-700 text-xs font-bold mb-4 uppercase tracking-tighter">Must Read Stories</h3>
        <div className="space-y-4">
          {[
            { id: 1, title: "The 10 unspoken rules of attending an iftar dawat" },
            { id: 2, title: "Netizens need a Fiza Ali in their lives after seeing her defend guest" },
            { id: 3, title: "Why the HEC's future role is uncertain following devolution" },
            { id: 4, title: "Zara Noor Abbas opens up about industry friendships" }
          ].map(story => (
            <div key={story.id} className="flex gap-3 items-start border-b pb-3">
              <span className="text-3xl font-serif text-gray-200 font-bold leading-none">{story.id}.</span>
              <p className="text-sm font-bold leading-tight hover:text-red-800 cursor-pointer">{story.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-4 border-black pt-2">
        <h3 className="text-red-700 text-xs font-bold mb-2 uppercase">SYSTEMIC ROT:</h3>
        <p className="text-sm font-bold leading-tight hover:text-red-800 cursor-pointer">
          HOW A {`'SYSTEM'`} OF CORRUPT OFFICIALS AND POLITICIANS IS USURPING {`KARACHI'S`} PRIME REAL ESTATE
        </p>
        <div className="mt-3 space-y-1 text-xs text-gray-600">
          <p>1. News Desk</p>
          <p>2. Iftikhar A. Khan</p>
          <p>3. Imran Gabol</p>
          <p>4. Anwar Iqbal</p>
          <p>5. Imtiaz Ali</p>
        </div>
      </div>

      <div className="border-t-4 border-black pt-2">
        <h3 className="text-red-700 text-xs font-bold mb-4 uppercase">MOST POPULAR</h3>
        <div className="space-y-3">
          {[
            "Opposition leaders hold sit-in outside SC, demand immediate scheduling of Imran's cases",
            "Increased risk of glacial floods in Gilgit-Baltistan due to above-normal temperatures: PMD",
            "National security is non-negotiable: Parliamentary secretary on Afghanistan strikes",
            "Mexican drug lord killing sparks revenge attacks",
            "Security forces kill five terrorists in Balochistan's Pishin: ISPR"
          ].map((item, i) => (
            <div key={i} className="border-b pb-2">
              <p className="text-xs font-bold hover:text-red-700 cursor-pointer">{item}</p>
              <p className="text-[10px] text-gray-500 mt-1">Published {i + 1} hour{i > 0 ? 's' : ''} ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}