import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const HomePage = () => {
    
    // Data for the counts (Easy to edit)
    const stats = [
        { label: "Happy Customers", value: "15k+" },
        { label: "Cups Served", value: "85k+" },
        { label: "Years of Brewing", value: "8+" },
        { label: "Bean Varieties", value: "25+" },
    ];

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

                    {/* 'Our Story' Button */}
                    <Link to="/about" className="inline-block px-8 py-3 mb-16 font-medium text-white transition duration-300 rounded-full bg-stone-800 hover:bg-stone-700">
                        Our Story
                    </Link>

                    {/* --- NEW STATS SECTION --- */}
                    <div className="pt-12 border-t border-stone-200">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <span className="font-serif text-4xl font-bold text-stone-800">
                                        {stat.value}
                                    </span>
                                    <span className="mt-2 text-sm font-medium tracking-wider uppercase text-stone-500">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    );
};

export default HomePage;