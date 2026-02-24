"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'LATEST', href: '/latest' },
    { name: 'T20 WORLD CUP', href: '/WorldCup', color: 'text-red-600' },
    { name: 'PAKISTAN', href: '/pakistan' },
    { name: 'OPINION', href: '/opinion' },
    { name: 'BUSINESS', href: '/business' },
    { name: 'IMAGES', href: '/images' },
    { name: 'PRISM', href: '/prism' },
    { name: 'WORLD', href: '/world' },
    { name: 'SPORT', href: '/sport' },
    { name: 'BREATHE', href: '/breathe', color: 'text-green-700' },
    { name: 'MAGAZINES', href: '/magazines' },
    { name: 'TECH', href: '/tech' },
    { name: 'VIDEOS', href: '/videos' },
    { name: 'POPULAR', href: '/popular' },
    { name: 'ARCHIVE', href: '/archive' },
    { name: 'FLOOD DONATIONS', href: '/donations' },
  ];

  return (
    <nav className="w-full bg-white border-t-[3px] border-black">
      <div className="max-w-[1400px] mx-auto px-2 lg:px-4">
        <div className="flex items-center justify-between h-12">
          
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center h-full overflow-hidden">
            <ul className="flex items-center h-full text-[11px] font-bold tracking-tight">
              {navLinks.map((link, index) => (
                <li key={index} className="h-full flex items-center">
                  <Link
                    href={link.href}
                    className={`px-3 py-4 transition-colors whitespace-nowrap
                      ${link.color ? link.color : 'text-black'}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-black transition-colors pl-4">
            <Search size={18} />
            <span className="text-[12px] font-medium hidden sm:block tracking-widest">SEARCH</span>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-bold border-b border-gray-50
                      ${link.color ? link.color : 'text-black'}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;