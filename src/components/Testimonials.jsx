import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
// Reuses the existing testimonial styles (sdp-testimonials-section, sdp-testimonial-card, etc.)
import '../pages/ServiceDetailPage.css'

/* ── Client Testimonials Showcase (shared: used on Home + previously on Service pages) ── */
export default function Testimonials({ accentColor = '#9d0d12' }) {
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
