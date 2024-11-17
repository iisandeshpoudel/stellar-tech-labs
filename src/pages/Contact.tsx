import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
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
            <h1 className="section-title mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-stellar-teal/10">
                    <MapPin className="w-6 h-6 text-stellar-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Visit Us</h3>
                    <p className="text-gray-300">Pokhara Bagar, Kaski</p>
                    <p className="text-gray-300">Nepal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-stellar-teal/10">
                    <Mail className="w-6 h-6 text-stellar-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Email Us</h3>
                    <p className="text-gray-300">info@stellartechlabs.np</p>
                    <p className="text-gray-300">careers@stellartechlabs.np</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-stellar-teal/10">
                    <Phone className="w-6 h-6 text-stellar-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">Call Us</h3>
                    <p className="text-gray-300">+977 61-538999</p>
                    <p className="text-gray-300">+977 9856038999</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;