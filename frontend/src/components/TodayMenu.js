
import React from 'react';
import Image from 'next/image';

const TodayMenu = () => {
    const dishes = [
        {
            name: "Dish 1",
            image: "/gallery/grid2/pic1.jpg", // Update with your actual image path
            detail: "A delicious blend of flavors."
        },
        {
            name: "Dish 2",
            image: "/gallery/grid2/pic2.jpg", // Update with your actual image path
            detail: "A classic favorite with a twist."
        },
        {
            name: "Dish 3",
            image: "/gallery/grid2/pic3.jpg", // Update with your actual image path
            detail: "Fresh ingredients, expertly prepared."
        },
        {
            name: "Dish 4",
            image: "/gallery/grid2/pic4.jpg", // Update with your actual image path
            detail: "A gourmet experience in every bite."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Todays Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dishes.map((dish, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <Image
                                src={dish.image}
                                alt={dish.name}
                                width={50}
                                height={50}
                                className="rounded-lg mb-4 w-full h-auto object-cover"
                            />
                            <h3 className="font-bold text-xl">{dish.name}</h3>
                            <p className="text-gray-600">{dish.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TodayMenu;
