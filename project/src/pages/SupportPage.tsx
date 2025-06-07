import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, MessageSquare, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!contactFormData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!contactFormData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!contactFormData.topic) {
      errors.topic = 'Please select a topic';
    }
    
    if (!contactFormData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would submit the form data to a server
      console.log('Form submitted:', contactFormData);
      setFormSubmitted(true);
      setContactFormData({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
      });
    }
  };

  const faqItems = [
    {
      question: 'How do I reset my online banking password?',
      answer: 'To reset your password, click the "Forgot password" link on the sign-on page. You\'ll need to verify your identity using your username, account number, or card number, and then answer security questions. You\'ll receive instructions to create a new password via email or text message.'
    },
    {
      question: 'How do I report a lost or stolen card?',
      answer: 'If your card is lost or stolen, contact us immediately at 1-800-555-1234. We\'re available 24/7 to assist you. You can also temporarily lock your card through the mobile app or online banking until you find it.'
    },
    {
      question: 'What are the daily ATM withdrawal limits?',
      answer: 'The standard daily ATM withdrawal limit is $300-$500 depending on your account type. Some premium accounts may have higher limits. You can check your specific limit by logging into online banking or calling customer service.'
    },
    {
      question: 'How do I set up direct deposit?',
      answer: 'To set up direct deposit, provide your employer with your account number and our routing number (121000248). You can find a direct deposit form in online banking under the "Account Services" tab or visit a branch for assistance.'
    },
    {
      question: 'How long does it take for a check to clear?',
      answer: 'Most checks begin to clear within 1-2 business days. However, funds may not be available for withdrawal immediately. The first $225 of a check deposit is typically available the next business day, with the remainder available within 2-5 business days depending on the check.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wells-red to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Help & Support</h1>
            <p className="text-xl mb-6">
              Get the help you need with your accounts, online banking, and more.
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-wells-yellow"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Ways to Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-wells-red rounded-full p-4 text-white">
                  <Phone size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our customer service representatives
              </p>
              <p className="font-medium">1-800-555-1234</p>
              <p className="text-sm text-gray-500 mt-2">
                Available 24/7 for urgent matters
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-wells-red rounded-full p-4 text-white">
                  <MessageSquare size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Message Us</h3>
              <p className="text-gray-600 mb-4">
                Send a secure message through online banking
              </p>
              <button className="btn btn-primary">
                Sign On to Send Message
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Response within 24 hours
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-wells-red rounded-full p-4 text-white">
                  <MapPin size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Visit a Branch</h3>
              <p className="text-gray-600 mb-4">
                Find your nearest Wells Fargo branch location
              </p>
              <button className="btn btn-primary">
                Find a Branch
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Make an appointment for faster service
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-wells-gray-100 rounded-lg p-6">
            <div className="flex items-start">
              <Clock className="text-wells-red mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold mb-2">Customer Service Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">General Banking Support:</p>
                    <p className="text-gray-600">24 hours a day, 7 days a week</p>
                  </div>
                  <div>
                    <p className="font-medium">Technical Support:</p>
                    <p className="text-gray-600">Monday - Friday: 7am - 11pm ET</p>
                    <p className="text-gray-600">Saturday - Sunday: 8am - 8pm ET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-wells-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp size={20} className="text-wells-red" />
                  ) : (
                    <ChevronDown size={20} className="text-wells-red" />
                  )}
                </button>
                
                {activeAccordion === index && (
                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="text-wells-red font-medium hover:underline">
              View all FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-green-700 font-bold text-lg mb-2">Message Received</h3>
                <p className="text-green-700">
                  Thank you for contacting us! We've received your message and will respond within 24-48 hours.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactFormData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                        Topic *
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        value={contactFormData.topic}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border ${formErrors.topic ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                      >
                        <option value="">Select a topic</option>
                        <option value="account">Account Question</option>
                        <option value="online-banking">Online Banking</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="card-issue">Credit/Debit Card Issue</option>
                        <option value="loan">Loan Information</option>
                        <option value="other">Other</option>
                      </select>
                      {formErrors.topic && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.topic}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={contactFormData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-wells-red focus:border-transparent`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-8 py-3"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;