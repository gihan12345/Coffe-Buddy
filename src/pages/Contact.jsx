import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import serviceImage from '../assets/service.avif';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    // State keys match EmailJS template variables exactly
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                'service_fx180mk',     // ← Replace with your EmailJS Service ID
                'template_lw2yhkd',    // ← Replace with your EmailJS Template ID
                form.current,
                'jxXtttjevF7n0kySO'      // ← Replace with your EmailJS Public Key (User ID)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Thank you! Your message has been sent.');
                    // Reset form fields
                    setFormData({
                        user_name: '',
                        user_email: '',
                        subject: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="bg-stone-50">

            {/* 1. Header Section */}
            <header className="relative py-20 text-center bg-stone-900">
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    <img
                        src={serviceImage}
                        alt="Barista working"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative z-10 max-w-4xl px-6 mx-auto text-white">
                    <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Get in Touch</h1>
                    <p className="text-lg text-stone-200">We'd love to hear from you. Drop by for a cup or send us a message.</p>
                </div>
            </header>

            {/* 2. Contact Info Cards */}
            <section className="relative z-20 px-6 py-16 -mt-10">
                <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
                    {/* Phone & Email */}
                    <div className="p-8 text-center bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-stone-100 text-stone-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 font-serif text-xl font-bold text-stone-900">Talk to Us</h3>
                        <p className="text-stone-600">+94 77 123 4567</p>
                        <p className="text-stone-600">hello@coffeebuddy.com</p>
                    </div>

                    {/* Location */}
                    <div className="p-8 text-center bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-stone-100 text-stone-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 font-serif text-xl font-bold text-stone-900">Visit Us</h3>
                        <p className="text-stone-600">123 Coffee Lane,</p>
                        <p className="text-stone-600">Gampaha, Sri Lanka.</p>
                    </div>

                    {/* Opening Hours */}
                    <div className="p-8 text-center bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-stone-100 text-stone-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="mb-2 font-serif text-xl font-bold text-stone-900">Opening Hours</h3>
                        <p className="text-stone-600">Mon - Fri: 7am - 8pm</p>
                        <p className="text-stone-600">Sat - Sun: 8am - 10pm</p>
                    </div>
                </div>
            </section>

            {/* 3. Form & Map Section */}
            <section className="px-6 py-16">
                <div className="flex flex-col max-w-6xl mx-auto overflow-hidden bg-white shadow-xl rounded-2xl md:flex-row">

                    {/* Left Side: Contact Form */}
                    <div className="w-full p-8 md:w-1/2 md:p-12">
                        <h2 className="mb-6 font-serif text-3xl font-bold text-stone-800">Send a Message</h2>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-stone-700">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 transition border rounded-lg bg-stone-50 border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-stone-700">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 transition border rounded-lg bg-stone-50 border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-stone-700">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 transition border rounded-lg bg-stone-50 border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
                                    placeholder="General Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-stone-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 transition border rounded-lg bg-stone-50 border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full py-3 font-bold text-white transition duration-300 rounded-lg ${isSending
                                        ? 'bg-stone-500 cursor-not-allowed'
                                        : 'bg-stone-800 hover:bg-stone-700'
                                    }`}
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Google Map */}
                    <div className="w-full md:w-1/2 h-96 md:h-auto bg-stone-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.43002660086!2d79.97015407759814!3d7.087268875880436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb7590d64f0f%3A0x644265147e8c326!2sGampaha!5e0!3m2!1sen!2slk!4v1703085000000!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Contact;