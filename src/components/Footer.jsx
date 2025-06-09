import React from 'react';
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      {/* Newsletter Section - White background for contrast */}
      <div className="bg-white py-12 px-4 border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-black">Stay Updated</h3>
              <p className="text-gray-700 mt-2">Subscribe to our newsletter for the latest news and updates</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-black text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md transition-colors duration-300 whitespace-nowrap "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/Option.jpg" alt="logo" className="w-12 h-12 object-contain" />
              <span className='text-white text-2xl font-[500] tracking-widest font-["WDXL_Lubrifont_TC",_sans-serif]'>
                XERO AFRICA
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering Africa through innovative technology solutions and digital transformation.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-8">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://x.com" aria-label="Twitter" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">
                <FaXTwitter />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white text-xl hover:text-gray-300 transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
            
            {/* App Downloads */}
            <div>
              <p className="text-white mb-3 font-semibold">Download Our App</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-white rounded-lg text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={() => window.open('https://play.google.com/store', '_blank')}
                >
                  <FaGooglePlay className="text-lg" />
                  <span>Google Play</span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-white rounded-lg text-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
                >
                  <FaApple className="text-lg" />
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Status</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} XERO AFRICA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;