'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const WishlistPage = () => {
    // Sample wishlist items
    const [wishlistItems, setWishlistItems] = useState([
        {
            name: 'Dish 1',
            price: 10.99,
            image: '/gallery/grid5/pic1.jpg', // Update with your image paths
        },
        {
            name: 'Dish 2',
            price: 12.99,
            image: '/gallery/grid5/pic2.jpg', // Update with your image paths
        },
        // Add more wishlist items as necessary
    ]);

    // Function to add item to cart (you can modify this as per your cart functionality)
    const handleAddToCart = (item) => {
        console.log('Added to cart:', item);
        // Logic to add item to the cart
    };

    // Function to remove item from wishlist
    const handleRemoveFromWishlist = (index) => {
        const newWishlistItems = wishlistItems.filter((_, i) => i !== index);
        setWishlistItems(newWishlistItems);
    };

    return (
        <div>
            <Header />

            {/* Header Image Section */}
            <section className="relative text-black text-center py-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("background/pic20.png")', // Replace with your actual background image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for contrast */}
                <div className="relative z-10 px-6 sm:px-16">
                    <h1 className="text-5xl font-bold text-white mb-4">Your Wishlist</h1>
                    <p className="text-lg text-white mb-6 max-w-lg mx-auto">
                        These are the items you have saved for later. Add them to your cart or remove them anytime!
                    </p>
                </div>
            </section>

            {/* Wishlist Section */}
            <section className="py-16 bg-off-white">
                <div className="container mx-auto px-4">

                    {/* Wishlist Table */}
                    {wishlistItems.length > 0 ? (
                        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md border border-gray-300">
                            <table className="min-w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-3 px-6 text-left text-gray-700">Product Image</th>
                                        <th className="py-3 px-6 text-left text-gray-700">Product Name</th>
                                        <th className="py-3 px-6 text-left text-gray-700">Unit Price</th>
                                        <th className="py-3 px-6 text-center text-gray-700">Add to Cart</th>
                                        <th className="py-3 px-6 text-center text-gray-700">Close</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistItems.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-3 px-6 text-center">
                                                <Image src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                                            </td>
                                            <td className="py-3 px-6">{item.name}</td>
                                            <td className="py-3 px-6">${item.price.toFixed(2)}</td>
                                            <td className="py-3 px-6 text-center">
                                                <button
                                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                                                    onClick={() => handleAddToCart(item)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <button
                                                    className="text-red-500 hover:text-red-700 transition duration-300"
                                                    onClick={() => handleRemoveFromWishlist(index)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="col-span-full text-center text-gray-700">
                            <p>Your wishlist is empty.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WishlistPage;
