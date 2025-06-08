import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-wells-red text-white shadow-md">
      {/* Navigation Container - No fixed positioning */}
      <div className="relative z-50">
        {/* ────────────────────────────── */}
        {/* 1) Top Red Header */}
        <div className="bg-[#d21a11] px-6 py-3 flex items-center justify-between">
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
            <Link to="/locations" className="text-white hover:text-wells-yellow transition text-sm">
              ATMs/Locations
            </Link>
            <Link to="/support" className="text-white hover:text-wells-yellow transition text-sm">
              Help
            </Link>
            <Link to="/espanol" className="text-white hover:text-wells-yellow transition text-sm">
              Español
            </Link>

            {/* Search Icon */}
            <button 
              onClick={toggleSearch}
              className="text-white hover:text-wells-yellow transition"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* "Sign On" Button */}
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="px-6 py-2 bg-white text-gray-800 rounded-full transition hover:shadow-lg hover:underline"
              >
                My Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 bg-white text-gray-800 rounded-full transition hover:shadow-lg hover:underline"
              >
                Sign On
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search bar (appears below red header when open) */}
        {isSearchOpen && (
          <div className="bg-[#d21a11] px-6 py-3 border-t border-red-800">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search Wells Fargo"
                className="w-full py-2 px-4 pr-10 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-wells-yellow"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}

        {/* ────────────────────────────── */}
        {/* 2) Yellow Separator Line */}
        <div className="h-0.5 bg-wells-yellow"></div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 border-t border-wells-red-dark">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/banking" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Banking
                </Link>
              </li>
              <li>
                <Link 
                  to="/cards" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={isAuthenticated ? "/dashboard" : "/login"}
                  className="block py-2 px-3 mt-3 text-center border border-white rounded hover:bg-wells-red-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isAuthenticated ? "My Account" : "Sign On"}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;