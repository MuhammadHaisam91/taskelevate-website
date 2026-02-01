'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Types
interface Service {
  id: number;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
  gradient: string;
  glowColor: string;
  delay: number;
}

const ServicesGrowthSystems: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Service offerings
  const services: Service[] = [
    {
      id: 1,
      title: 'Conversion Architecture',
      description: 'Engineering high-performance funnels that systematically move prospects from awareness to purchase.',
      capabilities: [
        'Landing page optimization',
        'Checkout flow engineering',
        'A/B testing frameworks',
        'UX/UI conversion design',
      ],
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      gradient: 'from-purple-600 to-violet-600',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      delay: 0.2,
    },
    {
      id: 2,
      title: 'Paid Acquisition',
      description: 'Data-driven media buying engineered for profitable customer acquisition at scale.',
      capabilities: [
        'Meta & Google campaigns',
        'Creative performance testing',
        'Audience segmentation',
        'Attribution modeling',
      ],
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      gradient: 'from-blue-600 to-cyan-600',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      delay: 0.4,
    },
    {
      id: 3,
      title: 'Retention Engineering',
      description: 'Building automated systems that maximize customer lifetime value through strategic engagement.',
      capabilities: [
        'Email automation flows',
        'SMS marketing systems',
        'Loyalty program design',
        'Post-purchase optimization',
      ],
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      gradient: 'from-cyan-600 to-teal-600',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      delay: 0.6,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-sky-50 to-cyan-50/50 py-24 lg:py-32">
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 18,
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
            Our Growth Framework
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            Growth{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Systems
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
            , Not Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 lg:text-xl"
          >
            We don't offer cookie-cutter services. We engineer integrated systems designed to scale your revenue predictably.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="relative mb-20 lg:mb-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateX: 15,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  delay: service.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1500px',
                }}
              >
                <motion.div
                  animate={{
                    y: hoveredService === service.id ? -10 : [0, -8, 0],
                  }}
                  transition={
                    hoveredService === service.id
                      ? { duration: 0.3 }
                      : {
                          duration: 6 + index,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.5,
                        }
                  }
                  className="group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 lg:p-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    backdropFilter: 'blur(25px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: `
                      0 25px 70px rgba(0, 0, 0, 0.08),
                      0 15px 35px rgba(0, 0, 0, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8)
                    `,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Glass reflection */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-40"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: service.delay + 0.3,
                      ease: 'backOut',
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 mb-6 inline-flex"
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                    >
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: service.delay + 0.4 }}
                      className="mb-3 text-2xl font-bold text-slate-900 lg:text-3xl"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: service.delay + 0.5 }}
                      className="mb-6 text-base leading-relaxed text-slate-600 lg:text-lg"
                    >
                      {service.description}
                    </motion.p>

                    {/* Capabilities List */}
                    <motion.ul
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.08,
                            delayChildren: service.delay + 0.6,
                          },
                        },
                      }}
                      className="space-y-3"
                    >
                      {service.capabilities.map((capability, capIndex) => (
                        <motion.li
                          key={capIndex}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient}`}
                          >
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-slate-700 lg:text-base">{capability}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Animated gradient orb */}
                  <motion.div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl"
                    style={{
                      background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: hoveredService === service.id ? 1.5 : [1, 1.3, 1],
                      opacity: hoveredService === service.id ? 0.5 : [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: hoveredService === service.id ? 0.3 : 5,
                      repeat: hoveredService === service.id ? 0 : Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500"
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0,
                    }}
                    style={{
                      boxShadow: `0 0 80px ${service.glowColor}`,
                    }}
                  />

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${service.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredService === service.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Our 3-Phase Methodology
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {[
                {
                  number: '01',
                  title: 'Diagnose',
                  description: 'Deep audit of your current systems, data, and growth blockers.',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                  delay: 0.9,
                },
                {
                  number: '02',
                  title: 'Engineer',
                  description: 'Build custom systems integrating design, data, and automation.',
                  icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
                  delay: 1.0,
                },
                {
                  number: '03',
                  title: 'Scale',
                  description: 'Optimize, iterate, and compound growth with data-driven decisions.',
                  icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                  delay: 1.1,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: step.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-3xl p-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: step.delay + 0.2,
                      ease: 'backOut',
                    }}
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-lg font-bold text-white shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  <h4 className="mb-2 text-xl font-bold text-slate-900 lg:text-2xl">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600 lg:text-base">{step.description}</p>

                  {/* Icon decoration */}
                  <div className="absolute -right-4 -top-4 opacity-5">
                    <svg className="h-32 w-32 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={step.icon} />
                    </svg>
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
            </div>

            {/* Connecting arrows (desktop only) */}
            <div className="absolute inset-0 -z-10 hidden items-center justify-between px-4 md:flex">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 1.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-1"
                  style={{
                    transformOrigin: 'left',
                    marginLeft: i === 0 ? '40%' : '8%',
                    marginRight: '8%',
                  }}
                >
                  <svg className="h-8 w-full text-purple-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`arrow-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 10 L 95 10 L 90 5 M 95 10 L 90 15"
                      fill="none"
                      stroke={`url(#arrow-gradient-${i})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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

export default ServicesGrowthSystems;
