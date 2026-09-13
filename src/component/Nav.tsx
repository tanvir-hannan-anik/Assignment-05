import { useState } from "react";
import logoText from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container mx-auto px-5 py-5 relative">

            <div className="flex items-center justify-between">

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5"
                >
                    <span className="w-5 h-0.5 bg-gray-800"></span>
                    <span className="w-5 h-0.5 bg-gray-800"></span>
                    <span className="w-5 h-0.5 bg-gray-800"></span>
                </button>

                <div className="md:flex-1 flex justify-center md:justify-start">
                    <img
                        src={logoText}
                        alt="Dev Stack"
                        className="w-28"
                    />
                </div>

                <div className="hidden md:block">
                    <ul className="flex gap-8 items-center">
                        <li>
                            <a href="#" className="text-sm text-gray-700 hover:text-pink-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-700 hover:text-pink-500">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-700 hover:text-pink-500">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-700 hover:text-pink-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-700 hover:text-pink-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-2 md:flex-1 md:justify-end">

                    <button className="hidden sm:block text-sm px-3 py-2">
                        Sign In
                    </button>

                    <button className="bg-[#D91B7E] text-white text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-full">
                        Sign Up
                    </button>

                </div>

            </div>

            {menuOpen && (
                <div className="md:hidden absolute left-5 right-5 top-full bg-white border border-gray-100 rounded-lg shadow-lg z-50">

                    <ul className="flex flex-col">

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>
            )}

        </nav>
    );
};

export default Nav;