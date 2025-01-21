'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const CartPage = () => {
    // Sample cart items
    const [cartItems, setCartItems] = useState([
        {
            name: 'Dish 1',
            description: 'A delightful dish made with fresh ingredients and a blend of spices.',
            price: 10.99,
            quantity: 2,
            image: '/gallery/grid5/pic1.jpg', // Update with your image paths
        },
        {
            name: 'Dish 2',
            description: 'A savory dish packed with flavor, featuring grilled chicken and a tangy sauce.',
            price: 12.99,
            quantity: 1,
            image: '/gallery/grid5/pic2.jpg', // Update with your image paths
        },
        // Add more cart items as necessary
    ]);

    // Function to increase or decrease item quantity
    const handleQuantityChange = (index, action) => {
        const newCartItems = [...cartItems];
        if (action === 'increase') {
            newCartItems[index].quantity += 1;
        } else if (action === 'decrease' && newCartItems[index].quantity > 1) {
            newCartItems[index].quantity -= 1;
        }
        setCartItems(newCartItems);
    };

    // Calculate the total price
    const itemTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    const deliveryCharges = 5.00;
    const taxes = 3.50;
    const totalPrice = (parseFloat(itemTotal) + deliveryCharges + taxes).toFixed(2);

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
                    <h1 className="text-5xl font-bold text-white mb-4">Your Cart Awaits!</h1>
                    <p className="text-lg text-white mb-6 max-w-lg mx-auto">
                        Continue your order and enjoy the deliciousness we have to offer. Feel free to add more items or check out!
                    </p>
                </div>
            </section>

            {/* Cart Section */}
            <section className="py-16 bg-off-white">
                <div className="container mx-auto px-4">

                    {/* Cart Items */}
                    <div className="space-y-8">
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-white p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-all">
                                    {/* Item Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg shadow-md"
                                    />
                                    {/* Item Details */}
                                    <div className="flex-1 ml-6">
                                        <h3 className="font-bold text-xl text-gray-800 mb-2">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-700 font-semibold">{item.quantity} x ${item.price.toFixed(2)}</p>
                                            <div className="flex space-x-2">
                                                <button
                                                    className="text-gray-700 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200"
                                                    onClick={() => handleQuantityChange(index, 'decrease')}
                                                >
                                                    -
                                                </button>
                                                <button
                                                    className="text-gray-700 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200"
                                                    onClick={() => handleQuantityChange(index, 'increase')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-700">
                                <p>Your cart is empty.</p>
                            </div>
                        )}
                    </div>

                    {/* Bill Details */}
                    {cartItems.length > 0 && (
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-300">
                            <div className="flex justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">Bill Details</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-700">Item Total</p>
                                    <p className="text-gray-700">${itemTotal}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-700">Delivery Charges</p>
                                    <p className="text-gray-700">${deliveryCharges}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-700">Govt Taxes & Other Charges</p>
                                    <p className="text-gray-700">${taxes}</p>
                                </div>
                                <div className="flex justify-between font-semibold">
                                    <p>Total</p>
                                    <p>${totalPrice}</p>
                                </div>
                            </div>
                            <div className="flex justify-end mt-8">
                                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CartPage;
