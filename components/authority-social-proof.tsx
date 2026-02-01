'use client';

import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Types
interface Stat {
  id: number;
  value: string;
  label: string;
  delay: number;
  position: { x: number; y: number };
  rotation: number;
}

interface Brand {
  id: number;
  name: string;
  category: string;
}

const AuthoritySocialProof: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Stats with spatial positioning
  const stats: Stat[] = [
    {
      id: 1,
      value: '$47M+',
      label: 'Generated Revenue',
      delay: 0.2,
      position: { x: -20, y: 0 },
      rotation: -2,
    },
    {
      id: 2,
      value: '3.8x',
      label: 'Average ROAS',
      delay: 0.4,
      position: { x: 0, y: -15 },
      rotation: 1,
    },
    {
      id: 3,
      value: '127%',
      label: 'Avg. Conversion Lift',
      delay: 0.6,
      position: { x: 20, y: 0 },
      rotation: -1,
    },
  ];

  // Trust indicators
  const brands: Brand[] = [
    { id: 1, name: 'Shopify Plus', category: 'Partner' },
    { id: 2, name: 'Meta', category: 'Business Partner' },
    { id: 3, name: 'Google', category: 'Premier Partner' },
    { id: 4, name: 'Klaviyo', category: 'Elite' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50/50 via-sky-50 to-blue-50/50 py-24 lg:py-32">
      {/* Ambient background light */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
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
            Proven Track Record
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            Built on{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Performance
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
            , Not Promises
          </motion.h2>
        </motion.div>

        {/* Floating Stats Grid */}
        <div className="relative mb-20 lg:mb-24">
          <div
            className="relative mx-auto max-w-5xl"
            style={{ perspective: '1500px', perspectiveOrigin: '50% 50%' }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 40,
                    rotateX: 20,
                    rotateY: stat.rotation * 3,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          rotateX: 0,
                          rotateY: stat.rotation,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    delay: stat.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotateX: [stat.rotation, stat.rotation + 2, stat.rotation],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: stat.rotation * 2,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 lg:p-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      boxShadow: `
                        0 20px 60px rgba(0, 0, 0, 0.08),
                        0 10px 30px rgba(139, 92, 246, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6)
                      `,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Glass reflection */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-40"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: stat.delay + 0.3 }}
                        className="mb-3 text-5xl font-bold bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent lg:text-6xl"
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: stat.delay + 0.5 }}
                        className="text-base font-medium text-slate-600 lg:text-lg"
                      >
                        {stat.label}
                      </motion.div>
                    </div>

                    {/* Animated glow orb */}
                    <motion.div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl"
                      style={{
                        background: `radial-gradient(circle, ${
                          index === 0
                            ? 'rgba(139, 92, 246, 0.6)'
                            : index === 1
                            ? 'rgba(59, 130, 246, 0.6)'
                            : 'rgba(6, 182, 212, 0.6)'
                        } 0%, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    />

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        boxShadow: `0 0 60px ${
                          index === 0
                            ? 'rgba(139, 92, 246, 0.4)'
                            : index === 1
                            ? 'rgba(59, 130, 246, 0.4)'
                            : 'rgba(6, 182, 212, 0.4)'
                        }`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators - Brands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          {/* Section Label */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Trusted Technology Partners
            </p>
          </div>

          {/* Brand Grid */}
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 lg:p-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {/* Glass reflection */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 50%)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="mb-2 text-lg font-bold text-slate-800 lg:text-xl">
                      {brand.name}
                    </div>
                    <div className="text-xs font-medium text-slate-500 lg:text-sm">
                      {brand.category}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Card - Floating */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-3xl lg:mt-24"
          style={{ perspective: '1500px' }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateX: [-1, 1, -1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              transition: { duration: 0.3 },
            }}
            className="group relative overflow-hidden rounded-3xl p-8 lg:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: `
                0 30px 80px rgba(0, 0, 0, 0.1),
                0 15px 40px rgba(139, 92, 246, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Quote icon */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4, ease: 'backOut' }}
              className="mb-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>

            {/* Testimonial text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mb-6 text-lg leading-relaxed text-slate-700 lg:text-xl"
            >
              "Taskelevate rebuilt our entire acquisition funnel and increased our ROAS by 4.2x in 90 days. 
              Their systems approach to growth is unlike anything we've seen."
            </motion.p>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" />
              <div>
                <div className="font-semibold text-slate-900">Sarah Mitchell</div>
                <div className="text-sm text-slate-600">CMO, Premium DTC Brand</div>
              </div>
            </motion.div>

            {/* Animated gradient orb */}
            <motion.div
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle grid overlay */}
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

export default AuthoritySocialProof;
