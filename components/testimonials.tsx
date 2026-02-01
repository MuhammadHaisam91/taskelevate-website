'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Types
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  gradient: string;
}

interface Client {
  id: number;
  name: string;
  industry: string;
}

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Taskelevate completely transformed our acquisition strategy. Their systematic approach to growth took us from $200K to $2.1M in annual revenue in just 9 months. The team's expertise in both creative and data is unmatched.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "Luxe Skincare Co.",
      image: "SC",
      rating: 5,
      gradient: "from-purple-600 to-violet-600",
    },
    {
      id: 2,
      quote: "After working with three other agencies that overpromised and underdelivered, Taskelevate was refreshingly different. They set realistic expectations, hit every milestone, and our ROAS went from 1.8x to 4.2x in 90 days.",
      author: "Marcus Williams",
      role: "CMO",
      company: "Atlas Athletic",
      image: "MW",
      rating: 5,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      quote: "The retention systems Taskelevate built for us are incredible. Email automation, SMS flows, and loyalty rewards all working together seamlessly. Our repeat purchase rate jumped from 18% to 47% in 4 months.",
      author: "Emily Rodriguez",
      role: "Director of Growth",
      company: "Haven Home Goods",
      image: "ER",
      rating: 5,
      gradient: "from-cyan-600 to-teal-600",
    },
  ];

  // Client logos (representing companies)
  const clients: Client[] = [
    { id: 1, name: "Luxe Beauty", industry: "Beauty & Wellness" },
    { id: 2, name: "Atlas Athletic", industry: "Fashion" },
    { id: 3, name: "Haven Home", industry: "Home Goods" },
    { id: 4, name: "Pulse Nutrition", industry: "Health" },
    { id: 5, name: "Stellar Skincare", industry: "Beauty" },
    { id: 6, name: "Urban Threads", industry: "Fashion" },
    { id: 7, name: "Nest & Co", industry: "Home" },
    { id: 8, name: "Pure Wellness", industry: "Health" },
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50/50 via-sky-50 to-blue-50/50 py-24 lg:py-32">
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
            Client Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            Loved by{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ambitious
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
            {' '}Brands
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            Don't just take our word for it. Here's what our clients say about working with us.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-20 max-w-4xl lg:mb-24"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative overflow-hidden rounded-3xl p-10 lg:p-14"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%)',
              backdropFilter: 'blur(40px)',
              border: '2px solid rgba(255, 255, 255, 0.9)',
              boxShadow: `
                0 40px 100px rgba(0, 0, 0, 0.12),
                0 20px 50px rgba(139, 92, 246, 0.15),
                inset 0 2px 0 rgba(255, 255, 255, 1)
              `,
            }}
          >
            {/* Glass reflection */}
            <div
              className="absolute inset-0 rounded-3xl opacity-60"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)',
              }}
            />

            {/* Testimonial Content */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                    className="mb-6"
                  >
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonials[activeTestimonial].gradient} shadow-lg`}>
                      <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Star Rating */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                        className="h-6 w-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-8 text-xl leading-relaxed text-slate-700 lg:text-2xl">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${testimonials[activeTestimonial].gradient} text-xl font-bold text-white shadow-lg`}
                    >
                      {testimonials[activeTestimonial].image}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated gradient orb */}
            <motion.div
              className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${
                  activeTestimonial === 0
                    ? 'rgba(139, 92, 246, 0.6)'
                    : activeTestimonial === 1
                    ? 'rgba(59, 130, 246, 0.6)'
                    : 'rgba(6, 182, 212, 0.6)'
                } 0%, transparent 70%)`,
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

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'w-12 bg-gradient-to-r from-purple-600 to-blue-600' : 'w-3 bg-slate-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Label */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Trusted by Leading Brands
            </p>
          </div>

          {/* Logo Grid */}
          <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {/* Glass reflection */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 50%)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="mb-2 text-lg font-bold text-slate-800 lg:text-xl">
                      {client.name}
                    </div>
                    <div className="text-xs font-medium text-slate-500 lg:text-sm">
                      {client.industry}
                    </div>
                  </div>

                  {/* Hover gradient bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
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

export default Testimonials;
