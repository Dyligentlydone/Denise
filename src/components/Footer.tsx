import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-gray-800 border-t border-sage-200" style={{ backgroundColor: '#d8c4a7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">About Us</h3>
            <p className="text-gray-700 mb-4">
              Providing compassionate, evidence-based therapy to help you heal, grow, and thrive. 
              Our practice is dedicated to supporting individuals, couples, and families on their journey to better mental health.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-sage-700 hover:text-sage-800 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-sage-700 hover:text-sage-800 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-sage-700 hover:text-sage-800 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-700 hover:text-sage-700 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-sage-700 transition-colors">Services</Link></li>
              <li><Link href="/resources" className="text-gray-700 hover:text-sage-700 transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-sage-700 transition-colors">Contact</Link></li>
              <li><Link href="/book" className="text-gray-700 hover:text-sage-700 transition-colors">Book a Session</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-sage-700 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-sage-700 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="h-5 w-5 text-sage-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">4829 E. Beltline Ave NE Ste 3</p>
                  <p className="text-gray-700">Grand Rapids, MI 49525</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="h-4 w-4 text-sage-600 mr-3" />
                <a href="tel:6169511852" className="text-gray-700 hover:text-sage-700 transition-colors">(616) 951-1852</a>
              </div>
              <div className="flex items-center mb-3">
                <FaEnvelope className="h-4 w-4 text-sage-600 mr-3" />
                <a href="mailto:Therapy@denisepotter.com" className="text-gray-700 hover:text-sage-700 transition-colors">Therapy@denisepotter.com</a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sage-300 mt-12 pt-8 text-center text-gray-600">
          <p>© {currentYear} Authentic Self Holistic Psychotherapy. All rights reserved.</p>
          <p className="text-sm mt-2">
            Website by: <a href="https://www.dyligent.solutions/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline">&#123;Dyligent&#125;</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
