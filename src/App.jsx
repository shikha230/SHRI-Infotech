import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import ServiceDetailPage from './pages/ServiceDetailPage'
import TechnologyHeroSection from './components/TechnologyHeroSection'
import Testimonials from './components/Testimonials'
import logo from './assets/logo.jpeg'
import whiteLogo from './assets/white-logo.png'
import bannerVideo from './assets/bannervedio.mp4'
import aboutImage from './assets/about_meeting.png'
import BorderGlow from './components/BorderGlow'

import ScrollReveal from './components/ScrollReveal'
import ShinyText from './components/ShinyText'
import AnimatedCounter from './components/AnimatedCounter'
import Magnet from './components/Magnet'
import TiltCard from './components/TiltCard'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import IndustryCarousel from './components/IndustryCarousel'
import {
  AboutBackground,
  ServicesBackground,
  ProjectsBackground,
  ChooseUsBackground,
  IndustryBackground,
  ContactBackground,
  FooterBackground
} from './components/BackgroundDecorations'
import ParticlesBackground from './components/ParticlesBackground'
import AuroraBackground from './components/AuroraBackground'
import {
  InteractiveFluidCanvas,
  LiquidWaveMesh
} from './components/TrendingBackgrounds'

const services = [
  {
    id: 'web-dev',
    title: 'Web Dev',
    description: 'Modern, responsive, high-performance websites tailored to your brand goals and business growth.',
    iconClass: 'web-dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'app-dev',
    title: 'App Dev',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences and drive engagement.',
    iconClass: 'app-dev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    description: 'Custom themes, plugins, and scalable WordPress websites — from blogs to enterprise portals.',
    iconClass: 'wordpress',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.298.283-2.529.786-3.643L7.96 18.881A8.982 8.982 0 013.009 12zm8.991 9c-.819 0-1.612-.113-2.364-.321l2.51-7.291 2.572 7.044c.017.04.036.078.056.115A8.946 8.946 0 0112 21zm1.191-13.232c.504-.026.958-.079.958-.079.451-.053.398-.716-.053-.69 0 0-1.355.106-2.23.106-.826 0-2.213-.106-2.213-.106-.451-.026-.504.663-.053.69 0 0 .428.053.884.079l1.313 3.598-1.843 5.528L7.287 7.768c.504-.026.958-.079.958-.079.452-.053.399-.716-.052-.69 0 0-1.356.106-2.231.106-.157 0-.342-.004-.537-.01A8.96 8.96 0 0112 3.009c2.327 0 4.449.886 6.045 2.339-.038-.003-.076-.008-.116-.008-.826 0-1.412.719-1.412 1.491 0 .69.398 1.275.823 1.966.319.559.69 1.275.69 2.312 0 .717-.275 1.55-.637 2.711l-.835 2.789-3.021-8.841zM17.159 18.399l2.537-7.33a8.447 8.447 0 00.607-3.12c0-.319-.021-.632-.057-.938A8.966 8.966 0 0120.991 12a8.987 8.987 0 01-3.832 6.399z" />
      </svg>
    ),
  },
  {
    id: 'shopify',
    title: 'Shopify',
    description: 'End-to-end e-commerce store design, customization, and optimization to maximize conversions and revenue.',
    iconClass: 'shopify',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 2H7C5.346 2 4 3.346 4 5v14c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zM9 6h6a1 1 0 010 2H9a1 1 0 010-2zm3 14c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    description: 'Data visualization, interactive dashboards, and business intelligence to help you make smarter decisions.',
    iconClass: 'power-bi',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 3a1 1 0 00-1 1v16a1 1 0 001 1h2a1 1 0 001-1v-8a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H5z" />
      </svg>
    ),
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Human-centered interface design — wireframing to prototyping — enabling digital user experiences.',
    iconClass: 'uiux',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
]

