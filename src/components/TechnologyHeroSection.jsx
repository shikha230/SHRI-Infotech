import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, X, Star } from 'lucide-react';

export default function TechnologyHeroSection() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
  });

  return (
    <div className="w-full min-h-screen bg-[#080808] text-white relative overflow-hidden font-sans selection:bg-red-500">
      
      {/* Background Section (Video/Image from your screenshot) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
        >
          <source 
            src="https://res.cloudinary.com/yhlacstw/video/upload/v1786136274/kling_20260808_VIDEO__1061_0_ofqcxg.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* --- Main Hero Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        
        {/* 1. Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Future-Ready Solutions
          </span>
        </motion.div>

        {/* 2. Main Title (Medium & Bold) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
        >
          Technology <br className="hidden sm:block" />
          Crafted for All, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
            Not Machines
          </span>
        </motion.h1>

        {/* 3. Subtitle (Clean & Balanced) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed font-medium"
        >
          We build intelligent, human-centered digital experiences, powerful mobile apps, and scalable web solutions engineered for real business growth.
        </motion.p>

        {/* 4. Action Buttons (Smooth Hover Fill) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-12"
        >
          {/* Primary Button */}
          <button className="group relative overflow-hidden px-8 py-4 rounded-full border border-red-500/50 font-bold text-white transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-t from-red-700 via-red-600 to-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-wider">
              Get Started <ArrowRight size={18} />
            </span>
          </button>

          {/* Secondary Button */}
          <button className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/20 font-bold text-white transition-all duration-300">
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2 text-sm uppercase tracking-wider">
              Explore Services <ArrowUpRight size={18} />
            </span>
          </button>
        </motion.div>

        {/* 5. Social Proof Cluster */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                className="w-10 h-10 rounded-full border-2 border-black object-cover" 
                src={`https://i.pravatar.cc/100?img=${i+10}`} 
                alt="Client" 
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
              Trusted by 100+ Brands
            </p>
          </div>
        </motion.div>

      </div>

      {/* Ambient Glow (Background Decoration) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </div>
  );
}