import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react";

const handleClick = () => {
  const navigate = useNavigate();
  navigate('/about'); // Redirect to the "Our Work" page
};

const Hero = () => {
  return (
    
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stellar-dark via-stellar-teal/30 to-black" />

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-stellar-teal/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="w-6 h-6 text-stellar-teal" />
              <span className="text-white font-semibold tracking-wide">
               Welcome to Stellar Tech Labs
              </span>

            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-stellar-teal to-cyan-400 bg-clip-text text-transparent">
                Elevating Digital
              </span>
              <br />
              Innovations
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mb-8">
              Partnering with visionaries to create exceptional digital solutions. Based in Pokhara, connecting with the world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn-primary bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-3 rounded-lg flex items-center shadow-lg hover:shadow-teal-500/50 transition-transform"
                onClick={handleClick}
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border border-stellar-teal rounded-lg text-teal-400 hover:bg-stellar-teal/10 hover:text-white transition duration-300"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section: Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* First Floating Card */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[8%] z-20"
              >
                <div className="glass-card p-8 rounded-2xl w-[400px] backdrop-blur-md bg-stellar-gray/40 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <Globe className="w-8 h-8 text-stellar-teal" />
                    <div>
                      <h3 className="font-display font-bold text-white">
                        Global Reach
                      </h3>
                      <p className="text-sm text-gray-400">
                        Partnering across continents
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full w-3/4 bg-gradient-to-r from-stellar-teal to-teal-400 rounded-full" />
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full w-1/2 bg-gradient-to-r from-stellar-teal to-teal-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Floating Card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[50%] right-[10%] z-10"
              >
                <div className="glass-card p-6 rounded-xl w-[300px] backdrop-blur-md bg-stellar-gray/40 shadow-lg">
                  <Cpu className="w-6 h-6 text-stellar-teal mb-4" />
                  <h4 className="font-display font-semibold text-white mb-2">
                    Tech Excellence
                  </h4>
                  <p className="text-sm text-gray-400">
                    Transforming ideas into solutions
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
