import React from 'react';
import MenuCard from '../components/MenuCard'; // Import the reusable card

const Menu = () => {
    // You can easily add more items to this list later
    const products = [
        { id: 1, name: "Espresso", price: "$3.50", desc: "Rich and bold coffee.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400" },
        { id: 2, name: "Cappuccino", price: "$4.50", desc: "Espresso with milk foam.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
        { id: 3, name: "Latte", price: "$4.75", desc: "Espresso with steamed milk.", img: "https://images.unsplash.com/photo-1570968992193-6e5c92257863?w=400" },
        { id: 4, name: "Mocha", price: "$5.00", desc: "Chocolate flavored latte.", img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400" },
        { id: 5, name: "Croissant", price: "$3.00", desc: "Buttery pastry.", img: "https://images.unsplash.com/photo-1555507036-ab1f40388085?w=400" },
        { id: 6, name: "Cheesecake", price: "$5.50", desc: "Creamy NY style slice.", img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400" },
    ];

    return (
        <section id="menu" className="py-20 bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">Our Menu</h2>
                    <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
                </div>

                {/* The Grid displaying MenuCards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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