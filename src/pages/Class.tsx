import { useState } from 'react';
import { motion, } from 'framer-motion';
import {  FaFigma, FaLaravel, FaStar, FaRegStar, FaSearch } from 'react-icons/fa';
import { SiFlutter, SiMongodb } from 'react-icons/si';
import { 
  FaStarHalf 
} from 'react-icons/fa';

type Course = {
  id: number;
  title: string;
  category: string;
  duration: string;
  schedule: string;
  description: string;
  icon: JSX.Element;
  color: string;
  price: string;
  rating: number;
  instructor: {
    name: string;
    bio: string;
    experience: string;
  };
};

const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courses: Course[] = [
    {
      id: 1,
      title: 'MERN Stack Development',
      category: 'web',
      duration: '3 Months',
      schedule: 'Mon/Wed/Fri',
      description: 'Master MongoDB, Express, React, and Node.js to build full-stack web applications.',
      icon: <SiMongodb className="w-8 h-8" />,
      color: '#61DAFB',
      price: 'Rs 25,000',
      rating: 4.8,
      instructor: {
        name: 'John Doe',
        bio: 'Full-stack developer with 8+ years experience',
        experience: 'Worked at Tech Giants Inc.'
      }
    },
    {
      id: 2,
      title: 'Flutter',
      category: 'mobile',
      duration: '3 Months',
      schedule: 'Mon/Wed/Fri',
      description: 'Learn Flutter to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
      icon: <SiFlutter className="w-8 h-8" />,
      color: '#02569B',
      price: 'Rs 25,000',
      rating: 4.8,
      instructor: {
        name: 'John Doe',
        bio: 'Full-stack developer with 8+ years experience',
        experience: 'Worked at Tech Giants Inc.'
      }
    },
    {
      id: 3,
      title: 'PHP & Laravel',
      category: 'web',
      duration: '3 Months',
      schedule: 'Mon/Wed/Fri',
      description: 'Master PHP and Laravel to build robust, scalable web applications with modern architecture and powerful tools.',
      icon: <FaLaravel className="w-8 h-8" />,
      color: '#F05340',
      price: 'Rs 25,000',
      rating: 4.8,
      instructor: {
        name: 'John Doe',
        bio: 'Full-stack developer with 8+ years experience',
        experience: 'Worked at Tech Giants Inc.'
      }
    },
    {
      id: 4,
      title: 'UI UX Design',
      category: 'design',
      duration: '3 Months',
      schedule: 'Mon/Wed/Fri',
      description: 'Master UI/UX design principles to create intuitive, engaging user interfaces and seamless user experiences.',
      icon: <FaFigma className="w-8 h-8" />,
      color: '#F24E1E',
      price: 'Rs 25,000',
      rating: 4.8,
      instructor: {
        name: 'John Doe',
        bio: 'Full-stack developer with 8+ years experience',
        experience: 'Worked at Tech Giants Inc.'
      }
    },
    // Add other courses with similar structure
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const RatingStars = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400">
            {index < fullStars ? (
              <FaStar className="w-4 h-4" />
            ) : index === fullStars && hasHalfStar ? (
              <FaStarHalf className="w-4 h-4" />
            ) : (
              <FaRegStar className="w-4 h-4" />
            )}
          </span>
        ))}
        <span className="ml-2 text-slate-300">({rating})</span>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05 }
  };

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-slate-900 to-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Search */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-4xl font-bold text-center text-white mb-4">Our Technical Courses</h2>
          <div className="max-w-2xl mx-auto mb-8 relative">
            <FaSearch className="absolute left-3 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-slate-300'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-slate-800 rounded-xl p-6 shadow-xl"
            >
              {/* Course Card Content */}
              <div className="mb-4 flex justify-between items-start">
                <div style={{ backgroundColor: course.color }} className="p-2 rounded-lg">
                  {course.icon}
                </div>
                <span className="text-lg font-semibold text-white">{course.price}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
              <RatingStars rating={course.rating} />
              
              <div className="my-4 flex gap-2">
                <span className="text-sm text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
                  {course.duration}
                </span>
                <span className="text-sm text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
                  {course.schedule}
                </span>
              </div>

              <p className="text-slate-400 mb-4">{course.description}</p>

              <div className="mb-4 border-t border-slate-700 pt-4">
                <p className="text-sm text-slate-300">
                  Instructor: <span className="font-medium">{course.instructor.name}</span>
                </p>
                <p className="text-xs text-slate-400 truncate">{course.instructor.bio}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 rounded-lg font-medium"
                style={{ backgroundColor: course.color }}
                 onClick={() => {
                  const googleFormURL = 'https://forms.gle/AC3GPLovSFjZHkFX7';
                  window.open(googleFormURL, '_blank');
                  }}
                  >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;