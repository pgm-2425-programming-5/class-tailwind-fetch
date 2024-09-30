// app/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white shadow fixed w-full z-10">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-xl font-bold text-gray-800">MijnWebsite
                        </Link>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="#home" className="text-gray-600 hover:text-gray-800">Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#features" className="text-gray-600 hover:text-gray-800">Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
