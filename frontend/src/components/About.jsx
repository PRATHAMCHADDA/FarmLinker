import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-green-50 text-gray-800"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div
          className="w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/farmin.jpg"
            alt="About FarmLinker"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 lg:pl-12"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>FarmLinker</strong>, we are redefining agriculture by integrating AI-driven tools and smart technologies for farmers, suppliers, and agri-startups. We’re passionate about making farming smarter, more efficient, and sustainable for everyone.
          </p>
          <p className="text-md text-gray-600 mt-4">
            From seed selection to labor hire, our all-in-one platform supports the entire ecosystem. Whether you're a smallholder or a large agri-business, FarmLinker connects you to what you need — fast, fair, and seamlessly.
          </p>

          <div className="mt-6 flex gap-6 text-green-700 text-2xl">
            <a href="#" className="hover:text-green-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-green-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500 transition"><FaTwitter /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
