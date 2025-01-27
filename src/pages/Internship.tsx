import  { useState, useEffect } from "react";
import { Briefcase, MapPin, UserCheck } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FaBalanceScale, FaBeer, FaLaptopCode } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

const positions = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Pokhara, Nepal",
    experience: "",
    description:
      "Looking for an experienced full-stack developer with expertise in React and Node.js ecosystems.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Pokhara, Nepal",
    experience: "",
    description:
      "Seeking a creative designer with experience in creating modern web and mobile interfaces.",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Pokhara, Nepal",
    experience: "1+ years",
    description:
      "Looking for a DevOps engineer with strong experience in cloud infrastructure and CI/CD pipelines.",
  },
];

const Internship = () => {
  const [filter, setFilter] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  const handleApply = (position: string) => {
    toast.success("Application form opened");
    window.location.href = `/contact?position=${encodeURIComponent(position)}`;
  };

  const filteredPositions =
    filter === "All"
      ? positions
      : positions.filter((position) => position.type === filter);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pt-20">
      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              className="section-title text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Join Us?
            </motion.h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our team to grow professionally in a dynamic, creative, and relaxed environment. Here's why you'll love working with us!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Work-life Balance */}
            <motion.div
              className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaBalanceScale className="w-16 h-16 mb-4 text-stellar-teal hover:shadow-glow transition-shadow duration-300" />
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-300">
                Enjoy a healthy balance between your professional and personal life.
              </p>
            </motion.div>

            {/* Chilled Environment */}
            <motion.div
              className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaBeer className="w-16 h-16 mb-4 text-stellar-teal hover:shadow-glow transition-shadow duration-300" />
              <h3 className="text-xl font-semibold mb-2">Chilled Environment</h3>
              <p className="text-gray-300">
                A relaxed, laid-back workspace where creativity thrives.
              </p>
            </motion.div>

            {/* Growth Opportunities */}
            <motion.div
              className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaLaptopCode className="w-16 h-16 mb-4 text-stellar-teal hover:shadow-glow transition-shadow duration-300" />
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-300">
                Work on cutting-edge technologies and grow your skill set.
              </p>
            </motion.div>

            {/* Learn and Innovate */}
            <motion.div
              className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <IoMdSchool className="w-16 h-16 mb-4 text-stellar-teal hover:shadow-glow transition-shadow duration-300" />
              <h3 className="text-xl font-semibold mb-2">Learn and Innovate</h3>
              <p className="text-gray-300">
                We believe in continuous learning and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="section-title text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Us!
            </motion.h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Be part of Nepal's growing tech ecosystem and work on exciting projects to develop your skills!
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex justify-center space-x-4">
            {["All", "Full-time", "Part-time"].map((type) => (
              <motion.button
                key={type}
                className={`btn-secondary px-4 py-2 ${
                  filter === type ? "bg-stellar-teal text-white" : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => setFilter(type)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {type}
              </motion.button>
            ))}
          </div>

          {/* Progress bar */}
          {loading && (
            <div className="mb-8">
              <div className="w-full h-2 bg-gray-700 rounded">
                <motion.div
                  className="h-2 bg-stellar-teal rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </div>
          )}

          {!loading && (
            <>
              <h2 className="text-3xl font-bold mb-8">Available Internships</h2>
              <div className="space-y-6">
                {filteredPositions.map((position, index) => (
                  <motion.div
                    key={index}
                    className="card hover:shadow-xl p-4 bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {position.type}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {position.location}
                          </span>
                        </div>
                        <p className="text-gray-400">{position.description}</p>
                      </div>
                      <div className="flex flex-col items-end mt-4 sm:mt-0">
                        <motion.button
                          onClick={() => handleApply(position.title)}
                          className="btn-primary"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Internship;
