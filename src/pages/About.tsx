import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Mountain } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="section-title mb-4">About Stellar Tech Labs</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Born in the heart of Nepal, serving excellence worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2018 in the serene city of Pokhara, Stellar Tech Labs began with a vision to bridge the gap between Nepal's talented tech workforce and global opportunities.
              </p>
              <p className="text-gray-300">
                Today, we're proud to be one of Nepal's emerging technology companies, combining local talent with global standards to deliver exceptional digital solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src="https://thehrmnepal.com/wp-content/uploads/2023/09/Cover_2.jpg"
                alt="Modern Tech Office"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Mountain,
                title: "Nepali Heritage",
                description: "Proudly representing Nepal's growing tech ecosystem"
              },
              {
                icon: Users,
                title: "Local Talent",
                description: "Empowering Nepali developers and designers"
              },
              {
                icon: Heart,
                title: "Community Focus",
                description: "Contributing to local tech education"
              },
              {
                icon: Award,
                title: "Quality First",
                description: "Committed to delivering excellence"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="mb-4 p-3 rounded-lg bg-stellar-teal/10 w-fit">
                    <Icon className="w-6 h-6 text-stellar-teal" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;