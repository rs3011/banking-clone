import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Banking</h3>
            <ul className="space-y-2">
              <li><Link to="/banking" className="hover:underline text-gray-300">Checking Accounts</Link></li>
              <li><Link to="/banking" className="hover:underline text-gray-300">Savings Accounts</Link></li>
              <li><Link to="/banking" className="hover:underline text-gray-300">CDs</Link></li>
              <li><Link to="/banking" className="hover:underline text-gray-300">Credit Cards</Link></li>
              <li><Link to="/banking" className="hover:underline text-gray-300">Loans</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="hover:underline text-gray-300">Online Banking</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Mobile Banking</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">ATM Locations</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Branch Locations</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Financial Education</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline text-gray-300">Company Information</Link></li>
              <li><Link to="/about" className="hover:underline text-gray-300">Careers</Link></li>
              <li><Link to="/about" className="hover:underline text-gray-300">Investor Relations</Link></li>
              <li><Link to="/about" className="hover:underline text-gray-300">Community Impact</Link></li>
              <li><Link to="/about" className="hover:underline text-gray-300">News & Insights</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="hover:underline text-gray-300">Contact Us</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Help & FAQs</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Report Fraud</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Security Center</Link></li>
              <li><Link to="/support" className="hover:underline text-gray-300">Accessibility</Link></li>
            </ul>
          </div>
        </div>

       <div className="mt-12 pt-8 border-t border-gray-700">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0 max-w-4xl text-left">
      <div className="text-gray-300 text-sm space-y-3 leading-relaxed">
        <p>Investment products and services are offered through Wells Fargo Advisors.</p>
        <p>
          Wells Fargo Advisors is a trade name used by Wells Fargo Clearing Services, LLC (WFCS) and Wells Fargo Advisors Financial Network, LLC, Members SIPC, separate registered broker-dealers and non-bank affiliates of Wells Fargo & Company.
        </p>
        <p>Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
        <p>© 1999 - 2025 Wells Fargo. NMLSR ID 399801</p>
      </div>
    </div>
            <div className="flex space-x-6">
              <Link to="/about" className="text-gray-400 hover:text-white hover:underline text-sm">Privacy</Link>
              <Link to="/about" className="text-gray-400 hover:text-white hover:underline text-sm">Terms</Link>
              <Link to="/about" className="text-gray-400 hover:text-white hover:underline text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;