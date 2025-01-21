'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../../components/common/Header'; // Adjust path based on your structure
import Footer from '../../../components/common/Footer'; // Adjust path based on your structure

const DishDetailPage = () => {

    const { id } = useParams(); // Use useParams() to get dynamic parameter

    const [dish, setDish] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);

    useEffect(() => {
        if (id) {
            const fetchedDish = {
                name: 'Special Pasta',
                description: 'A delightful pasta dish with fresh ingredients and rich flavors.',
                veg: true, // true for veg, false for non-veg
                rating: 4.5,
                reviews: 120,
                price: 15.99,
                image: '/gallery/grid5/pic7.jpg', // Replace with actual image path
                addons: [
                    { name: 'Extra Cheese', price: 2.0 },
                    { name: 'Extra Sauce', price: 1.5 },
                ],
            };
            setDish(fetchedDish); // Set the fetched data
        }
    }, [id]);

    const handleAddonToggle = (addon) => {
        setSelectedAddons((prev) => {
            if (prev.includes(addon)) {
                return prev.filter((item) => item !== addon); // Remove addon
            } else {
                return [...prev, addon]; // Add addon
            }
        });
    };

    if (!dish) return <div>Loading...</div>;

    return (
        <div>
            <Header />

            {/* Top Section with Background */}
            <section className="relative text-black text-center py-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("/background/pic1.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Product Detail</h1>
                    <p className="text-lg text-white mb-6">{dish.description}</p>
                </div>
            </section>

            {/* Dish Details Section */}
            <section className="py-16 bg-off-white container mx-auto px-4 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
                    {/* Layout with Image on Left and Details on Right */}
                    <div className="flex space-x-8">
                        {/* Dish Image */}
                        <div className="w-1/3">
                            <Image
                                src={dish.image} // Display the image dynamically
                                alt={dish.name}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Dish Details */}
                        <div className="w-2/3">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-gray-800">{dish.name}</h2>
                                <div className={`px-4 py-1 text-white font-semibold ${dish.veg ? 'bg-green-500' : 'bg-red-500'}`}>
                                    {dish.veg ? 'Veg' : 'Non-Veg'}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{dish.description}</p>

                            {/* Ratings and Reviews */}
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="flex items-center">
                                    <span className="text-yellow-500 mr-1">⭐</span>
                                    <span className="text-gray-700 font-semibold">{dish.rating}</span>
                                    <span className="text-gray-500 ml-1">({dish.reviews} reviews)</span>
                                </div>
                            </div>

                            {/* Addons Section */}
                            <h3 className="text-xl font-bold mb-4">Add-ons</h3>
                            <div className="space-y-2">
                                {dish.addons.map((addon, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 text-red-500"
                                            checked={selectedAddons.includes(addon)}
                                            onChange={() => handleAddonToggle(addon)}
                                        />
                                        <span className="text-gray-700">{addon.name} (+${addon.price.toFixed(2)})</span>
                                    </label>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex space-x-4 mt-8">
                                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
                                    Add to Cart
                                </button>
                                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Section Below the Dish Details */}
                    <div className="bg-white p-8 rounded-lg shadow-md mt-8">
                        <div className="flex space-x-8 mb-4 border-b border-gray-300 pb-4">
                            <button className="text-gray-800 font-semibold">Description</button>
                            <button className="text-gray-600">Additional Information</button>
                            <button className="text-gray-600">Product Review</button>
                        </div>
                        <div className="text-gray-700">
                            <p>{dish.description}</p>
                            {/* Additional information and reviews can be added here */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Menu Slider Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Special Menu</h2>
                    <div className="flex space-x-4 overflow-x-auto">
                        {/* Sample Dish Cards */}
                        {[{ name: 'Dish 1', description: 'Delicious and freshly made.', price: 12.99, image: '/gallery/grid5/pic1.jpg' },{ name: 'Dish 2', description: 'Delicious and freshly made.', price: 12.99, image: '/gallery/grid5/pic2.jpg' }].map((dish, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-64 flex-none">
                                <Image src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                                <p className="text-gray-600 mb-4">{dish.description}</p>
                                <p className="text-gray-800 font-semibold mb-2">${dish.price.toFixed(2)}</p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DishDetailPage;
