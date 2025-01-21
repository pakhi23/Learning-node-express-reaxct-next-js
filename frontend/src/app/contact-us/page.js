// pages/contact.js
import React from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const ContactPage = () => {
    return (
        <div>
            <Header />
            <section className="relative text-black text-center py-20">
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
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-lg text-white mb-6">We&#39;re here to help and answer any questions you might have!</p>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-4">Feel free to reach out to us for any inquiries.</p>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[rgb(239,68,68)] text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p className="text-gray-600 mb-4">Reach out to us at any of our locations or through our phone and email:</p>
                        <p className="text-gray-700">
                            <strong>Phone:</strong> (123) 456-7890
                        </p>
                        <p className="text-gray-700">
                            <strong>Email:</strong> contact@restaurant.com
                        </p>
                        <p className="text-gray-700 mt-4">
                            <strong>Address:</strong> 123 Main Street, City, Country
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
