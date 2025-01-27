
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <main className="font-sans bg-gray-900 text-white overflow-x-hidden">
      {/* Navbar with Smooth Scroll */}
      <Navbar />

      {/* Hero Section with Motion Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Hero />
      </motion.section>

      {/* Featured Work Section with Motion Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <FeaturedWork />
      </motion.section>

      {/* Services Section with Hover and Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Services />
      </motion.section>

      {/* Stats Section with Motion Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Stats />
      </motion.section>

      {/* Footer */}
     
    </main>
  );
};

export default Home;
