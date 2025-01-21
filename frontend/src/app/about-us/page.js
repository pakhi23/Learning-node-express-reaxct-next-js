// pages/about/index.js
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const AboutPage = () => {
    return (
        <div>
            <Header />

            {/* Hero Section */}
            <section className="relative text-center py-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("background/pic11.jpg")', // Replace with your actual background image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for contrast */}
                <div className="relative z-10 text-white">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-6">Get to know the heart of our restaurant and what we stand for.</p>
                </div>
            </section>

            {/* About Content Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
                    <p className="text-gray-700 text-center mb-8">
                        Welcome to our restaurant! We believe in crafting delicious meals with love and passion.
                        Since our founding, our mission has been to provide a delightful dining experience where friends and family can come together to enjoy fresh, high-quality ingredients and innovative flavors.
                    </p>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2" style={{ color: 'rgb(239, 68, 68)' }}>Fresh Ingredients</h3>
                            <p className="text-gray-600">We source the finest ingredients to create dishes that are both flavorful and healthy.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2" style={{ color: 'rgb(239, 68, 68)' }}>Exceptional Service</h3>
                            <p className="text-gray-600">Our team is dedicated to providing warm and friendly service to each guest.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2" style={{ color: 'rgb(239, 68, 68)' }}>Unique Atmosphere</h3>
                            <p className="text-gray-600">Enjoy your meal in a comfortable, beautifully designed space.</p>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Our mission is to bring people together through great food and unforgettable experiences. We are committed to sustainability and quality, ensuring that each dish is made with care.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
