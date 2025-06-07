import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Landmark, PiggyBank, CreditCard, Calculator, Shield } from 'lucide-react';

const BankingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wells-red to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Banking Products & Services</h1>
            <p className="text-xl mb-6">
              Find the right banking solutions to help you manage your money and achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Banking Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Checking Accounts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-wells-red rounded-full p-3 text-white mr-4">
                    <Landmark size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Checking Accounts</h3>
                    <p className="text-gray-600 mb-4">
                      Choose from a variety of checking accounts designed to fit your banking needs.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Everyday Checking with low monthly service fee</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Clear Access Banking℠ with no overdraft fees</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Prime Checking with premium benefits</span>
                      </li>
                    </ul>
                    <Link to="/login" className="text-wells-red font-medium flex items-center hover:underline">
                      Compare checking accounts <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Accounts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-wells-red rounded-full p-3 text-white mr-4">
                    <PiggyBank size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Savings Accounts</h3>
                    <p className="text-gray-600 mb-4">
                      Start saving with competitive rates and convenient access to your money.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Way2Save® Savings with automatic saving options</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Platinum Savings with relationship rates</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Certificates of Deposit (CDs) for long-term savings</span>
                      </li>
                    </ul>
                    <Link to="/login" className="text-wells-red font-medium flex items-center hover:underline">
                      Explore savings options <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-wells-red rounded-full p-3 text-white mr-4">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Credit Cards</h3>
                    <p className="text-gray-600 mb-4">
                      Find a credit card that fits your lifestyle and spending habits.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Active Cash® Card with unlimited 2% cash rewards</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Reflect® Card with low intro APR on purchases</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Autograph℠ Card with rewards on top spending categories</span>
                      </li>
                    </ul>
                    <Link to="/cards" className="text-wells-red font-medium flex items-center hover:underline">
                      Compare credit cards <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Loans */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-wells-red rounded-full p-3 text-white mr-4">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Loans & Credit</h3>
                    <p className="text-gray-600 mb-4">
                      Get the financing you need with competitive rates and flexible terms.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Personal Loans for various needs</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Home Equity Lines of Credit (HELOC)</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="text-wells-red mr-2" />
                        <span>Mortgage Loans for home buyers</span>
                      </li>
                    </ul>
                    <Link to="/login" className="text-wells-red font-medium flex items-center hover:underline">
                      Explore loan options <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online & Mobile Banking Section */}
      <section className="py-12 bg-wells-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4">Online & Mobile Banking</h2>
              <p className="text-gray-700 mb-6">
                Bank anytime, anywhere with our secure online and mobile banking services. Check balances, transfer funds, deposit checks, and more.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-wells-red rounded-full p-2 text-white mr-3">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold">Secure Banking</h3>
                    <p className="text-gray-600">Advanced security features help protect your accounts and information.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-wells-red rounded-full p-2 text-white mr-3">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold">Mobile Deposit</h3>
                    <p className="text-gray-600">Deposit checks directly from your mobile device with just a few taps.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-wells-red rounded-full p-2 text-white mr-3">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold">Account Alerts</h3>
                    <p className="text-gray-600">Set up customized alerts to stay informed about your account activity.</p>
                  </div>
                </li>
              </ul>
              <div>
                <Link 
                  to="/login" 
                  className="btn bg-wells-red text-white hover:bg-wells-red-dark font-semibold px-6 py-3 rounded"
                >
                  Sign On to Online Banking
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Person using mobile banking app" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-wells-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Open an account online in minutes or visit a branch to speak with a banker.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/login" 
              className="btn bg-white text-wells-red hover:bg-gray-100 font-semibold px-6 py-3 rounded"
            >
              Open an Account
            </Link>
            <Link 
              to="/support" 
              className="btn border border-white text-white hover:bg-wells-red-dark font-semibold px-6 py-3 rounded"
            >
              Find a Branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingPage;