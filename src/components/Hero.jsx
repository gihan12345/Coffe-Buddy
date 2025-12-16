import { Link } from 'react-router-dom';
import heroimage from '../assets/hero.avif'

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center">

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
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif tracking-wide">
                    Coffee Buddy
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
                    Brewed Fresh Daily. Tasted by Heart.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/menu"
                        className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105"
                    >
                        View Menu
                    </Link>
                    <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition duration-300"
                    >
                        Order Now
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;