'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-soft-beige/90 backdrop-blur-sm shadow-sm' : 'bg-soft-beige'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Denise's Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-700 hover:text-sage-700 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? 'text-sage-700 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://denise-potter.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#84b3a8] hover:bg-[#6d9a91] rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Book a Session
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sage-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 space-y-2 sm:px-5 bg-soft-beige/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-sage-100/80 text-sage-800 shadow-sm'
                  : 'text-gray-700 hover:bg-sage-50/80 hover:text-sage-700 bg-white/70 backdrop-blur-sm'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://denise-potter.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium text-white bg-[#84b3a8] hover:bg-[#6d9a91] shadow-md hover:shadow-lg mt-3 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  );
}
