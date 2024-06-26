import AuthProvider from '@/providers/AuthProvider';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Eventry - Home',
    description: 'Users to discover events in their vicinity',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Navbar />
                    <main className="py-8">{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
