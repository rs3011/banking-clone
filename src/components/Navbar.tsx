// src/components/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { menu, PrimaryItem } from '../data/menu';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  // Track which primary category is hovered
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  // Clears the submenu when mouse leaves that area
  const clearActive = () => setActiveIndex(null);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="w-full">
      {/* ────────────────────────────── */}
      {/* 1) Top Red Bar */}
      <div className="bg-wells-red px-6 py-3 flex items-center justify-between">
        {/* Logo: "WELLS FARGO" on the left */}
        <div>
          <Link to="/">
            <span className="text-white font-serif text-2xl tracking-widest font-bold">
              WELLS FARGO
            </span>
          </Link>
        </div>


        {/* Right‐side Links + Search + Sign On */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-white hover:text-wells-yellow transition">
            Help
          </Link>

          {/* Search Icon */}
          <button 
            onClick={toggleSearch}
            className="text-white hover:text-wells-yellow transition"
          >
            <Search size={20} />
          </button>

          {/* "Sign On" Button */}
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:text-wells-red transition"
            >
              My Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-6 py-2
    bg-white text-black-400
    border border-white
    rounded-full              
    transition
    hover:underline
   "
            >
              Sign On
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search bar */}
      {isSearchOpen && (
        <div className="bg-wells-red px-6 py-3 border-t border-wells-red-dark">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search Wells Fargo"
              className="w-full py-2 px-4 pr-10 rounded text-gray-800 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}

      {/* ────────────────────────────── */}
      {/* 2) Secondary White Bar with Primary Categories - Desktop Only */}
      <div className="hidden md:block bg-white shadow-sm">
        <ul className="flex justify-center space-x-8 py-2">
          {menu.map((item: PrimaryItem, idx: number) => (
            <li
              key={item.label}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative"
            >
              <Link
                to={item.path}
                className={`
                  text-gray-700 text-wf-primary px-2 pb-1 transition whitespace-nowrap
                  ${activeIndex === idx ? 'border-b-2 border-wells-red' : ''}
                  hover:text-wells-red
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ────────────────────────────── */}
      {/* 3) Sub-Menu Row (renders only when a primary is active) - Desktop Only */}
      {activeIndex !== null && (
        <div className="hidden md:block bg-white border-t border-gray-200" onMouseLeave={clearActive}>
          <ul className="flex justify-center space-x-6 py-3 flex-wrap">
            {menu[activeIndex].subItems.map((sub) => (
              <li key={sub.label}>
                <Link
                  to={sub.path}
                  className="text-gray-600 hover:text-wells-red whitespace-nowrap transition text-sm"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ────────────────────────────── */}
      {/* 4) Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2">
            {/* Top level links */}
            <div className="space-y-2 mb-4">
              <Link 
                to="/banking" 
                className="block py-2 text-gray-700 hover:text-wells-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Banking
              </Link>
              <Link 
                to="/cards" 
                className="block py-2 text-gray-700 hover:text-wells-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cards
              </Link>
              <Link 
                to="/support" 
                className="block py-2 text-gray-700 hover:text-wells-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support
              </Link>
              <Link 
                to="/about" 
                className="block py-2 text-gray-700 hover:text-wells-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </div>

            {/* Primary menu categories */}
            {menu.map((item, idx) => (
              <div key={item.label} className="border-t border-gray-200 py-2">
                <Link 
                  to={item.path} 
                  className="block py-2 font-medium text-gray-800 hover:text-wells-red"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="ml-4 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className="block py-1 text-sm text-gray-600 hover:text-wells-red"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Sign On button for mobile */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <Link
                to={isAuthenticated ? "/dashboard" : "/login"}
                className="block w-full text-center py-2 px-4 bg-wells-red text-white rounded hover:bg-wells-red-dark transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isAuthenticated ? "My Account" : "Sign On"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}