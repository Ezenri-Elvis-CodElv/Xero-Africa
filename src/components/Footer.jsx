import React from 'react';
import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa6';

const Footer = () => {
  const handleNav = (path) => {
    window.location.href = path;
  };
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white">Stay in the Loop</h3>
              <p className="text-blue-100 mt-2">Join our community for exclusive updates and insights</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
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
            <div className="flex items-center gap-3  mb-6">
              <div className='flex items-center gap-2 cursor-pointer' onClick={() => handleNav('/')}>
        <img src="/Option.jpg" alt="logo" className='w-10 h-10 rounded-lg'/>
        <h2 className='text-3xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-["WDXL_Lubrifont_TC",_sans-serif]'>
          XERO AFRICA
        </h2>
      </div>
            </div>
            <p className="text-gray-400 mb-6">
              Powering the future with cutting-edge technology solutions and digital innovation.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-8">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-gray-800 p-3 rounded-full text-white text-lg hover:bg-cyan-600 transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="https://x.com" aria-label="Twitter" className="bg-gray-800 p-3 rounded-full text-white text-lg hover:bg-black transition-all duration-300">
                <FaXTwitter />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="bg-gray-800 p-3 rounded-full text-white text-lg hover:bg-blue-700 transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="bg-gray-800 p-3 rounded-full text-white text-lg hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300">
                <FaInstagram />
              </a>
            </div>
            
            {/* App Downloads */}
            <div>
              <p className="text-white mb-3 font-semibold">Get Our Mobile App</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg text-white font-medium hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-md"
                  onClick={() => window.open('https://play.google.com/store', '_blank')}
                >
                  <FaGooglePlay className="text-xl" />
                  <span>Google Play</span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-black rounded-lg text-white font-medium hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md"
                  onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
                >
                  <FaApple className="text-xl" />
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider border-l-4 border-cyan-500 pl-3">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><span className="text-cyan-500">↳</span> About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><span className="text-cyan-500">↳</span> Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><span className="text-cyan-500">↳</span> Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><span className="text-cyan-500">↳</span> Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><span className="text-cyan-500">↳</span> Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider border-l-4 border-blue-500 pl-3">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span className="text-blue-500">↳</span> Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span className="text-blue-500">↳</span> Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span className="text-blue-500">↳</span> API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span className="text-blue-500">↳</span> Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span className="text-blue-500">↳</span> Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider border-l-4 border-purple-500 pl-3">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"><span className="text-purple-500">↳</span> Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"><span className="text-purple-500">↳</span> Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"><span className="text-purple-500">↳</span> Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"><span className="text-purple-500">↳</span> Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"><span className="text-purple-500">↳</span> System Status</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TECHNOVATE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;