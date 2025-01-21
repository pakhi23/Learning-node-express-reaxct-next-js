// components/MenuHighlights.js
import React from 'react';
import Image from 'next/image';

const MenuHighlights = () => {
    const dishes = [
        {
            name: "Dish 1",
            image: "/gallery/grid/pic1.jpg", // Update with your actual image path
            detail: "A delicious blend of flavors."
        },
        {
            name: "Dish 2",
            image: "/gallery/grid/pic2.jpg", // Update with your actual image path
            detail: "A classic favorite with a twist."
        },
        {
            name: "Dish 3",
            image: "/gallery/grid/pic3.jpg", // Update with your actual image path
            detail: "Fresh ingredients, expertly prepared."
        },
        {
            name: "Dish 4",
            image: "/gallery/grid/pic4.jpg", // Update with your actual image path
            detail: "A gourmet experience in every bite."
        }
    ];

    return (
        <section className="py-16 bg-[#f4fde7] text-black w-full">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Menu Highlights</h2>
                <div className="flex justify-center space-x-8">
                    {dishes.map((dish, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <Image
                                src={dish.image}
                                alt={dish.name}
                                width={"50"}
                                height={"300"}
                                className="rounded-lg mb-4 w-full h-auto object-cover" // Use h-auto for height auto
                            />
                            <h3 className="font-bold text-xl">{dish.name}</h3>
                            <p className="text-gray-600 mb-4">{dish.detail}</p>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 "
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuHighlights;
