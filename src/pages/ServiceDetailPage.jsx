import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
} from 'framer-motion'
import {
  Code2,
  Cpu,
  Zap,
  ShieldCheck,
  Sparkles,
  Globe,
  Smartphone,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Search,
  Calculator,
  Sliders,
  Layers,
  Terminal,
  ExternalLink,
  Star,
  Clock,
  Lock,
  Server,
  Database,
  TrendingUp,
  MessageSquare,
  Check,
  Phone,
  ChevronDown,
  Play,
  Award,
  Activity,
  FileText,
  BarChart3,
  Monitor,
  Layout,
  CheckCircle,
  Rocket,
  Bot,
  Flame,
} from 'lucide-react'
import './ServiceDetailPage.css'
import ScrollToTop from '../components/ScrollToTop'
import LogoLoop from '../components/LogoLoop'
import { getTechLogoNode } from '../utils/techIcons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import AnimatedCounter from '../components/AnimatedCounter'

/* ═══════════════════════════════════════════════
   ANIMATION VARIANTS & SPRING CONFIGS
   ═══════════════════════════════════════════════ */

const smoothSpring = { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 }
const bouncySpring = { type: 'spring', stiffness: 300, damping: 15, mass: 0.6 }

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const heroChildVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const featureContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const featureCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/* ═══════════════════════════════════════════════
   INTERACTIVE SUB-COMPONENTS & THEME CANVAS
   ═══════════════════════════════════════════════ */

