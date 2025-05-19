import React from 'react';

const laborData = [
  {
    id: 1,
    name: 'Ramu Kumar',
    skill: 'Plumber',
    experience: '5 years',
    location: 'Chandigarh',
    image: '/ramu.jpg',
  },
  {
    id: 2,
    name: 'Sita Devi',
    skill: 'Electrician',
    experience: '3 years',
    location: 'Panchkula',
    image: '/sita.jpg',
  },
  {
    id: 3,
    name: 'Mohan Lal',
    skill: 'Carpenter',
    experience: '7 years',
    location: 'Zirakpur',
    image: '/mohan.jpg',
  },
  {
    id: 4,
    name: 'Geeta Rani',
    skill: 'Painter',
    experience: '2 years',
    location: 'Mohali',
    image: '/geeta.jpg',
  },
  {
    id: 5,
    name: 'Ajay Singh',
    skill: 'Welder',
    experience: '4 years',
    location: 'Ambala',
    image: '/ajay.jpg',
  },
  {
    id: 6,
    name: 'Nisha Kumari',
    skill: 'Mason',
    experience: '6 years',
    location: 'Patiala',
    image: '/nisha.jpg',
  },
];

const LaborList = () => {
  return (
    <section className="bg-gradient-to-b from-white via-lime-50 to-green-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">👷‍♂️ Available Labour</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {laborData.map((labor) => (
          <div
            key={labor.id}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={labor.image}
              alt={labor.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-green-800">{labor.name}</h3>
              <p className="text-gray-700">🛠️ <strong>Skill:</strong> {labor.skill}</p>
              <p className="text-gray-600">📅 <strong>Experience:</strong> {labor.experience}</p>
              <p className="text-gray-600">📍 <strong>Location:</strong> {labor.location}</p>
              <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
                Hire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaborList;
