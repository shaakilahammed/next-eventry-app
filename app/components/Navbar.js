import Logo from '@/public/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AuthInfo from './AuthInfo';
const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image src={Logo} alt="Eventry" className="h-[45px]" />
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li>
                        <AuthInfo />
                    </li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
