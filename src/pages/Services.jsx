import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import serviceImage from '../assets/service.avif';

const Services = () => {

    // 1. State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        guests: '1 Person' // Default value
    });

    // 2. Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle Form Submission (Send to WhatsApp)
    const handleReservation = (e) => {
        e.preventDefault(); // Stop page reload

        // --- CONFIGURATION ---
        // REPLACE THIS WITH YOUR REAL WHATSAPP NUMBER (Start with 94 for Sri Lanka, no + sign)
        const businessPhoneNumber = "94771344076";

        // Create the message text
        const message = `Hello, I would like to make a table reservation at Coffee Buddy.%0A%0A` +
            `👤 *Name:* ${formData.name}%0A` +
            `📞 *Phone:* ${formData.phone}%0A` +
            `📅 *Date:* ${formData.date}%0A` +
            `☕ *Guests:* ${formData.guests}`;

        // Generate the WhatsApp URL
        const whatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${message}`;

        // Open in a new tab
        window.open(whatsappUrl, '_blank');
    };

    const services = [
        {
            id: 1,
            title: "Artisan Coffee Bar",
            description: "Experience our full menu of espresso-based drinks, pour-overs, and cold brews, all crafted by expert baristas.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            )
        },
        {
            id: 2,
            title: "Fresh Pastries & Snacks",
            description: "Daily baked goods ranging from croissants to gluten-free muffins, perfect for pairing with your morning brew.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
            )
        },
        {
            id: 3,
            title: "High-Speed WiFi & Work",
            description: "A quiet, comfortable environment with reliable fiber internet, ample power outlets, and ergonomic seating.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
            )
        },
        {
            id: 4,
            title: "Coffee Brewing Workshops",
            description: "Join our weekend classes to learn the art of pour-over, latte art, and bean selection from our head roaster.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            )
        }
    ];

    return (
        <div className="bg-stone-50">

            {/* 1. Header Section */}
            <header className="relative py-24 text-center bg-stone-900">
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    <img
                        src={serviceImage}
                        alt="Barista working"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative z-10 max-w-4xl px-6 mx-auto text-white">
                    <h1 className="mb-4 font-serif text-5xl font-bold md:text-6xl">Our Services</h1>
                    <p className="text-xl text-stone-200">More than just a cup of coffee.</p>
                </div>
            </header>

            {/* 2. Service Cards Grid */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service) => (
                            <div key={service.id} className="p-8 transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2">
                                <div className="inline-flex items-center justify-center p-3 mb-6 rounded-lg bg-stone-100 text-stone-800">
                                    {service.icon}
                                </div>
                                <h3 className="mb-3 font-serif text-xl font-bold text-stone-900">{service.title}</h3>
                                <p className="leading-relaxed text-stone-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Description Section */}
            <section className="relative py-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80"
                        alt="Cozy Coffee Shop Interior"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-stone-900/70"></div>
                </div>

                <div className="relative z-10 max-w-4xl px-6 mx-auto text-center text-white">
                    <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                        Crafted for Your Comfort
                    </h2>
                    <p className="text-lg leading-relaxed text-stone-200">
                        At Coffee Buddy, we understand that a cafe is more than a place to grab a drink—it’s a sanctuary.
                        Whether you need a quiet corner to finish a project, a warm space to catch up with old friends, or simply
                        a moment of solitude with a perfect cappuccino, our services are designed around you.
                        We take pride in our attention to detail, from the speed of our WiFi to the smile that greets you at the door.
                    </p>
                </div>
            </section>

            {/* 4. Table Reservation Form */}
            <section className="px-6 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="mb-2 font-serif text-3xl font-bold text-stone-800">Reserve a Table</h2>
                    <p className="mb-10 text-stone-600">Ensure your favorite spot is waiting for you.</p>

                    {/* Added onSubmit handler */}
                    <form onSubmit={handleReservation} className="p-8 bg-white shadow-xl rounded-2xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="text-left">
                                <label className="block mb-2 text-sm font-medium text-stone-700">Name</label>
                                <input
                                    type="text"
                                    name="name" // Important for state
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stone-500 border-stone-300 focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="text-left">
                                <label className="block mb-2 text-sm font-medium text-stone-700">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stone-500 border-stone-300 focus:outline-none"
                                    placeholder="+94 77 ..."
                                />
                            </div>
                            <div className="text-left">
                                <label className="block mb-2 text-sm font-medium text-stone-700">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stone-500 border-stone-300 focus:outline-none"
                                />
                            </div>
                            <div className="text-left">
                                <label className="block mb-2 text-sm font-medium text-stone-700">Guests</label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-stone-500 border-stone-300 focus:outline-none"
                                >
                                    <option value="1 Person">1 Person</option>
                                    <option value="2 People">2 People</option>
                                    <option value="3 People">3 People</option>
                                    <option value="4+ People">4+ People</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3 mt-8 font-bold text-white transition rounded-lg bg-stone-800 hover:bg-stone-700">
                            Confirm Reservation via WhatsApp
                        </button>
                        <button type="submit" className="w-full py-3 mt-4 font-bold text-white transition rounded-lg bg-stone-500 hover:bg-stone-700">
                            Clear form
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Services;