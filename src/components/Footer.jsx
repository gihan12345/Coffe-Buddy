import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300">

            {/* Top Section: Main Content */}
            <div className="max-w-6xl px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Column 1: Brand & About */}
                    <div>
                        <h3 className="mb-4 font-serif text-2xl font-bold text-white">Coffee Buddy</h3>
                        <p className="mb-4 text-sm leading-relaxed text-stone-400">
                            Crafting the perfect cup since 2015. We source the finest beans to bring you a moment of joy in every sip.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="transition hover:text-white">Our Story</Link></li>
                            <li><Link to="/menu" className="transition hover:text-white">Menu</Link></li>
                            <li><Link to="/contact" className="transition hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Visit Us</h4>
                        <ul className="space-y-3 text-sm text-stone-400">
                            <li className="flex items-start gap-3">
                                {/* Location Icon */}
                                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>123 Coffee Lane,<br />Gampaha, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                {/* Phone Icon */}
                                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+94 77 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                {/* Mail Icon */}
                                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>hello@coffeebuddy.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Stay Updated</h4>
                        <p className="mb-4 text-sm text-stone-400">Subscribe for the latest brews and news.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded text-stone-800 bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500"
                            />
                            <button className="px-4 py-2 font-semibold text-white transition rounded bg-stone-700 hover:bg-stone-600">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Bottom Section: Copyright & Socials */}
            <div className="border-t border-stone-800">
                <div className="flex flex-col items-center justify-between max-w-6xl px-6 py-6 mx-auto md:flex-row">
                    <p className="text-sm text-stone-500">
                        &copy; {new Date().getFullYear()} Coffee Buddy. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex mt-4 space-x-4 md:mt-0">
                        <a href="#" className="transition text-stone-400 hover:text-white"><span className="sr-only">Facebook</span>FB</a>
                        <a href="#" className="transition text-stone-400 hover:text-white"><span className="sr-only">Instagram</span>IG</a>
                        <a href="#" className="transition text-stone-400 hover:text-white"><span className="sr-only">Twitter</span>TW</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;