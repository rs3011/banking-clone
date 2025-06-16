import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-black"> {/* Changed text-white → text-black */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Banking</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to = "/banking" 
                  className="text-black hover:underline hover:text-gray-700"  {/* Changed text-gray-300 → text-black & hover:text-white → hover:text-gray-700 */} >
                  Checking Accounts
                </Link>
              </li>
              {/* …repeat for each item… */}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/support" 
                  className="text-black hover:underline hover:text-gray-700"
                >
                  Online Banking
                </Link>
              </li>
              {/* … */}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-black hover:underline hover:text-gray-700"
                >
                  Company Information
                </Link>
              </li>
              {/* … */}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/support" 
                  className="text-black hover:underline hover:text-gray-700"
                >
                  Contact Us
                </Link>
              </li>
              {/* … */}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Links */}
        <div className="mt-12 pt-8 border-t border-gray-300"> {/* border-gray-700 → border-gray-300 for lighter line */}
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Disclaimer Text */}
            <div className="mb-4 md:mb-0 max-w-4xl text-left">
              <div className="text-black text-sm space-y-3 leading-relaxed"> {/* text-gray-300 → text-black */}
                <p>Investment products and services are offered through Wells Fargo Advisors.</p>
                <p>
                  Wells Fargo Advisors is a trade name used by Wells Fargo Clearing Services, LLC (WFCS) and Wells Fargo Advisors Financial Network, LLC, Members SIPC, separate registered broker-dealers and non-bank affiliates of Wells Fargo & Company.
                </p>
                <p>Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
                <p>© 1999 - 2025 Wells Fargo. NMLSR ID 399801</p>
              </div>
            </div>

            {/* Footer Utility Links */}
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-black hover:underline hover:text-gray-700 text-sm" {/* text-gray-400 → text-black & hover:text-white → hover:text-gray-700 */}
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-black hover:underline hover:text-gray-700 text-sm"
              >
                Terms
              </Link>
              <Link 
                to="/sitemap" 
                className="text-black hover:underline hover:text-gray-700 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;