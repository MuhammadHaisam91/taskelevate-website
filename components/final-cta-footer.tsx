'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FinalCTAFooter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const footerLinks = {
    services: [
      { name: 'Conversion Architecture', href: '#' },
      { name: 'Paid Acquisition', href: '#' },
      { name: 'Retention Engineering', href: '#' },
      { name: 'Growth Strategy', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Our Process', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Growth Guides', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Tools', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', href: '#' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: '#' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-b from-blue-50/50 via-sky-50 to-slate-50 py-24 lg:py-32">
        {/* Ambient background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative overflow-hidden rounded-[2.5rem] p-12 text-center lg:p-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%)',
                backdropFilter: 'blur(50px)',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                boxShadow: `
                  0 50px 120px rgba(0, 0, 0, 0.12),
                  0 25px 60px rgba(139, 92, 246, 0.2),
                  inset 0 2px 0 rgba(255, 255, 255, 1),
                  inset 0 -2px 0 rgba(255, 255, 255, 0.5)
                `,
              }}
            >
              {/* Ultra-premium glass reflection */}
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 40%, rgba(255,255,255,0.4) 100%)',
                }}
              />

              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2, ease: 'backOut' }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 shadow-lg"
                >
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-bold text-white">Limited Availability</span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl"
                >
                  Turn Your Ecommerce Store Into a{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Revenue Engine
                    </span>
                    <motion.span
                      className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 opacity-40"
                      animate={{
                        opacity: [0.4, 0.6, 0.4],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </span>
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 lg:text-xl"
                >
                  Book a free 45-minute Growth Blueprint session. We'll audit your current systems, identify your biggest growth blockers, and design a custom roadmap to scale your revenue predictably.
                </motion.p>

                {/* Value Props */}
                <motion.div
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                  className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6"
                >
                  {[
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'No Sales Pitch' },
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: '45-Minute Session' },
                    { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', text: 'Actionable Insights' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="flex items-center justify-center gap-3 rounded-2xl bg-white/60 px-6 py-4 backdrop-blur-sm"
                      style={{
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                      <span className="font-semibold text-slate-700">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7, ease: 'backOut' }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-12 py-6 text-xl font-bold text-white shadow-2xl shadow-purple-500/40 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Your Free Growth Blueprint
                    <motion.svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Trust Signal */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mt-6 text-sm text-slate-500"
                >
                  Join 200+ brands that trust Taskelevate for their growth
                </motion.p>
              </div>

              {/* Animated gradient orbs */}
              <motion.div
                className="absolute -left-32 -top-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, 30, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-slate-900 pt-16 pb-8">
        {/* Top gradient line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Taskelevate
                </div>
                <p className="mb-6 max-w-sm text-base leading-relaxed text-slate-400">
                  Engineering scalable growth systems for ambitious ecommerce brands. Predictable revenue through proven strategies.
                </p>
                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white"
                      aria-label={social.name}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Taskelevate. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </footer>
    </div>
  );
};

export default FinalCTAFooter;
