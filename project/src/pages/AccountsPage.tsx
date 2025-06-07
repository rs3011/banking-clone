import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Filter, CreditCard, DollarSign } from 'lucide-react';

// Mock data
const accounts = [
  { id: 1, name: 'Everyday Checking', type: 'checking', balance: 2458.32, accountNumber: '•••• 4567' },
  { id: 2, name: 'Way2Save Savings', type: 'savings', balance: 12750.85, accountNumber: '•••• 7890' },
  { id: 3, name: 'Wells Fargo Cash Wise Visa', type: 'credit', balance: -782.45, available: 9217.55, limit: 10000, accountNumber: '•••• 1234' },
];

const transactions = [
  { id: 1, date: '2025-04-20', description: 'Amazon.com', amount: -68.97, category: 'Shopping', account: 'Everyday Checking' },
  { id: 2, date: '2025-04-19', description: 'Starbucks', amount: -4.25, category: 'Food & Drink', account: 'Wells Fargo Cash Wise Visa' },
  { id: 3, date: '2025-04-19', description: 'Target', amount: -32.47, category: 'Shopping', account: 'Wells Fargo Cash Wise Visa' },
  { id: 4, date: '2025-04-18', description: 'Direct Deposit - COMPANY INC', amount: 1250.00, category: 'Income', account: 'Everyday Checking' },
  { id: 5, date: '2025-04-17', description: 'Utility Bill Payment', amount: -85.43, category: 'Bills & Utilities', account: 'Everyday Checking' },
  { id: 6, date: '2025-04-16', description: 'Interest Payment', amount: 8.50, category: 'Income', account: 'Way2Save Savings' },
  { id: 7, date: '2025-04-15', description: 'Grocery Store', amount: -127.84, category: 'Groceries', account: 'Everyday Checking' },
  { id: 8, date: '2025-04-14', description: 'Gas Station', amount: -45.67, category: 'Transportation', account: 'Wells Fargo Cash Wise Visa' },
  { id: 9, date: '2025-04-12', description: 'Phone Bill', amount: -89.99, category: 'Bills & Utilities', account: 'Everyday Checking' },
  { id: 10, date: '2025-04-10', description: 'Transfer to Savings', amount: -500.00, category: 'Transfer', account: 'Everyday Checking' },
  { id: 11, date: '2025-04-10', description: 'Transfer from Checking', amount: 500.00, category: 'Transfer', account: 'Way2Save Savings' },
];

const AccountsPage: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [accountFilter, setAccountFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  // Toggle account details
  const toggleAccountDetails = (accountId: number) => {
    if (selectedAccount === accountId) {
      setSelectedAccount(null);
    } else {
      setSelectedAccount(accountId);
    }
  };

  // Get filtered transactions
  const getFilteredTransactions = () => {
    return transactions.filter(transaction => {
      // Filter by account
      if (accountFilter && transaction.account !== accountFilter) {
        return false;
      }
      
      // Filter by category
      if (categoryFilter && transaction.category !== categoryFilter) {
        return false;
      }
      
      // Filter by date range
      if (dateRange.from && new Date(transaction.date) < new Date(dateRange.from)) {
        return false;
      }
      
      if (dateRange.to && new Date(transaction.date) > new Date(dateRange.to)) {
        return false;
      }
      
      return true;
    });
  };

  // Get unique categories
  const getUniqueCategories = () => {
    const categories = transactions.map(t => t.category);
    return [...new Set(categories)];
  };

  // Reset filters
  const resetFilters = () => {
    setAccountFilter(null);
    setCategoryFilter(null);
    setDateRange({ from: '', to: '' });
  };

  const filteredTransactions = getFilteredTransactions();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Accounts & Transactions</h1>
        <p className="text-gray-600">View and manage all your accounts</p>
      </div>

      {/* Accounts Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Your Accounts</h2>
        
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                onClick={() => toggleAccountDetails(account.id)}
              >
                <div className="flex items-center">
                  {account.type === 'checking' && <DollarSign className="text-wells-red mr-3\" size={20} />}
                  {account.type === 'savings' && <DollarSign className="text-green-600 mr-3" size={20} />}
                  {account.type === 'credit' && <CreditCard className="text-blue-600 mr-3\" size={20} />}
                  <div>
                    <h3 className="font-bold">{account.name}</h3>
                    <p className="text-sm text-gray-500">{account.accountNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-right mr-4">
                    <p className="text-sm text-gray-600">
                      {account.type === 'credit' ? 'Current Balance' : 'Available Balance'}
                    </p>
                    <p className={`text-lg font-bold ${account.type === 'credit' && account.balance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                      {formatCurrency(account.balance)}
                    </p>
                  </div>
                  {selectedAccount === account.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {selectedAccount === account.id && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Account Type</p>
                      <p className="font-medium capitalize">{account.type}</p>
                    </div>
                    {account.type === 'credit' && (
                      <>
                        <div>
                          <p className="text-sm text-gray-600">Available Credit</p>
                          <p className="font-medium">{formatCurrency(account.available)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Credit Limit</p>
                          <p className="font-medium">{formatCurrency(account.limit)}</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      className="btn btn-secondary text-sm flex items-center"
                      onClick={() => setAccountFilter(account.name)}
                    >
                      View Transactions
                    </button>
                    <button className="btn btn-secondary text-sm flex items-center">
                      <Download size={16} className="mr-1" /> Download Statement
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Transactions Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Transactions</h2>
          <button 
            className="flex items-center text-wells-red hover:underline"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={18} className="mr-1" />
            {filterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Filters */}
        {filterOpen && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
            <h3 className="font-medium mb-3">Filter Transactions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Account Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account
                </label>
                <select
                  value={accountFilter || ''}
                  onChange={(e) => setAccountFilter(e.target.value || null)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                >
                  <option value="">All Accounts</option>
                  {accounts.map(account => (
                    <option key={account.id} value={account.name}>{account.name}</option>
                  ))}
                </select>
              </div>
              
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={categoryFilter || ''}
                  onChange={(e) => setCategoryFilter(e.target.value || null)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {getUniqueCategories().map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range
                </label>
                <div className="flex space-x-2">
                  <input
                    type="date"
                    value={dateRange.from}
                    onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                    placeholder="From"
                  />
                  <input
                    type="date"
                    value={dateRange.to}
                    onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                    placeholder="To"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                onClick={resetFilters}
                className="btn btn-secondary mr-2"
              >
                Reset
              </button>
              <button 
                onClick={() => setFilterOpen(false)}
                className="btn btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Account
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(transaction.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.account}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                        transaction.amount < 0 ? 'text-gray-900' : 'text-green-600'
                      }`}>
                        {formatCurrency(transaction.amount)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      No transactions found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredTransactions.length}</span> of{' '}
                  <span className="font-medium">{filteredTransactions.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountsPage;