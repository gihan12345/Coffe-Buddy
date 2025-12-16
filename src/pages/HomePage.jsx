import { Link } from "react-router-dom";
import Hero from "../components/Hero";


const HomePage = () => {
    return (
        <div>
            <Hero />

            <section className="px-6 py-16 bg-stone-50">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Heading */}
                <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-stone-800">
                    Brewing Passion in Every Cup
                </h2>
                
                {/* Description Text */}
                <p className="mb-8 text-lg leading-relaxed md:text-xl text-stone-600">
                    Welcome to our cozy corner of the world. We believe that coffee is more than just a drink; 
                    it's an experience. Sourced from the finest artisan growers and roasted to perfection, 
                    our beans tell a story of tradition and quality. Whether you're here for a morning pick-me-up 
                    or a relaxing afternoon, we have the perfect blend for you.
                </p>

                {/* Optional: 'Read More' Button */}
                <Link to="/about" className="px-8 py-3 mt-8 font-medium text-white transition duration-300 rounded-full bg-stone-800 hover:bg-stone-700">
                    Our Story
                </Link>
            </div>
        </section>

        </div>
        
    );
};

export default HomePage;