// components/TestimonialsSection.js
import React from 'react';

const TestimonialsSection = () => {
    return (
        <section className="py-16 bg-white w-full mb-16"> {/* Add mb-16 for bottom margin */}
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">What Our Guests Say</h2>
                <div className="flex justify-center space-x-8">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
                        <p className="text-gray-700 italic mb-2">
                        &quot;The best dining experience  I&apos;ve ever had!&quot;
                        </p>
                        <p className="font-bold">- Guest Name</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-1/3">
                        <p className="text-gray-700 italic mb-2">
                        &quot;Absolutely loved the food and ambiance.&quot;
                        </p>
                        <p className="font-bold">- Guest Name</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
