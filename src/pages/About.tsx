import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Award, Users, Heart, Mountain } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Prajwal K.C', role: 'Chief Executive Officer (CEO)', image: './photos/ACS.png' },
  { name: 'Kiran Gautam', role: 'Chief Operating Officer (COO)', image: './photos/kirann.png' },
  {name: 'Sandesh Poudel', role: 'Chief Operating Officier (CTO)', image: './photos/sandesh.PNG'},
  { name: 'Pabin Poudel', role: 'Chief Marketing Officier (CMO)', image: './photos/pabin.PNG' },
  {name: "Prapti Gurung", role: 'Human Resource Manager (HRM)', image: './photos/praptididi.PNG'},
  {name: "Shishir Chhetri", role: 'Full Stack Developer', image: './photos/ACS.png'},
  {name: "Brisha Shrestha", role: 'Full Stack Developer', image: './photos/ACS.png'},
 
  // Add more team members as needed
];

const About: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        controls.start('visible');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <div className="pt-20">
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Existing About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="section-title mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Stellar Tech Labs
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Born in the heart of Nepal, serving excellence worldwide
            </p>
          </motion.div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4 leading-loose">
                Founded in 2018 in the serene city of Pokhara, Stellar Tech Labs began with a vision to bridge the gap between Nepal's talented tech workforce and global opportunities.
              </p>
              <p className="text-gray-300 leading-loose">
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
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              What Makes Us Unique
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Our values, mission, and milestones speak for themselves.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { Icon: Award, title: 'Excellence', text: 'Delivering award-winning solutions tailored to global standards.' },
                { Icon: Users, title: 'Community', text: 'A team united by collaboration, commitment, and growth.' },
                { Icon: Heart, title: 'Passion', text: 'Technology driven by love and dedication to innovation.' },
                { Icon: Mountain, title: 'Growth', text: 'Scaling new heights with every project we take on.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="text-center p-6 rounded-lg bg-stellar-gray/50 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <item.Icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-display font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              A team of passionate professionals committed to excellence.
            </p>
            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-stellar-gray/50 p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-display font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-300">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
