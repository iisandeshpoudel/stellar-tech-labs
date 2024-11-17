import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stellar-darker via-stellar-dark to-stellar-gray/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-stellar-teal/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="w-6 h-6 text-stellar-teal" />
              <span className="text-stellar-teal font-semibold">Welcome to Stellar Tech Labs</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-stellar-teal bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              Excellence
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              We transform innovative ideas into exceptional digital experiences. Based in Pokhara, serving clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary flex items-center">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-stellar-teal/30 rounded-lg hover:bg-stellar-teal/10 transition-colors duration-200">
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* First floating card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[10%] z-20"
              >
                <div className="glass-card p-8 rounded-2xl w-[400px]">
                  <div className="flex items-center space-x-4 mb-6">
                    <Globe className="w-8 h-8 text-stellar-teal" />
                    <div>
                      <h3 className="font-display font-bold">Global Reach</h3>
                      <p className="text-sm text-gray-400">Serving clients worldwide</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-stellar-gray-light/30 rounded-full">
                      <div className="h-full w-3/4 bg-gradient-to-r from-stellar-teal to-stellar-teal-dark rounded-full" />
                    </div>
                    <div className="h-2 bg-stellar-gray-light/30 rounded-full">
                      <div className="h-full w-1/2 bg-gradient-to-r from-stellar-teal to-stellar-teal-dark rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second floating card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[45%] right-[5%] z-10"
              >
                <div className="glass-card p-6 rounded-xl w-[300px]">
                  <Cpu className="w-6 h-6 text-stellar-teal mb-4" />
                  <h4 className="font-display font-semibold mb-2">Tech Excellence</h4>
                  <p className="text-sm text-gray-400">Cutting-edge solutions</p>
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