const projects = [
  {
    id: 'supply-chain',
    title: 'Smart Supply Chain Portal',
    description: 'A logistics dashboard that connects vendors, warehouses, and delivery lines in real-time with predictive inventory alerts.',
    image: '/supply-chain.png',
    tags: [
      { label: 'Web', color: '#e63946', bg: '#fdeaec' },
      { label: 'Admin', color: '#e67e22', bg: '#fef3e6' },
      { label: 'Analytics', color: '#d4a017', bg: '#fdf6e3' },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Patient Experience App',
    description: 'A smart patient portal with appointment booking, lab results, and e-signature consent — built between providers and patients.',
    image: '/healthcare.png',
    tags: [
      { label: 'SmartNative', color: '#27ae60', bg: '#e8f8ef' },
      { label: 'Healthcare', color: '#16a085', bg: '#e5f5f1' },
      { label: 'UI/UX', color: '#8e44ad', bg: '#f3e8f9' },
    ],
  },
  {
    id: 'retail',
    title: 'Data-Driven Retail Platform',
    description: 'An e-commerce platform with customer insights, dynamic pricing, and inventory optimization in a competitive digital market.',
    image: '/retail-platform.png',
    tags: [
      { label: 'Website', color: '#e63946', bg: '#fdeaec' },
      { label: 'E-commerce', color: '#8e44ad', bg: '#f3e8f9' },
      { label: 'Analytics', color: '#e67e22', bg: '#fef3e6' },
    ],
  },
]

const stats = [
  {
    id: 'projects',
    value: '50+',
    label: 'Projects Delivered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a5 5 0 0 0-5 5v3.47a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
      </svg>
    )
  },
  {
    id: 'clients',
    value: '30+',
    label: 'Happy Clients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },

  {
    id: 'support',
    value: '24/7',
    label: 'Support Available',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    )
  }
]

const industries = [
  {
    id: 'healthcare-sol',
    title: 'Healthcare Solutions',
    description: 'Secure, compliant, and patient-centric healthcare apps for hospitals, clinics, and telemedicine.',
    bulletPoints: [
      'EMR & Patient Portals',
      'Appointment & Scheduling',
      'Telemedicine Solutions',
      'Medical Data Security'
    ],
    color: '#840c17',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  },
  {
    id: 'food-restaurant',
    title: 'Food & Restaurant Apps',
    description: 'Custom mobile apps for food delivery, restaurant management, and loyalty.',
    bulletPoints: [
      'Mobile Food Ordering Systems',
      'Table/Order Reservations',
      'Loyalty & Rewards Programs'
    ],
    color: '#654f43',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V2l2 .5v6.5h-2" />
        <path d="M6 20V2" />
        <path d="M3 2v6a3 3 0 0 0 6 0V2" />
        <path d="M6 10v10" />
      </svg>
    )
  },
  {
    id: 'travel-hospitality',
    title: 'Travel & Hospitality Solutions',
    description: 'Build immersive travel platforms for booking, itineraries, and customer experience.',
    bulletPoints: [
      'Multi-language Support',
      'Real-time Flight Bookings',
      'Destination Guides'
    ],
    color: '#d60d1b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.9-.2-1.9.2-2.4 1s-.3 1.9.4 2.4l7.6 4.7L6.5 19H3v2l4.5-1.5 4.5 1.5v-3.5l4.3-4.4 4.7 7.6c.5.7 1.6 1 2.4.4s1.2-1.5 1-2.4z" />
      </svg>
    )
  },
  {
    id: 'real-estate',
    title: 'Real Estate Applications',
    description: 'Smart real estate apps with listing mgmt, virtual tours, and CRM.',
    bulletPoints: [
      'Property Listing & Management',
      'Virtual Tours & Mapping',
      'CRM Integration',
      'Lead Management'
    ],
    color: '#e2720e',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: 'supply-chain-logistics',
    title: 'Supply Chain & Logistics',
    description: 'Streamline logistics and inventory apps to optimize every stage of your supply chain.',
    bulletPoints: [
      'Fleet Tracking & Route Optimization',
      'Warehouse Management',
      'Supplier Collaboration Tools'
    ],
    color: '#0b66c2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    id: 'social-media',
    title: 'Social Media Platforms',
    description: 'Engaging social networks and community apps powered by data.',
    bulletPoints: [
      'User Profiles & Social Interaction',
      'Real-time Messaging & Notifications',
      'AI Filters & Analytics Integration'
    ],
    color: '#1a1a1a',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  }
]

