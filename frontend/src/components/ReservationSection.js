// components/ReservationSection.js
import React from 'react';

const ReservationSection = () => {
    return (
        <section className="relative py-16 text-center text-white">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("background/pic11.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)', // Blur effect on the background image
                }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for contrast */}
            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl font-semibold mb-8">Make a Reservation</h2>
                <p className="text-lg mb-6">Join us for an unforgettable dining experience!</p>

                <form className="bg-transparent p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"> {/* Adjusted gap for inputs */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Name"
                                className="p-2 border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none w-60" // Set fixed width
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2 border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none w-60" // Set fixed width
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="p-2 border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none w-60" // Set fixed width
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"> {/* Adjusted gap for inputs */}
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="Number of People"
                                className="p-2 border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none w-60" // Set fixed width
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="date"
                                className="p-2 border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none w-60" // Set fixed width
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="time"
                                className="p-2 border-b-2 border-white bg-transparent text-white placeholder-white focus:outline-none w-60" // Set fixed width
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Reserve Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ReservationSection;
