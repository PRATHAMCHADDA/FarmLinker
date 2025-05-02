import { motion } from "framer-motion";
// import seed from "../assets/"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Empowering <span className="text-yellow-300">Farmers</span> with Smart Solutions
          </h1>
          <p className="text-lg mb-6 text-green-100">
            FarmLinker bridges technology and agriculture to increase productivity and sustainability.
          </p>
          <div className="flex gap-4">
            <a
              href="#menu"
              className="bg-yellow-400 text-green-900 font-bold py-2 px-6 rounded-full shadow hover:bg-yellow-300 transition"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-green-700 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mb-10 lg:mb-0"
        >
          <img
            src="/seed.jpg"
            alt="Farm Hero"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
