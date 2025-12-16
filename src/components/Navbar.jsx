import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-amber-900 text-white shadow-lg fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo / Shop Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold tracking-wider font-serif">
                            Coffee Buddy
                        </h1>
                    </div>

                    {/* Desktop Menu (Hidden on Mobile) */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/home" className="hover:text-amber-200 transition duration-300">Home</Link>
                        <Link to="/about" className="hover:text-amber-200 transition duration-300">About</Link>
                        <Link to="/menu" className="hover:text-amber-200 transition duration-300">Menu</Link>
                        <a href="#services" className="hover:text-amber-200 transition duration-300">Services</a>
                        <a href="#gallery" className="hover:text-amber-200 transition duration-300">Gallery</a>
                        <a href="#contact" className="bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-md transition duration-300">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-amber-200 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-amber-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-amber-700 rounded-md">Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-amber-700 rounded-md">About</a>
                        <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-amber-700 rounded-md">Menu</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-amber-700 rounded-md">Services</a>
                        <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-amber-700 rounded-md">Gallery</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-amber-900 rounded-md mt-2">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;