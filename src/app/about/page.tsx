'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e7dec4' }}>
      {/* Decorative Line */}
      <section className="relative overflow-hidden pt-20 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/3 relative"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/headshot.png"
                    alt="Denise Potter, LCSW"
                    className="w-full h-full"
                    style={{
                      display: 'block',
                      position: 'relative',
                      zIndex: 1,
                      objectFit: 'cover',
                      objectPosition: 'center 30%',
                      width: '100%',
                      height: '100%'
                    }}
                    onError={(e) => {
                      console.error('Image failed to load');
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem',
                    zIndex: 53
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontFamily: 'serif',
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 0
                      }}>Denise Potter, LCSW</h3>
                      <p style={{
                        color: '#e6fffa',
                        margin: '0.25rem 0 0 0',
                        fontSize: '0.875rem'
                      }}>Licensed Clinical Social Worker</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-2/3"
              >
                <h2 className="text-3xl font-serif font-bold text-sage-800 mb-6">
                  A Compassionate Guide on Your Journey to Healing
                </h2>
                
                <div className="prose prose-lg text-sage-700 max-w-none">
                  <p className="mb-4">
                    You've spent so long taking care of everyone else—pushing through, holding it together, doing what needs to be done. On the outside, it might look fine. But inside, you can feel the tension—the constant hum of stress, the moments of disconnection, the sense that you've lost touch with who you really are. You're tired of just coping. You want to feel grounded, alive, and at peace in your own skin. You're ready to understand why you respond the way you do—and how to finally shift those patterns, not just manage them.
                  </p>
                  
                  <p className="mb-4">
                    Through an integrative approach—blending psychotherapy, somatic work, and hypnotherapy—we'll explore the deeper layers of your experience with compassion and curiosity. Together, we'll calm your nervous system, uncover the roots of what's been holding you back, and gently heal the places that still carry old pain.
                  </p>
                  
                  <p className="mb-6">
                    This is your invitation to come home to yourself—to build resilience, presence, and authentic connection. You don't have to do it alone. Let's take the next step together.
                  </p>
                  
                  <div className="bg-sage-50 p-6 rounded-lg border-l-4 border-sage-500">
                    <p className="text-sage-800 italic mb-4">
                      "Starting therapy takes courage, and I'm here to meet you with compassion, curiosity, and respect. Let's take the next step together—to explore your true self, clarify where you want to be, and discover how to get there."
                    </p>
                    <p className="text-sage-700 font-medium">— Denise Potter, LCSW</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
              My Approach to Therapy
            </h2>
            <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Client-Centered Care',
                description: 'Your story, pace, and goals guide every step of our work together. I tailor each session to your unique needs, meeting you with compassion, curiosity, and respect.'
              },
              {
                title: 'Integrative & Mind-Body Approach',
                'description': 'Drawing from psychotherapy, somatic therapy, and hypnotherapy, I integrate mind, body, and emotion to support deep, lasting healing.'
              },
              {
                title: 'Holistic Perspective',
                'description': 'Our work considers all parts of your experience—mental, emotional, physical, and relational—so healing can take root on every level.'
              },
              {
                title: 'Strengths-Oriented Healing',
                'description': 'Together, we’ll uncover and build upon your innate strengths and resilience, helping you reconnect with your capacity for growth, balance, and self-trust.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-sage-800 mb-3">{item.title}</h3>
                <p className="text-sage-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
                Credentials & Education
              </h2>
              <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-cream-50 p-6 rounded-lg border-l-4 border-sage-500"
              >
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Master of Social Work (MSW)</p>
                    <p className="text-sage-600">Western Michigan University</p>
                  </li>
                  <li>
                    <p className="font-medium">Bachelor of Science (BS) in Criminal Justice</p>
                    <p className="text-sage-600">Grand Valley State University</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-cream-50 p-6 rounded-lg border-l-4 border-sage-500"
              >
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Licenses & Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    <span>Licensed Master Social Worker (LMSW) — State of Michigan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    <span>Certified Clinical Hypnotherapist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-600 mr-2">•</span>
                    <span>Somatic Therapy / Trauma-Informed Care Training</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-[#84b3a8] text-base font-medium rounded-md text-white bg-[#84b3a8] hover:bg-sage-700 hover:border-white transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
