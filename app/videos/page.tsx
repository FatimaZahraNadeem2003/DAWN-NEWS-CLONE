'use client'
import React from 'react';
import { Play } from 'lucide-react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VideoCard = ({ title, image, isLarge = false }: { title: string, image: string, isLarge?: boolean }) => (
    <div className="flex flex-col group cursor-pointer mb-4">
        <div className={`relative overflow-hidden bg-gray-200 aspect-video`}>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 rounded-full p-2 lg:p-3 group-hover:bg-red-600 transition-colors">
                    <Play className="text-white fill-white" size={isLarge ? 32 : 20} />
                </div>
            </div>
        </div>
        <h3 className={`mt-3 font-serif text-[#1a1a1a] leading-tight hover:text-red-800 transition-colors ${isLarge ? 'text-lg font-medium' : 'text-sm font-normal'}`}>
            {title}
        </h3>
    </div>
);

export default function VideosPage() {
    return (
        <>
            <Header />
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-10 space-y-16 bg-white">

                <section>
                    <div className="flex justify-center mb-6">
                        <h2 className="text-4xl font-serif text-[#8B0000] tracking-wider">MUST WATCH</h2>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-tighter">
                        <span>WATCH ON</span>
                        <span className="bg-red-600 text-white px-2 py-0.5 rounded flex items-center gap-1">
                            <Play size={10} className="fill-white" /> YouTube
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
                                title="Pakistan's Shift Toward Renewable Energy: Hurdles and Prospects | Dr Aazir Khan | Dawn News English"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400"
                                title="The Law Isn't Neutral | Sexual Assault, Victim Blaming | Sahar Bandial Oves Anwar"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=400"
                                title="Peace, Power, Politics & Iran: Key Takeaways from Trump's State of the Union | Dawn News English"
                            />
                        </div>
                    </div>
                    <div className="border-b border-gray-200 mt-12"></div>
                </section>

                <section>
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] mb-2 uppercase">NEWS AND HEADLINES</h2>
                        <div className="flex items-center gap-2 text-xs font-bold">
                           <span>WATCH ON</span>
                           <span className="bg-red-600 text-white px-2 py-0.5 rounded flex items-center gap-1">
                               <Play size={10} className="fill-white" /> YouTube
                           </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <VideoCard
                            image="https://images.unsplash.com/photo-1506012733058-29363d667624?auto=format&fit=crop&q=80&w=400"
                            title="UAE Conducts More Aid Airdrops Over Gaza | Dawn News English"
                        />
                        <VideoCard
                            image="https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=400"
                            title="Trump Envoy Witkoff Heading to Gaza, White House Says | Dawn News English"
                        />
                        <VideoCard
                            image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400"
                            title="Breathe Pakistan: Experts Call For Urgent Adaptation Funding To Address Climate Threat"
                        />
                        <VideoCard
                            image="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=400"
                            title="10 Killed In Sweden's Deadliest School Shooting, Including Syrians And Bosnians | Dawn News English"
                        />
                        <VideoCard
                            image="https://images.unsplash.com/photo-1464802686167-b939a67e052c?auto=format&fit=crop&q=80&w=400"
                            title="Israeli Defence Minister Orders Army To Prepare For Mass Exodus From Gaza | Dawn News English"
                        />
                    </div>
                    <div className="border-b border-gray-200 mt-12"></div>
                </section>

                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] uppercase">CURRENT AFFAIRS</h2>
                        <p className="text-sm text-gray-800 font-bold mt-2">
                            Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                title="If Parliament Is Supreme, Why Don't Parliamentarians Attend It? | Ahmed Bilal Mehboob | Spotlight"
                            />
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
                                title="What's on the Agenda at the Gaza 'Board of Peace' Meeting? | Anwer Iqbal Explains"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400"
                                title="Building a World-Class Team for Sialkot | Full Support for Pakistan, PSL Success | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                                title="What does Pakistan's Decision not to Play India Mean for the T20 World Cup? | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=400"
                                title="Pakistan Won't Play India: Major Disappointment for Cricket Fans | Dawn News English"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] uppercase">CURRENT AFFAIRS</h2>
                        <p className="text-sm text-gray-800 font-bold mt-2">
                            Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                title="If Parliament Is Supreme, Why Don't Parliamentarians Attend It? | Ahmed Bilal Mehboob | Spotlight"
                            />
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
                                title="What's on the Agenda at the Gaza 'Board of Peace' Meeting? | Anwer Iqbal Explains"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400"
                                title="Building a World-Class Team for Sialkot | Full Support for Pakistan, PSL Success | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                                title="What does Pakistan's Decision not to Play India Mean for the T20 World Cup? | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=400"
                                title="Pakistan Won't Play India: Major Disappointment for Cricket Fans | Dawn News English"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] uppercase">CURRENT AFFAIRS</h2>
                        <p className="text-sm text-gray-800 font-bold mt-2">
                            Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                title="If Parliament Is Supreme, Why Don't Parliamentarians Attend It? | Ahmed Bilal Mehboob | Spotlight"
                            />
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
                                title="What's on the Agenda at the Gaza 'Board of Peace' Meeting? | Anwer Iqbal Explains"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400"
                                title="Building a World-Class Team for Sialkot | Full Support for Pakistan, PSL Success | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                                title="What does Pakistan's Decision not to Play India Mean for the T20 World Cup? | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=400"
                                title="Pakistan Won't Play India: Major Disappointment for Cricket Fans | Dawn News English"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] uppercase">CURRENT AFFAIRS</h2>
                        <p className="text-sm text-gray-800 font-bold mt-2">
                            Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                title="If Parliament Is Supreme, Why Don't Parliamentarians Attend It? | Ahmed Bilal Mehboob | Spotlight"
                            />
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
                                title="What's on the Agenda at the Gaza 'Board of Peace' Meeting? | Anwer Iqbal Explains"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400"
                                title="Building a World-Class Team for Sialkot | Full Support for Pakistan, PSL Success | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                                title="What does Pakistan's Decision not to Play India Mean for the T20 World Cup? | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=400"
                                title="Pakistan Won't Play India: Major Disappointment for Cricket Fans | Dawn News English"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] uppercase">CURRENT AFFAIRS</h2>
                        <p className="text-sm text-gray-800 font-bold mt-2">
                            Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                title="If Parliament Is Supreme, Why Don't Parliamentarians Attend It? | Ahmed Bilal Mehboob | Spotlight"
                            />
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
                                title="What's on the Agenda at the Gaza 'Board of Peace' Meeting? | Anwer Iqbal Explains"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400"
                                title="Building a World-Class Team for Sialkot | Full Support for Pakistan, PSL Success | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                                title="What does Pakistan's Decision not to Play India Mean for the T20 World Cup? | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=400"
                                title="Pakistan Won't Play India: Major Disappointment for Cricket Fans | Dawn News English"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-serif text-[#8B0000] uppercase">CURRENT AFFAIRS</h2>
                        <p className="text-sm text-gray-800 font-bold mt-2">
                            Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <VideoCard
                                isLarge
                                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                title="If Parliament Is Supreme, Why Don't Parliamentarians Attend It? | Ahmed Bilal Mehboob | Spotlight"
                            />
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <VideoCard
                                image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"
                                title="What's on the Agenda at the Gaza 'Board of Peace' Meeting? | Anwer Iqbal Explains"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400"
                                title="Building a World-Class Team for Sialkot | Full Support for Pakistan, PSL Success | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                                title="What does Pakistan's Decision not to Play India Mean for the T20 World Cup? | Dawn News English"
                            />
                            <VideoCard
                                image="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=400"
                                title="Pakistan Won't Play India: Major Disappointment for Cricket Fans | Dawn News English"
                            />
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}