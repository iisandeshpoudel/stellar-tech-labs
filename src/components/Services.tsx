import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Globe, Database, Cloud, Lock } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps automation."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database architecture and data management solutions."
  },
  {
    icon: Globe,
    title: "API Development",
    description: "RESTful and GraphQL APIs with comprehensive documentation."
  },
  {
    icon: Lock,
    title: "Security Services",
    description: "Implementation of robust security measures and best practices."
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-stellar-gray/20 hover:bg-stellar-gray/40 transition-all duration-300 p-6 border border-stellar-gray-light/10 hover:border-stellar-teal/20"
              >
                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-lg bg-stellar-teal/10 w-fit group-hover:bg-stellar-teal/20 transition-colors">
                    <Icon className="w-6 h-6 text-stellar-teal" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-stellar-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;