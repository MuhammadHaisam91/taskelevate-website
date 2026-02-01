'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Navigation items
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'About', href: '#about' },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Navigation - ALWAYS VISIBLE */}
      <motion.header
        className="fixed left-0 right-0 top-0 z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav className="relative mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl transition-all duration-300"
            style={{
              background: isScrolled
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
              backdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: isScrolled
                ? '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 25px rgba(139, 92, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)'
                : '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            }}
          >
            {/* Glass reflection */}
            <div
              className="absolute inset-0 rounded-2xl opacity-40"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)',
              }}
            />

            <div className="relative z-10 flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <motion.a
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Taskelevate
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-8 lg:flex">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -2 }}
                    className="relative text-sm font-semibold text-slate-700 transition-colors hover:text-purple-600"
                  >
                    {item.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-purple-600 to-blue-600"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  className="flex flex-col gap-1.5"
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                >
                  <motion.span
                    className="h-0.5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="h-0.5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="h-0.5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>

            {/* REMOVED: Bottom gradient line that was creating divider */}
          </motion.div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative h-full overflow-y-auto p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  backdropFilter: 'blur(40px)',
                  boxShadow: '-20px 0 50px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Glass reflection */}
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 50%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Close Button */}
                  <motion.button
                    className="mb-12 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mb-12 text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent"
                  >
                    Taskelevate
                  </motion.div>

                  {/* Navigation Links */}
                  <nav className="mb-12 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block rounded-xl px-6 py-4 text-lg font-semibold text-slate-700 transition-all hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50"
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </nav>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="block rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-xl shadow-purple-500/30"
                  >
                    Get Started
                  </motion.a>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="mt-12 space-y-4 text-sm text-slate-600"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>hello@taskelevate.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative gradient orb */}
                <motion.div
                  className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
        style={{
          scaleX: scrollY.get() / (document.documentElement.scrollHeight - window.innerHeight) || 0,
        }}
      />
    </>
  );
};

export default Navigation;