'use client'
import React from 'react';

export default function DonationsPage() {
    return (
        <div className="min-h-screen font-serif">
            
            <header className="fixed top-0 left-0 w-full bg-[#7eb2f7] h-24 z-50 flex items-center px-4 md:px-8">
                <div className="bg-white border-2 border-black p-1 flex flex-col items-center justify-center h-20 w-24 shrink-0">
                    <div className="text-[10px] font-bold border-b border-black w-full text-center leading-tight">DAWN</div>
                    <div className="text-[#3b82f6] text-xl font-extrabold leading-tight tracking-tighter italic">RELIEF</div>
                    <div className="bg-black text-white text-[7px] w-full text-center py-0.5 mt-0.5">THE WAY FORWARD</div>
                </div>

                <nav className="ml-6 flex flex-wrap gap-4 md:gap-6 text-white text-[11px] md:text-[13px] font-bold uppercase tracking-wider">
                    <a href="#" className="hover:text-black">FLOODS 2022</a>
                    <a href="#" className="hover:text-black">RECONSTRUCTION</a>
                    <a href="#" className="hover:text-black">HOW YOU CAN HELP</a>
                    <a href="#" className="hover:text-black">SPECIAL THANKS</a>
                    <a href="#" className="hover:text-black">ABOUT</a>
                    <a href="#" className="hover:text-black">OUR JOURNEY</a>
                    <a href="#" className="hover:text-black">CONTACT</a>
                </nav>
            </header>

            <section className="relative mt-24 w-full h-[85vh]">
                <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070" 
                    alt="Children smiling"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-20">
                    <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-2xl tracking-tight">
                        The Way Forward
                    </h1>
                </div>
            </section>

            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#2b528b] text-white py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">FLOODS 2022</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Two-thirds of Pakistan was submerged under water. Water that swelled, broke embankments and swept entire villages away. People were struggling with little to no access to food or any kind of shelter.</p>
                        
                        <p>In line with our vision to provide relief and rehabilitation to people in distress, DawnRelief first initiated operations in villages in Balochistan that had been worst-hit by the floods and then expanded its relief operations to Khyber Pakhtunkhwa and Sindh.</p>
                        
                        <p>We worked round-the-clock, distributing relief goods (including tents, essential food, soap, mosquito repellents and cooking utensils) in Lasbela District in southern Balochistan, which was among the worst affected by the floods.</p>
                        
                        <p>We first focused on Uthal Tehsil, home to 21,979 men and women and 20,888 children (total population: 42,867). Before the floods struck, Uthal was a farming community scattered across several villages — and home to 7,912 families. The floods wiped everything out — entire houses, crops and livestock.</p>
                        
                        <p>Then, we moved further north to Bela Tehsil, where 40,682 men and women and 39,442 children live (total population: 80,124 people) and where some 14,606 families were without shelter and food.</p>
                        
                        <p>We also managed to expand our operations to southern Sindh with distribution drives in Goth Saleh Muhammad Bagul and Goth Suleman Kerai in Sujawal District and in the settlements of Bajara with its population of approximately 3,500 people, in the province's Sehwan taluka.</p>
                    </div>

                    <div className="mt-12 aspect-video w-full border-4 border-[#1a3a63] shadow-2xl relative">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="Dawn Relief Efforts"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-white text-black py-16 px-6 md:px-24 lg:px-48">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[#e2a856] text-4xl font-bold mb-8 uppercase italic">RECONSTRUCTION</h2>
                    
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
                        <p>
                            As we wrap up critical relief operations in the flood-affected areas, we are now gearing up 
                            <span className="text-[#964b00] border-b border-[#964b00] mx-1 cursor-pointer">to rebuild devastated settlements</span> 
                            with homes, schools and a drinking water supply scheme.
                        </p>
                        
                        <p>In Bajara, we have successfully completed the construction of 150 homes and have extended our efforts to Jhankara, a neighboring village, with an additional 50 homes now built. Our commitment to education has led to the reconstruction of a girls' primary school in Bajara. Furthermore, we are on the verge of launching a drinking water supply scheme and initiating vocational training programs in the region. These initiatives are designed to empower local residents with essential skills, enabling them to take an active role in rebuilding and enhancing their communities.</p>
                    </div>

                    <div className="mt-12 w-full max-w-2xl mx-auto">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Manchar_Lake_Map.png" 
                            alt="Manchar Lake Map"
                            className="w-full border border-gray-300 shadow-md"
                        />
                    </div>
                </div>
            </section>

            <footer className="py-10 bg-gray-100 text-center text-xs text-gray-500">
                © DAWN RELIEF - THE WAY FORWARD
            </footer>
        </div>
    );
}