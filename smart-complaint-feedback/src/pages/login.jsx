import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can integrate API call for login
  };

  return (
    <div className="m-0 p-0 min-h-screen flex flex-col">

      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6 text-center text-pink-400">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
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

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 mt-4"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-white/70 text-sm">
            Don't have an account? <a href="/register" className="text-pink-400 hover:underline">Register</a>
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
