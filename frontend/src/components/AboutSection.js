// components/AboutSection.js
import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-16 container mx-auto text-center ">
            <h2 className="text-4xl font-semibold mb-8">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
                At Restaurant Name, we pride ourselves on serving delicious meals crafted with the freshest ingredients.
            </p>
            <a
                href="/about"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
                Learn More
            </a>
        </section>
    );
};

export default AboutSection;
