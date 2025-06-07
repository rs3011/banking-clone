import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Tag, Percent, Clock, Shield, CheckCircle } from 'lucide-react';

const CardsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wells-red to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Credit Cards</h1>
            <p className="text-xl mb-6">
              Find the right credit card for your lifestyle with rewards, cash back, or low intro rates.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Comparison Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Compare Credit Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Active Cash Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-wells-red text-white p-4">
                <h3 className="text-xl font-bold">Active Cash® Card</h3>
              </div>
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <CreditCard size={64} className="text-wells-red" />
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Tag className="text-wells-red mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">Unlimited 2% Cash Rewards</h4>
                      <p className="text-gray-600 text-sm">On purchases with no categories to track</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-wells-red mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">$200 Cash Rewards Bonus</h4>
                      <p className="text-gray-600 text-sm">When you spend $1,000 in the first 3 months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Percent className="text-wells-red mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">0% Intro APR</h4>
                      <p className="text-gray-600 text-sm">15 months on purchases and qualifying balance transfers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="text-wells-red mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">$0 Annual Fee</h4>
                      <p className="text-gray-600 text-sm">No annual fee to worry about</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/login"
                  className="block w-full btn btn-primary text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            
            {/* Reflect Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">Reflect® Card</h3>
              </div>
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <CreditCard size={64} className="text-blue-600" />
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Clock className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">Up to 21-month 0% Intro APR</h4>
                      <p className="text-gray-600 text-sm">On purchases and qualifying balance transfers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">3-Month Extension</h4>
                      <p className="text-gray-600 text-sm">Get up to 3 additional months with on-time minimum payments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">Cellular Phone Protection</h4>
                      <p className="text-gray-600 text-sm">When you pay your monthly bill with your eligible card</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Tag className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">$0 Annual Fee</h4>
                      <p className="text-gray-600 text-sm">No annual fee to worry about</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/login"
                  className="block w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors btn text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            
            {/* Autograph Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-600 text-white p-4">
                <h3 className="text-xl font-bold">Autograph℠ Card</h3>
              </div>
              <div className="p-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <CreditCard size={64} className="text-purple-600" />
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Tag className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">Earn 3X Points</h4>
                      <p className="text-gray-600 text-sm">On restaurants, travel, gas, transit, and streaming services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">30,000 Bonus Points</h4>
                      <p className="text-gray-600 text-sm">When you spend $1,500 in the first 3 months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Percent className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">0% Intro APR</h4>
                      <p className="text-gray-600 text-sm">12 months on purchases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-bold">$0 Annual Fee</h4>
                      <p className="text-gray-600 text-sm">No annual fee to worry about</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/login"
                  className="block w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors btn text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Features Section */}
      <section className="py-12 bg-wells-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Card Features & Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="text-wells-red mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Fraud Protection</h3>
              <p className="text-gray-600">
                Zero liability protection for promptly reported unauthorized transactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CreditCard className="text-wells-red mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Digital Wallet</h3>
              <p className="text-gray-600">
                Add your card to Apple Pay®, Google Pay™, or Samsung Pay for secure payments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="text-wells-red mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Instant Card Access</h3>
              <p className="text-gray-600">
                Start using your card digitally while waiting for your physical card.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Tag className="text-wells-red mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Exclusive Offers</h3>
              <p className="text-gray-600">
                Access to special deals and promotions from select merchants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How do I apply for a credit card?</h3>
              <p className="text-gray-600">
                You can apply online, by phone, or by visiting a branch. The online application typically takes about 5-10 minutes to complete.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does it take to get approved?</h3>
              <p className="text-gray-600">
                Many applications receive an instant decision. Some applications may require additional review and can take 5-7 business days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">When will I receive my new card?</h3>
              <p className="text-gray-600">
                If approved, you'll typically receive your card within 7-10 business days. In some cases, you may be able to access a digital version of your card immediately.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What credit score do I need to qualify?</h3>
              <p className="text-gray-600">
                Credit requirements vary by card. Generally, cards with more premium rewards require higher credit scores, while other cards may be available to those with fair or good credit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-wells-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to apply?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Choose the card that's right for you and apply online in minutes.
          </p>
          <Link 
            to="/login" 
            className="btn bg-white text-wells-red hover:bg-gray-100 font-semibold px-6 py-3 rounded"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CardsPage;