'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBook, FaFilePdf, FaVideo, FaPodcast, FaGlobe } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const resources = [
  {
    id: 'books',
    title: 'Recommended Books',
    icon: <FaBook className="w-8 h-8 text-sage-600" />,
    description: 'A curated list of books on mental health, personal growth, and therapeutic techniques.',
    items: [
      'The Body Keeps the Score by Bessel van der Kolk',
      'The Gifts of Imperfection by Brené Brown',
      'Feeling Good by David D. Burns',
      'Attached by Amir Levine',
      'The Mindful Way Through Depression'
    ],
    cta: 'View Book List'
  },
  {
    id: 'worksheets',
    title: 'Therapy Worksheets',
    icon: <FaFilePdf className="w-8 h-8 text-sage-600" />,
    description: 'Downloadable worksheets to complement your therapy journey.',
    items: [
      'Anxiety Management Worksheet',
      'Thought Record Template',
      'Gratitude Journal Template',
      'Self-Care Planner',
      'Communication Skills Exercise'
    ],
    cta: 'Download Resources'
  },
  {
    id: 'videos',
    title: 'Educational Videos',
    icon: <FaVideo className="w-8 h-8 text-sage-600" />,
    description: 'Helpful videos on mental health topics and therapeutic techniques.',
    items: [
      'Understanding Anxiety and Depression',
      'Mindfulness Meditation Guide',
      'CBT Techniques Explained',
      'Building Healthy Relationships',
      'Stress Management Strategies'
    ],
    cta: 'Watch Videos'
  },
  {
    id: 'podcasts',
    title: 'Podcasts',
    icon: <FaPodcast className="w-8 h-8 text-sage-600" />,
    description: 'Engaging podcasts about mental health and personal development.',
    items: [
      'Therapy Thoughts with Dr. Courtney Tracy',
      'The Happiness Lab',
      'Unlocking Us with Brené Brown',
      'The Mental Illness Happy Hour',
      'Terrible, Thanks for Asking'
    ],
    cta: 'Listen Now'
  },
  {
    id: 'online',
    title: 'Online Resources',
    icon: <FaGlobe className="w-8 h-8 text-sage-600" />,
    description: 'Trusted websites and online tools for mental health support.',
    items: [
      'National Alliance on Mental Illness (NAMI)',
      'Anxiety and Depression Association of America',
      'Psychology Today Therapist Finder',
      'Crisis Text Line',
      'Mindful.org'
    ],
    cta: 'Explore Resources'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-soft-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage-800 mb-6">
              Helpful <span className="text-sage-600">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto mb-8">
              A collection of tools, books, and resources to support your mental health journey.
            </p>
            <div className="w-24 h-1 bg-sage-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
              Explore Our Resources
            </h2>
            <p className="text-sage-600 max-w-3xl mx-auto">
              Discover valuable tools and information to support your mental health and well-being.
            </p>
            <div className="w-24 h-1 bg-sage-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-shadow duration-300 flex flex-col border border-sage-100"
              >
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center mb-6">
                    {resource.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sage-800 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-sage-700 mb-6">{resource.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sage-800 mb-3">Featured:</h4>
                    <ul className="space-y-2">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-sage-500 mr-2 mt-1">•</span>
                          <span className="text-sage-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 bg-sage-50 border-t border-sage-100">
                  <Link
                    href={`#`}
                    className="block w-full text-center px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    {resource.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-6">
            Need More Personalized Support?
          </h2>
          <p className="text-lg text-sage-700 max-w-3xl mx-auto mb-8">
            While these resources can be helpful, they're not a substitute for professional help. 
            If you're struggling, consider reaching out to a licensed therapist.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Contact Me for a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