const ArrowIcon = ({ className = '' }) => (
  <svg className={`inline-block shrink-0 ${className}`} style={{ width: '14px', height: '14px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    project: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFormMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormMessage("Enquiry submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          service: "",
          email: "",
          project: "",
        });
      } else {
        setFormMessage(data.message || "Failed to submit enquiry.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormMessage("Unable to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { name: "Home", link: "#services" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <header className="custom-navbar-header">
        <div className="custom-navbar-container">
          
          {/* Logo Area */}
          <div className="custom-logo-area">
            <a
              href="#"
              className="custom-logo-brand"
            >
              <img src={logo} alt="SHRI InfoTech" className="custom-logo-img" />
            </a>
          </div>

          {/* Red Navbar Area */}
          <div className="custom-red-area">
            {/* SVG Slant */}
            <svg
              className="custom-slant-svg"
              viewBox="0 0 140 90"
              preserveAspectRatio="none"
            >
              <path
                d="M 70 0 C 35 0, 35 90, 0 90 L 0 0 Z"
                fill="white"
              />
            </svg>

            {/* Desktop Menu */}
            <ul className="custom-desktop-menu">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={item.link}
                    className="custom-nav-link"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Project Button */}
            <a
              href="#projects"
              className="navbar-projects-btn desktop-projects-btn ml-auto inline-block px-7 py-2.5 rounded-full font-semibold text-[14.5px] no-underline leading-none shadow-sm cursor-pointer select-none"
            >
              Projects
            </a>

            {/* Mobile Menu Button */}
            <motion.button
              className="custom-hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="custom-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <ul>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== HERO SECTION ===== */}
      <TechnologyHeroSection />

      {/* ===== ABOUT US SECTION ===== */}
      <section className="about-section relative" id="about">
        <AboutBackground />
        <AuroraBackground colorStops={['#9d0d12', '#f472b6', '#ee5916', '#38bdf8']} opacity={0.18} speed={14} />
        <LiquidWaveMesh />
        <div className="about-container relative z-10">
          <div className="about-grid">
            
            {/* Left Column: Image with red accent */}
            <ScrollReveal variant="fade-right" duration={0.7} className="about-image-wrapper">
              <div className="about-red-badge animate-pulse-glow"></div>
              <img src={aboutImage} alt="Driving Digital Excellence" className="about-image" />
            </ScrollReveal>

            {/* Right Column: Text content */}
            <ScrollReveal variant="fade-left" duration={0.7} className="about-content">
              <span className="about-label">ABOUT US</span>
              <h2 className="about-title">
                Driving <ShinyText className="shiny-text-dark">Digital Excellence</ShinyText>
              </h2>
              <div className="about-title-line"></div>
              
              <p className="about-text">
               At Shri InfoTech, we help businesses turn ideas into meaningful digital solutions. From websites and mobile apps to e-commerce platforms and business intelligence, we combine technology, creativity, and a clear understanding of our clients’ needs to build solutions that truly make a difference.
              </p>
              
              <p className="about-text">
               With a vision to support both growing startups and established businesses, Shri InfoTech has built a dedicated team of 10+ engineers, designers, and strategists. We believe in working closely with our clients, understanding their goals, and delivering scalable solutions that help their businesses grow.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES SECTION ===== */}
      <section className="services-section relative" id="services">
        <ServicesBackground />
        <InteractiveFluidCanvas opacity={0.25} colors={['#9d0d12', '#f472b6', '#ee5916', '#38bdf8']} />
        <AuroraBackground colorStops={['#9d0d12', '#f472b6', '#ee5916', '#38bdf8']} opacity={0.15} speed={12} />
        <div className="services-container relative z-10">
          <ScrollReveal variant="fade-up" className="services-header">
            <h2>
              OUR <ShinyText className="shiny-text-dark">SERVICES</ShinyText>
            </h2>
            <p>
              We craft digital excellence across web, mobile, e-commerce, and data – with passion and precision.
            </p>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} variant="fade-up" delay={index * 0.1}>
                <TiltCard maxTilt={8} glowColor="rgba(157, 13, 18, 0.15)">
                  <Link to={`/service/${service.id}`} className="service-card-link" id={`service-${service.id}`}>
                    <div className="service-card">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        className={`service-icon ${service.iconClass}`}
                      >
                        {service.icon}
                      </motion.div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <span className="learn-more">
                         Learn more <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR RECENT PROJECTS SECTION ===== */}
      <section className="projects-section relative" id="projects">
        <ProjectsBackground />
        <LiquidWaveMesh />
        <AuroraBackground colorStops={['#9d0d12', '#f472b6', '#38bdf8', '#fb923c']} opacity={0.2} speed={16} />
        <div className="projects-container relative z-10">
          <ScrollReveal variant="fade-up" className="projects-header">
            <h2>
              OUR RECENT <ShinyText className="shiny-text-dark">PROJECTS</ShinyText>
            </h2>
            <p>
              Explore a few of our unique solutions across industries, built to match the client's purpose-driven strategy and real-time efficiency.
            </p>
          </ScrollReveal>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} variant="fade-up" delay={index * 0.15}>
                <TiltCard maxTilt={6} glowColor="rgba(0, 0, 0, 0.08)">
                  <div className="project-card cursor-pointer" id={`project-${project.id}`}>
                    <div className="project-image overflow-hidden">
                      <img src={project.image} alt={project.title} className="transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <motion.span
                            whileHover={{ scale: 1.08 }}
                            className="project-tag"
                            key={tag.label}
                            style={{ color: tag.color, backgroundColor: tag.bg }}
                          >
                            {tag.label}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY BUSINESSES CHOOSE US SECTION ===== */}
      <section className="choose-us-section relative" id="choose-us">
        <ChooseUsBackground />
        <InteractiveFluidCanvas opacity={0.25} colors={['#9d0d12', '#ee5916', '#f472b6']} />
        <div className="choose-us-container relative z-10">
          <ScrollReveal variant="zoom-in" duration={0.7} once={false} className="choose-us-banner">
            <div className="choose-us-info">
              <h2>Why Businesses Choose Us</h2>
              <p>
                We combine technology, expertise and innovation to deliver solutions that drive real results.
              </p>
              <Magnet strength={0.3}>
                <a href="#" className="discover-btn">
                  Discover More <span className="arrow">→</span>
                </a>
              </Magnet>
            </div>
            
            <div className="choose-us-stats">
              {stats.map((stat, idx) => (
                <div key={stat.id} className="stat-item-wrapper">
                  <div className="stat-item">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="stat-icon"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="stat-value">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                  {idx < stats.length - 1 && <div className="stat-divider" />}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INDUSTRY SPECIFIC IT SERVICES SECTION ===== */}
      <section className="industry-section relative overflow-hidden" id="industry">
        <IndustryBackground />
        <AuroraBackground colorStops={['#9d0d12', '#e63946', '#ee5916', '#a855f7']} opacity={0.16} speed={14} />
        <div className="industry-container relative z-10">
          <ScrollReveal variant="fade-up" className="industry-header">
            <h2>
              INDUSTRY SPECIFIC <ShinyText className="shiny-text-dark">IT SERVICES</ShinyText>
            </h2>
            <p>
              We offer tailored technology solutions to build a digital edge tailored to the unique needs of your industry.
            </p>
          </ScrollReveal>
        </div>

        {/* Full-bleed Edge-to-Edge Screen Carousel */}
        <div className="relative z-10 w-full overflow-hidden">
          <ScrollReveal variant="fade-up" delay={0.15}>
            <IndustryCarousel industries={industries} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CLIENT TESTIMONIALS SECTION ===== */}
      <Testimonials accentColor="#9d0d12" />

      {/* ===== GET IN TOUCH SECTION ===== */}
      <section className="contact-section relative" id="contact">
        <ContactBackground />
        <InteractiveFluidCanvas opacity={0.2} colors={['#9d0d12', '#f472b6', '#fb923c']} />
        <LiquidWaveMesh />
        <div className="contact-container relative z-10">
          <div className="contact-grid">
            {/* Left Column: Contact Info */}
            <ScrollReveal variant="fade-right" duration={0.7} className="contact-info">
              <h2>
                GET <ShinyText className="shiny-text-dark">IN TOUCH</ShinyText>
              </h2>
              <p className="contact-intro">
                Ready to start your digital transformation journey? Reach out to us today and let's discuss how we can help you achieve your business goals.
              </p>
              
              <div className="contact-details">
                <motion.div whileHover={{ x: 6 }} className="contact-item cursor-pointer">
                  <div className="contact-icon-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 0 .7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <a href="tel:+916200157201">+91 62001 57201</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 6 }} className="contact-item cursor-pointer">
                  <div className="contact-icon-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <a href="mailto:shriinfotech15@gmail.com">shriinfotech15@gmail.com</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 6 }} className="contact-item align-start cursor-pointer">
                  <div className="contact-icon-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span>3rd Floor, Toy & Joy Building, Near SBI Bank, Opp. Annapurna Dress, Near MIG Thana, Sector G, LIG Colony. Indore </span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Middle Column: Contact Form */}
            <ScrollReveal variant="fade-up" delay={0.15} duration={0.7}>
              <div className="contact-form-wrapper">
                

                 <form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <input
        type="text"
        name="phone"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Service
        </option>

        <option value="web-dev">Web Dev</option>
        <option value="app-dev">App Dev</option>
        <option value="wordpress">WordPress</option>
        <option value="shopify">Shopify</option>
        <option value="power-bi">Power BI</option>
        <option value="uiux">UI/UX Design</option>
      </select>
    </div>

    <div className="form-group">
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  <div className="form-group full-width">
    <textarea
      name="project"
      placeholder="About Your Project"
      rows="5"
      value={formData.project}
      onChange={handleChange}
      required
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="submit-btn hero-btn-sweep-primary relative overflow-hidden cursor-pointer"
  >
    <span className="relative z-10">
      {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
    </span>
  </button>

  {formMessage && (
    <p
      style={{
        marginTop: "15px",
        textAlign: "center",
        fontWeight: "500",
      }}
    >
      {formMessage}
    </p>
  )}
</form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SITE FOOTER ===== */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
    </Routes>
  )
}

export default App
