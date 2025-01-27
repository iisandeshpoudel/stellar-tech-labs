import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stellar-darker/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
          <svg
  className="w-32 h-32 md:w-12 md:h-12 mx-auto" // Adjusted to better fit the navbar
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  fill="currentColor"
>
  <image
    href="./lab.svg" // Path to your SVG in the public folder
    x="0"
    y="0"
    width="100"
    height="100" // Ensuring the image fills the SVG properly
  />
</svg>


          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link hover:text-stellar-teal transition duration-300">Home</Link>
            <Link to="/about" className="nav-link hover:text-stellar-teal transition duration-300">About</Link>
            <Link to="/internship" className="nav-link hover:text-stellar-teal transition duration-300">Internship</Link>
            <Link to="/careers" className="nav-link hover:text-stellar-teal transition duration-300">Careers</Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-stellar-teal hover:bg-stellar-teal-dark text-black w-full btn-primary rounded-md shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stellar-teal"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-stellar-darker/95 backdrop-blur-lg shadow-lg border-t border-stellar-gray-light"
        >
          <div className="px-4 pt-4 pb-6 space-y-4 text-center">
            <Link
              to="/"
              className="block text-lg font-medium text-gray-200 hover:text-stellar-teal transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-lg font-medium text-gray-200 hover:text-stellar-teal transition duration-300"
            >
              About
            </Link>
            <Link
              to="/internship"
              className="block text-lg font-medium text-gray-200 hover:text-stellar-teal transition duration-300"
            >
              Internship
            </Link>
            <Link
              to="/careers"
              className="block text-lg font-medium text-gray-200 hover:text-stellar-teal transition duration-300"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block mt-4 px-6 py-3 text-lg font-medium text-white bg-stellar-teal hover:bg-stellar-teal-dark rounded-md shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
