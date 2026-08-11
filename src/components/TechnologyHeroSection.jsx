import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, X, CheckCircle2, Shield, Zap, Sparkles, Star } from 'lucide-react';

export default function TechnologyHeroSection() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
  });

  const handleOpenModal = (title) => {
    setModalState({ isOpen: true, title });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, title: '' });
  };

  return (
    <div id="main-hero-page" className="w-full text-white selection:bg-red-600 selection:text-white relative overflow-hidden font-sans-main bg-black flex items-center min-h-[calc(100vh-75px)] py-8 lg:py-12">
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
      <div id="hero-content-wrapper" className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center relative z-10 space-y-8 sm:space-y-10">
        
        {/* Main Headline & Badge */}
        <div id="hero-headline-container" className="flex flex-col space-y-5 max-w-3xl">
          
          {/* Top Feature Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 shadow-sm w-fit"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-wide font-semibold text-white/95">Future-Ready Solutions</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">For a Smarter World</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            id="hero-main-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold text-white tracking-tight leading-[1.05] font-sans-main select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            <span className="block text-white">Technology</span>
            <span className="block text-white">Crafted for All,</span>
            <span className="block bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Not Machines
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white/85 font-normal leading-relaxed max-w-xl font-sans-main tracking-normal drop-shadow"
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
          className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
        >
          {/* Primary CTA Button */}
          <button
            id="btn-get-started"
            onClick={() => handleOpenModal('Start Your Future-Ready Journey')}
            className="group relative inline-flex items-center gap-3.5 bg-gradient-to-r from-[#9d0d12] via-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-base px-7 py-3.5 rounded-full shadow-[0_8px_25px_-5px_rgba(230,57,70,0.5)] hover:shadow-[0_12px_32px_-3px_rgba(230,57,70,0.75)] transition-all duration-300 active:scale-[0.98] cursor-pointer select-none"
          >
            <span className="tracking-tight text-white font-medium text-base">Get Started</span>
            <div id="btn-arrow-badge" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#9d0d12] transition-all duration-300 group-hover:translate-x-1 shadow-sm">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>

          {/* Secondary Button */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-medium text-base transition-all duration-300 hover:shadow-lg"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-4.5 h-4.5 text-white/80" />
          </a>

          {/* Social Proof Cluster */}
          <div id="social-proof-container" className="flex items-center gap-3 select-none pl-1 sm:pl-2">
            <div id="avatars-cluster" className="flex items-center -space-x-2.5">
              <img className="w-9 h-9 rounded-full ring-2 ring-black object-cover shadow-md" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client 1" />
              <img className="w-9 h-9 rounded-full ring-2 ring-black object-cover shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client 2" />
              <img className="w-9 h-9 rounded-full ring-2 ring-black object-cover shadow-md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Client 3" />
            </div>
            <div id="social-proof-text" className="text-left leading-tight">
              <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="ml-1 text-white font-bold">4.9/5</span>
              </div>
              <p className="text-xs text-white/80 font-medium">Trusted by 100+ Brands & Teams</p>
            </div>
          </div>
        </motion.div>

        {/* Metric Cards */}
        <motion.div 
          id="metric-cards-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-4 max-w-md w-full pt-1"
        >
          <div
            id="card-projects-delivered"
            onClick={() => handleOpenModal('Projects Delivered')}
            className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-red-500/50 transition-all duration-300 cursor-pointer select-none hover:bg-black/60 shadow-lg hover:scale-[1.02]"
          >
            <div className="flex justify-end w-full">
              <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
            <div className="space-y-0.5 mt-1">
              <div id="metric-value-150" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">150+</div>
              <div id="metric-label-projects" className="text-xs sm:text-sm text-white/70 font-medium">Projects Delivered</div>
            </div>
          </div>

          <div
            id="card-client-satisfaction"
            onClick={() => handleOpenModal('Client Satisfaction')}
            className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 hover:border-red-500/50 transition-all duration-300 cursor-pointer select-none hover:bg-black/60 shadow-lg hover:scale-[1.02]"
          >
            <div className="flex justify-end w-full">
              <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
            <div className="space-y-0.5 mt-1">
              <div id="metric-value-98" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">98%</div>
              <div id="metric-label-satisfaction" className="text-xs sm:text-sm text-white/70 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {modalState.isOpen && (
          <div id="modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              id="modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{modalState.title}</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-5">
                <p className="text-sm text-white/70 leading-relaxed">
                  Welcome to Future-Ready Solutions. We build mindful digital products tailored for human connection, speed, and real-world durability.
                </p>

                <div className="grid grid-cols-1 gap-3 pt-1">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Human-Centric Architecture</h4>
                      <p className="text-xs text-white/60">Designed with clear focus, zero friction, and high accessibility standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                    <Zap className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">150+ Verified Launch Cycles</h4>
                      <p className="text-xs text-white/60">Proven track record across global platforms and visionary teams.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                    <Shield className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">98% Satisfied Partners</h4>
                      <p className="text-xs text-white/60">Long-term collaboration built on transparent craftsmanship.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert("Thank you! Our strategy team will be in touch shortly.");
                    handleCloseModal();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#9d0d12] to-red-600 hover:brightness-110 shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
