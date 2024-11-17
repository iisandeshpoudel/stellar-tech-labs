import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    link: "#"
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial analytics dashboard with advanced data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
    tags: ["TypeScript", "D3.js", "AWS"],
    link: "#"
  },
  {
    title: "Healthcare App",
    description: "Telemedicine platform connecting patients with healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1280",
    tags: ["React Native", "Firebase", "HIPAA"],
    link: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stellar-darker via-stellar-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-stellar-darker/80 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-stellar-gray/50 rounded-full text-stellar-teal"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href={project.link}
              className="flex items-center text-stellar-teal hover:text-stellar-teal-dark transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
            <a
              href="#"
              className="flex items-center text-stellar-teal hover:text-stellar-teal-dark transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;