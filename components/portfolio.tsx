'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Types
interface PortfolioProject {
  id: number;
  client: string;
  category: string;
  result: string;
  metric: string;
  url: string;
  gradient: string;
  accentColor: string;
  delay: number;
}

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Portfolio projects - curated selection
  const projects: PortfolioProject[] = [
    {
      id: 1,
      client: 'Luminaire',
      category: 'Luxury Home Goods',
      result: '340% Revenue Growth',
      metric: '$2.1M in 9 months',
      url: '#',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
      accentColor: 'rgba(139, 92, 246, 0.4)',
      delay: 0.3,
    },
    {
      id: 2,
      client: 'Apex Wellness',
      category: 'Health & Supplements',
      result: '4.8x ROAS Achieved',
      metric: '287% conversion lift',
      url: '#',
      gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0284c7 100%)',
      accentColor: 'rgba(59, 130, 246, 0.4)',
      delay: 0.5,
    },
    {
      id: 3,
      client: 'Ethical Thread',
      category: 'Sustainable Fashion',
      result: '47% Repeat Rate',
      metric: 'Retention engineering',
      url: '#',
      gradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #0d9488 100%)',
      accentColor: 'rgba(6, 182, 212, 0.4)',
      delay: 0.7,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50/50 py-32 lg:py-40">
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-block rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-5 py-2 text-sm font-semibold text-purple-700 backdrop-blur-sm"
          >
            Selected Work
          </motion.div>
          
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-slate-900 lg:text-6xl"
          >
            Systems that{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                scale
              </span>
              <motion.span
                className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 opacity-40"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-xl leading-relaxed text-slate-600"
          >
            A curated selection of our most impactful work. Each project engineered for predictable, sustainable growth.
          </motion.p>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              isInView={isInView}
              onSelect={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

// Individual Portfolio Card Component
interface PortfolioCardProps {
  project: PortfolioProject;
  isInView: boolean;
  onSelect: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, isInView, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth mouse tracking
  const mouseXSpring = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const mouseYSpring = useSpring(mouseY, { damping: 20, stiffness: 100 });
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    // Cinematic click - prepare for modal or case expansion
    onSelect();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: project.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative cursor-pointer"
      style={{
        perspective: '2000px',
      }}
    >
      <motion.div
        animate={{
          y: isHovered ? -20 : [0, -10, 0],
        }}
        transition={
          isHovered
            ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            : {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        style={{
          rotateX: isHovered ? rotateX : -2,
          rotateY: isHovered ? rotateY : 1,
        }}
        className="relative"
      >
        {/* Main Card Container */}
        <div
          className="relative overflow-hidden rounded-3xl transition-all duration-700"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
            backdropFilter: 'blur(30px)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: isHovered
              ? `0 50px 100px rgba(0, 0, 0, 0.2), 0 25px 50px ${project.accentColor}, inset 0 2px 0 rgba(255, 255, 255, 1)`
              : '0 30px 60px rgba(0, 0, 0, 0.1), inset 0 2px 0 rgba(255, 255, 255, 1)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Glass reflection */}
          <div
            className="absolute inset-0 rounded-3xl opacity-50 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, transparent 40%, rgba(255,255,255,0.3) 100%)',
              opacity: isHovered ? 0.3 : 0.5,
            }}
          />

          {/* Screenshot Container - 16:9 Aspect Ratio */}
          <div className="relative aspect-[16/9] overflow-hidden">
            {/* Simulated Website Screenshot */}
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{
                background: project.gradient,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {/* Simulated Browser Chrome */}
              <div className="absolute left-0 right-0 top-0 flex items-center gap-2 bg-slate-900/90 px-4 py-3 backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex-1 rounded bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                  {project.client.toLowerCase()}.com
                </div>
              </div>

              {/* Simulated Content */}
              <div className="absolute inset-x-0 bottom-0 top-14 p-8">
                {/* Hero Section Simulation */}
                <div className="mb-6 h-12 w-3/5 rounded-lg bg-white/10 backdrop-blur-sm" />
                <div className="mb-8 h-6 w-4/5 rounded-lg bg-white/10 backdrop-blur-sm" />
                
                {/* Content Grid Simulation */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 rounded-xl bg-white/10 backdrop-blur-sm" />
                  <div className="h-32 rounded-xl bg-white/10 backdrop-blur-sm" />
                  <div className="h-32 rounded-xl bg-white/10 backdrop-blur-sm" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute top-20 right-12 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
              </div>
            </div>

            {/* Dark Glass Overlay - Appears on Hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="text-center">
                {/* Client Name */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-3 text-4xl font-bold text-white lg:text-5xl"
                >
                  {project.client}
                </motion.h3>

                {/* Category */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 text-sm font-medium uppercase tracking-wider text-blue-300"
                >
                  {project.category}
                </motion.p>

                {/* Result */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-2 text-2xl font-bold text-white"
                >
                  {project.result}
                </motion.div>

                {/* Metric */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-slate-300"
                >
                  {project.metric}
                </motion.div>

                {/* View Project Arrow */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  View Case Study
                  <motion.svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Accent Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-2 w-full origin-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Glow Effect - Behind Card */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl blur-2xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{
            background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
