'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e7dec4' }}>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ backgroundColor: '#e7dec4' }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#e7dec4' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-sage-800 leading-tight mb-6">
                <span style={{ color: '#e89576' }}>Helping You Heal, Grow, and Thrive</span>
              </h1>
              
              <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto mb-10">
                Compassionate, evidence-based therapy for individuals, couples, and families.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#84b3a8', color: 'white' }}
                >
                  Free Consultation
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 font-medium rounded-lg transition-colors duration-300"
                  style={{ border: '2px solid #84b3a8', color: '#84b3a8' }}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 md:mt-20"
            >
              <div className="relative w-full max-w-4xl h-64 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-soft-beige/90 to-sage-100/90"></div>
                <div className="relative h-full flex items-center justify-center p-8 text-center">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-sage-900 mb-4">
                      A Safe Space for Healing
                    </h3>
                    <p className="text-sage-800 mb-6">
                      Experience personalized care in a warm, non-judgmental environment where you can explore your thoughts and feelings freely.
                    </p>
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-sage-700 hover:text-sage-800 font-medium group"
                    >
                      Explore Our Services
                      <svg 
                        className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
              How I Can Help
            </h2>
            <div className="w-20 h-1 bg-sage-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Individual Therapy',
                description: 'Personalized one-on-one sessions to help you overcome challenges and achieve personal growth.',
                icon: ''
              },
              {
                title: 'Couples Counseling',
                description: 'Strengthen your relationship through improved communication and deeper connection.',
                icon: ''
              },
              {
                title: 'Family Therapy',
                description: 'Help your family navigate challenges and build stronger, healthier relationships.',
                icon: ''
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.6
                    }
                  }
                }}
                className="bg-cream-light p-8 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">{service.title}</h3>
                <p className="text-sage-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center text-sage-700 hover:text-sage-800 font-medium group"
            >
              View All Services
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
