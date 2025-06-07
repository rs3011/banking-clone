import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Mock accounts data
const accounts = [
  { id: 1, name: 'Everyday Checking', type: 'checking', balance: 2458.32, accountNumber: '•••• 4567' },
  { id: 2, name: 'Way2Save Savings', type: 'savings', balance: 12750.85, accountNumber: '•••• 7890' },
  { id: 3, name: 'Wells Fargo Cash Wise Visa', type: 'credit', balance: -782.45, available: 9217.55, limit: 10000, accountNumber: '•••• 1234' },
];

const TransferPage: React.FC = () => {
  // Form state
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [transferDate, setTransferDate] = useState(new Date().toISOString().split('T')[0]);
  const [memo, setMemo] = useState('');
  const [frequency, setFrequency] = useState('once');
  
  // Validation state
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  // Success state
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [transferDetails, setTransferDetails] = useState<{[key: string]: string}>({});

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!fromAccount) {
      newErrors.fromAccount = 'Please select a source account';
    }
    
    if (!toAccount) {
      newErrors.toAccount = 'Please select a destination account';
    }
    
    if (fromAccount === toAccount) {
      newErrors.toAccount = 'Source and destination accounts must be different';
    }
    
    if (!amount) {
      newErrors.amount = 'Please enter an amount';
    } else if (isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount greater than zero';
    }
    
    if (!transferDate) {
      newErrors.transferDate = 'Please select a transfer date';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would call an API to process the transfer
      setTransferDetails({
        fromAccount,
        toAccount,
        amount: formatCurrency(Number(amount)),
        date: new Date(transferDate).toLocaleDateString(),
        frequency,
        memo
      });
      
      setTransferSuccess(true);
      
      // Reset form
      setFromAccount('');
      setToAccount('');
      setAmount('');
      setTransferDate(new Date().toISOString().split('T')[0]);
      setMemo('');
      setFrequency('once');
    }
  };

  // Reset form and success state
  const handleNewTransfer = () => {
    setTransferSuccess(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Transfer Money</h1>
        <p className="text-gray-600">Move money between your accounts</p>
      </div>

      {transferSuccess ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">Transfer Successful</h2>
            <p className="text-gray-600 mt-2">Your transfer has been scheduled</p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">From</p>
                <p className="font-medium">{transferDetails.fromAccount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">To</p>
                <p className="font-medium">{transferDetails.toAccount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">{transferDetails.amount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{transferDetails.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Frequency</p>
                <p className="font-medium capitalize">{transferDetails.frequency}</p>
              </div>
              {transferDetails.memo && (
                <div>
                  <p className="text-sm text-gray-500">Memo</p>
                  <p className="font-medium">{transferDetails.memo}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={handleNewTransfer}
              className="btn btn-primary"
            >
              Make Another Transfer
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* From Account */}
              <div>
                <label htmlFor="fromAccount" className="block text-sm font-medium text-gray-700 mb-1">
                  From Account
                </label>
                <select
                  id="fromAccount"
                  value={fromAccount}
                  onChange={(e) => setFromAccount(e.target.value)}
                  className={`w-full border ${errors.fromAccount ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                >
                  <option value="">Select an account</option>
                  {accounts.map(account => (
                    <option key={account.id} value={account.name}>
                      {account.name} - {account.accountNumber} ({formatCurrency(account.balance)})
                    </option>
                  ))}
                </select>
                {errors.fromAccount && <p className="mt-1 text-sm text-red-600">{errors.fromAccount}</p>}
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <div className="bg-wells-gray-100 rounded-full p-2">
                  <ArrowRight className="text-wells-red" size={24} />
                </div>
              </div>
              
              {/* To Account */}
              <div>
                <label htmlFor="toAccount" className="block text-sm font-medium text-gray-700 mb-1">
                  To Account
                </label>
                <select
                  id="toAccount"
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                  className={`w-full border ${errors.toAccount ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                >
                  <option value="">Select an account</option>
                  {accounts.map(account => (
                    <option key={account.id} value={account.name}>
                      {account.name} - {account.accountNumber} ({formatCurrency(account.balance)})
                    </option>
                  ))}
                </select>
                {errors.toAccount && <p className="mt-1 text-sm text-red-600">{errors.toAccount}</p>}
              </div>
              
              {/* Amount */}
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`w-full border ${errors.amount ? 'border-red-500' : 'border-gray-300'} rounded-md pl-7 p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                    placeholder="0.00"
                  />
                </div>
                {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
              </div>
              
              {/* Transfer Date */}
              <div>
                <label htmlFor="transferDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Transfer Date
                </label>
                <input
                  type="date"
                  id="transferDate"
                  value={transferDate}
                  onChange={(e) => setTransferDate(e.target.value)}
                  className={`w-full border ${errors.transferDate ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                />
                {errors.transferDate && <p className="mt-1 text-sm text-red-600">{errors.transferDate}</p>}
              </div>
              
              {/* Frequency */}
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                  Frequency
                </label>
                <select
                  id="frequency"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                >
                  <option value="once">One Time</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Every 2 Weeks</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              
              {/* Memo */}
              <div>
                <label htmlFor="memo" className="block text-sm font-medium text-gray-700 mb-1">
                  Memo (Optional)
                </label>
                <input
                  type="text"
                  id="memo"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                  placeholder="Add a memo for this transfer"
                />
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn btn-primary py-3"
                >
                  Transfer Money
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TransferPage;