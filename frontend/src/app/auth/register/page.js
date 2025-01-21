"use client";

import React, { useState } from 'react';
import AuthLayout from '../../../components/layout/AuthLayout';
import Loader from '../../../components/common/Loader';
import { useAuth } from '../../../hooks/useAuth';

const RegisterPage = () => {
    const { registerUser } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({}); // Store errors by field name
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({}); // Clear previous errors
        setSuccess(''); // Clear previous success messages

        try {
            const response = await registerUser(formData); // Call the registerUser function from the hook
            setSuccess('User registered successfully!');
            console.log('Success:', response); // For debugging purposes
        } catch (err) {
            // If error contains validation errors from the server
            if (err.error && Array.isArray(err.error)) {
                const errorFields = {};
                // Map errors and set them by field name
                err.error.forEach((e) => {
                    errorFields[e.path] = e.msg; // Set error message for each field
                });
                setError(errorFields); // Store the error messages in state
            } else {
                setError({ general: 'Something went wrong. Please try again.' });
            }
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <AuthLayout>
            <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
            {loading && <Loader />} {/* Show loader if API call is in progress */}
            {success && <p className="text-green-600 text-center mb-4">{success}</p>} {/* Display success message */}

            <form onSubmit={handleSubmit}>
                {/* Full Name Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full p-3 border rounded"
                    />
                    {error.name && <p className="text-red-600 text-sm">{error.name}</p>} {/* Show error for 'name' */}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 border rounded"
                    />
                    {error.email && <p className="text-red-600 text-sm">{error.email}</p>} {/* Show error for 'email' */}
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-3 border rounded"
                    />
                    {error.password && <p className="text-red-600 text-sm">{error.password}</p>} {/* Show error for 'password' */}
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-[#7da640] text-white p-3 rounded hover:bg-green-700 transition"
                    disabled={loading} // Disable button while loading
                >
                    Register
                </button>
            </form>

            {/* General Error */}
            {error.general && <p className="text-red-600 text-center mt-4">{error.general}</p>}

            <p className="text-center mt-4 text-gray-600">
                Already have an account? <a href="/auth/login" className="text-[#7da640]">Login</a>
            </p>
        </AuthLayout>
    );
};

export default RegisterPage;
