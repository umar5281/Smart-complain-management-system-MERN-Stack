import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white h-[80vh] flex items-center">
      {/* Overlay for glassy effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center h-full space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <span className="text-pink-400">CodeCelix</span>
        </h1>
        <p className="text-lg md:text-2xl text-purple-200 max-w-lg">
          Smart Feedback System to manage complaints and track progress seamlessly.
        </p>
        <div className="flex space-x-4 mt-4">
          <Link
            to="/submit-complaint"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-medium"
          >
            Submit Complaint
          </Link>
          <Link
            to="/track-complaint"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300 font-medium"
          >
            Track Status
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
