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
      <div className="container mx-auto px-4">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-heading font-bold tracking-wide">WELLS FARGO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/banking" className="hover:underline font-medium">Banking</Link>
            <Link to="/cards" className="hover:underline font-medium">Cards</Link>
            <Link to="/support" className="hover:underline font-medium">Support</Link>
            <Link to="/about" className="hover:underline font-medium">About Us</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-wells-red-dark"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="hidden md:flex items-center space-x-1 py-1 px-3 border border-white rounded hover:bg-wells-red-dark"
              >
                <User size={18} />
                <span>My Account</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center space-x-1 py-1 px-3 border border-white rounded hover:bg-wells-red-dark"
              >
                <User size={18} />
                <span>Sign On</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-wells-red-dark"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-wells-red-dark">
            <div className="relative">
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