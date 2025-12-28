// App.js - Updated Version
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <main className="pt-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </main>
      </div>
    
  );
}

export default App;
