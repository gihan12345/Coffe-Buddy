import React from 'react';

// This component accepts properties (props) so the content can change
const MenuCard = ({ image, name, price, description }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">

            {/* 1. Product Image */}
            <div className="h-48 overflow-hidden relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* 2. Product Details */}
            <div className="p-5 flex flex-col flex-grow">

                {/* Header: Name & Price */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                        {name}
                    </h3>
                    <span className="text-amber-700 font-bold bg-amber-50 px-2 py-1 rounded text-sm whitespace-nowrap ml-2">
                        {price}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 flex-grow">
                    {description}
                </p>

                {/* Order Button */}
                <button className="w-full py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors duration-300 mt-auto">
                    Add to Order
                </button>
            </div>

        </div>
    );
};

export default MenuCard;