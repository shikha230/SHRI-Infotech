import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
// Reuses the existing testimonial styles (sdp-testimonials-section, sdp-testimonial-card, etc.)
import '../pages/ServiceDetailPage.css'

/* ── Single Review Card with Expandable Text for Long Reviews ── */
function TestimonialCard({ rev, accentColor }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLong = rev.quote.length > 160

  const truncateText = (text, limit = 160) => {
    if (text.length <= limit) return text
    const lastSpace = text.lastIndexOf(' ', limit)
    return (lastSpace > 0 ? text.slice(0, lastSpace) : text.slice(0, limit)).trim()
  }

  const quoteText = isLong && !isExpanded
    ? `${truncateText(rev.quote, 160)}...`
    : rev.quote

  return (
    <motion.div
      className="sdp-testimonial-card h-full flex flex-col justify-between"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      style={{ minHeight: '290px' }}
    >
      <div>
        <div className="testi-top">
          <div className="testi-stars">
            {[...Array(rev.rating || 5)].map((_, i) => (
              <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
        </div>
        <p className="testi-quote" style={{ marginBottom: isLong ? '16px' : '24px' }}>
          "{quoteText}"
          {isLong && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(!isExpanded)
              }}
              className="read-more-btn ml-1.5 font-semibold text-xs transition-opacity hover:opacity-80 cursor-pointer inline-block border-0 bg-transparent p-0 underline"
              style={{ color: accentColor }}
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </p>
      </div>

      <div className="testi-author">
        <div
          className="author-avatar"
          style={{ background: accentColor, color: '#ffffff' }}
        >
          {rev.name.charAt(0)}
        </div>
        <div className="author-info">
          <span className="author-name">
            {rev.name}
            {rev.country && (
              <span style={{ fontWeight: 400, color: '#888888', fontSize: '0.85em', marginLeft: '6px' }}>
                | {rev.country}
              </span>
            )}
          </span>
          <span className="author-role">{rev.role}</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Client Testimonials Showcase (shared: used on Home + previously on Service pages) ── */
export default function Testimonials({ accentColor = '#9d0d12' }) {
  const [isPaused, setIsPaused] = useState(false)

  const reviews = [
    {
      quote:
        'Shri InfoTech completely transformed our web application. Our loading speed dropped from 4.2 seconds to 280ms, and our mobile conversion rate jumped by 380%!',
      name: 'Rajesh Sharma',
      country: 'India',
      role: 'CTO, FinTech Global Pay',
      rating: 5,
    },
    {
      quote:
        'The engineering quality, UI/UX polish, and adherence to timelines were Silicon Valley grade. Their team built our enterprise SaaS platform flawlessly.',
      name: 'Ananya Verma',
      country: 'India',
      role: 'VP of Product, OmniScale Global',
      rating: 5,
    },
    {
      quote:
        'Working with Shri InfoTech felt like having an elite dedicated engineering team. Responsive, highly skilled, and extremely professional throughout.',
      name: 'Vikramaditya Roy',
      country: 'India',
      role: 'Founder & CEO, CloudNest Tech',
      rating: 5,
    },
    {
      quote:
        'Ritesh was a pleasure to work with. He was professional, very responsive and communicated clearly throughout the project. He understood the requirements well, was proactive in adressing questions and feedback and delivered the work within the agreed timeline and budget. I really appreciate his attention in detail and commitment to delivering a quality outcome. I would be happy to work with Ritesh again and recommend him to others looking for a reliable professional.',
      name: 'Prashant',
      country: 'Netherland',
      role: 'Informational Site with Product Listings',
      rating: 5,
    },
    {
      quote:
        'Extremely professional and did the entire dashboard in a very a quick timeline. I 100% reccomend.',
      name: 'Harshita',
      country: 'India',
      role: 'Full-stack Dev for Fitness Dashboard',
      rating: 5,
    },
    {
      quote:
        'Really very genuine working person with perfect Recommendation for any project with right guidancelike for budget, Area, suitable things. Their expertise is very good for my project.',
      name: 'Brajesh',
      country: 'India',
      role: 'Corporate Brand Awareness Website',
      rating: 5,
    },
    {
      quote:
        'Ritesh understood the requirements quickly, communicated clearly, and delivered the project professionally. The quality of work was excellent, I’m very happy with the final result and would definitely recommend him for future projects.',
      name: 'Amit',
      country: 'India',
      role: 'Full-Stack Web Development',
      rating: 5,
    },
    {
      quote:
        'Ritesh delivered an excellent Power Apps and SharePoint solution that completely met our project requirements. He created clean and easy-to-use data-entry forms, set up automated reporting, and implemented smooth Power Automate workflows that integrated perfectly with our SharePoint environment. His communication was also excellent and clear, and he is technically very experienced, which ensured the project was completed smoothly and on time.',
      name: 'Gurpreet',
      country: 'India',
      role: 'Power App with SharePoint Integration',
      rating: 5,
    },
    {
      quote:
        'Excellent freelancer! They perfectly implemented the SharePoint approval workflow with configurable approvers and automated reminders using Power Automate, exactly as required. Very professional communication and high-quality work—everything works smoothly, and I would definitely hire them again.',
      name: 'Amol',
      country: 'India',
      role: 'SharePoint Approval Reminder Workflow',
      rating: 5,
    },
    {
      quote:
        'Very professional, on time delivery and most important top quality work delivered',
      name: 'Yashika',
      country: 'India',
      role: 'Part-Time Corporate Design Creator',
      rating: 5,
    },
    {
      quote:
        'Best work from Ritesh, ready to offer him nest project.',
      name: 'Nilesh',
      country: 'India',
      role: 'Premium UI/UX Redesign & Bootstrap 5 Front-End',
      rating: 5,
    },
    {
      quote:
        "Ritesh did an outstanding job on my REST API project. He delivered a clean, scalable, and production-ready solution exactly as promised, with excellent code quality and on-time delivery. Communication was smooth throughout the project, and the final work exceeded my expectations. If you're looking for a reliable full-stack developer who delivers quality work, I highly recommend hiring Ritesh.",
      name: 'Ritik',
      country: 'India',
      role: 'develop a production-ready REST API',
      rating: 5,
    },
    {
      quote:
        'Great quality of work and really helpful. It was great working with them.',
      name: 'Shriya',
      country: 'India',
      role: 'Trekking Management Web Application',
      rating: 5,
    },
    {
      quote:
        'Mr Ritesh has completed my project of the online web store for herbal supplement within time and quality of his work was excellent.',
      name: 'Sanjay',
      country: 'India',
      role: 'website development for online store of herbal supplements',
      rating: 5,
    },
  ]

  // Duplicate 3 times for seamless, mathematically continuous infinite scroll
  const repeatedReviews = [...reviews, ...reviews, ...reviews]

  return (
    <section className="sdp-testimonials-section overflow-hidden" id="reviews">
      <div className="sdp-container">
        <div className="sdp-section-header">
          <span className="sdp-section-label" style={{ color: accentColor }}>
            CLIENT PROOF & REVIEWS
          </span>
          <h2>Trusted By High-Growth Tech Pioneers</h2>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Reviews Track (Pauses on Hover) */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 w-max animate-carousel-track"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: '65s',
            willChange: 'transform',
          }}
        >
          {repeatedReviews.map((rev, idx) => (
            <div
              key={`${rev.name}-${idx}`}
              className="w-[320px] sm:w-[360px] md:w-[420px] flex-none py-2"
            >
              <TestimonialCard rev={rev} accentColor={accentColor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
