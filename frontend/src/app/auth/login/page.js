'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js का useRouter import करें
import AuthLayout from '../../../components/layout/AuthLayout';
import { login } from '../../../services/auth.service';

const LoginPage = () => {
    const router = useRouter(); // useRouter का उपयोग करें

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await login(formData.email, formData.password);
            console.log('API Response:', response);

            if (response.success) {
                // alert(response.message);
                // sessionStorage.setItem('token', response.data.token);
                //   localStorage.setItem('token', response.data.token);
                document.cookie = `token=${response.data.token}; path=/; HttpOnly;`; // Secure cookie setup


                // Dashboard पर रीडायरेक्ट करें
                router.push('/dashboard');
            } else {
                setErrors(response.errors || {});
            }
        } catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                generic: 'Something went wrong. Please try again.',
            }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    className="w-full p-3 mb-4 border rounded"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    className="w-full p-3 mb-6 border rounded"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                {errors.generic && <p className="text-red-500 text-sm mb-4">{errors.generic}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#7da640] text-white p-3 rounded hover:bg-green-700 transition"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;
