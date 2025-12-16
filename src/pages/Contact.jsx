import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hi, my name is ${name}. I want to order ${quantity} of ${item}.`;
        const whatsappUrl = `https://wa.me/14151234567?text=${encodeURIComponent(message)}`; // Replace with actual WhatsApp number
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Contact / Ordering</h2>
            <p className="mb-2">Address: 475 Pine St, San Francisco, CA 94104</p>
            <p className="mb-2">Email: info@groksbrew.com</p>
            <p className="mb-4">Phone: (415) 123-4567</p>

            {/* Google Map Embed */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019838794935!2d-122.402718284681!3d37.792363979757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f1a6d5b4d%3A0x4a501367f076ad03!2sStarbucks!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mb-4"
            ></iframe>

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Place an Order via WhatsApp</h3>
                <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Order Item:</label>
                    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Quantity:</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full p-2 border rounded" required min="1" />
                </div>
                <button type="submit" className="bg-amber-800 text-white px-4 py-2 rounded">Send Order via WhatsApp</button>
            </form>
        </div>
    );
};

export default Contact;