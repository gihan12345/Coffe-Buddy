import React from 'react';
import MenuCard from '../components/MenuCard'; // Import the reusable card
import coffe4 from '../assets/coffe4.jpeg'
import coffe7 from '../assets/coffe7.avif'
import coffe15 from '../assets/coffe15.jpeg'
import coffe2 from '../assets/coffe2.jpeg'
import coffe12 from '../assets/coffe12.avif'

const Menu = () => {
    // You can easily add more items to this list later
    const products = [
        { id: 1, name: "Espresso", price: "$3.50", desc: "Rich and bold coffee.", img: coffe4 },
        { id: 2, name: "Cappuccino", price: "$4.50", desc: "Espresso with milk foam.", img: coffe7 },
        { id: 3, name: "Latte", price: "$4.75", desc: "Espresso with steamed milk.", img: coffe12 },
        { id: 4, name: "Mocha", price: "$5.00", desc: "Chocolate flavored latte.", img: coffe2 },
        { id: 5, name: "Croissant", price: "$3.00", desc: "Buttery pastry.", img: coffe15 },
        { id: 6, name: "Cheesecake", price: "$5.50", desc: "Creamy NY style slice.", img: coffe4 },
    ];

    return (
        <section id="menu" className="py-20 bg-amber-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-4xl font-bold text-amber-900">Our Menu</h2>
                    <div className="w-24 h-1 mx-auto bg-amber-600"></div>
                </div>

                {/* The Grid displaying MenuCards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((item) => (
                        <MenuCard
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            description={item.desc}
                            image={item.img}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Menu;