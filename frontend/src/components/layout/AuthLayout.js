
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4fde7]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
