// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-[#252B42] px-6 md:px-10 py-4 flex justify-between items-center text-white">
    {/* Brand Name */}
    <div className="text-2xl font-bold">BrandName</div>

    {/* Links */}
    <div className="hidden md:flex space-x-6">
      <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
      <Link to="/" className="hover:text-[#23A6F0]">Product</Link>
      <Link to="/" className="hover:text-[#23A6F0]">Pricing</Link>
      <Link to="/" className="hover:text-[#23A6F0]">Contact</Link>
    </div>

    {/* Login and Join Us Buttons */}
    <div className="flex items-center space-x-4">
      <Link to="/" className="hover:text-[#23A6F0]">Login</Link>
      <Link to="/" className="bg-[#23A6F0] py-2 px-4 rounded font-bold hover:bg-[#1e8cc4]">
        JOIN US
      </Link>
    </div>
  </nav>
);

export default Navbar;
