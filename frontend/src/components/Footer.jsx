const Footer = () => {
    return (
      <footer className="bg-green-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2025 FarmLinker</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  