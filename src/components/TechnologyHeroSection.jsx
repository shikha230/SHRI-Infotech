import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function TechnologyHeroSection() {
  return (
    <div 
  id="main-hero-page" 
  className="w-full text-white selection:bg-red-600 selection:text-white relative overflow-hidden font-sans-main bg-black flex items-center min-h-[calc(100vh-75px)] mt-[75px] py-8 lg:py-12"
>
      {/* Background Video Layer */}
      <div id="hero-bg-video-container" className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          id="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 brightness-115 contrast-[1.02]"
        >
          <source 
            src="https://res.cloudinary.com/yhlacstw/video/upload/v1786136274/kling_20260808_VIDEO__1061_0_ofqcxg.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Lighter Gradient Overlay for maximum video visibility while preserving text legibility */}
        <div id="hero-video-overlay" className="absolute inset-0 bg-black/20 bg-gradient-to-r from-black/65 via-black/30 to-black/10 backdrop-brightness-[1.05]" />
      </div>

      {/* Ambient glow */}
      <div 
        id="bg-ambient-glow" 
        className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-r from-red-600/20 via-rose-600/15 to-transparent rounded-full blur-[130px] pointer-events-none z-0" 
      />

      {/* Main Content Container */}
      <div id="hero-content-wrapper" className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-center text-center relative z-10 space-y-8 sm:space-y-10">
        
        {/* Main Headline & Badge */}
        <div id="hero-headline-container" className="flex flex-col items-center text-center space-y-5 max-w-5xl mx-auto">

          {/* Main Title */}
          <motion.h1 
            id="hero-main-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-sans-main select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] text-center"
          >
            <span className="block text-white sm:whitespace-nowrap">Technology Crafted for All,</span>
            <span className="block bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent sm:whitespace-nowrap">
              Not Machines
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-2xl mx-auto text-center font-sans-main tracking-normal drop-shadow"
          >
            We build intelligent, human-centered digital experiences, powerful mobile apps, and scalable web solutions engineered for real business growth.
          </motion.p>
        </div>

        {/* CTA Buttons & Social Proof */}
        <motion.div 
          id="cta-social-proof-wrapper"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1 w-full mx-auto"
        >
          {/* Primary CTA Button */}
          <a
            id="btn-get-started"
            href="#contact"
            className="hero-btn-sweep-primary group relative overflow-hidden inline-flex items-center gap-3.5 bg-gradient-to-r from-[#9d0d12] via-red-600 to-rose-600 text-white font-semibold text-base px-7 py-3.5 rounded-full shadow-[0_8px_25px_-5px_rgba(230,57,70,0.5)] hover:shadow-[0_12px_32px_-3px_rgba(230,57,70,0.75)] transition-all duration-300 active:scale-[0.98] cursor-pointer select-none"
          >
            <span className="relative z-10 tracking-tight text-white font-medium text-base">Get Started</span>
            <div id="btn-arrow-badge" className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#9d0d12] transition-all duration-300 group-hover:translate-x-1 shadow-sm">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>

          {/* Secondary Button */}
          <a
            href="#services"
            className="hero-btn-sweep-secondary relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-white/10 backdrop-blur-md text-white font-medium text-base transition-all duration-300 hover:shadow-lg"
          >
            <span className="relative z-10">Explore Services</span>
            <ArrowUpRight className="relative z-10 w-4.5 h-4.5 text-white/80" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
