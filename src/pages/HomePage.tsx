import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CreditCard, Landmark, PiggyBank, Shield, RefreshCw } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wells-red to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Banking that works as hard as you do</h1>
              <p className="text-xl mb-6">
                Discover checking accounts, credit cards, and financial tools designed to help you achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/personal" 
                  className="btn bg-white text-wells-red hover:bg-gray-100 font-semibold px-6 py-3 rounded"
                >
                  Explore Accounts
                </Link>
                <Link 
                  to="/login" 
                  className="btn border border-white text-white hover:bg-wells-red-dark font-semibold px-6 py-3 rounded"
                >
                  Sign On
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="bonus.png" 
                alt="Happy family planning finances" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Find the right accounts for you</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checking */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="w-12 h-12 bg-wells-red rounded-full flex items-center justify-center mb-4">
                  <Landmark className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Checking Accounts</h3>
                <p className="text-gray-600 mb-4">
                  Find a checking account that fits your needs with options for students, families, and businesses.
                </p>
                <Link to="/personal/checking" className="text-wells-red font-medium flex items-center hover:underline">
                  Compare accounts <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="w-12 h-12 bg-wells-red rounded-full flex items-center justify-center mb-4">
                  <PiggyBank className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Savings Accounts</h3>
                <p className="text-gray-600 mb-4">
                  Start saving with competitive rates and convenient access to your money.
                </p>
                <Link to="/personal/savings-cds" className="text-wells-red font-medium flex items-center hover:underline">
                  Explore savings options <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Credit Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="p-6">
                <div className="w-12 h-12 bg-wells-red rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Credit Cards</h3>
                <p className="text-gray-600 mb-4">
                  Choose from cards with cash back, rewards, travel benefits, or low introductory rates.
                </p>
                <Link to="/personal/credit-cards" className="text-wells-red font-medium flex items-center hover:underline">
                  Find your card <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Banking made simple</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-wells-red rounded-full p-3 text-white">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Banking</h3>
                <p className="text-gray-600">
                  Advanced security features help keep your accounts and personal information safe with 24/7 fraud monitoring.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-wells-red rounded-full p-3 text-white">
                <RefreshCw size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Easy Transfers</h3>
                <p className="text-gray-600">
                  Send money quickly with Zelle® and make transfers between your accounts with just a few clicks.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-wells-red rounded-full p-3 text-white">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Digital Wallet</h3>
                <p className="text-gray-600">
                  Add your cards to Apple Pay®, Google Pay™, or Samsung Pay to make secure payments with your mobile device.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-wells-red rounded-full p-3 text-white">
                <PiggyBank size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Automatic Savings</h3>
                <p className="text-gray-600">
                  Set up automatic transfers to your savings account to build your savings without having to think about it.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about-wells-fargo" 
              className="btn bg-wells-red text-white hover:bg-wells-red-dark font-semibold px-6 py-3 rounded inline-flex items-center"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wells-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Open an account online in minutes or sign on to manage your existing accounts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/personal" 
              className="btn bg-wells-red text-white hover:bg-wells-red-dark font-semibold px-6 py-3 rounded"
            >
              Open an Account
            </Link>
            <Link 
              to="/login" 
              className="btn border border-wells-red text-wells-red hover:bg-gray-100 font-semibold px-6 py-3 rounded"
            >
              Sign On
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;