import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const MenuPage = () => {
    // Sample menu items
    const menuItems = [
        {
            name: 'Dish 1',
            description: 'A delightful dish made with fresh ingredients and a blend of spices, served with a side of seasonal vegetables.',
            price: '$10.99',
            image: '/gallery/grid5/pic1.jpg', // Update with your image paths
        },
        {
            name: 'Dish 2',
            description: 'A savory dish packed with flavor and spice, featuring grilled chicken and a tangy sauce.',
            price: '$12.99',
            image: '/gallery/grid5/pic2.jpg', // Update with your image paths
        },
        {
            name: 'Dish 3',
            description: 'A classic favorite that everyone loves, made with tender beef and rich gravy.',
            price: '$11.99',
            image: '/gallery/grid5/pic3.jpg', // Update with your image paths
        },
        {
            name: 'Dish 4',
            description: 'An exquisite dish that brings culinary art to life, beautifully plated with fresh herbs.',
            price: '$14.99',
            image: '/gallery/grid5/pic4.jpg', // Update with your image paths
        },
        {
            name: 'Dish 5',
            description: 'A vegetarian delight, featuring a medley of grilled vegetables and a flavorful pesto sauce.',
            price: '$9.99',
            image: '/gallery/grid5/pic5.jpg', // Update with your image paths
        },
        {
            name: 'Dish 6',
            description: 'Seafood pasta tossed in a creamy sauce with a touch of garlic and lemon zest.',
            price: '$13.99',
            image: '/gallery/grid5/pic6.jpg', // Update with your image paths
        },
        {
            name: 'Dish 7',
            description: 'A hearty soup made with fresh ingredients, perfect for a chilly day.',
            price: '$7.99',
            image: '/gallery/grid5/pic7.jpg', // Update with your image paths
        },
        {
            name: 'Dish 8',
            description: 'A rich and creamy dessert that melts in your mouth, topped with seasonal fruits.',
            price: '$5.99',
            image: '/gallery/grid5/pic8.jpg', // Update with your image paths
        },
    ];

    return (
        <div>
            <Header />
            <section className="relative text-black text-center py-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url("background/pic1.png")', // Replace with your actual background image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for contrast */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
                    <p className="text-lg text-white mb-6">Discover our delicious offerings crafted with love!</p>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item, index) => (
                        <Link href={`/menu/${index}`} key={index}>
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="rounded-lg mb-4 h-48 object-cover w-full"
                            />
                            <h3 className="font-bold text-xl mb-2" style={{ color: 'rgb(239, 68, 68)' }}>{item.name}</h3>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <p className="text-gray-700 font-semibold mt-2">{item.price}</p>
                            <button
                                className="bg-[rgb(239,68,68)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 mt-4"
                            >
                                Add to Cart
                            </button>
                        </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default MenuPage;
