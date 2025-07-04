import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm the Media Web Motion assistant. How can I help you?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatButtonRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const messageText = inputValue.trim();
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/v7/aiChatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: data.reply || 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      chatButtonRef.current?.focus();
    }
  }, [sendMessage]);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    setIsMinimized(false);
  }, []);

//   const minimizeChat = useCallback(() => {
//     setIsMinimized(true);
//   }, []);

  // Memoized brand colors matching hero section
  const brandStyles = useMemo(() => ({
    primary: 'from-indigo-600 via-purple-600 to-indigo-600',
    primaryHover: 'from-indigo-700 via-purple-700 to-indigo-700',
    secondary: 'from-purple-50 to-indigo-50',
    accent: 'from-purple-400 to-indigo-500'
  }), []);

  return (
    <>
      {/* Chat Toggle Button with improved accessibility */}
      <motion.button
        ref={chatButtonRef}
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r ${brandStyles.primary} hover:${brandStyles.primaryHover} text-white p-4 rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
        }}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-window"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              {/* Notification dot with better animation */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window with enhanced accessibility */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "60px" : "460px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-24 right-6 z-40 w-100 h-98 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            role="dialog"
            aria-labelledby="chat-title"
            aria-describedby="chat-description"
          >
            {/* Enhanced Header */}
            <div className={`bg-gradient-to-r ${brandStyles.primary} p-4 text-white relative overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Bot className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 id="chat-title" className="font-semibold text-lg">AI Assistant</h3>
                    <p id="chat-description" className="text-xs opacity-90">Media Web Motion</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <motion.div 
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs">Online</span>
                  </div>
                  
                  {/* <motion.button
                    onClick={minimizeChat}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Minimize chat"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </motion.button> */}
                </div>
              </div>
            </div>

            {/* Messages Container - Hidden when minimized */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Messages */}
                  <div 
                    className="flex-1 p-4 space-y-4 overflow-y-auto h-72 bg-gradient-to-b from-gray-50 to-white"
                    role="log"
                    aria-live="polite"
                    aria-label="Chat messages"
                  >
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`p-2 rounded-full ${message.type === 'user' 
                            ? `bg-gradient-to-r ${brandStyles.primary}` 
                            : 'bg-gradient-to-r from-gray-300 to-gray-400'
                          }`}>
                            {message.type === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Bot className="w-4 h-4 text-gray-700" />
                            )}
                          </div>
                          <div className={`p-3 rounded-2xl ${message.type === 'user' 
                            ? `bg-gradient-to-r ${brandStyles.primary} text-white rounded-br-md shadow-lg` 
                            : 'bg-white text-gray-800 border rounded-bl-md shadow-sm border-gray-200'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-indigo-100' : 'text-gray-500'}`}>
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Enhanced Loading indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                        aria-live="polite"
                        aria-label="AI is typing"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="p-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-400">
                            <Bot className="w-4 h-4 text-gray-700" />
                          </div>
                          <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-200">
                            <div className="flex space-x-1">
                              {[0, 0.2, 0.4].map((delay, index) => (
                                <motion.div
                                  key={index}
                                  className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 1, repeat: Infinity, delay }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Enhanced Input */}
                  <div className="p-4 border-t bg-white border-gray-200 ">
                    <div className="flex items-center space-x-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all duration-200 bg-gray-50 focus:bg-white"
                        disabled={isLoading}
                        aria-label="Type your message"
                        maxLength={500}
                      />
                      <motion.button
                        onClick={sendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className={`bg-gradient-to-r ${brandStyles.primary} hover:${brandStyles.primaryHover} disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;