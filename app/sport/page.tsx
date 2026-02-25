'use client'
import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SportPage = () => {
    return (

        <div className="max-w-7xl mx-auto p-6 bg-white font-sans text-gray-900">
            <Header />
            <Navbar />
            {/* SECTION 1: FIFA Article (First Image) */}
            <section className="flex flex-col md:flex-row gap-8 mb-16 border-b pb-12 border-gray-300">
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000"
                        alt="FIFA Boss"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-serif font-bold leading-tight mb-4">
                        FIFA boss 'very reassured' about World Cup in Mexico despite violence
                    </h1>
                    <p className="text-gray-600 text-lg mb-2 leading-snug">
                        Mexico is one of the three host countries for the World Cup,
                        along with the United States and Canada.
                    </p>
                    <p className="text-gray-400 text-sm mb-8">25 Feb, 2026</p>

                    <div>
                        <h3 className="text-red-700 font-bold text-lg mb-3">Related</h3>
                        <ul className="space-y-4">
                            <li className="font-bold border-b border-gray-100 pb-2 hover:text-blue-700 cursor-pointer transition-colors">
                                'All guarantees World Cup will be held in Mexico'
                            </li>
                            <li className="font-bold border-b border-gray-100 pb-2 hover:text-blue-700 cursor-pointer transition-colors">
                                25 Mexican troops die in violence after drug kingpin killed
                            </li>
                            <li className="font-bold border-b border-gray-100 pb-2 hover:text-blue-700 cursor-pointer transition-colors">
                                Mexican president reviews 2026 World Cup preparations with FIFA's Infantino
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Grid Layout (Second Image) */}
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                {/* Main Cricket Article Text */}
                <div className="lg:col-span-1">
                    <span className="text-red-600 font-semibold block mb-2">Cricket</span>
                    <h2 className="text-3xl font-serif font-bold leading-tight mb-4">
                        New Zealand ready for Sri Lanka's spin challenge, says Santner
                    </h2>
                    <p className="text-gray-600 italic">
                        "But I think you pick a squad of 15, knowing that you could potentially be in both countries on slightly slower wickets, on some flat ones as well." he says.
                    </p>
                </div>

                {/* Main Cricket Image */}
                <div className="lg:col-span-1">
                    <img
                        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000"
                        alt="Cricket player"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Right Grid Column (2x2) */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="space-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=500"
                            alt="Football match"
                            className="w-full h-40 object-cover"
                        />
                        <h4 className="font-bold text-lg leading-tight">
                            Sesko on target as 'ruthless' United edge Everton
                        </h4>
                    </div>

                    {/* Card 2 */}
                    <div className="space-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&q=80&w=500"
                            alt="Olympic flag"
                            className="w-full h-40 object-cover border border-gray-200"
                        />
                        <h4 className="font-bold text-lg leading-tight">
                            France welcomes Olympic flag as 2030 Winter Games loom
                        </h4>
                    </div>

                    {/* Card 3 */}
                    <div className="space-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?auto=format&fit=crop&q=80&w=500"
                            alt="Cricket Press Conference"
                            className="w-full h-40 object-cover"
                        />
                        <h4 className="font-bold text-lg leading-tight">
                            'Our fate is not in our hands': Shaheen on T20 World Cup semi-final prospects following defeat by England
                        </h4>
                    </div>

                    {/* Card 4 */}
                    <div className="space-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=500"
                            alt="Defender image"
                            className="w-full h-40 object-cover"
                        />
                        <h4 className="font-bold text-lg leading-tight">
                            Paris St Germain defender Achraf Hakimi to face trial for rape
                        </h4>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        
    );
};

export default SportPage;