import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const onSubmit = async (data: ContactForm) => {
    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
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
            <h1 className="section-title mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We’d love to hear from you! Drop us a message and we’ll get back to you soon.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                <ContactDetail icon={MapPin} title="Visit Us" lines={['Pokhara Bagar, Kaski', 'Nepal']} />
                <ContactDetail icon={Mail} title="Email Us" lines={['info@stellartechlabs.np', 'careers@stellartechlabs.np']} />
                <ContactDetail icon={Phone} title="Call Us" lines={['+977 9846010373', '+977 9856082120']} />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <InputField
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  register={register('name', {
                    required: 'Name is required',
                    minLength: { value: 3, message: 'Name must be at least 3 characters long' },
                  })}
                  error={errors.name}
                />

                <InputField
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  register={register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  error={errors.email}
                />

                <InputField
                  label="Subject"
                  type="text"
                  placeholder="Enter the subject"
                  register={register('subject', {
                    required: 'Subject is required',
                  })}
                  error={errors.subject}
                />

                <InputField
                  label="Message"
                  type="textarea"
                  placeholder="Write your message"
                  register={register('message', {
                    required: 'Message is required',
                  })}
                  error={errors.message}
                  rows={4}
                />

                {/* reCAPTCHA */}
                <ReCAPTCHA
                  sitekey="your-recaptcha-site-key"
                  onChange={handleRecaptchaChange}
                  className="mb-4"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactDetail = ({ icon: Icon, title, lines }: { icon: any; title: string; lines: string[] }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-lg bg-stellar-teal/10">
      <Icon className="w-6 h-6 text-stellar-teal" />
    </div>
    <div>
      <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-300">
          {line}
        </p>
      ))}
    </div>
  </div>
);

const InputField = ({
  label,
  type,
  placeholder,
  register,
  error,
  rows,
}: {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  error?: any;
  rows?: number;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    {type === 'textarea' ? (
      <textarea
        {...register}
        rows={rows || 4}
        className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
        placeholder={placeholder}
      />
    ) : (
      <input
        {...register}
        type={type}
        className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
        placeholder={placeholder}
      />
    )}
    {error && <p className="mt-1 text-sm text-red-400">{error.message}</p>}
  </div>
);

export default Contact;
