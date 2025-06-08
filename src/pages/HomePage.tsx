import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, CreditCard, Landmark, PiggyBank, Shield, RefreshCw, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Get current time greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Floating Sign-on and Bonus */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-wells-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 min-h-[80vh]">
            
            {/* Floating Sign-on Box - Hidden on mobile */}
            <div className="hidden lg:block w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl border border-white/20">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
                  <p className="text-gray-600 mt-2">Sign on to manage your accounts.</p>
                </div>
                
                {error && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 rounded-r-lg">
                    <div className="flex items-start">
                      <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{error}</span>
                    </div>
                  </div>
                )}
                
                {!isAuthenticated ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 border ${
                          error && !email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent transition-all duration-200`}
                        placeholder="Enter username"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={`w-full px-4 py-3 border ${
                            error && !password ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent pr-12 transition-all duration-200`}
                          placeholder="Enter password"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="h-4 w-4 text-wells-red focus:ring-wells-red border-gray-300 rounded transition-colors"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Save username
                        </label>
                      </div>
                      <Link to="/login" className="text-sm text-wells-red hover:text-wells-red-dark transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-wells-red text-white font-semibold py-3 px-4 rounded-lg hover:bg-wells-red-dark focus:outline-none focus:ring-2 focus:ring-wells-red focus:ring-opacity-50 transition-all duration-200 transform hover:scale-[1.02] ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? 'Signing in...' : 'Sign On'}
                    </button>

                    <div className="mt-6 text-center">
                      <Link to="/login" className="text-wells-red hover:text-wells-red-dark transition-colors font-medium">
                        Enroll Now
                      </Link>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 mb-6">Welcome back! You're already signed in.</p>
                    <Link
                      to="/dashboard"
                      className="w-full bg-wells-red text-white font-semibold py-3 px-4 rounded-lg hover:bg-wells-red-dark transition-all duration-200 transform hover:scale-[1.02] inline-block"
                    >
                      Go to Dashboard
                    </Link>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <Link to="/support" className="hover:text-wells-red transition-colors">Security Center</Link>
                    <Link to="/about" className="hover:text-wells-red transition-colors">Privacy & Legal</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus Section */}
            <div className="flex-1 lg:ml-8">
              <div className="bg-gradient-to-r from-wells-red to-red-700 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-12 text-white">
                    <div className="max-w-lg">
                      <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        $325 checking bonus on us
                      </h1>
                      <p className="text-xl lg:text-2xl mb-6 text-red-100">
                        Open a new Everyday Checking account and get a $325 bonus when you meet the requirements.
                      </p>
                      <p className="text-lg mb-8 text-red-200">
                        Plus, enjoy convenient banking with no minimum balance and easy mobile banking.
                      </p>
                      <Link 
                        to="/personal/checking" 
                        className="inline-flex items-center bg-white text-wells-red font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                      >
                        Get started
                        <ArrowRight size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Bonus Image */}
                  <div className="lg:w-80 p-8 flex justify-center lg:justify-end">
                    <img 
                      src="/assets/bonus.png" 
                      alt="$325 bonus offer" 
                      className="max-w-full h-auto object-contain max-h-64 lg:max-h-80"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Sign-on CTA - Only visible on mobile */}
              <div className="lg:hidden mt-8 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center bg-wells-red text-white font-semibold py-4 px-8 rounded-full hover:bg-wells-red-dark transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Sign On to Your Account
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find the right accounts for you</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover banking solutions designed to help you manage your money and achieve your financial goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checking */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-wells-red to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Landmark className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Checking Accounts</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find a checking account that fits your needs with options for students, families, and businesses.
                </p>
                <Link to="/personal/checking" className="inline-flex items-center text-wells-red font-semibold hover:text-wells-red-dark transition-colors group">
                  Compare accounts 
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Savings */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PiggyBank className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Savings Accounts</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Start saving with competitive rates and convenient access to your money.
                </p>
                <Link to="/personal/savings-cds" className="inline-flex items-center text-wells-red font-semibold hover:text-wells-red-dark transition-colors group">
                  Explore savings options 
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Credit Cards */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Credit Cards</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Choose from cards with cash back, rewards, travel benefits, or low introductory rates.
                </p>
                <Link to="/personal/credit-cards" className="inline-flex items-center text-wells-red font-semibold hover:text-wells-red-dark transition-colors group">
                  Find your card 
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Banking made simple</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience modern banking with advanced security, easy transfers, and innovative features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start gap-6 group">
              <div className="bg-gradient-to-br from-wells-red to-red-600 rounded-2xl p-4 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Shield size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Secure Banking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced security features help keep your accounts and personal information safe with 24/7 fraud monitoring and real-time alerts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <RefreshCw size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Easy Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Send money quickly with Zelle® and make transfers between your accounts with just a few clicks, anytime, anywhere.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <CreditCard size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Digital Wallet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Add your cards to Apple Pay®, Google Pay™, or Samsung Pay to make secure payments with your mobile device.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <PiggyBank size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Automatic Savings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Set up automatic transfers to your savings account to build your savings without having to think about it.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/about-wells-fargo" 
              className="inline-flex items-center bg-wells-red text-white font-semibold px-8 py-4 rounded-full hover:bg-wells-red-dark transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Learn More 
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-wells-red to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to get started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-red-100">
            Open an account online in minutes or sign on to manage your existing accounts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/personal" 
              className="inline-flex items-center bg-white text-wells-red font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Open an Account
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/login" 
              className="inline-flex items-center border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-wells-red transition-all duration-200 transform hover:scale-105"
            >
              Sign On
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;