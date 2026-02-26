'use client'
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TrendingItem = ({ number, title, description, time, image }: { 
    number: string, 
    title: string, 
    description: string, 
    time: string, 
    image: string 
}) => (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-gray-200 last:border-0">
        <div className="relative w-full md:w-[350px] shrink-0">
            <div className="aspect-[16/9] overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-0 left-0 bg-black/80 text-white font-bold px-3 py-1 text-lg">
                {number}
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] leading-tight hover:text-red-800 cursor-pointer transition-colors">
                {title}
            </h2>
            <p className="mt-3 text-gray-700 font-serif text-lg leading-relaxed">
                {description}
            </p>
            <span className="mt-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                {time}
            </span>
        </div>
    </div>
);

export default function Archive() {
    const trendingStories = [
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "1",
            title: "Nadra to issue CNICs for first-time registrants without birth certificate",
            description: "The authority says it is a time-bound facility and is valid only until December 31, 2026.",
            time: "PUBLISHED 22 FEB, 2026 05:44PM",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "2",
            title: "England captain Brook says a ‘shame’ if Pakistan players snubbed for Hundred competition",
            description: "“Pakistan have been a great cricket nation for many years,” Harry Brook says amid reports of players being shut out by Indian-owned franchises.",
            time: "UPDATED 21 FEB, 2026 08:23PM",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "3",
            title: "‘Our fate is not in our hands’: Shaheen on T20 World Cup semi-final prospects following defeat by England",
            description: "\"We need to beat Sri Lanka in our last match on Saturday and then hope other results go our way,\" he says.",
            time: "PUBLISHED A DAY AGO",
            image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600"
        },
        {
            number: "4",
            title: "Tariq Jahangiri’s appointment annulled",
            description: "116-page judgement declares his law degree invalid; IHC rules appointment was \"without lawful authority\" and a \"legal nullity\".",
            time: "PUBLISHED 22 FEB, 2026 12:15PM",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 py-10">
                <div className="border-b border-gray-300 pb-2 mb-8">
                    <h1 className="text-xl font-bold italic text-black uppercase tracking-tight">
                        TRENDING NOW
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Read the most popular stories across the site
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-sm font-bold text-red-700 uppercase tracking-tighter">
                        LAST 24 HOURS
                    </h3>
                </div>

                <div className="flex flex-col">
                    {trendingStories.map((story) => (
                        <TrendingItem 
                            key={story.number}
                            number={story.number}
                            title={story.title}
                            description={story.description}
                            time={story.time}
                            image={story.image}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}