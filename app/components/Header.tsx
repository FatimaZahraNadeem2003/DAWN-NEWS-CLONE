'use client'
export default function Header() {

  return (
    <header className="w-full bg-white">
      <div className="bg-black text-white text-[9px] md:text-[10px] py-1.5 overflow-x-auto no-scrollbar">
      </div>

      <div className="py-6 md:py-10 border-b flex flex-col items-center px-4 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter text-black leading-none">
          DAWN
        </h1>

        <div className="flex items-center gap-2 mt-3 md:mt-4 text-[10px] md:text-[11px] font-serif border-t border-black pt-2 w-full max-w-fit px-4">
          <span className="font-bold border-r border-gray-400 pr-2">E-PAPER</span>
          <span className="text-gray-600 uppercase tracking-tight md:tracking-normal">
            FEBRUARY 23, 2026
          </span>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}