/* ── Mouse Parallax Glowing Orbs (Black & Red Theme) ── */
function HeroBackgroundOrbs({ accentColor }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 40, damping: 25 }
  const x1 = useSpring(useTransform(mouseX, [0, 1], [-25, 25]), springConfig)
  const y1 = useSpring(useTransform(mouseY, [0, 1], [-25, 25]), springConfig)
  const x2 = useSpring(useTransform(mouseX, [0, 1], [20, -20]), springConfig)
  const y2 = useSpring(useTransform(mouseY, [0, 1], [20, -20]), springConfig)

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div className="sdp-hero-bg-canvas">
      {/* Cyber Grid pattern background */}
      <div className="sdp-cyber-grid" />

      {/* Radial Glow Orbs */}
      <motion.div
        className="sdp-glow-orb orb-1"
        style={{
          background: `radial-gradient(circle, ${accentColor}20 0%, ${accentColor}08 50%, transparent 75%)`,
          x: x1,
          y: y1,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="sdp-glow-orb orb-2"
        style={{
          background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
          x: x2,
          y: y2,
        }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Cyber Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="sdp-cyber-particle"
          style={{
            left: `${(i * 6.5) % 100}%`,
            top: `${(i * 11) % 100}%`,
            background: accentColor,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.25,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ── Interactive Live IDE Code Preview (Hero Right) ── */
function HeroCodePreview({ serviceKey, accentColor }) {
  const [activeTab, setActiveTab] = useState(0)

  const codeSnippets = {
    'web-dev': [
      {
        filename: 'NextEngine.tsx',
        language: 'TypeScript',
        code: `import { createEdgeEngine, AiAgent } from '@shri/core';

export async function renderNextGenApp() {
  const app = await createEdgeEngine({
    framework: 'Next.js 15 (React 19 SSR)',
    performance: { lighthouseScore: 100, ttfbTargetMs: 18 },
    aiIntegration: { agenticLLM: true, vectorDB: 'Pinecone' },
    security: { edgeShield: 'Cloudflare Enterprise', ssl: 'AES-256' }
  });

  return app.deployToEdgeRegion('asia-south1');
}`,
      },
      {
        filename: 'Performance.config.ts',
        language: 'TypeScript',
        code: `export const perfOptimization = {
  mediaCompression: 'AVIF-AutoWebP',
  bundleSplitting: { maxChunkKb: 45 },
  edgeCaching: { regions: 280, hitRatio: '99.9%' },
  seoMeta: { openGraphAuto: true, jsonLdSchema: 'Enterprise' }
};`,
      },
      {
        filename: 'SecuritySchema.prisma',
        language: 'Prisma',
        code: `model EnterpriseClient {
  id           String   @id @default(uuid())
  companyName  String   @unique
  sslEncrypted Boolean  @default(true)
  slaTier      String   @default("99.99% Uptime")
  createdAt    DateTime @default(now())
}`,
      },
    ],
    default: [
      {
        filename: 'ServiceConfig.ts',
        language: 'TypeScript',
        code: `// Shri InfoTech Service Engine
import { ServiceEngine } from '@shri/tech';

export const config = ServiceEngine.init({
  scalability: 'auto-scale-cloud',
  security: 'enterprise-shield',
  qualityAssurance: '100% test coverage'
});`,
      },
      {
        filename: 'Metrics.json',
        language: 'JSON',
        code: `{
  "uptimeSLA": "99.99%",
  "avgLatencyMs": 24,
  "lighthouseScore": 100,
  "status": "OPERATIONAL"
}`,
      },
    ],
  }

  const snippets = codeSnippets[serviceKey] || codeSnippets.default

  return (
    <motion.div
      className="sdp-hero-ide-window"
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* IDE Window Header */}
      <div className="sdp-ide-header">
        <div className="sdp-ide-controls">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="sdp-ide-tabs">
          {snippets.map((tab, i) => (
            <button
              key={i}
              className={`sdp-ide-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <Code2 size={13} className="tab-icon" />
              <span>{tab.filename}</span>
            </button>
          ))}
        </div>
        <div className="sdp-ide-badge">
          <span className="live-pulse" style={{ backgroundColor: accentColor }} />
          LIVE ENGINE
        </div>
      </div>

      {/* Code Body */}
      <div className="sdp-ide-body">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="sdp-code-block"
          >
            <code>
              {snippets[activeTab].code.split('\n').map((line, idx) => (
                <div key={idx} className="sdp-code-line">
                  <span className="line-num">{idx + 1}</span>
                  <span className="line-text">{line}</span>
                </div>
              ))}
            </code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* IDE Footer Terminal Status */}
      <div className="sdp-ide-footer">
        <div className="status-item">
          <Terminal size={13} />
          <span>Status: Active Engine</span>
        </div>
        <div className="status-metrics">
          <span className="metric">⚡ LCP: <strong>280ms</strong></span>
          <span className="metric">🛡️ SLA: <strong>99.99%</strong></span>
          <span className="metric highlight" style={{ color: accentColor }}>Lighthouse: 100/100</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── 3D Interactive Feature Card ── */
function FeatureCard3D({ feature, idx, accentColor }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useTransform(mouseY, [0, 1], [8, -8])
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8])
  const glowX = useTransform(mouseX, [0, 1], ['0%', '100%'])
  const glowY = useTransform(mouseY, [0, 1], ['0%', '100%'])

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 25 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      className="sdp-feature-card sdp-feature-card-3d"
      variants={featureCardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 45px ${accentColor}30`,
        transition: { duration: 0.3 },
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="sdp-feature-glow"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, ${accentColor}30, transparent 65%)`,
        }}
      />
      <div className="sdp-feature-top">
        <span className="sdp-feature-num" style={{ color: accentColor }}>
          0{idx + 1}
        </span>
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
    </motion.div>
  )
}

/* ── Interactive Case Studies Showcase Section ── */
function CaseStudiesShowcase({ accentColor }) {
  const caseStudies = [
    {
      title: 'FinTech Global Pay Engine',
      category: 'Fintech & SaaS Platform',
      metrics: '₹500Cr+ Processed • 0ms Downtime',
      description: 'Built a high-frequency payment dashboard processing over 50,000 concurrent transactions per minute with sub-20ms WebSocket API latency.',
      tech: ['Next.js 15', 'TypeScript', 'GraphQL', 'Redis', 'AWS'],
      gradient: 'linear-gradient(135deg, rgba(230, 57, 70, 0.18) 0%, rgba(157, 13, 18, 0.25) 100%)',
    },
    {
      title: 'HealthTech AI Diagnostic Portal',
      category: 'AI & Healthcare Web Portal',
      metrics: '200+ Hospitals • 0.2s Search • HIPAA SLA',
      description: 'Engineered a secure AI-assisted medical diagnostic web app allowing doctors to analyze medical scans with AI assistance in real-time.',
      tech: ['React 19', 'FastAPI', 'Python', 'OpenAI', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, rgba(220, 38, 38, 0.18) 0%, rgba(185, 28, 28, 0.25) 100%)',
    },
    {
      title: 'OmniChannel E-Commerce Ecosystem',
      category: 'Headless E-Commerce',
      metrics: '+380% Conversions • 0.3s LCP Load',
      description: 'Redesigned a global retail brand e-commerce store using Headless Next.js, Stripe Payments, and global Edge CDN routing.',
      tech: ['Next.js', 'Shopify Storefront', 'Stripe', 'Tailwind', 'Vercel'],
      gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.18) 0%, rgba(157, 13, 18, 0.25) 100%)',
    },
  ]

  return (
    <section className="sdp-casestudies-section">
      <div className="sdp-container">
        <div className="sdp-section-header">
          <span className="sdp-section-label" style={{ color: accentColor }}>
            LIVE WORK HIGHLIGHTS
          </span>
          <h2>Proven Impact Across High-Growth Enterprises</h2>
        </div>

        <div className="sdp-casestudies-grid">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={idx}
              className="sdp-casestudy-card"
              style={{ background: cs.gradient }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className="cs-top-row">
                <span className="cs-category">{cs.category}</span>
                <span className="cs-metrics-pill" style={{ color: accentColor, borderColor: `${accentColor}50` }}>
                  {cs.metrics}
                </span>
              </div>
              <h3>{cs.title}</h3>
              <p>{cs.description}</p>
              <div className="cs-tech-tags">
                {cs.tech.map((t, i) => (
                  <span key={i} className="cs-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



/* ── Comparison Matrix Section (Shri InfoTech vs Traditional Agencies) ── */

/* ── Client Testimonials Showcase ── */
function ClientTestimonialsSection({ accentColor }) {
  const reviews = [
    {
      quote:
        'Shri InfoTech completely transformed our web application. Our loading speed dropped from 4.2 seconds to 280ms, and our mobile conversion rate jumped by 380%!',
      name: 'Rajesh Sharma',
      role: 'CTO, FinTech Global Pay',
      rating: 5,
    },
    {
      quote:
        'The engineering quality, UI/UX polish, and adherence to timelines were Silicon Valley grade. Their team built our enterprise SaaS platform flawlessly.',
      name: 'Ananya Verma',
      role: 'VP of Product, OmniScale Global',
      rating: 5,
    },
    {
      quote:
        'Working with Shri InfoTech felt like having an elite dedicated engineering team. Responsive, highly skilled, and extremely professional throughout.',
      name: 'Vikramaditya Roy',
      role: 'Founder & CEO, CloudNest Tech',
      rating: 5,
    },
  ]

  return (
    <section className="sdp-testimonials-section" id="reviews">
      <div className="sdp-container">
        <div className="sdp-section-header">
          <span className="sdp-section-label" style={{ color: accentColor }}>
            CLIENT PROOF & REVIEWS
          </span>
          <h2>Trusted By High-Growth Tech Pioneers</h2>
        </div>

        <div className="sdp-testimonials-grid">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              className="sdp-testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="testi-top">
                <div className="testi-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
              <p className="testi-quote">"{rev.quote}"</p>
              <div className="testi-author">
                <div className="author-avatar" style={{ background: accentColor, color: '#ffffff' }}>
                  {rev.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{rev.name}</span>
                  <span className="author-role">{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ Search Filter Component ── */
function FAQItemWithSearch({ faq, idx, accentColor }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`sdp-faq-item ${open ? 'sdp-faq-open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.06 }}
      layout
    >
      <motion.div
        className="sdp-faq-accent-border"
        style={{ backgroundColor: accentColor }}
        initial={false}
        animate={{ scaleY: open ? 1 : 0, opacity: open ? 1 : 0 }}
      />
      <button className="sdp-faq-question" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ ...bouncySpring }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="sdp-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════
   SERVICES DATA STORE (BLACK & CRIMSON RED THEME)
   ═══════════════════════════════════════════════ */

const servicesData = {
  'web-dev': {
    serviceKey: 'web-dev',
    title: 'Enterprise Web Engineering & AI Solutions',
    tagline: 'Hyper-fast, AI-native web applications, custom SaaS portals, and high-converting headless e-commerce platforms.',
    heroGradient: 'linear-gradient(135deg, #fff7f6 0%, #fef2f2 40%, #f8edf5 75%, #fff5f5 100%)',
    accentColor: '#9d0d12',
    icon: <Globe size={28} />,
    overview:
      'At Shri InfoTech, we deliver next-generation software engineering for businesses that refuse to compromise on speed, design, or security. Leveraging Next.js 15, React 19, TypeScript, and Serverless Edge Infra, we build custom web platforms achieving sub-300ms TTFB, 100/100 Core Web Vitals, and ISO-standard security compliance.',
    features: [
      { title: 'Next.js 15 & React 19 SSR Architecture', desc: 'Hybrid static & server-rendered web applications with React Server Components for instant page transitions.' },
      { title: 'AI Agent & LLM API Integration', desc: 'Embedded OpenAI, Claude, and Vector DB pipelines for automated intelligent user interactions.' },
      { title: 'Headless E-Commerce & Stripe Billing', desc: 'High-speed payment processing, inventory sync, and custom cart checkout pipelines built for conversion.' },
      { title: 'Headless CMS & Dynamic Content', desc: 'Empower marketing teams to update content instantly with Sanity, Contentful, or Strapi without touching code.' },
      { title: 'Lighthouse 100/100 SEO Architecture', desc: 'Automatic structured JSON-LD schemas, Core Web Vitals optimization, and global edge CDN caching.' },
      { title: 'Enterprise Cloud & Microservices', desc: 'Containerized Node.js, GraphQL, and Serverless API microservices deployed on AWS & Cloudflare Edge.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    process: [
      { step: '01', title: 'Architecture & Discovery', desc: 'Technical blueprinting, database schema design, and API workflow mapping.' },
      { step: '02', title: 'UI/UX Prototyping', desc: 'High-fidelity interactive Figma wireframes and micro-interaction prototypes.' },
      { step: '03', title: 'Agile Full-Stack Sprints', desc: 'Clean, modular code development with daily staging deployments on Vercel/AWS.' },
      { step: '04', title: 'QA & Penetration Testing', desc: 'Cross-device testing, WCAG accessibility audits, and security vulnerability checks.' },
      { step: '05', title: 'Production Launch & 24/7 SLA', desc: 'Zero-downtime DNS deployment, APM monitoring, and continuous maintenance.' },
    ],
    pricing: [
      { plan: 'Starter Web App', price: '₹29,999', period: 'one-time', features: ['5-Page Next.js 15 Web App', 'Responsive Fluid Design', 'SEO & Core Web Vitals 95+', 'Contact Form & API Setup', '1 Month SLA Support'], highlighted: false },
      { plan: 'Business Scale', price: '₹89,999', period: 'one-time', features: ['15-Page Custom Architecture', 'Headless CMS Integration', 'E-Commerce / Payment Setup', 'Advanced Analytics & Tracking', '3 Months SLA Support'], highlighted: true },
      { plan: 'Enterprise Platform', price: '₹2,49,999+', period: 'custom', features: ['Unlimited Web Microservices', 'Custom Backend & AI APIs', 'Dedicated Architect & PM', 'ISO 27001 Security Audit', '12 Months SLA Support'], highlighted: false },
    ],
    faqs: [
      { q: 'How fast can Shri InfoTech build and launch my web project?', a: 'Standard business web apps are delivered in 2 to 4 weeks. Complex enterprise web applications or SaaS platforms typically take 4 to 8 weeks in agile sprints.' },
      { q: 'What technologies do you use for modern web development?', a: 'We specialize in React 19, Next.js 15, TypeScript, Node.js, GraphQL, Tailwind CSS, PostgreSQL, MongoDB, and Vercel/AWS cloud infrastructure.' },
      { q: 'Will our website achieve a 95+ Lighthouse score?', a: 'Yes! We guarantee a 95+ PageSpeed & Core Web Vitals score through code splitting, automatic WebP/AVIF media compression, and edge CDN routing.' },
      { q: 'Do you provide post-launch maintenance and updates?', a: 'Absolute peace of mind. We offer dedicated 24/7 SLA maintenance packages covering security patches, backups, uptime monitoring, and feature upgrades.' },
    ],
    stats: [
      { value: '150+', label: 'Web Applications Live' },
      { value: '99.99%', label: 'Uptime SLA Guarantee' },
      { value: '<0.3s', label: 'Average LCP Latency' },
      { value: '4.98/5', label: 'Verified Client Rating' },
    ],
  },
  'app-dev': {
    serviceKey: 'app-dev',
    title: 'Mobile App Development',
    tagline: 'High-performance native iOS & Android applications and cross-platform Flutter/React Native solutions.',
    heroGradient: 'linear-gradient(135deg, #fff7f6 0%, #fef2f2 40%, #f8edf5 75%, #fff5f5 100%)',
    accentColor: '#9d0d12',
    icon: <Smartphone size={28} />,
    overview:
      'We craft native Swift/Kotlin and cross-platform Flutter/React Native mobile applications that deliver 60fps animations, intuitive gesture-driven UI/UX, offline syncing, and instant push notification engagement.',
    features: [
      { title: 'Native iOS & Android', desc: 'Platform-optimized code for maximum CPU/GPU efficiency and hardware access.' },
      { title: 'Cross-Platform Mastery', desc: 'Single codebase for iOS and Android with React Native or Flutter, cutting dev costs by 40%.' },
      { title: 'Offline-First Data Sync', desc: 'Seamless offline capabilities with SQLite and Realm database synchronization.' },
      { title: 'Push Notification Systems', desc: 'Targeted engagement via Firebase FCM and OneSignal automated user push flows.' },
      { title: 'Biometric & Secure Pay', desc: 'Apple Pay, Google Pay, FaceID, and fingerprint authentication security.' },
      { title: 'App Store ASO Launch', desc: 'Complete submission management for Apple App Store and Google Play Store.' },
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux', 'SQLite', 'iOS', 'Android'],
    process: [
      { step: '01', title: 'Requirement & UX Wireframing', desc: 'User journey mapping, HIG/Material specs, and interactive clickable prototypes.' },
      { step: '02', title: 'Agile Mobile Development', desc: 'Sprint builds delivered to TestFlight and Firebase App Distribution for continuous testing.' },
      { step: '03', title: 'Hardware & Device QA', desc: 'Testing across 50+ real mobile phone screen sizes and OS versions.' },
      { step: '04', title: 'Store Submission & ASO', desc: 'Metadata optimization, screenshot assets, and store compliance sign-off.' },
      { step: '05', title: 'Post-Launch Analytics', desc: 'Crashlytics monitoring, user retention tracking, and regular update cycles.' },
    ],
    pricing: [
      { plan: 'Single Platform MVP', price: '₹50,000', period: 'one-time', features: ['iOS or Android App', '8 Main Interactive Screens', 'User Authentication & Profile', 'Basic Push Notifications', '1 Month SLA Support'], highlighted: false },
      { plan: 'Dual Platform Scale', price: '₹1,50,000', period: 'one-time', features: ['iOS + Android (Cross-Platform)', '20 Screens + Admin Dashboard', 'Payment Gateway Integration', 'Real-Time Push & Chat', '3 Months SLA Support'], highlighted: true },
      { plan: 'Enterprise Mobile Suite', price: '₹3,50,000+', period: 'custom', features: ['Unlimited Screens & Platforms', 'Custom Scalable Cloud Backend', 'Biometric & Offline Sync', 'Dedicated Mobile Architect', '12 Months SLA Support'], highlighted: false },
    ],
    faqs: [
      { q: 'Should I choose Native or React Native/Flutter?', a: 'Cross-platform (React Native/Flutter) is ideal for 90% of business apps as it launches on both iOS and Android simultaneously. Native Swift/Kotlin is recommended for heavy 3D or device hardware apps.' },
    ],
    stats: [
      { value: '80+', label: 'Apps in App Stores' },
      { value: '500K+', label: 'End User Downloads' },
      { value: '4.8★', label: 'Average Store Rating' },
      { value: '96%', label: 'Client Satisfaction' },
    ],
  },
  'wordpress': {
    serviceKey: 'wordpress',
    title: 'Custom WordPress Engineering',
    tagline: 'High-speed custom WordPress themes, custom plugin development, and secure WooCommerce stores.',
    heroGradient: 'linear-gradient(135deg, #fff7f6 0%, #fef2f2 40%, #f8edf5 75%, #fff5f5 100%)',
    accentColor: '#9d0d12',
    icon: <Code2 size={28} />,
    overview:
      'We elevate WordPress beyond standard templates. Our WordPress engineering team creates bespoke PHP/Gutenberg themes, custom performance plugins, and WooCommerce setups optimized for maximum speed, security hardening, and effortless content management.',
    features: [
      { title: 'Custom Theme Development', desc: '100% custom-coded light themes built without page builder bloat.' },
      { title: 'Custom Plugin Engineering', desc: 'Bespoke WordPress plugins tailored to your specific business logic.' },
      { title: 'WooCommerce E-Commerce', desc: 'Scalable online stores with custom checkout flows and inventory integration.' },
      { title: 'Database & Cache Speed', desc: 'Redis object caching and MySQL database query optimization.' },
      { title: 'Enterprise Security Hardening', desc: 'Malware firewalls, 2FA, SSL enforcement, and automated backups.' },
      { title: 'Seamless Site Migration', desc: 'Zero downtime migration preserving 100% of your SEO rankings and permalinks.' },
    ],
    technologies: ['WordPress', 'PHP 8+', 'MySQL', 'WooCommerce', 'ACF Pro', 'Gutenberg', 'REST API', 'Redis', 'Yoast SEO'],
    process: [
      { step: '01', title: 'WP Strategy & Wireframe', desc: 'Content strategy planning and custom Gutenberg block mockups.' },
      { step: '02', title: 'Custom Code Theme Dev', desc: 'Coding clean PHP 8 templates adhering to WordPress Coding Standards.' },
      { step: '03', title: 'Speed & Security Setup', desc: 'Configuring Redis cache, CDN, and enterprise security shields.' },
      { step: '04', title: 'Content & SEO Setup', desc: 'Setting up custom post types, ACF fields, and Yoast structured data.' },
      { step: '05', title: 'Launch & Team Training', desc: 'Going live and providing step-by-step dashboard video training.' },
    ],
    pricing: [
      { plan: 'Custom WP Blog/Site', price: '₹15,000', period: 'one-time', features: ['Custom Theme Setup', 'Up to 8 Pages', 'Contact Form & Maps', 'Basic SEO Setup', '1 Month SLA Support'], highlighted: false },
      { plan: 'Business WooCommerce', price: '₹50,000', period: 'one-time', features: ['Custom Theme & ACF Pro', 'WooCommerce Setup (50 Products)', 'Payment & Shipping Rules', 'Speed Optimization (90+)', '3 Months SLA Support'], highlighted: true },
      { plan: 'Enterprise WP Portal', price: '₹1,50,000+', period: 'custom', features: ['Multisite Network Architecture', 'Custom Plugin Engineering', 'REST API Integrations', '24/7 Security Shield', '12 Months SLA Support'], highlighted: false },
    ],
    faqs: [
      { q: 'Why choose custom WordPress theme development over pre-made templates?', a: 'Pre-made templates are loaded with bloated code that slows down your site. Our custom-coded WordPress themes are lightweight, loading in under 1 second.' },
    ],
    stats: [
      { value: '200+', label: 'WordPress Sites Live' },
      { value: '50+', label: 'Custom Plugins Built' },
      { value: '100%', label: 'Mobile Responsive' },
      { value: '24/7', label: 'Site Monitoring' },
    ],
  },
  'shopify': {
    serviceKey: 'shopify',
    title: 'Shopify & Headless E-Commerce',
    tagline: 'High-converting Shopify Plus stores, custom Liquid theme design, and headless commerce integration.',
    heroGradient: 'linear-gradient(135deg, #fff7f6 0%, #fef2f2 40%, #f8edf5 75%, #fff5f5 100%)',
    accentColor: '#9d0d12',
    icon: <BarChart3 size={28} />,
    overview:
      'Scale your direct-to-consumer (D2C) brand with our specialized Shopify development services. We build custom Liquid themes, Shopify Plus checkout workflows, custom private apps, and headless e-commerce storefronts designed to maximize average order value (AOV) and conversion rate.',
    features: [
      { title: 'Custom Liquid Theme Design', desc: 'Bespoke Shopify themes designed for conversion and rapid mobile checkout.' },
      { title: 'Shopify Plus Solutions', desc: 'Custom Scripts, B2B portals, and enterprise checkout customizations.' },
      { title: 'Multi-Gateway Payment Setup', desc: 'Razorpay, Stripe, UPI, COD, and instant refund payment integration.' },
      { title: 'Private App & API Dev', desc: 'Custom Shopify apps to sync ERP, CRM, and warehouse inventory.' },
      { title: 'High-Converting CRO Design', desc: 'Upsells, cross-sells, bundle builders, and abandoned cart recovery.' },
      { title: 'Shipping & Logistics Sync', desc: 'Integration with Shiprocket, Delhivery, FedEx, and automated tracking.' },
    ],
    technologies: ['Shopify', 'Liquid', 'Shopify Plus', 'Storefront API', 'Razorpay', 'Stripe', 'Klaviyo', 'GA4', 'Meta Pixel'],
    process: [
      { step: '01', title: 'Brand & E-Com Audit', desc: 'Product taxonomy planning, catalog structure, and UX analysis.' },
      { step: '02', title: 'Custom Theme Design', desc: 'High-converting UI mockups for Product, Collection, and Cart pages.' },
      { step: '03', title: 'Shopify Dev & Apps', desc: 'Liquid coding, payment setup, shipping calculation rules, and apps.' },
      { step: '04', title: 'Catalog & Data Import', desc: 'Migration of products, customers, and order history with zero data loss.' },
      { step: '05', title: 'Launch & Marketing Sync', desc: 'Meta Pixel, Google Analytics 4, and Klaviyo email automation sync.' },
    ],
    pricing: [
      { plan: 'Starter Store', price: '₹30,000', period: 'one-time', features: ['Custom Shopify Setup', 'Up to 50 Products', 'Payment Gateway Setup', 'Mobile Checkout Ready', '1 Month SLA Support'], highlighted: false },
      { plan: 'Growth E-Commerce', price: '₹80,000', period: 'one-time', features: ['Bespoke Liquid Theme', 'Up to 500 Products', 'Upsell & Bundle Modules', 'Klaviyo Email Automation', '3 Months SLA Support'], highlighted: true },
      { plan: 'Enterprise Headless', price: '₹2,50,000+', period: 'custom', features: ['Shopify Plus & Headless Next.js', 'Custom Private App Dev', 'Multi-Currency & B2B', 'Dedicated Account Lead', '12 Months SLA Support'], highlighted: false },
    ],
    faqs: [
      { q: 'Can you migrate my existing WooCommerce or Magento store to Shopify?', a: 'Yes! We seamlessly migrate all product details, variants, customer data, and past order history to Shopify with 100% data integrity.' },
    ],
    stats: [
      { value: '100+', label: 'Shopify Stores Live' },
      { value: '₹10Cr+', label: 'Client Revenue Generated' },
      { value: '+35%', label: 'Average Conversion Bump' },
      { value: '4.9★', label: 'Client Satisfaction' },
    ],
  },
  'power-bi': {
    serviceKey: 'power-bi',
    title: 'Power BI & Business Intelligence',
    tagline: 'Interactive enterprise data dashboards, real-time analytics pipelines, and automated reporting systems.',
    heroGradient: 'linear-gradient(135deg, #fff7f6 0%, #fef2f2 40%, #f8edf5 75%, #fff5f5 100%)',
    accentColor: '#9d0d12',
    icon: <Database size={28} />,
    overview:
      'Turn complex data into actionable business intelligence. We design executive Power BI dashboards, automated SQL data pipelines, advanced DAX calculations, and real-time operational reports that help leaders make data-backed decisions instantly.',
    features: [
      { title: 'Interactive Executive Dashboards', desc: 'Real-time KPI visualization with drill-down capabilities for decision-makers.' },
      { title: 'Advanced DAX & Data Modeling', desc: 'Complex statistical modeling, measures, and time-intelligence calculations.' },
      { title: 'Multi-Source Data Integration', desc: 'Connecting SQL, Excel, Salesforce, SAP, Google Analytics, and APIs.' },
      { title: 'Real-Time Streaming Analytics', desc: 'Live data refresh feeds for real-time inventory and sales tracking.' },
      { title: 'Embedded Analytics for Apps', desc: 'Embed Power BI reports directly into your web applications.' },
      { title: 'Row-Level Security (RLS)', desc: 'Granular role-based security ensuring users only see authorized data.' },
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Azure Data Factory', 'Python', 'Excel', 'SharePoint'],
    process: [
      { step: '01', title: 'Data Audit & KPI Definition', desc: 'Evaluating data sources, cleanliness, and business metric goals.' },
      { step: '02', title: 'Data Pipeline & ETL', desc: 'Cleaning, transforming, and modeling data schemas using Power Query & SQL.' },
      { step: '03', title: 'Dashboard Design & DAX', desc: 'Building responsive visual cards, charts, and custom DAX measures.' },
      { step: '04', title: 'Security & RLS Setup', desc: 'Configuring Row-Level Security and workspace permission roles.' },
      { step: '05', title: 'Deployment & User Training', desc: 'Publishing to Power BI Service, automated refresh, and team training.' },
    ],
    pricing: [
      { plan: 'Single Executive Dashboard', price: '₹20,000', period: 'one-time', features: ['1 Interactive Dashboard', 'Up to 5 Data Sources', 'Custom DAX Calculations', 'Mobile View Optimization', '1 Month SLA Support'], highlighted: false },
      { plan: 'BI Analytics Suite', price: '₹75,000', period: 'one-time', features: ['5 Enterprise Dashboards', 'Unlimited Data Sources', 'Row-Level Security (RLS)', 'Automated Scheduled Refresh', '3 Months SLA Support'], highlighted: true },
      { plan: 'Enterprise Data Warehouse', price: '₹2,00,000+', period: 'custom', features: ['Full Data Warehouse Design', 'Azure ETL Data Pipelines', 'Embedded App Analytics', 'Dedicated BI Consultant', '12 Months SLA Support'], highlighted: false },
    ],
    faqs: [
      { q: 'Can Power BI connect to our internal databases?', a: 'Yes! Power BI seamlessly connects to SQL Server, PostgreSQL, MySQL, SAP, Oracle, Excel, Google Sheets, and custom REST APIs.' },
    ],
    stats: [
      { value: '300+', label: 'Dashboards Deployed' },
      { value: '50+', label: 'Data Sources Connected' },
      { value: '60%', label: 'Faster Decision Speed' },
      { value: '100%', label: 'Data Accuracy SLA' },
    ],
  },
  'uiux': {
    serviceKey: 'uiux',
    title: 'UI/UX Design & Product Strategy',
    tagline: 'Human-centered UI/UX design, interactive prototypes, design systems, and conversion-focused digital experiences.',
    heroGradient: 'linear-gradient(135deg, #fff7f6 0%, #fef2f2 40%, #f8edf5 75%, #fff5f5 100%)',
    accentColor: '#9d0d12',
    icon: <Sparkles size={28} />,
    overview:
      'Great products start with exceptional design. Our UI/UX design team creates sleek, human-centered interfaces backed by deep user research, wireframing, component-driven Figma design systems, and fluid micro-interactions that captivate users.',
    features: [
      { title: 'User Research & Personas', desc: 'User interviews, competitive analysis, and customer journey mapping.' },
      { title: 'Wireframing & Prototyping', desc: 'Clickable Figma prototypes to test usability before code is written.' },
      { title: 'Design Systems & UI Kits', desc: 'Scalable design tokens, typography, and reusable component libraries.' },
      { title: 'Responsive Web & Mobile UI', desc: 'Pixel-perfect UI layouts built for desktop, tablet, and mobile.' },
      { title: 'Micro-Interactions & Motion', desc: 'Engaging UI animations and state transitions using Framer & Lottie.' },
      { title: 'Usability Testing & Audit', desc: 'Heatmap analysis, user testing feedback, and UX conversion audits.' },
    ],
    technologies: ['Figma', 'Adobe XD', 'Principle', 'After Effects', 'Lottie', 'Maze', 'Hotjar', 'Miro'],
    process: [
      { step: '01', title: 'Research & User Discovery', desc: 'Uncovering user needs, pain points, and business requirements.' },
      { step: '02', title: 'Information Architecture', desc: 'Crafting user flows, wireframes, and sitemap structures.' },
      { step: '03', title: 'Figma UI Design', desc: 'Applying brand identity, color systems, and high-fidelity UI screens.' },
      { step: '04', title: 'Interactive Prototype', desc: 'Building clickable prototypes for stakeholder and user testing.' },
      { step: '05', title: 'Developer Handoff', desc: 'Providing complete Figma design specs, assets, and design system tokens.' },
    ],
    pricing: [
      { plan: 'UI Essentials', price: '₹20,000', period: 'one-time', features: ['Up to 10 Screen Designs', 'Wireframes & UI Specs', 'Mobile or Web Responsive', 'Figma Source Files', '1 Revision Round'], highlighted: false },
      { plan: 'Pro Product Design', price: '₹60,000', period: 'one-time', features: ['Up to 30 Screen Designs', 'Figma Interactive Prototype', 'Complete Design System', 'Usability Testing Feedback', '3 Revision Rounds'], highlighted: true },
      { plan: 'Enterprise Design Partner', price: '₹1,50,000+', period: 'custom', features: ['Unlimited Product Screens', 'Full UX Conversion Audit', 'Micro-Interactions & Motion', 'Developer Handoff Support', 'Ongoing Design Support'], highlighted: false },
    ],
    faqs: [
      { q: 'What deliverables do I receive at the end of the UI/UX design project?', a: 'You receive full access to the original Figma file containing high-fidelity UI screens, interactive clickable prototypes, design system component library, and exported assets.' },
    ],
    stats: [
      { value: '120+', label: 'Products Designed' },
      { value: '+40%', label: 'Average UX Score Bump' },
      { value: '2000+', label: 'UI Screens Crafted' },
      { value: '98%', label: 'Client Approval Rate' },
    ],
  },
}

/* ═══════════════════════════════════════════════
   MAIN SERVICE DETAIL PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = servicesData[serviceId] || servicesData['web-dev']

  const [faqSearchQuery, setFaqSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

  if (!service) {
    return (
      <div className="sdp-not-found">
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/" className="sdp-back-btn">
          ← Back to Home
        </Link>
      </div>
    )
  }

  // Filter FAQs based on search query
  const filteredFaqs = service.faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase())
  )

  return (
    <PageTransition accentColor={service.accentColor}>
      {/* ── Navbar ── */}
      <Navbar />

      {/* ═══════════════════════════════════════════════
         1. HERO SECTION (BLACK & CRIMSON RED NEON)
         ═══════════════════════════════════════════════ */}
      <section className="sdp-hero" style={{ background: service.heroGradient }}>
        {/* Dynamic Background Canvas */}
        <HeroBackgroundOrbs accentColor={service.accentColor} />

        <div className="sdp-container sdp-hero-container">
          <motion.div
            className="sdp-hero-content"
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Enterprise Badge */}
            <motion.div className="sdp-hero-pill-badge" variants={heroChildVariants}>
              <span className="pulse-dot" style={{ background: service.accentColor }} />
              <span className="pill-text">
                ENTERPRISE ARCHITECTURE · CORE WEB VITALS 100/100 · 99.99% SLA
              </span>
            </motion.div>

            {/* Service Title */}
            <motion.h1 variants={heroChildVariants} className="sdp-hero-title">
              {service.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={heroChildVariants} className="sdp-hero-tagline">
              {service.tagline}
            </motion.p>

            {/* Live KPI Stats Bar */}
            <motion.div className="sdp-hero-kpi-bar" variants={heroChildVariants}>
              {service.stats.map((stat, i) => (
                <div key={i} className="kpi-item">
                  <span className="kpi-val" style={{ color: service.accentColor }}>
                    <AnimatedCounter value={stat.value} duration={1.8} />
                  </span>
                  <span className="kpi-lbl">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="sdp-hero-actions" variants={heroChildVariants}>
              <motion.a
                href="#estimator"
                className="sdp-btn-primary"
                style={{ backgroundColor: service.accentColor, color: '#ffffff' }}
                whileHover={{ scale: 1.05, boxShadow: `0 15px 35px ${service.accentColor}60` }}
                whileTap={{ scale: 0.95 }}
              >
                Estimate Project Cost <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#pricing"
                className="sdp-btn-outline"
                whileHover={{ scale: 1.04, background: 'rgba(26, 26, 46, 0.06)' }}
                whileTap={{ scale: 0.96 }}
              >
                View Plans & Pricing
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Right: Interactive Code IDE Sandbox */}
          <div className="sdp-hero-ide-container">
            <HeroCodePreview serviceKey={service.serviceKey} accentColor={service.accentColor} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         2. OVERVIEW & MISSION STATEMENT
         ═══════════════════════════════════════════════ */}
      <section className="sdp-overview-section">
        <div className="sdp-container">
          <motion.div
            className="sdp-overview-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="overview-badge" style={{ color: service.accentColor }}>
              <Award size={18} />
              <span>THE SHRI INFOTECH STANDARD</span>
            </div>
            <h2>Engineering Digital Superiority For High-Growth Brands</h2>
            <p>{service.overview}</p>

            <div className="sdp-overview-highlights">
              <div className="highlight-box">
                <ShieldCheck size={24} style={{ color: service.accentColor }} />
                <div>
                  <h4>Zero Vulnerabilities</h4>
                  <p>OWASP Top 10 security standards & SSL encryption.</p>
                </div>
              </div>
              <div className="highlight-box">
                <Zap size={24} style={{ color: service.accentColor }} />
                <div>
                  <h4>Sub-Second Latency</h4>
                  <p>Global Edge CDN routing & optimized bundles.</p>
                </div>
              </div>
              <div className="highlight-box">
                <CheckCircle size={24} style={{ color: service.accentColor }} />
                <div>
                  <h4>100% IP Ownership</h4>
                  <p>Full clean source code & repository transfer.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         3. KEY FEATURES & CAPABILITIES (3D MATRIX)
         ═══════════════════════════════════════════════ */}
      <section className="sdp-features-section">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-section-label" style={{ color: service.accentColor }}>
              CAPABILITIES & ARCHITECTURE
            </span>
            <h2>Enterprise-Grade Features Included</h2>
          </div>

          <motion.div
            className="sdp-features-grid"
            variants={featureContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {service.features.map((feature, idx) => (
              <FeatureCard3D
                key={idx}
                feature={feature}
                idx={idx}
                accentColor={service.accentColor}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         4. CASE STUDIES & LIVE WORK SHOWCASE
         ═══════════════════════════════════════════════ */}
      {/* {service.serviceKey === 'web-dev' && (
        <CaseStudiesShowcase accentColor={service.accentColor} />
      )} */}

      {/* ═══════════════════════════════════════════════
         5. INTERACTIVE PROJECT COST & TIMELINE ESTIMATOR
         ═══════════════════════════════════════════════ */}
     

      {/* ═══════════════════════════════════════════════
         6. TECH STACK MARQUEE & LOGO LOOP
         ═══════════════════════════════════════════════ */}
      <section className="sdp-tech-section">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-section-label" style={{ color: service.accentColor }}>
              TECH STACK & TOOLS
            </span>
            <h2>Powered By Modern Industry Standards</h2>
          </div>
        </div>

        <div className="sdp-logo-marquee-wrapper">
          <LogoLoop
            logos={service.technologies.map((tech) => ({
              node: getTechLogoNode(tech),
              title: tech,
            }))}
            speed={60}
            direction="left"
            logoHeight={44}
            gap={28}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Technologies used"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         7. 5-STEP AGILE DELIVERY PROCESS
         ═══════════════════════════════════════════════ */}
      <section className="sdp-process-section">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-section-label" style={{ color: service.accentColor }}>
              AGILE METHODOLOGY
            </span>
            <h2>How We Deliver Your Project On Time</h2>
          </div>

          <div className="sdp-process-timeline-v2">
            {service.process.map((item, idx) => (
              <motion.div
                key={idx}
                className="sdp-process-step-v2"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="step-num-badge" style={{ background: service.accentColor, color: '#ffffff' }}>
                  {item.step}
                </div>
                <div className="step-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         8. COMPARISON MATRIX (SHRI INFOTECH VS OTHERS)
         ═══════════════════════════════════════════════ */}

      {/* ═══════════════════════════════════════════════
         9. CLIENT TESTIMONIALS & REVIEWS
         ═══════════════════════════════════════════════ */}
      <ClientTestimonialsSection accentColor={service.accentColor} />

      {/* ═══════════════════════════════════════════════
         10. PLANS & PRICING
         ═══════════════════════════════════════════════ */}
      {/* <section className="sdp-pricing-section" id="pricing">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-section-label" style={{ color: service.accentColor }}>
              TRANSPARENT PRICING
            </span>
            <h2>Select Your Growth Plan</h2>
            <p className="sdp-pricing-sub">No hidden fees. Full source code & IP ownership included.</p>
          </div>

          <div className="sdp-pricing-grid-v2">
            {service.pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`sdp-pricing-card-v2 ${plan.highlighted ? 'highlighted' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                style={plan.highlighted ? { borderColor: service.accentColor } : {}}
              >
                {plan.highlighted && (
                  <div className="popular-badge" style={{ background: service.accentColor, color: '#ffffff' }}>
                    MOST POPULAR
                  </div>
                )}
                <h3>{plan.plan}</h3>
                <div className="pricing-amount-box">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan-features-list">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={15} style={{ color: service.accentColor }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/#contact"
                  className="plan-cta-btn"
                  style={
                    plan.highlighted
                      ? { background: service.accentColor, color: '#ffffff' }
                      : { borderColor: service.accentColor, color: service.accentColor }
                  }
                >
                  Choose {plan.plan} Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════════════
         11. FREQUENTLY ASKED QUESTIONS (WITH LIVE SEARCH)
         ═══════════════════════════════════════════════ */}
      <section className="sdp-faq-section">
        <div className="sdp-container">
          <div className="sdp-section-header">
            <span className="sdp-section-label" style={{ color: service.accentColor }}>
              FAQ & HELP
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          {/* Search bar for FAQs */}
          <div className="sdp-faq-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search questions (e.g. speed, pricing, launch time)..."
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
            />
          </div>

          <div className="sdp-faq-list-v2">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <FAQItemWithSearch
                  key={idx}
                  faq={faq}
                  idx={idx}
                  accentColor={service.accentColor}
                />
              ))
            ) : (
              <p className="no-faq-msg">No questions matched your search query.</p>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         12. HIGH-CONVERTING CYBER CTA BANNER
         ═══════════════════════════════════════════════ */}
      {/* <section className="sdp-cyber-cta">
        <div className="sdp-container">
          <motion.div
            className="sdp-cyber-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="cta-badge">
              ⚡ START YOUR DIGITAL TRANSFORMATION
            </span>
            <h2>Ready To Build Your Next-Gen {service.title}?</h2>
            <p>
              Partner with Shri InfoTech today and get an enterprise-grade web application built for speed,
              scale, and maximum ROI.
            </p>

            <div className="cta-actions-row">
              <Link
                to="/#contact"
                className="sdp-btn-primary"
                style={{ backgroundColor: '#ffffff', color: '#9d0d12' }}
              >
                Schedule Free Technical Strategy Call <ArrowRight size={16} />
              </Link>
              <a href="tel:+916200157201" className="sdp-btn-outline" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                <Phone size={15} /> Call +91 62001 57201
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ── Footer ── */}
      <Footer />

      <ScrollToTop />
    </PageTransition>
  )
}
