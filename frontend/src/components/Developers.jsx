import React from "react";

const developers = [
  {
    name: "Piyush Papreja",
    image: "/piyu.jpg",
    role: "Team Leader | Technical Strategist",
    quote:
    "I am a passionate developer and designer dedicated to crafting seamless, visually appealing, and highly functional digital experiences.",
  },
  {
    name: "Pratham Chadda",
    image: "/pratham.jpg",
    role: "Technical Development | Lead Engineer",
    quote:
     "I specialize in turning visionary ideas into sleek, high-performance digital products that users love to engage with.",
  },
  {
    name: "Parv",
    image: "/parv.jpg",
    role: "UI/UX | Researcher",
    quote:
      "Passionate about blending design and technology, I create engaging, user-friendly experiences that drive impact.",
  },
  {
    name: "Raghav Garg",
    image: "/raghav.jpg",
    role: "Documentation & Deployement",
    quote:
      "Driven by innovation and precision, I develop seamless, visually captivating, and user-centric digital experiences.",
  }
];

const Developers = () => {
  return (
    <section id="developers" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Meet the Developers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-green-700">{dev.name}</h3>
              {dev.role && <p className="text-sm text-green-600 mb-2">{dev.role}</p>}
              <p className="text-gray-600 text-sm">{dev.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
