import React from "react";

const Menu = () => {
  return (
    <section id="menu" className="p-12">
      <h2 className="text-3xl text-center font-bold mb-6">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/corianderseeds.jpg" alt="Coriander Seeds" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Coriander Seeds</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/sunflowerseeds.jpg" alt="Sunflower Seeds" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Sunflower Seeds</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/chiaseeds.jpg" alt="Chia Seeds" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Chia Seeds</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/corn.jpg" alt="Corn" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Corn</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/blackpepper.jpg" alt="Black Pepper" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Black Pepper</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/pink.jpg" alt="Pink Pepper" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold">Pink Pepper</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
