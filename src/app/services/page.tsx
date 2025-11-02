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
    description: 'Personalized one-on-one sessions to help you explore your inner world, overcome challenges, and create meaningful change.',
    benefits: [
      'Reduce symptoms of anxiety, depression, and stress',
      'Heal from past trauma and grief',
      'Strengthen self-awareness, confidence, and emotional balance',
      'Navigate life transitions with clarity and purpose',
      'Develop grounded coping tools for lasting resilience'
    ],
    approach: 'Through a holistic blend of psychotherapy, somatic therapy, and hypnotherapy, we’ll explore the patterns, emotions, and beliefs shaping your life. Together, we’ll calm your nervous system, heal from old wounds, and create a path toward greater peace and fulfillment.',
    price: '$150 per 50-minute session',
    cta: 'Start Your Healing Journey'
  },
  {
    id: 'couples',
    title: 'Couples Therapy & Relationship Healing',
    icon: <FaUsers className="w-8 h-8 text-sage-600" />,
    description: 'Rebuild trust, communication, and connection in a supportive and nonjudgmental space.',
    benefits: [
      'Improve communication and emotional understanding',
      'Resolve recurring conflicts with compassion',
      'Rebuild trust and intimacy',
      'Navigate transitions, loss, or family changes together',
      'Strengthen emotional and physical connection'
    ],
    approach: 'Drawing from Emotionally Focused Therapy (EFT), somatic awareness, and relational healing, sessions help each partner feel heard and understood while identifying patterns that cause disconnection. Together, we’ll foster empathy, rebuild trust, and create a stronger, more connected relationship.',
    price: '$150 per 50-minute session',
    cta: 'Start Your Healing Journey'
  },
  {
    id: 'family',
    title: 'Family Reunification Therapy',
    icon: <FaUsers className="w-8 h-8 text-sage-600" />,
    description: 'A guided, compassionate process to help families rebuild trust, repair relationships, and reconnect after separation or conflict.',
    benefits: [
      'Reestablish healthy communication and emotional safety',
      'Address the impact of separation, trauma, or strained relationships',
      'Support children and parents in rebuilding secure attachment',
      'Develop empathy, trust, and mutual understanding',
      'Create a foundation for lasting family connection and stability'
    ],
    approach: 'Grounded in trauma-informed family systems therapy and attachment-based work, I provide a structured and supportive space for families to reconnect. Together, we’ll explore each person’s experiences with care and neutrality, address patterns that have caused disconnection, and rebuild a sense of belonging and harmony within the family.',
    price: '$180 per 60-minute session',
    cta: 'Begin Family Healing'
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
    description: 'Integrative Therapy for Stress, Trauma, and Life Transitions',
    benefits: [
      'Reduce anxiety, overwhelm, and emotional reactivity',
      'Heal from past trauma and grief',
      'Strengthen self-awareness and emotional balance',
      'Improve relationships and personal boundaries',
      'Develop resilience, presence, and inner peace'
    ],
    approach: 'A compassionate, holistic approach to help you calm your nervous system, process past experiences, and feel more grounded in the present. Through an integrative blend of psychotherapy, somatic therapy, and hypnotherapy, we\'ll explore the deeper layers of your experience with curiosity and care. Together, we\'ll uncover the roots of stress and disconnection, release stored tension, and support healing that lasts.',
    price: '$150 per 50-minute session',
    cta: 'Find Relief from Anxiety'
  },
  {
    id: 'trauma',
    title: 'Trauma Therapy & Somatic Healing',
    icon: <FaHandHoldingHeart className="w-8 h-8 text-sage-600" />,
    description: 'Gently process and release the effects of past trauma in a safe, grounded, and compassionate space.',
    benefits: [
      'Heal unresolved trauma and emotional pain',
      'Reduce symptoms of PTSD, anxiety, and dissociation',
      'Reconnect with your body and restore a sense of safety',
      'Develop emotional regulation and self-compassion',
      'Rebuild trust, confidence, and resilience'
    ],
    approach: 'Through a trauma-informed and integrative approach combining psychotherapy, somatic therapy, and hypnotherapy, we\'ll explore how trauma has shaped your mind and body. Together, we\'ll calm the nervous system, release stored tension, and create lasting healing—helping you feel more at ease, connected, and empowered.',
    price: '$160 per 50-minute session',
    cta: 'Begin Healing'
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e7dec4' }}>
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
                </div>
                
                <div className="p-6 bg-sage-50 border-t border-sage-100">
                  <Link
                    href={`/book?service=${service.id}`}
                    className="block w-full text-center px-6 py-2 border-2 border-[#84b3a8] text-[#84b3a8] hover:bg-sage-700 hover:border-white hover:text-white font-medium rounded-md transition-colors duration-300"
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
                      {['Blue Cross Blue Shield', 'Blue Care Network', 'Aetna', 'Priority Health', 'United Healthcare', 'ASR'].map((provider, i) => (
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
                    className="inline-block px-8 py-2 border-2 border-[#84b3a8] text-[#84b3a8] hover:bg-sage-700 hover:border-white hover:text-white font-medium rounded-md transition-colors duration-300"
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
