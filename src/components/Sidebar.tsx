import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, RefreshCw, DollarSign, FileText, Settings, HelpCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { path: '/dashboard/accounts', label: 'Accounts', icon: <DollarSign size={20} /> },
    { path: '/dashboard/transfer', label: 'Transfer', icon: <RefreshCw size={20} /> },
    { path: '/dashboard/cards', label: 'Cards', icon: <CreditCard size={20} /> },
    { path: '/dashboard/statements', label: 'Statements', icon: <FileText size={20} /> }
  ];

  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <p className="text-lg font-medium">Hello, John</p>
        <p className="text-sm text-gray-500">Last sign-on: Today, 9:30 AM</p>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-wells-gray-100 ${
                  isActive(item.path) ? 'bg-wells-gray-100 border-l-4 border-wells-red' : ''
                }`}
              >
                <span className="mr-3 text-gray-600">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-64 border-t border-gray-200">
        <ul>
          <li>
            <Link
              to="/dashboard/settings"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-wells-gray-100"
            >
              <span className="mr-3 text-gray-600"><Settings size={20} /></span>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-wells-gray-100"
            >
              <span className="mr-3 text-gray-600"><HelpCircle size={20} /></span>
              <span>Help & Support</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;