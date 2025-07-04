import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  Check,  AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";


// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function CheckoutPage() {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [orderDetails, setOrderDetails] = useState({
    service: "",
    package: "",
    price: "0"
  });
  const [billingDetails, setBillingDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    country: "Maroc",
    city: "",
    state: "",
    street_address: "",
    orderNote: ""
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState(null);
  
  // Quote form state
  const [quoteDetails, setQuoteDetails] = useState({
    name: "",
    email: ""
  });
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteError, setQuoteError] = useState(null);
  
  // Success message component
 const SuccessMessage = ({ onOrderAgain }) => (
  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
    <div className="flex items-center">
      <Check className="text-green-500 mr-2" size={20} />
      <p className="text-green-700 font-medium">Order placed successfully!</p>
    </div>
    <p className="text-green-600 mt-2 text-sm">Thank you for your order. We will contact you shortly.</p>
    
    <div className="mt-4">
      <button
        
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
       <a href="/packOne"> Place Another Order</a>
      </button>
    </div>
  </div>
);

  // Error message component
  const ErrorMessage = ({ message }) => (
    <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
      <div className="flex items-center">
        <AlertCircle className="text-red-500 mr-2" size={20} />
        <p className="text-red-700 font-medium">Error</p>
      </div>
      <p className="text-red-600 mt-2 text-sm">{message}</p>
    </div>
  );

  // Quote Success message component
  const QuoteSuccessMessage = () => (
    <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
      <div className="flex items-center">
        <Check className="text-green-500 mr-2" size={20} />
        <p className="text-green-700 font-medium">Quote request submitted successfully!</p>
      </div>
      <p className="text-green-600 mt-2 text-sm">We will contact you shortly with your free quote.</p>
    </div>
  );

  // Format number with comma as thousands separator
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // Get query parameters from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service') || "Website";
    const packageName = urlParams.get('package') || "Pro";
    const price = urlParams.get('price') || "149";
    
    setOrderDetails({
      service: service,
      package: packageName,
      price: price
    });
  }, []);

  // Handle input changes for billing details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle input changes for quote form
  const handleQuoteInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission for orders
  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!billingDetails.firstname || !billingDetails.lastname || !billingDetails.email || !billingDetails.phone) {
      setOrderError("Please fill in all required fields");
      return;
    }
    
    if (!termsAccepted) {
      setOrderError("Please accept the terms and conditions");
      return;
    }
    
    setIsSubmitting(true);
    setOrderError(null);
    
    try {
      const response = await fetch(`http://localhost:5000/api/v1/orders?service_name=${orderDetails.service}&pack_name=${orderDetails.package}&price=${orderDetails.price}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billingDetails)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to place order');
      }
      
      setOrderSuccess(true);
      // Reset form or redirect to success page
      console.log('Order placed successfully:', data);
    } catch (error) {
      setOrderError(error.message);
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle quote form submission
  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!quoteDetails.name || !quoteDetails.email) {
      setQuoteError("Please fill in all required fields");
      return;
    }
    
    setIsQuoteSubmitting(true);
    setQuoteError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/v3/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteDetails)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit quote request');
      }
      
      setQuoteSuccess(true);
      // Reset form
      setQuoteDetails({ name: "", email: "" });
      console.log('Quote request submitted successfully:', data);
    } catch (error) {
      setQuoteError(error.message);
      console.error('Quote submission error:', error);
    } finally {
      setIsQuoteSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100 py-12 px-4 flex flex-col items-center relative mt-30">
      {/* Wave shape at the bottom of the entire page */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-32">
          <path fill="#c084fc" fillOpacity="0.5" d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,165.3C840,160,960,160,1080,165.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <path fill="#c084fc" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,218.7C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">{t("checkout.title")}</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            {t('checkout.description', { service: orderDetails.service })}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Billing Details */}
          <motion.div 
            variants={fadeIn}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 text-sm font-medium">1</span>
              </div>
              <h2 className="text-lg font-semibold">{t("checkout.billingDetails.title")}</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.firstName")}<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="firstname"
                    value={billingDetails.firstname}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.lastName")}<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="lastname"
                    value={billingDetails.lastname}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.company")}</label>
                <input 
                  type="text" 
                  name="company"
                  value={billingDetails.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.email")}<span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={billingDetails.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.country")}</label>
                <input 
                  type="text" 
                  name="country"
                  value={billingDetails.country}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                  defaultValue="Maroc" 
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.streetAddress")}</label>
                <input 
                  type="text" 
                  name="street_address"
                  value={billingDetails.street_address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.city")}</label>
                  <input 
                    type="text" 
                    name="city"
                    value={billingDetails.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.state")}</label>
                  <input 
                    type="text" 
                    name="state"
                    value={billingDetails.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.phone")} <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  value={billingDetails.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{t("checkout.billingDetails.orderNotes")}</label>
                <textarea 
                  name="orderNote"
                  value={billingDetails.orderNote}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 h-20" 
                  placeholder={t("checkout.billingDetails.orderNotesPlaceholder")}
                ></textarea>
              </div>
            </div>
          </motion.div>

          {/* Order Review */}
          <motion.div 
            variants={fadeIn}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 text-sm font-medium">2</span>
              </div>
              <h2 className="text-lg font-semibold">{t("checkout.orderReview.title")}</h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">{orderDetails.package}</p>
                  <p className="text-sm text-gray-500">{t("checkout.orderReview.service")}: {orderDetails.service}</p>
                  <p className="text-sm text-gray-500">{t("checkout.orderReview.s")}: 1</p>
                </div>
                <p className="font-medium">{formatPrice(orderDetails.price)} MAD</p>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold text-lg">{formatPrice(orderDetails.price)} MAD</p>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">{t("checkout.orderReview.estimatedDelivery")}</h3>
                <p className="text-sm text-gray-600">
                  {t("checkout.orderReview.deliveryDescription")}
                </p>
              </div>
            </div>
          </motion.div>

        {/* Payment Method */}
<motion.div 
  variants={fadeIn}
  className="bg-white p-6 rounded-xl shadow-sm"
>
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-900 mb-6">{t("checkout.payment.title")}</h2>
    
    <div className="border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium mb-4">{t("checkout.payment.title")}</h3>
      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="mr-3">
            <div className="w-5 h-5 rounded-full border flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
          </div>
          <span className="font-medium">{t("checkout.payment.cashOnDelivery")}</span>
        </div>
        <p className="text-gray-600 text-sm ml-8">{t("checkout.payment.cashDescription")}</p>
      </div>
      
      <div className="mt-8 text-gray-600 text-sm">
        <p>
         {t("checkout.payment.privacyText")}<span className="text-red-500">{t("checkout.payment.privacyPolicyLinkText", "privacy policy")}</span>.
        </p>
      </div>
      
      <div className="mt-8">
        {orderSuccess && <SuccessMessage />}
        {orderError && <ErrorMessage message={orderError} />}
        
        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="terms" 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-1 mr-3" 
          />
          <label htmlFor="terms" className="text-sm">
             {t("checkout.payment.termsText")}<span className="text-red-500">*</span>
          </label>
        </div>
      </div>
      
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">{t("checkout.payment.grandTotal")}</h3>
          <p className="text-xl font-bold">{formatPrice(orderDetails.price)} MAD</p>
        </div>
        
        <motion.button
          onClick={handleSubmitOrder}
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-3 rounded-md font-medium flex items-center justify-center ${isSubmitting ? 'bg-gray-400 text-gray-200' : 'bg-gray-900 text-white'}`}
        >
          <span>{isSubmitting ? t("checkout.payment.processing") : t("checkout.payment.placeOrder")}</span>
        </motion.button>
      </div>
    </div>
  </div>
</motion.div>

 </div>

{/* Free Quote Section */}
<div className="relative mt-20">
  {/* Quote content */}
  <div className="relative py-20 px-4 text-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("checkout.quote.title")}</h2>
      <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-sm">
        {t("checkout.quote.description")}
      </p>

      {/* Quote form messages */}
      {quoteSuccess && <QuoteSuccessMessage />}
      {quoteError && <ErrorMessage message={quoteError} />}

      <div className="max-w-md mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <input
            type="text"
            name="name"
            value={quoteDetails.name}
            onChange={handleQuoteInputChange}
            placeholder={t("checkout.quote.namePlaceholder")}
            className="w-full px-4 py-3 bg-white rounded-lg border-0 shadow-sm"
            required
          />
          <input
            type="email"
            name="email" 
            value={quoteDetails.email}
            onChange={handleQuoteInputChange}
            placeholder={t("checkout.quote.emailPlaceholder")}
            className="w-full px-4 py-3 bg-white rounded-lg border-0 shadow-sm"
            required
          />
        </div>
        
        <motion.button
          onClick={handleSubmitQuote}
          disabled={isQuoteSubmitting}
          whileHover={{ scale: isQuoteSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isQuoteSubmitting ? 1 : 0.98 }}
          className={`px-8 py-3 rounded-full font-medium text-sm shadow-md ${isQuoteSubmitting ? 'bg-gray-400 text-gray-200' : 'bg-black text-white'}`}
        >
          {isQuoteSubmitting ? t("checkout.quote.submitting") : t("checkout.quote.submitButton")}
        </motion.button>
      </div>
    </motion.div>
  </div>
</div>

      </motion.div>
    </div>
  );
}