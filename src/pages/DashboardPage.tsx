import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard, RefreshCw, DollarSign, Bell, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Mock data
const accounts = [
  { id: 1, name: 'Everyday Checking', type: 'checking', balance: 2458.32, accountNumber: '•••• 4567' },
  { id: 2, name: 'Way2Save Savings', type: 'savings', balance: 12750.85, accountNumber: '•••• 7890' },
  { id: 3, name: 'Wells Fargo Cash Wise Visa', type: 'credit', balance: -782.45, available: 9217.55, limit: 10000, accountNumber: '•••• 1234' },
];

const transactions = [
  { id: 1, date: '2025-04-20', description: 'Amazon.com', amount: -68.97, category: 'Shopping' },
  { id: 2, date: '2025-04-19', description: 'Starbucks', amount: -4.25, category: 'Food & Drink' },
  { id: 3, date: '2025-04-19', description: 'Target', amount: -32.47, category: 'Shopping' },
  { id: 4, date: '2025-04-18', description: 'Direct Deposit - COMPANY INC', amount: 1250.00, category: 'Income' },
  { id: 5, date: '2025-04-17', description: 'Utility Bill Payment', amount: -85.43, category: 'Bills & Utilities' },
];

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Good afternoon, {user?.name || 'John'}</h1>
        <p className="text-gray-600">Here's your financial summary</p>
      </div>

      {/* Alerts */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <Bell className="h-6 w-6 text-yellow-500 mr-3" />
          <div>
            <p className="text-sm text-yellow-700">
              <span className="font-medium">Your auto insurance payment is due in 3 days.</span> Schedule a payment now to avoid late fees.
            </p>
          </div>
        </div>
      </div>

      {/* Accounts Summary */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Accounts</h2>
          <Link to="/dashboard/accounts" className="text-wells-red text-sm font-medium hover:underline flex items-center">
            See all accounts <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accounts.map((account) => (
            <div key={account.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">{account.name}</h3>
                    <p className="text-sm text-gray-500">{account.accountNumber}</p>
                  </div>
                  {account.type === 'checking' && <DollarSign className="text-wells-red" size={20} />}
                  {account.type === 'savings' && <DollarSign className="text-green-600\" size={20} />}
                  {account.type === 'credit' && <CreditCard className="text-blue-600" size={20} />}
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    {account.type === 'credit' ? 'Current Balance' : 'Available Balance'}
                  </p>
                  <p className={`text-xl font-bold ${account.type === 'credit' && account.balance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                    {formatCurrency(account.balance)}
                  </p>
                  
                  {account.type === 'credit' && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">Available Credit</p>
                      <p className="text-md font-medium">{formatCurrency(account.available)}</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link to={`/dashboard/accounts/${account.id}`} className="text-wells-red text-sm font-medium hover:underline flex items-center">
                    View details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/dashboard/transfer" className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
            <RefreshCw className="mx-auto text-wells-red mb-2" size={24} />
            <span className="text-sm font-medium">Transfer</span>
          </Link>
          <Link to="/dashboard/accounts" className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
            <DollarSign className="mx-auto text-wells-red mb-2" size={24} />
            <span className="text-sm font-medium">Pay Bills</span>
          </Link>
          <Link to="/dashboard/cards" className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
            <CreditCard className="mx-auto text-wells-red mb-2" size={24} />
            <span className="text-sm font-medium">Manage Cards</span>
          </Link>
          <Link to="/support" className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
            <Shield className="mx-auto text-wells-red mb-2" size={24} />
            <span className="text-sm font-medium">Security Center</span>
          </Link>
        </div>
      </section>

      {/* Recent Transactions */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Transactions</h2>
          <Link to="/dashboard/accounts" className="text-wells-red text-sm font-medium hover:underline flex items-center">
            See all transactions <ChevronRight size={16} />
          </Link>
        </div>
        
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
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.description}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;