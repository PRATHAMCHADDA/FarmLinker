import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Sunflower Seeds',
    price: 120,
    image: '/sunflowerseeds.jpg',
  },
  {
    id: 2,
    name: 'Chia Seeds',
    price: 200,
    image: '/chiaseeds.jpg',
  },
  {
    id: 3,
    name: 'Black Pepper',
    price: 150,
    image: '/blackpepper.jpg',
  },
  {
    id: 4,
    name: 'Fertilizer',
    price: 1150,
    image: '/fertilizer.webp',
  },
  {
    id: 5,
    name: 'Corn',
    price: 250,
    image: '/corn.jpg',
  },
  {
    id: 6,
    name: 'Spray Pump',
    price: 5000,
    image: '/spray.jpg',
  }
];

const Shop = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-lime-50 to-green-100">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">🛒 Shop Agriculture Products</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
