'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you within 24-48 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e7dec4' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24" style={{ backgroundColor: '#e7dec4' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center text-gray-900"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6" style={{ color: '#84b3a8' }}>
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              I'm here to answer your questions and help you take the first step toward healing and growth.
            </p>
            <div className="w-24 h-1 bg-sage-600 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16" style={{ backgroundColor: '#e7dec4' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-2/3"
              >
                <div className="bg-soft-beige rounded-xl shadow-soft p-8 md:p-10 border border-sage-100">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                    Send Me a Message
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                  
                  {submitStatus.message && (
                    <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-800 mb-1">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="individual">Individual Therapy</option>
                          <option value="couples">Couples Counseling</option>
                          <option value="family">Family Therapy</option>
                          <option value="anxiety">Anxiety Treatment</option>
                          <option value="trauma">Trauma Therapy</option>
                          <option value="stress">Stress Management</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors"
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto px-8 py-4 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-xs text-gray-600 mt-2">
                        * Required fields
                      </p>
                    </div>
                  </form>
                </div>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:w-1/3"
              >
                <div className="bg-soft-beige rounded-xl p-8 sticky top-8 border border-sage-100">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                        <FaMapMarkerAlt className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-semibold text-gray-900">Office Location</h4>
                        <p className="mt-1 text-gray-700">
                          4829 E. Beltline Ave NE Ste 3<br />
                          Grand Rapids, MI 49525
                        </p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-sage-600 hover:text-sage-800 text-sm font-medium transition-colors"
                        >
                          View on Map →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                        <FaPhone className="w-4 h-4" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-semibold text-gray-900">Phone</h4>
                        <p className="mt-1 text-gray-700">(616) 951-1852</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Available Mon-Fri, 9am-5pm
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                        <FaEnvelope className="w-4 h-4" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-semibold text-gray-900">Email</h4>
                        <a 
                          href="mailto:Therapy@denisepotter.com" 
                          className="mt-1 text-gray-700 hover:text-sage-600 transition-colors"
                        >
                          Therapy@denisepotter.com
                        </a>
                        <p className="text-sm text-sage-500 mt-1">
                          I typically respond within 24-48 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                        <FaClock className="w-4 h-4" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-semibold text-gray-900">Office Hours</h4>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          <li className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span>9:00 AM - 7:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Saturday</span>
                            <span>10:00 AM - 2:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Sunday</span>
                            <span>Closed</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="text-base font-semibold text-gray-900 mb-3">Follow Me</h4>
                      <div className="flex space-x-4">
                        <a 
                          href="https://facebook.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
                          aria-label="Facebook"
                        >
                          <FaFacebook className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://instagram.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
