'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Types
interface FloatingPanel {
  id: number;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  scale: number;
  delay: number;
  image: string;
}

const TaskelevateHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Define floating panels with unique positioning
  const panels: FloatingPanel[] = [
    {
      id: 1,
      rotation: { x: -5, y: 15, z: 2 },
      position: { x: 50, y: -20, z: 100 },
      scale: 1,
      delay: 0.2,
      image: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
    },
    {
      id: 2,
      rotation: { x: 8, y: -12, z: -3 },
      position: { x: -30, y: 40, z: 60 },
      scale: 0.85,
      delay: 0.4,
      image: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.12) 100%)',
    },
    {
      id: 3,
      rotation: { x: -3, y: 8, z: 1 },
      position: { x: 80, y: 60, z: 40 },
      scale: 0.75,
      delay: 0.6,
      image: 'linear-gradient(135deg, rgba(147, 197, 253, 0.1) 0%, rgba(191, 219, 254, 0.1) 100%)',
    },
    {
      id: 4,
      rotation: { x: 6, y: -8, z: -2 },
      position: { x: -10, y: -40, z: 20 },
      scale: 0.9,
      delay: 0.3,
      image: 'linear-gradient(135deg, rgba(99, 102, 241, 0.13) 0%, rgba(139, 92, 246, 0.13) 100%)',
    },
  ];

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      mouseX.set(x * 20);
      mouseY.set(y * 20);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Animated background ambient light */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(147, 197, 253, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main container */}
      <div ref={containerRef} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                Taskelevate
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl"
              style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              We Engineer{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Scalable
                </span>
                <motion.span
                  className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-30"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </span>{' '}
              Ecommerce Growth
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg leading-relaxed text-slate-600 lg:text-xl"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              Taskelevate builds high-performance Shopify growth systems combining conversion design, paid acquisition, and retention — engineered for predictable revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-2xl shadow-purple-500/30 transition-all duration-300"
              >
                <span className="relative z-10">Get a Free Growth Blueprint</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ x: 4 }}
                className="group flex items-center gap-2 font-semibold text-slate-700 transition-colors hover:text-purple-600"
              >
                <span>View Our System</span>
                <motion.svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating 3D Panels */}
          <div className="relative h-[600px] lg:h-[700px]">
            <div className="absolute inset-0" style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
              {panels.map((panel, index) => {
                const parallaxX = useTransform(mouseXSpring, [-20, 20], [-panel.position.z / 10, panel.position.z / 10]);
                const parallaxY = useTransform(mouseYSpring, [-20, 20], [-panel.position.z / 10, panel.position.z / 10]);

                return (
                  <motion.div
                    key={panel.id}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotateX: panel.rotation.x,
                      rotateY: panel.rotation.y,
                      rotateZ: panel.rotation.z,
                      z: -100,
                    }}
                    animate={{
                      opacity: 1,
                      scale: panel.scale,
                      rotateX: panel.rotation.x,
                      rotateY: panel.rotation.y,
                      rotateZ: panel.rotation.z,
                      z: panel.position.z,
                      x: panel.position.x,
                      y: panel.position.y,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: panel.delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      x: parallaxX,
                      y: parallaxY,
                      transformStyle: 'preserve-3d',
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotateX: [panel.rotation.x, panel.rotation.x + 3, panel.rotation.x],
                        rotateY: [panel.rotation.y, panel.rotation.y - 2, panel.rotation.y],
                      }}
                      transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotateX: panel.rotation.x + 5,
                        rotateY: panel.rotation.y + 5,
                        transition: { duration: 0.3 },
                      }}
                      className="group relative h-72 w-80 cursor-pointer rounded-3xl shadow-2xl transition-all duration-500"
                      style={{
                        background: panel.image,
                        transformStyle: 'preserve-3d',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: `
                          0 ${20 + panel.position.z / 5}px ${40 + panel.position.z / 3}px rgba(0, 0, 0, 0.1),
                          0 ${10 + panel.position.z / 10}px ${20 + panel.position.z / 5}px rgba(139, 92, 246, 0.1),
                          inset 0 1px 0 rgba(255, 255, 255, 0.4)
                        `,
                      }}
                    >
                      {/* Glass reflection effect */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-40"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                        }}
                      />

                      {/* Inner content mockup */}
                      <div className="relative h-full w-full overflow-hidden rounded-3xl p-6">
                        {/* Mock UI elements */}
                        <div className="space-y-3">
                          <div className="h-8 w-3/4 rounded-lg bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-sm" />
                          <div className="h-4 w-1/2 rounded-lg bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm" />
                          <div className="mt-6 space-y-2">
                            <div className="h-3 w-full rounded bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-sm" />
                            <div className="h-3 w-5/6 rounded bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-sm" />
                            <div className="h-3 w-4/6 rounded bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-sm" />
                          </div>
                        </div>

                        {/* Gradient orb decoration */}
                        <motion.div
                          className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-3xl"
                          style={{
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.6, 0.4],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.3,
                          }}
                        />
                      </div>

                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          boxShadow: '0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)',
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default TaskelevateHero;
