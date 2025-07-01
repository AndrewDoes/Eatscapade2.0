import React, { useState, useMemo } from 'react';

const initialProducts = [
  { id: 1, name: 'Classic Burger', price: 5.99, category: 'Meals', image: 'https://placehold.co/300x200/FFC0CB/000000?text=Burger' },
  { id: 2, name: 'Cheese Burger', price: 6.49, category: 'Meals', image: 'https://placehold.co/300x200/FFD700/000000?text=Cheese+Burger' },
  { id: 3, name: 'Bacon Burger', price: 7.49, category: 'Meals', image: 'https://placehold.co/300x200/E9967A/000000?text=Bacon+Burger' },
  { id: 4, name: 'Fries', price: 2.99, category: 'Sides', image: 'https://placehold.co/300x200/F0E68C/000000?text=Fries' },
  { id: 5, name: 'Onion Rings', price: 3.49, category: 'Sides', image: 'https://placehold.co/300x200/D2B48C/000000?text=Onion+Rings' },
  { id: 6, name: 'Soda', price: 1.99, category: 'Drinks', image: 'https://placehold.co/300x200/87CEEB/000000?text=Soda' },
  { id: 7, name: 'Milkshake', price: 4.29, category: 'Drinks', image: 'https://placehold.co/300x200/DDA0DD/000000?text=Milkshake' },
  { id: 8, name: 'House Salad', price: 4.99, category: 'Sides', image: 'https://placehold.co/300x200/98FB98/000000?text=Salad' },
  { id: 9, name: 'Spicy Chicken Sandwich', price: 7.99, category: 'Meals', image: 'https://placehold.co/300x200/FFA07A/000000?text=Spicy+Chicken' },
  { id: 10, name: 'Water Bottle', price: 1.29, category: 'Drinks', image: 'https://placehold.co/300x200/ADD8E6/000000?text=Water' },
];

const Products = ({ products=initialProducts, onAddToCart }) => {
    return (
        <div className="grid grid-cols-4 gap-6 overflow-auto">
            {products.map(product => (
                <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-gray-200 flex flex-col overflow-hidden"
                    onClick={() => onAddToCart(product)}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/cccccc/ffffff?text=Error'; }}
                    />
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold text-gray-800">{product.name}</h3>
                        <p className="text-red-500 font-semibold mt-auto pt-2 text-lg">${product.price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;