import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Upload, Globe, FileText, Check, AlertCircle } from 'lucide-react';

const AddProjectPage = () => {
  const [formData, setFormData] = useState({
    tittle: '',
    image: null,
    website_url: ''
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 4000);
  };

  const validateForm = () => {
    if (!formData.tittle.trim()) {
      showNotification('error', 'Project title is required');
      return false;
    }
    if (!formData.image) {
      showNotification('error', 'Project image is required');
      return false;
    }
    if (!formData.website_url.trim()) {
      showNotification('error', 'Website URL is required');
      return false;
    }
    
    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlPattern.test(formData.website_url)) {
      showNotification('error', 'Please enter a valid website URL');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('tittle', formData.tittle);
      formDataToSend.append('image', formData.image);
      formDataToSend.append('website_url', formData.website_url);
      
      const response = await fetch('http://localhost:5000/api/v4/Addproject', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        showNotification('success', 'Project added successfully!');
        setFormData({ tittle: '', image: null, website_url: '' });
        setImagePreview(null);
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        const errorData = await response.json();
        showNotification('error', errorData.error || 'Failed to add project');
      }
    } catch (error) {
      showNotification('error', 'Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const goBackToDashboard = () => {
    // In a real app, you'd use React Router
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50 to-violet-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      {/* Notification */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`fixed top-6 right-6 z-50 flex items-center space-x-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm ${
            notification.type === 'success' 
              ? 'bg-green-500/90 text-white' 
              : 'bg-red-500/90 text-white'
          }`}
        >
          {notification.type === 'success' ? (
            <Check className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{notification.message}</span>
        </motion.div>
      )}

      <div className="relative z-10 min-h-screen">
        {/* Back Button - Absolute positioned */}
        <motion.button
          onClick={goBackToDashboard}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 left-6 z-20 flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-xl shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 text-violet-600 group-hover:text-violet-700 transition-colors" />
          <span className="text-violet-700 font-medium">Back to Dashboard</span>
        </motion.button>

        {/* Main Content - Centered */}
        <div className="min-h-screen flex items-center justify-center p-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            {/* Title Section */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl shadow-xl mb-6"
              >
                <Plus className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold text-gray-800 mb-3"
              >
                Add New Project
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-gray-600"
              >
                Create and showcase your amazing work
              </motion.p>
            </div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8"
            >
              <div className="space-y-8">
                {/* Project Title */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-3"
                >
                  <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                    <FileText className="w-5 h-5 text-violet-600" />
                    <span>Project Title</span>
                  </label>
                  <input
                    type="text"
                    name="tittle"
                    value={formData.tittle}
                    onChange={handleInputChange}
                    placeholder="Enter your project title..."
                    className="w-full px-4 py-4 bg-white/50 border-2 border-violet-200 rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20 outline-none transition-all duration-300 text-lg placeholder-gray-400"
                  />
                </motion.div>

                {/* Image Upload */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-3"
                >
                  <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                    <Upload className="w-5 h-5 text-violet-600" />
                    <span>Project Image</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="image-upload"
                    />
                    
                    {/* Upload Area */}
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-violet-300 rounded-2xl cursor-pointer bg-white/30 hover:bg-white/50 transition-all duration-300 group"
                    >
                      {imagePreview ? (
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium">Click to change</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="w-12 h-12 text-violet-400 mx-auto mb-3 group-hover:text-violet-600 transition-colors" />
                          <p className="text-violet-600 font-medium group-hover:text-violet-700 transition-colors">
                            Drag & drop your image here
                          </p>
                          <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      )}
                    </label>
                    
                    {/* Upload Button */}
                    <div className="mt-4 flex justify-center">
                      <motion.button
                        type="button"
                        onClick={() => document.getElementById('image-upload').click()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Upload className="w-5 h-5" />
                        <span>{formData.image ? 'Change Image' : 'Choose Image'}</span>
                      </motion.button>
                    </div>
                    
                    {/* File Info */}
                    {formData.image && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-3 bg-violet-50 rounded-xl border border-violet-200"
                      >
                        <div className="flex items-center space-x-2 text-sm text-violet-700">
                          <FileText className="w-4 h-4" />
                          <span className="font-medium">{formData.image.name}</span>
                          <span className="text-violet-500">
                            ({(formData.image.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Website URL */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="space-y-3"
                >
                  <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700">
                    <Globe className="w-5 h-5 text-violet-600" />
                    <span>Website URL</span>
                  </label>
                  <input
                    type="url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleInputChange}
                    placeholder="https://your-project-website.com"
                    className="w-full px-4 py-4 bg-white/50 border-2 border-violet-200 rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20 outline-none transition-all duration-300 text-lg placeholder-gray-400"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="pt-6"
                >
                  <motion.button
                    type="button"
                    disabled={isLoading}
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-lg flex items-center justify-center space-x-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Adding Project...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-6 h-6" />
                        <span>Add Project</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Preview Card */}
            {(formData.tittle || imagePreview) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center space-x-2">
                  <span>Preview</span>
                </h3>
                <div className="bg-white/80 rounded-2xl p-4 shadow-lg">
                  {imagePreview && (
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                      <img 
                        src={imagePreview} 
                        alt="Project preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h4 className="text-lg font-semibold text-gray-800">
                    {formData.tittle || 'Project Title'}
                  </h4>
                  {formData.website_url && (
                    <p className="text-violet-600 text-sm mt-1 truncate">
                      {formData.website_url}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectPage;