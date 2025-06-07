import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-wells-red text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-heading font-bold tracking-wide">WELLS FARGO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="hover:underline font-medium">Home</Link>
            <Link to="/dashboard/accounts" className="hover:underline font-medium">Accounts</Link>
            <Link to="/dashboard/transfer" className="hover:underline font-medium">Transfer</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full hover:bg-wells-red-dark relative"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-wells-yellow text-xs text-black rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </button>

            {/* User profile dropdown */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 py-1 px-3 border border-white rounded hover:bg-wells-red-dark"
                aria-expanded={isProfileOpen}
                aria-haspopup="true"
              >
                <User size={18} />
                <span>{user?.name || 'Account'}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Account Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Off
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-wells-red-dark"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 border-t border-wells-red-dark">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/accounts" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accounts
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/transfer" 
                  className="block py-2 hover:bg-wells-red-dark px-3 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Transfer
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 px-3 mt-3 text-center border border-white rounded hover:bg-wells-red-dark"
                >
                  Sign Off
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;