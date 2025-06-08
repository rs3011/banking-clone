import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

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
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/login_bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      
      <div className="relative w-full max-w-md px-6 py-8 z-10">
           <div className="rounded-2xl p-8 shadow-lg bg-white/90 backdrop-blur-sm ring-1 ring-black/10 transition-all duration-300">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Good morning</h1>
            <p className="text-gray-600 mt-2">Sign on to manage your accounts.</p>
          </div>
          
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              <div className="flex items-start">
                <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                <span>{error}</span>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border ${
                  error && !email ? 'border-red-500' : 'border-gray-300'
                } rounded-full focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent transition-colors`}
                placeholder="Enter username"
              />
              {error && !email && (
                <p className="mt-1 text-sm text-red-600">Username is required</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                  } rounded-full focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent pr-10 transition-colors`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && !password && (
                <p className="mt-1 text-sm text-red-600">Password is required</p>
              )}
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
              <a href="#" className="text-sm text-wells-red hover:text-wells-red-dark transition-colors">
                Forgot username/password?
              </a>
            </div>

            <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-wells-red text-white text-sm font-medium py-2.5 px-11 rounded-full hover:underline hover:bg-wells-red-dark focus:outline-none focus:ring-2 focus:ring-wells-red focus:ring-opacity-50 transition-colors${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign On'}
            </button>
            </div>

            <div className="mt-6 text-center">
              <a href="#" className="text-wells-red hover:text-wells-red-dark transition-colors font-medium">
                Enroll Now
              </a>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <a href="#" className="hover:text-wells-red transition-colors">Security Center</a>
              <a href="#" className="hover:text-wells-red transition-colors">Privacy, Cookies, and Legal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;