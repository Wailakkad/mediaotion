import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff, Shield, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async () => {
    // Clear any previous messages
    setMessage({ type: '', text: '' });
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    if (!formData.email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/v5/adminAuth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Success - you might want to store the token and redirect
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
        
        // Store token if provided
        if (data.token) {
          localStorage.setItem('adminToken', data.token);
        }
        
        // Redirect after a short delay
        setTimeout(() => {
          // Replace with your admin dashboard route
          window.location.href = '/AdminDashbord';
        }, 1500);
        
      } else {
        // Handle different error scenarios
        const errorMessage = data.message || data.error || 'Login failed';
        setMessage({ type: 'error', text: errorMessage });
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Connection failed. Please check your internet connection and try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 flex items-center justify-center p-4 md:mt-25 mt-50 ">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Branding/Illustration (Desktop Only) */}
        <motion.div 
          className="hidden lg:flex flex-col items-center justify-center space-y-6 p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-16 h-16 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 w-8 h-8 bg-purple-200 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Access your admin dashboard with secure authentication
            </p>
          </div>
        </motion.div>

        {/* Right Column - Login Form */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-2">Admin Login</h2>
              <p className="text-gray-600">Enter your credentials to continue</p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    placeholder="admin@example.com"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div 
                className="flex items-center justify-between text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                  Forgot password?
                </a>
              </motion.div>

              {/* Status Message */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-3 rounded-lg ${
                    message.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {message.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">{message.text}</span>
                </motion.div>
              )}

              {/* Login Button */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-xl font-semibold shadow-lg transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-xl'
                }`}
                whileHover={!isLoading ? { scale: 1.02, y: -1 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In to Dashboard'
                )}
              </motion.button>
            </div>

            {/* Footer */}
            <motion.div 
              className="mt-8 text-center text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>Secure admin access • Protected by enterprise security</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;