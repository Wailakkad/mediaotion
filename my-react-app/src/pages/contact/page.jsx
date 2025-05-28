import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";
import imgContact from "../../assets/contact.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    sujet: "", // Changed from "subject" to match backend
    message: "",
  });

  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [quoteStatus, setQuoteStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteData({
      ...quoteData,
      [name]: value,
    });
  };

  // Function to handle contact form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Input validation
    if (!formData.name || !formData.email || !formData.sujet || !formData.service || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: "Tous les champs sont requis."
      });
      return;
    }

    try {
      setFormStatus({ loading: true, success: false, error: null });
      
      const response = await fetch('http://localhost:5000/api/v2/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du formulaire.');
      }
      
      // Success handling
      setFormStatus({ loading: false, success: true, error: null });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        service: "",
        sujet: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: error.message 
      });
      console.error('Error submitting form:', error);
    }
  };

  // Updated function to handle quote form submission with API connection
  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    
    // Input validation for quote form
    if (!quoteData.name || !quoteData.email) {
      setQuoteStatus({
        loading: false,
        success: false,
        error: "Tous les champs sont requis."
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(quoteData.email)) {
      setQuoteStatus({
        loading: false,
        success: false,
        error: "Veuillez entrer une adresse email valide."
      });
      return;
    }

    try {
      setQuoteStatus({ loading: true, success: false, error: null });
      
      // Make API call to your backend quote endpoint
      const response = await fetch('http://localhost:5000/api/v3/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || data.message || 'Une erreur est survenue lors de l\'envoi de la demande de devis.');
      }
      
      // Success handling
      setQuoteStatus({ loading: false, success: true, error: null });
      
      // Reset form after successful submission
      setQuoteData({
        name: "",
        email: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setQuoteStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setQuoteStatus({ 
        loading: false, 
        success: false, 
        error: error.message 
      });
      console.error('Error submitting quote form:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const services = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Mobile App Development",
    "E-commerce Solutions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100 font-sans mt-40">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Besoin d'un devis ou d'informations supplémentaires ? Notre équipe est
            à votre écoute.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-8 rounded-2xl overflow-hidden shadow-xl">
            {/* Left Side Image */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="h-full relative z-0 bg-gray-200">
                <img
                  src={imgContact}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white border border-white/20">
                  <h3 className="font-semibold text-xl mb-4">Our Team</h3>
                  <p className="mb-6">
                    We're dedicated to delivering exceptional digital solutions that 
                    drive real business growth.
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} />
                      <span>contact@mediamotion.ma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} />
                      <span>+212 6 10 67 11 98</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side Form */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 bg-white p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">CONTACT-US</h3>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votremail@exemple.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </motion.select>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Votre message..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 resize-none"
                  />
                </div>

                {/* Status messages for contact form */}
                {formStatus.error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {formStatus.error}
                  </div>
                )}
                
                {formStatus.success && (
                  <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
                    Votre message a été envoyé avec succès!
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={formStatus.loading}
                  className={`w-full ${formStatus.loading ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center`}
                >
                  {formStatus.loading ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer</span>
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-6 text-gray-800"
          >
            Obtenez un devis gratuit
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Élevez votre présence en ligne avec notre package digital tout-en-un. Nous offrons une création de site web expert et un ciblage d'audience robuste efficacement.
          </motion.p>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                type="text"
                name="name"
                value={quoteData.name}
                onChange={handleQuoteChange}
                placeholder="NOM..."
                className="w-full p-4 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white/70 backdrop-blur-sm"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                type="email"
                name="email"
                value={quoteData.email}
                onChange={handleQuoteChange}
                placeholder="EMAIL..."
                className="w-full p-4 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white/70 backdrop-blur-sm"
              />
            </motion.div>
            
            {/* Status messages for quote form */}
            {quoteStatus.error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 max-w-3xl mx-auto">
                {quoteStatus.error}
              </div>
            )}
            
            {quoteStatus.success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-6 max-w-3xl mx-auto">
                Merci ! Nous vous répondrons avec un devis sous peu.
              </div>
            )}
            
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleQuoteSubmit}
                disabled={quoteStatus.loading}
                className={`${quoteStatus.loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'} text-white font-medium rounded-full py-3 px-8 transition duration-300 flex items-center justify-center min-w-[150px]`}
              >
                {quoteStatus.loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    ENVOI...
                  </>
                ) : (
                  "DEMANDER MAINTENANT"
                )}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}