import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can integrate API call for registration
  };

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col">
      

      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6 text-center text-pink-400">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border border-white/30 rounded-xl px-3 py-2 focus-within:border-pink-400 transition-colors">
              <FaUser className="mr-2 text-white/80" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white placeholder-white/70"
                required
              />
            </div>

            <div className="flex items-center border border-white/30 rounded-xl px-3 py-2 focus-within:border-pink-400 transition-colors">
              <FaEnvelope className="mr-2 text-white/80" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white placeholder-white/70"
                required
              />
            </div>

            <div className="flex items-center border border-white/30 rounded-xl px-3 py-2 focus-within:border-pink-400 transition-colors">
              <FaLock className="mr-2 text-white/80" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white placeholder-white/70"
                required
              />
            </div>

            <div className="flex items-center border border-white/30 rounded-xl px-3 py-2 focus-within:border-pink-400 transition-colors">
              <FaLock className="mr-2 text-white/80" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-white placeholder-white/70"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl font-semibold shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 mt-4"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-white/70 text-sm">
            Already have an account? <a href="/login" className="text-pink-400 hover:underline">Login</a>
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Register;
