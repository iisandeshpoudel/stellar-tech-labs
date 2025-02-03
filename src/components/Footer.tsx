import { Code2, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stellar-darker py-16 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <Code2 className="w-8 h-8 text-stellar-teal" />
              <span className="ml-2 text-xl font-display font-bold">
                Stellar Tech
              </span>
            </div>
            <p className="mb-6">
              Transforming ideas into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550880599303"
                className="text-gray-400 hover:text-stellar-teal transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-stellar-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/stellartechlabs/"
                className="text-gray-400 hover:text-stellar-teal transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/stellar-tech-labs/"
                className="text-gray-400 hover:text-stellar-teal transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#work"
                  className="hover:text-stellar-teal transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-stellar-teal transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about" target="_blank"
                  className="hover:text-stellar-teal transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="/classes" target="_blank"
                className="hover:text-stellar-teal transition-colors"
                >
                  Classes
                  </a>
  
              </li>
              <li>
                <a
                  href="/careers" target="_blank"
                  className="hover:text-stellar-teal transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-stellar-teal" />
                Pokhara Bagar, Nepal
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-stellar-teal" />
                +977 9846010373
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-stellar-teal" />
                tech.stellarlabs@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Newsletter</h3>
            <p className="mb-4">
              Stay updated with our latest news and updates.
            </p>
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

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-stellar-gray-light/10 text-center">
          <p>&copy; {new Date().getFullYear()} Stellar Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
