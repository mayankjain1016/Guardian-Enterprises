import { useState, useEffect } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from '../Logo.jpeg';

const navLinks = [
  'Trade & Invest',
  'Mutual Funds & SIP',
  'Learn',
  'News',
  'Products',
  'Become a Partner',
  'Pricing',
  'Support',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      {/* Top Row */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3 gap-3 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              <img src={logo} alt="Guardian Enterprises Logo" className="h-10 sm:h-16 w-auto object-contain" />
            </div>

            {/* Search Bar — hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search Funds, News, Reports..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brand-gradient-bg text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 shadow-sm"
              >
                Open Free Account
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-orange-500 text-orange-500 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-50"
              >
                Login
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-orange-500 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Nav Row */}
      <nav className="hidden md:block bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide h-11">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ scale: 1.05, color: '#f97316' }}
                className="whitespace-nowrap text-sm font-medium text-slate-600 hover:border-b-2 hover:border-orange-500 pb-px transition-all duration-200"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Mobile search */}
        <div className="px-4 pt-3 pb-2">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Funds, News, Reports..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-orange-400"
            />
          </div>
        </div>
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="block py-3 px-4 text-sm font-medium text-slate-600 hover:text-orange-500 hover:bg-orange-50 transition-colors border-b border-slate-50"
          >
            {link}
          </a>
        ))}
        <div className="flex gap-3 p-4">
          <button className="flex-1 brand-gradient-bg text-white px-4 py-2.5 rounded-lg font-semibold text-sm">
            Open Free Account
          </button>
          <button className="flex-1 border-2 border-orange-500 text-orange-500 px-4 py-2.5 rounded-lg font-semibold text-sm">
            Login
          </button>
        </div>
      </div>
    </motion.header>
  );
}
