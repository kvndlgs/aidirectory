import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">AI Tools Directory</span>
          </NavLink>
          
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;