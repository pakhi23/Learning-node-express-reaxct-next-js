// components/HeroSection.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link


const HeroSection = () => {
    return (
        <section className="relative text-center py-20" style={{ overflow: 'hidden' }}>
            {/* Blurred background image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("background/pic1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)', // Apply blur effect here
                }}
            ></div>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content container */}
            <div className="container mx-auto relative z-10 text-white">
                <h1 className="text-5xl font-bold mb-4">Choosing The Best Quality Food</h1>
                <p className="text-lg mb-6">A delightful dining experience awaits you.</p>
                <Link
                    href="/menu"
                    className="bg-[#7da640] text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#7da640] transition duration-300"
                >
                    View Menu
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
