'use client';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthInfo = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        setAuth(null);
        router.push('/login');
    };

    return auth ? (
        <>
            <span className="mx-2">Hello, {auth?.name}</span>
            <span className="mx-1">|</span>
            <span className="cursor-pointer" onClick={handleLogout}>
                Logout
            </span>
        </>
    ) : (
        <Link href="/login">Login</Link>
    );
};

export default AuthInfo;
