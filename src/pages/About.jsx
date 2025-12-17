import React from 'react';
import { Link } from 'react-router-dom';
import coffe2 from '../assets/coffe2.avif'
import coffe3 from '../assets/coffe3.jpeg'

const About = () => {
    return (
        <div className="bg-stone-50 text-stone-800">

            {/* 1. Header Section */}
            <header className="relative py-20 text-center bg-stone-900">
                <div className="absolute inset-0 overflow-hidden opacity-40">
                    {/* Background Image for Header */}
                    <img
                        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"
                        alt="Coffee Background"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative z-10 max-w-4xl px-6 mx-auto">
                    <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-6xl">
                        Our Journey
                    </h1>
                    <p className="text-xl text-stone-200">
                        From a humble bean to your daily ritual.
                    </p>
                </div>
            </header>

            {/* 2. The Beginning (Text Left, Image Right) */}
            <section className="px-6 py-20">
                <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-stone-900">
                            Where It All Started
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed text-stone-600">
                            It began in 2015 with a simple idea: coffee should be more than just fuel; it should be a moment of pause in a chaotic world.
                            Our founder, Elias, spent three years traveling through the highlands of Ethiopia and the valleys of Colombia, learning the
                            ancient art of cultivation directly from the farmers.
                        </p>
                        <p className="text-lg leading-relaxed text-stone-600">
                            Returning home with a suitcase full of beans and a heart full of dreams, he opened our first tiny shop in the corner of an
                            old bookstore. It wasn't fancy, but the aroma was unmistakable.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1">
                        <img
                            src={coffe2}
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* 3. The Beans (Image Left, Text Right) - Gray Background */}
            <section className="px-6 py-20 bg-stone-100">
                <div className="flex flex-col-reverse items-center max-w-6xl gap-12 mx-auto md:flex-row">
                    {/* Image */}
                    <div className="flex-1">
                        <img
                            src={coffe3}
                            alt="Roasting coffee beans"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-stone-900">
                            Ethically Sourced, Expertly Roasted
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed text-stone-600">
                            We believe great coffee starts at the source. That's why we partner directly with small-lot farmers, ensuring fair wages
                            and sustainable farming practices. Every bean is hand-picked at peak ripeness.
                        </p>
                        <p className="text-lg leading-relaxed text-stone-600">
                            Once they arrive at our roastery, we roast in small batches. This allows us to control the flavor profile precisely,
                            bringing out the hidden notes of chocolate, fruit, or nuttiness inherent in every origin.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. The Community (Text Left, Image Right) */}
            <section className="px-6 py-20">
                <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-stone-900">
                            More Than Just a Cafe
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed text-stone-600">
                            Today, we are proud to be a gathering place for our community. Whether it's the freelancers working in the corner,
                            friends catching up over a latte, or a first date happening at the window seat, our shop is filled with life.
                        </p>
                        <p className="text-lg leading-relaxed text-stone-600">
                            We host weekly cupping sessions and brewing workshops because we want to share our passion with you. Come in,
                            pull up a chair, and become part of our story.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80"
                            alt="People enjoying coffee"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* 5. Footer / Call to Action */}
            <section className="py-16 text-center text-white bg-stone-900">
                <h2 className="mb-6 font-serif text-3xl md:text-4xl">Taste the Difference</h2>
                <p className="mb-8 text-lg text-stone-300">Stop by today and let us pour you a cup.</p>
                <Link to="/menu" className="px-8 py-3 font-semibold transition bg-white rounded-full text-stone-900 hover:bg-stone-200">
                    View Menu
                </Link>
            </section>

        </div>
    );
};

export default About;