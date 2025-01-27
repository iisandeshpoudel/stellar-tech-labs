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
    <section id="services" className="py-20 relative bg-gradient-to-b from-stellar-darker to-stellar-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group p-6 rounded-xl bg-stellar-darker/60 backdrop-blur-md border border-transparent hover:border-stellar-teal/60 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stellar-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-lg bg-stellar-teal/10 group-hover:bg-stellar-teal/20 transition-colors">
                    <Icon className="w-8 h-8 text-stellar-teal group-hover:text-stellar-teal-light transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[110%] h-1 bg-gradient-to-r from-stellar-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
