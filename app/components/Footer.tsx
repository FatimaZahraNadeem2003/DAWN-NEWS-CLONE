'use client'
export default function Footer() {
  const sections = [
    { title: "CONTACT", links: ["CONTACT", "SUBSCRIBE TO NEWSPAPER", "PRAYER TIMINGS", "CONTRIBUTION GUIDELINES", "REPRODUCTION COPYRIGHTS", "STOCK/FOREX/GOLD", "CODE OF ETHICS", "ADVERTISE ON DAWN.COM", "WEATHER", "AI POLICY", "BRANDED CONTENT", "DESKTOP", "TERMS OF USE", "CAREERS", "PRIVACY", "OBITUARIES", "COMMENT MODERATION"] },
    { title: "DAWN", links: ["DAWN", "EOS/ICON", "PRISM", "CITYFM89", "IMAGES", "HERALD", "SPECIAL REPORTS", "TEELI", "AURORA", "YOUNG WORLD", "DAWN NEWS"] },
    { title: "EOS/ICON", links: ["EOS/ICON", "YOUNG WORLD", "CITYFM89", "HERALD", "TEELI", "AURORA"] },
  ];

  return (
    <footer className="bg-black text-white p-12 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <h1 className="text-5xl font-serif font-bold">DAWN</h1>
            <p className="mt-4 text-[10px] text-gray-500 max-w-xs">
              Copyright © 2026, Dawn. This website is the property of {`Pakistan's`} oldest newspaper.
            </p>
            <p className="mt-2 text-[10px] text-gray-600">
              Newkit Publishing Platform by Compunode
            </p>
          </div>
          {sections.map(sec => (
            <div key={sec.title}>
              <h4 className="text-[11px] font-bold border-b border-gray-800 pb-2 mb-4 tracking-widest">{sec.title}</h4>
              <ul className="space-y-2">
                {sec.links.map(l => (
                  <li key={l} className="text-[10px] text-gray-400 hover:text-white cursor-pointer">{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-[8px] text-gray-600 flex justify-between">
          <span>© 2026 Dawn Media Group</span>
          <span>Newkit Publishing Platform by Compunode</span>
        </div>
      </div>
    </footer>
  );
}