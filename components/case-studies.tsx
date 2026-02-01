'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Types
interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  gradient: string;
  glowColor: string;
  delay: number;
}

interface Metric {
  label: string;
  value: string;
  change: string;
}

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  // Case study data
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: 'Premium Skincare Brand',
      industry: 'Beauty & Wellness',
      challenge: 'Scaling paid acquisition while maintaining profitability across Meta and Google channels.',
      solution: 'Engineered a multi-channel attribution system with creative testing framework and automated bidding optimization.',
      metrics: [
        { label: 'Revenue Growth', value: '$2.1M', change: '+340%' },
        { label: 'ROAS', value: '4.8x', change: '+215%' },
        { label: 'CAC Reduction', value: '-42%', change: 'vs. baseline' },
      ],
      gradient: 'from-purple-600 to-violet-600',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      delay: 0.2,
    },
    {
      id: 2,
      client: 'Athletic Apparel Store',
      industry: 'Fashion & Lifestyle',
      challenge: 'Low conversion rates and high cart abandonment preventing growth despite strong traffic.',
      solution: 'Complete funnel redesign with checkout optimization, urgency mechanics, and retention automation.',
      metrics: [
        { label: 'Conversion Rate', value: '6.2%', change: '+187%' },
        { label: 'AOV', value: '$127', change: '+45%' },
        { label: 'Repeat Rate', value: '38%', change: '+156%' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      delay: 0.4,
    },
    {
      id: 3,
      client: 'Home Goods Retailer',
      industry: 'Home & Living',
      challenge: 'Customer acquisition costs climbing while LTV remained flat, threatening profitability.',
      solution: 'Built comprehensive retention system with segmented email flows, SMS campaigns, and loyalty rewards.',
      metrics: [
        { label: 'LTV', value: '$342', change: '+168%' },
        { label: 'Email Revenue', value: '32%', change: 'of total' },
        { label: 'Retention Rate', value: '47%', change: '+203%' },
      ],
      gradient: 'from-cyan-600 to-teal-600',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      delay: 0.6,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cyan-50/50 via-sky-50 to-blue-50/50 py-24 lg:py-32">
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
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
            Client Success Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl"
          >
            Real{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Results
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
            , Real Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 lg:text-xl"
          >
            See how we've engineered measurable growth for ecommerce brands across industries.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8 lg:space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                delay: study.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: expandedCase === study.id ? 0 : [0, -8, 0],
                }}
                transition={
                  expandedCase === study.id
                    ? { duration: 0.3 }
                    : {
                        duration: 7 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }
                }
                onHoverStart={() => setExpandedCase(study.id)}
                onHoverEnd={() => setExpandedCase(null)}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: `
                    0 30px 80px rgba(0, 0, 0, 0.08),
                    0 15px 40px rgba(0, 0, 0, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9)
                  `,
                }}
              >
                {/* Glass reflection */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 gap-8 p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
                  {/* Left Column - Info */}
                  <div className="lg:col-span-7">
                    {/* Client & Industry */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: study.delay + 0.2 }}
                      className="mb-6"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${study.gradient} shadow-lg`}
                        >
                          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">{study.client}</h3>
                          <p className="text-sm font-medium text-slate-500">{study.industry}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Challenge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: study.delay + 0.3 }}
                      className="mb-6"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">Challenge</h4>
                      </div>
                      <p className="text-base leading-relaxed text-slate-600 lg:text-lg">{study.challenge}</p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: study.delay + 0.4 }}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className={`h-1 w-1 rounded-full bg-gradient-to-r ${study.gradient}`} />
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">Solution</h4>
                      </div>
                      <p className="text-base leading-relaxed text-slate-600 lg:text-lg">{study.solution}</p>
                    </motion.div>
                  </div>

                  {/* Right Column - Metrics */}
                  <div className="lg:col-span-5">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: study.delay + 0.5 }}
                      className="space-y-6"
                    >
                      {study.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metricIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: study.delay + 0.6 + metricIndex * 0.1,
                            ease: 'backOut',
                          }}
                          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                          className="relative overflow-hidden rounded-2xl p-6"
                          style={{
                            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)`,
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255, 255, 255, 0.9)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 1)',
                          }}
                        >
                          {/* Metric label */}
                          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {metric.label}
                          </div>

                          {/* Metric value */}
                          <div className="mb-1 flex items-baseline gap-3">
                            <div
                              className={`text-3xl font-bold bg-gradient-to-br ${study.gradient} bg-clip-text text-transparent lg:text-4xl`}
                            >
                              {metric.value}
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-2 py-1 text-xs font-bold text-white">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              {metric.change}
                            </div>
                          </div>

                          {/* Decorative gradient line */}
                          <div
                            className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${study.gradient}`}
                            style={{ opacity: 0.3 }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Animated gradient orb */}
                <motion.div
                  className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${study.glowColor} 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: expandedCase === study.id ? 1.3 : [1, 1.2, 1],
                    opacity: expandedCase === study.id ? 0.3 : [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: expandedCase === study.id ? 0.3 : 6,
                    repeat: expandedCase === study.id ? 0 : Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500"
                  animate={{
                    opacity: expandedCase === study.id ? 1 : 0,
                  }}
                  style={{
                    boxShadow: `0 0 100px ${study.glowColor}`,
                  }}
                />

                {/* Side accent bar */}
                <motion.div
                  className={`absolute left-0 top-0 h-full w-1 origin-top bg-gradient-to-b ${study.gradient}`}
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: expandedCase === study.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 lg:mt-24"
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
            className="relative overflow-hidden rounded-3xl p-12 text-center lg:p-16"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: `
                0 40px 100px rgba(0, 0, 0, 0.1),
                0 20px 50px rgba(139, 92, 246, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 1)
              `,
            }}
          >
            {/* Glass reflection */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)',
              }}
            />

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl"
              >
                Ready to Engineer Your Growth?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mb-8 text-lg text-slate-600 lg:text-xl"
              >
                Let's build a custom growth system designed for your business.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4, ease: 'backOut' }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-purple-500/30 transition-all duration-300"
              >
                <span className="relative z-10">Schedule Your Growth Blueprint</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Animated gradient orbs */}
            <motion.div
              className="absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 20, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
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

export default CaseStudies;
