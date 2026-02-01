'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Types
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'process' | 'pricing' | 'results';
  delay: number;
}

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // FAQ data
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How quickly can we expect to see results?',
      answer: 'Most clients see measurable improvements within 30-45 days. Initial optimizations like conversion rate improvements and email automation can show results in weeks, while paid acquisition scaling typically shows significant ROI within 60-90 days. We provide weekly performance reports so you can track progress in real-time.',
      category: 'results',
      delay: 0.2,
    },
    {
      id: 2,
      question: 'What makes Taskelevate different from other agencies?',
      answer: 'We engineer integrated growth systems, not isolated services. While most agencies offer disconnected tactics, we build cohesive systems where conversion optimization, paid acquisition, and retention work together. Every strategy is custom-built for your business, backed by data, and designed to scale predictably.',
      category: 'process',
      delay: 0.3,
    },
    {
      id: 3,
      question: 'What is your pricing structure?',
      answer: 'We work on a monthly retainer basis, with pricing customized to your growth stage and objectives. Investment typically ranges from $5K-$15K/month depending on scope. We also offer performance-based components for scaling campaigns. Every engagement starts with a free Growth Blueprint session to ensure alignment.',
      category: 'pricing',
      delay: 0.4,
    },
    {
      id: 4,
      question: 'Do you require long-term contracts?',
      answer: 'We believe in earning your business every month. While we recommend a minimum 90-day engagement to see substantial results (most growth systems need time to compound), we operate on rolling monthly agreements after the initial period. No lengthy lock-ins or surprise fees.',
      category: 'pricing',
      delay: 0.5,
    },
    {
      id: 5,
      question: 'What kind of businesses do you work with?',
      answer: 'We specialize in ecommerce brands doing $500K-$10M in annual revenue on Shopify or Shopify Plus. Our ideal clients are ambitious brands ready to scale systematically, whether you\'re direct-to-consumer, B2B ecommerce, or omnichannel. We work across industries including fashion, beauty, home goods, and health & wellness.',
      category: 'process',
      delay: 0.6,
    },
    {
      id: 6,
      question: 'How involved do we need to be?',
      answer: 'We handle the heavy lifting, but partnership is key. Expect 2-3 hours per week for check-ins, approvals, and strategic discussions. You\'ll have a dedicated growth strategist as your main point of contact, plus access to our specialist team. We integrate with your existing team and tools seamlessly.',
      category: 'process',
      delay: 0.7,
    },
    {
      id: 7,
      question: 'What if our previous agency didn\'t deliver results?',
      answer: 'You\'re not alone - many clients come to us after disappointing agency experiences. The difference: we start with a comprehensive audit to understand what didn\'t work, then build systems with clear KPIs and transparent reporting. Our diagnostic approach ensures we address root causes, not symptoms.',
      category: 'results',
      delay: 0.8,
    },
    {
      id: 8,
      question: 'Do you guarantee specific results?',
      answer: 'We don\'t make unrealistic guarantees, but we do commit to data-driven strategies with proven track records. Our average client sees 3.8x ROAS and 127% conversion lift. We set clear, measurable goals during onboarding and provide full transparency on what\'s working (and what isn\'t) throughout our partnership.',
      category: 'results',
      delay: 0.9,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'process', label: 'Process', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'pricing', label: 'Pricing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'results', label: 'Results', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  ];

  // Toggle FAQ item
  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter FAQs by category
  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50/50 py-24 lg:py-32">
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div ref={sectionRef} className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-5 py-2 text-sm font-semibold text-purple-700 backdrop-blur-sm"
          >
            Frequently Asked Questions
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            Everything You{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Need to Know
              </span>
              <motion.span
                className="absolute inset-0 blur-lg bg-gradient-to-r from-purple-400 to-blue-400 opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            Have questions about working with us? We've got answers.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/60 text-slate-700 backdrop-blur-sm hover:bg-white/80'
              }`}
              style={{
                border: activeCategory === category.id ? 'none' : '1px solid rgba(255, 255, 255, 0.8)',
              }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
              </svg>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="sync">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  layout
                >
                  <motion.div
                    animate={{
                      y: isOpen ? [0, -5, 0] : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                    className="group relative overflow-hidden rounded-2xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
                      backdropFilter: 'blur(25px)',
                      border: `1px solid ${isOpen ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.8)'}`,
                      boxShadow: isOpen
                        ? '0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 25px rgba(139, 92, 246, 0.15)'
                        : '0 10px 30px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {/* Glass reflection */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-40"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                      }}
                    />

                    {/* Question */}
                    <motion.button
                      onClick={() => toggleItem(faq.id)}
                      className="relative z-10 w-full px-8 py-6 text-left"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="pr-8 text-lg font-bold text-slate-900 lg:text-xl">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="flex-shrink-0"
                        >
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ${
                              isOpen
                                ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                                : 'bg-gradient-to-br from-purple-100 to-blue-100'
                            }`}
                          >
                            <svg
                              className={`h-5 w-5 transition-colors duration-300 ${
                                isOpen ? 'text-white' : 'text-purple-600'
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.3, delay: 0.1 },
                          }}
                          className="relative z-10 overflow-hidden"
                        >
                          <div className="px-8 pb-6">
                            <motion.div
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                              className="border-l-2 border-gradient-to-b from-purple-400 to-blue-400 pl-6"
                            >
                              <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Left accent bar */}
                    <motion.div
                      className="absolute left-0 top-0 h-full w-1 origin-top bg-gradient-to-b from-purple-600 to-blue-600"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 lg:mt-20"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative overflow-hidden rounded-3xl p-10 text-center lg:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)',
            }}
          >
            {/* Glass reflection */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 50%)',
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl">
                Still have questions?
              </h3>
              <p className="mb-6 text-lg text-slate-600">
                Book a free 15-minute call to discuss your specific situation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-purple-500/30 transition-all duration-300"
              >
                <span className="relative z-10">Schedule a Call</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Decorative orb */}
            <motion.div
              className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default FAQ;
