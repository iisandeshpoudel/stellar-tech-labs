import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Coffee, Users } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


const positions = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Pokhara, Nepal",
    experience: "4+ years",
    description: "Looking for an experienced full-stack developer with expertise in React and Node.js ecosystems."
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Pokhara, Nepal",
    experience: "2+ years",
    description: "Seeking a creative designer with experience in creating modern web and mobile interfaces."
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Pokhara, Nepal",
    experience: "1+ years",
    description: "Looking for a DevOps engineer with strong experience in cloud infrastructure and CI/CD pipelines."
  }
];

const benefits = [
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with regular team activities"
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Regular training sessions and skill development opportunities"
  }
];

const Careers = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

 const handleApply = (position: string) => {
  setSelectedPosition(position);
  toast.success('Application form opened');
  window.open('https://forms.gle/AC3GPLovSFjZHkFX7', '_blank');
};


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
            <h1 className="section-title mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Be part of Nepal's growing tech ecosystem and work on exciting projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-stellar-teal/10 w-fit">
                    <Icon className="w-6 h-6 text-stellar-teal" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="card hover:border-stellar-teal/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span>{position.location}</span>
                        <span>{position.experience}</span>
                      </div>
                      <p className="text-gray-300">{position.description}</p>
                    </div>
                    <button 
                      onClick={() => handleApply(position.title)}
                      className="btn-primary whitespace-nowrap self-start"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;