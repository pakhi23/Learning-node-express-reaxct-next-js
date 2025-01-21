'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const CheckoutPage = () => {
    // Sample order items
    const orderItems = [
        {
            name: 'Dish 1',
            total: 25.99,
            image: '/gallery/grid5/pic1.jpg', // Update with your image paths
        },
        {
            name: 'Dish 2',
            total: 40.99,
            image: '/gallery/grid5/pic2.jpg', // Update with your image paths
        },
    ];

    const orderSubtotal = 125.96;
    const shipping = 0.0;
    const coupon = 28.0;
    const total = 506.0;

    return (
        <div>
            <Header />

            {/* Header Image Section */}
            <section className="relative text-center py-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("background/pic20.png")', // Update with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Checkout</h1>
                    <p className="text-lg text-white mb-6">Complete your order and get ready to enjoy!</p>
                </div>
            </section>

            {/* Checkout Section */}
            <section className="py-16 bg-off-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Billing & Shipping Address */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Billing & Shipping Address</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Address</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">City</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Postal Code</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Country</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Notes</label>
                                    <textarea
                                        className="w-full border border-gray-400 rounded-lg p-2 focus:border-gray-600 focus:outline-none"
                                        rows="4"
                                        placeholder="Add any additional notes or instructions"
                                    ></textarea>
                                </div>
                            </form>

                        </div>

                        {/* Order Summary */}
                        <div>
                            {/* Your Order Section */}
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Order</h2>
                                <table className="w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="py-2">Image</th>
                                            <th className="py-2">Product Name</th>
                                            <th className="py-2">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderItems.map((item, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="py-2">
                                                    <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                                </td>
                                                <td className="py-2">{item.name}</td>
                                                <td className="py-2">${item.total.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Order Total Section */}
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Total</h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Order Subtotal</span>
                                        <span>${orderSubtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free Shipping' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Coupon</span>
                                        <span>-${coupon.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-800 font-semibold">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Section */}
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Method</h2>
                                <form className="space-y-4">
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" value="creditCard" className="mr-2" />
                                        <label className="text-gray-700">Credit Card</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" value="paypal" className="mr-2" />
                                        <label className="text-gray-700">PayPal</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="payment" value="cod" className="mr-2" />
                                        <label className="text-gray-700">Cash on Delivery</label>
                                    </div>
                                </form>
                                <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CheckoutPage;
