import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-purple-100 backdrop-blur-md shadow-inner">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CodeCelix</h1>
              <span className="text-sm text-purple-200">Smart Feedback System</span>
            </div>
          </div>
          <p className="text-sm text-purple-200 max-w-xs">
            Providing a seamless complaint and feedback system for better communication and support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-white mb-3">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
            <Link to="/submit-complaint" className="hover:text-pink-400 transition-colors">Submit Complaint</Link>
            <Link to="/track-complaint" className="hover:text-pink-400 transition-colors">Track Status</Link>
            <Link to="/login" className="hover:text-pink-400 transition-colors">Login</Link>
            <Link to="/register" className="hover:text-pink-400 transition-colors">Register</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-pink-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-pink-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-pink-500 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-purple-700/50 mt-10 pt-5 text-center text-sm text-purple-300">
        &copy; {new Date().getFullYear()} CodeCelix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
