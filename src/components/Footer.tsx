import React from 'react';
import { Code2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stellar-darker py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Code2 className="w-8 h-8 text-stellar-teal" />
              <span className="ml-2 text-xl font-display font-bold">Stellar Tech</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#work" className="text-gray-300 hover:text-stellar-teal transition-colors">Our Work</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-stellar-teal transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-stellar-teal transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-stellar-teal transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-stellar-teal" />
                Pokhara Bagar, Nepal
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-stellar-teal" />
                +977 123-456-789
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-stellar-teal" />
                contact@stellartech.dev
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-stellar-gray/50 border border-stellar-gray-light/10 rounded-lg focus:outline-none focus:border-stellar-teal"
              />
              <button className="w-full btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stellar-gray-light/10 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Stellar Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;