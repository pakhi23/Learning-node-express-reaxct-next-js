// components/Header.js
import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import cart and wishlist icons from react-icons

const Header = () => {
    // Sample cart item count and wishlist item count, replace with dynamic state or props if necessary
    const cartItemCount = 3; // Example count of items in cart
    const wishlistItemCount = 2; // Example count of items in wishlist

    return (
        <header className="bg-white shadow-md py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-red-500">Restaurant Name</h1>
                <div className="space-x-4 flex items-center">
                    <Link href="/" className="hover:text-red-500">Home</Link>
                    <Link href="/menu" className="hover:text-red-500">Menu</Link>
                    <Link href="/about-us" className="hover:text-red-500">About Us</Link>
                    <Link href="/contact-us" className="hover:text-red-500">Contact</Link>

                    {/* Wishlist Link with Badge and Hover Effect */}
                    <Link href="/wishlist" className="relative flex items-center">
                        {/* Wishlist Icon */}
                        <div className="bg-red-500 text-white rounded-full p-2 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110">
                            <FaHeart className="text-2xl" />
                        </div>

                        {/* Wishlist Item Count Badge */}
                        {wishlistItemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                                {wishlistItemCount}
                            </span>
                        )}
                    </Link>

                    {/* Cart Link with Badge and Hover Effect */}
                    <Link href="/cart" className="relative flex items-center">
                        {/* Cart Icon */}
                        <div className="bg-red-500 text-white rounded-full p-2 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110">
                            <FaShoppingCart className="text-2xl" />
                        </div>

                        {/* Cart Item Count Badge */}
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>

                    <div className="space-x-2 ml-4 flex">
                        <Link
                            href="/auth/login"
                            className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            href="/auth/register"
                            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
