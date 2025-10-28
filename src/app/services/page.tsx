'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHeart, FaUsers, FaHome, FaBrain, FaHandHoldingHeart, FaBalanceScale } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    id: 'individual',
    title: 'Individual Therapy',
    icon: <FaHeart className="w-8 h-8 text-sage-600" />,
    description: 'Personalized one-on-one sessions to help you overcome challenges and achieve personal growth.',
    benefits: [
      'Address anxiety, depression, and stress',
      'Develop coping strategies',
      'Improve self-esteem and confidence',
      'Navigate life transitions',
      'Process trauma and grief'
    ],
    approach: 'Using evidence-based approaches like CBT and ACT, I help you develop practical tools to manage difficult emotions and create meaningful change in your life.',
    price: '$150 per 50-minute session',
    cta: 'Start Your Healing Journey'
  },
  {
    id: 'couples',
    title: 'Couples Counseling',
    icon: <FaUsers className="w-8 h-8 text-sage-600" />,
    description: 'Strengthen your relationship through improved communication and deeper connection.',
    benefits: [
      'Improve communication skills',
      'Resolve conflicts constructively',
      'Rebuild trust and intimacy',
      'Navigate major life changes',
      'Enhance emotional connection'
    ],
    approach: 'Drawing from the Gottman Method and Emotionally Focused Therapy, I help couples create stronger, more fulfilling relationships.',
    price: '$180 per 60-minute session',
    cta: 'Strengthen Your Relationship'
  },
  {
    id: 'family',
    title: 'Family Therapy',
    icon: <FaHome className="w-8 h-8 text-sage-600" />,
    description: 'Help your family navigate challenges and build stronger, healthier relationships.',
    benefits: [
      'Improve family communication',
      'Resolve conflicts peacefully',
      'Navigate life transitions together',
      'Address behavioral concerns',
      'Strengthen family bonds'
    ],
    approach: 'Using a systemic approach, I help families understand patterns, improve communication, and create a more harmonious home environment.',
    price: '$200 per 60-minute session',
    cta: 'Help Your Family Thrive'
  },
  {
    id: 'anxiety',
    title: 'Anxiety Treatment',
    icon: <FaBrain className="w-8 h-8 text-sage-600" />,
    description: 'Evidence-based treatment to help you manage anxiety and regain control of your life.',
    benefits: [
      'Reduce anxiety symptoms',
      'Learn relaxation techniques',
      'Challenge negative thought patterns',
      'Build confidence',
      'Develop coping strategies'
    ],
    approach: 'Using CBT, mindfulness, and exposure therapy, I help you understand and manage anxiety in a supportive environment.',
    price: '$150 per 50-minute session',
    cta: 'Find Relief from Anxiety'
  },
  {
    id: 'trauma',
    title: 'Trauma Therapy',
    icon: <FaHandHoldingHeart className="w-8 h-8 text-sage-600" />,
    description: 'Heal from past trauma in a safe, supportive environment.',
    benefits: [
      'Process traumatic experiences',
      'Reduce PTSD symptoms',
      'Develop healthy coping mechanisms',
      'Rebuild trust and safety',
      'Regain control of your life'
    ],
    approach: 'Using trauma-informed care and evidence-based techniques, I provide a compassionate space for healing and recovery.',
    price: '$160 per 50-minute session',
    cta: 'Begin Healing'
  },
  {
    id: 'stress',
    title: 'Stress Management',
    icon: <FaBalanceScale className="w-8 h-8 text-sage-600" />,
    description: 'Learn effective strategies to manage stress and improve your overall well-being.',
    benefits: [
      'Identify stress triggers',
      'Develop healthy coping skills',
      'Improve work-life balance',
      'Enhance relaxation',
      'Build resilience'
    ],
    approach: 'Through mindfulness, cognitive-behavioral techniques, and personalized strategies, I help you reduce stress and increase life satisfaction.',
    price: '$150 per 50-minute session',
    cta: 'Reduce Your Stress'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-cream-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage-800 mb-6">
              Therapy <span className="text-sage-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto mb-8">
              Evidence-based therapeutic approaches tailored to your unique needs and goals.
            </p>
            <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
              How I Can Help You
            </h2>
            <p className="text-sage-600 max-w-3xl mx-auto">
              Each therapeutic journey is unique. Explore the services I offer to find the right fit for your needs.
            </p>
            <div className="w-24 h-1 bg-sage-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sage-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sage-700 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sage-800 mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-sage-500 mr-2 mt-1">•</span>
                          <span className="text-sage-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sage-800 mb-2">Approach:</h4>
                    <p className="text-sage-700">{service.approach}</p>
                  </div>
                  
                  <div className="text-lg font-semibold text-sage-700 mb-6">
                    {service.price}
                  </div>
                </div>
                
                <div className="p-6 bg-sage-50 border-t border-sage-100">
                  <Link
                    href={`/book?service=${service.id}`}
                    className="block w-full text-center px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    {service.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-xl shadow-soft"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-6 text-center">
                Insurance & Payment
              </h2>
              
              <div className="prose prose-sage max-w-none">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-3">Insurance</h3>
                    <p className="mb-4">I am an in-network provider with several major insurance plans, including:</p>
                    <ul className="space-y-2 mb-6">
                      {['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'United Healthcare', 'Oscar Health'].map((provider, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-sage-500 mr-2 mt-1">•</span>
                          <span>{provider}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-sage-600">
                      * Please verify your mental health benefits with your insurance provider before your first session.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-3">Self-Pay Options</h3>
                    <p className="mb-4">I also accept self-pay clients. Payment is due at the time of service.</p>
                    <div className="bg-sage-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-sage-800 mb-2">Sliding Scale</h4>
                      <p className="text-sage-700 text-sm">
                        A limited number of sliding scale spots are available based on financial need. Please inquire during your initial consultation.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sage-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Credit/Debit Cards</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sage-700 mt-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>HSA/FSA Cards</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 text-center
                ">
                  <Link 
                    href="/contact" 
                    className="inline-block px-8 py-4 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Have Questions? Contact Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
