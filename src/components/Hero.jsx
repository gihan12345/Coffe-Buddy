import { Link } from 'react-router-dom';
import heroimage from '../assets/hero.jpeg'

const Hero = () => {
    return (
        <section id="home" className="relative flex items-center justify-center h-screen">

            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 text-center text-white">
                <h1 className="mb-4 font-serif text-5xl font-bold tracking-wide md:text-7xl">
                    Coffee Buddy
                </h1>
                <p className="mb-8 text-xl font-light text-gray-200 md:text-2xl">
                    Brewed Fresh Daily. Tasted by Heart.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col justify-center gap-4 md:flex-row">
                    <Link to="/menu"
                        className="px-8 py-3 font-semibold text-white transition duration-300 transform rounded-full bg-amber-600 hover:bg-amber-700 hover:scale-105"
                    >
                        View Menu
                    </Link>
                    <a
                        href="#contact"
                        className="px-8 py-3 font-semibold text-white transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black"
                    >
                        Order Now
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;