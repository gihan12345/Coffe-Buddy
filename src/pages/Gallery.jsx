import React, { useState } from 'react';
import { galleryData } from '../data/Gallery'; // Make sure path is correct
import gallery1 from '../assets/gallery1.jpeg';

const Gallery = () => {
    // State to handle the Lightbox (Modal)
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Header Section */}
            <header className="relative py-24 text-center bg-stone-900">
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    <img
                        src={gallery1}
                        alt="Barista working"
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
                    Our Gallery
                </h1>
                <p className="text-lg text-stone-300">
                    Snapshots of our daily brew and cozy atmosphere.
                </p>
            </header>

            {/* Masonry Grid Layout */}
            <div className="container px-4 py-16 mx-auto">
                <div className="gap-6 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                    {galleryData.map((image) => (
                        <div
                            key={image.id}
                            className="mb-6 overflow-hidden break-inside-avoid rounded-xl group"
                            onClick={() => setSelectedImage(image)} // Open Modal on Click
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full ${image.heightClass} object-cover cursor-pointer transition-transform duration-500 transform group-hover:scale-110 shadow-lg`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- LIGHTBOX MODAL (Shows when an image is clicked) --- */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)} // Close when clicking background
                >
                    <div className="relative max-w-5xl max-h-screen">

                        {/* Close Button */}
                        <button
                            className="absolute right-0 text-4xl font-bold text-white transition -top-12 hover:text-stone-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>

                        {/* Large Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[85vh] w-auto rounded-lg shadow-2xl border-4 border-white/10"
                        />

                        {/* Caption */}
                        <p className="mt-4 font-serif text-lg tracking-wide text-center text-white">
                            {selectedImage.alt}
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Gallery;