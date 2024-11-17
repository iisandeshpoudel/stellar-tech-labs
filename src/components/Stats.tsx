import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Code2, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "100+",
    label: "Projects Completed",
  },
  {
    icon: Code2,
    value: "500K+",
    label: "Lines of Code",
  },
  {
    icon: Globe2,
    value: "15+",
    label: "Countries Served",
  },
];

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-stellar-teal/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-stellar-teal/10">
                  <Icon className="w-6 h-6 text-stellar-teal" />
                </div>
                <div className="font-display font-bold text-4xl mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;