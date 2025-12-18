import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full text-white shadow-lg bg-opacity-40 bg-amber-900">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo / Shop Name */}
                    <div className="flex items-center flex-shrink-0">
                        <h1 className="font-serif text-2xl font-bold tracking-wider">
                            Coffee Buddy
                        </h1>
                    </div>

                    {/* Desktop Menu (Hidden on Mobile) */}
                    <div className="items-center hidden space-x-8 md:flex">
                        <Link to="/home" className="transition duration-300 hover:text-amber-200">Home</Link>
                        <Link to="/about" className="transition duration-300 hover:text-amber-200">About</Link>
                        <Link to="/menu" className="transition duration-300 hover:text-amber-200">Menu</Link>
                        <Link to="/services" className="transition duration-300 hover:text-amber-200">Services</Link>
                        <Link to="/gallery" className="transition duration-300 hover:text-amber-200">Gallery</Link>
                        <Link to="/contact"
                            className="px-4 py-2 font-semibold text-white transition duration-300 rounded-md bg-amber-800 hover:bg-amber-700"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-amber-200 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-amber-700">Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-amber-700">About</a>
                        <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-amber-700">Menu</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-amber-700">Services</a>
                        <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-amber-700">Gallery</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-2 rounded-md bg-amber-900">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;