'use client';

import { loginUser } from '@/actions/user';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
    const [error, setError] = useState('');
    const { setAuth } = useAuth();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const found = await loginUser(formData);
            if (found) {
                setAuth(found);
                router.push('/');
            } else {
                setError('Invalid credential!');
            }
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>

            <button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Login
            </button>
            <div className="my-2 text-red-500">{error}</div>
        </form>
    );
};

export default LoginForm;
