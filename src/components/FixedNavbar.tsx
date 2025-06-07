import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Navigation data structure
const navigationData = {
  'Personal': [
    'Checking',
    'Savings & CDs', 
    'Credit Cards',
    'Home Loans',
    'Personal Loans',
    'Auto Loans',
    'Premier',
    'Education & Tools'
  ],
  'Investing & Wealth Management': [
    'Brokerage',
    'Retirement',
    'Wealth Management'
  ],
  'Small Business': [
    'Checking & Savings',
    'Business Credit Cards',
    'Loans & Financing'
  ],
  'Commercial Banking': [
    'Commercial Loans',
    'Treasury Management'
  ],
  'Corporate & Investment Banking': [
    'Debt & Equity Capital Markets',
    'Mergers & Acquisitions'
  ],
  'About Wells Fargo': [
    'Our Leadership',
    'Newsroom',
    'Careers'
  ]
};

export default function FixedNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Determine which primary nav item is active based on current path
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.startsWith('/personal')) return 'Personal';
    if (path.startsWith('/investing')) return 'Investing & Wealth Management';
    if (path.startsWith('/small-business')) return 'Small Business';
    if (path.startsWith('/commercial')) return 'Commercial Banking';
    if (path.startsWith('/corporate')) return 'Corporate & Investment Banking';
    if (path.startsWith('/about')) return 'About Wells Fargo';
    return 'Personal'; // Default to Personal
  };

  const activeSection = getActiveSection();
  const secondaryNavItems = navigationData[activeSection] || [];

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      {/* Fixed Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
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
            <Link to="/help" className="text-white hover:text-wells-yellow transition text-sm">
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

        {/* ────────────────────────────── */}
        {/* 3) Primary Navigation Bar (Main Navbar) */}
        <div className="hidden md:block bg-[#f7f7f7]">
          <ul className="flex justify-center space-x-8 py-3">
            {Object.keys(navigationData).map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}`}
                  className={`
                    text-gray-700 text-sm font-medium px-2 py-1 transition whitespace-nowrap
                    ${activeSection === item ? 'text-[#d21a11] border-b-2 border-[#d21a11]' : ''}
                    hover:text-[#d21a11]
                  `}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ────────────────────────────── */}
        {/* 4) Secondary Navigation Bar (Sub-navbar) */}
        <div className="hidden md:block bg-white border-t border-gray-200">
          <ul className="flex justify-center space-x-6 py-3 flex-wrap">
            {secondaryNavItems.map((subItem) => (
              <li key={subItem}>
                <Link
                  to={`/${activeSection.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}`}
                  className="text-gray-600 hover:text-[#d21a11] whitespace-nowrap transition text-sm"
                >
                  {subItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ────────────────────────────── */}
        {/* 5) Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 max-h-96 overflow-y-auto">
            <div className="px-4 py-2">
              {/* Primary menu categories */}
              {Object.entries(navigationData).map(([category, subItems]) => (
                <div key={category} className="border-b border-gray-200 py-3">
                  <Link 
                    to={`/${category.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}`}
                    className="block py-2 font-medium text-gray-800 hover:text-[#d21a11]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                  <div className="ml-4 space-y-1 mt-2">
                    {subItems.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`/${category.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/--+/g, '-')}`}
                        className="block py-1 text-sm text-gray-600 hover:text-[#d21a11]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile utility links */}
              <div className="border-b border-gray-200 py-3 space-y-2">
                <Link 
                  to="/locations" 
                  className="block py-1 text-gray-700 hover:text-[#d21a11]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ATMs/Locations
                </Link>
                <Link 
                  to="/help" 
                  className="block py-1 text-gray-700 hover:text-[#d21a11]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help
                </Link>
                <Link 
                  to="/espanol" 
                  className="block py-1 text-gray-700 hover:text-[#d21a11]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Español
                </Link>
              </div>

              {/* Sign On button for mobile */}
              <div className="pt-4">
                <Link
                  to={isAuthenticated ? "/dashboard" : "/login"}
                  className="block w-full text-center py-3 px-4 bg-[#d21a11] text-white rounded-full hover:bg-red-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isAuthenticated ? "My Account" : "Sign On"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-[120px] md:h-[140px]"></div>
    </>
  );
}