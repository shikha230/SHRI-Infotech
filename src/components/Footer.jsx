import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import { FooterBackground } from './BackgroundDecorations'
import ParticlesBackground from './ParticlesBackground'
import logo from '../assets/white-logo.png'

export default function Footer() {
  const location = useLocation()

  const getNavLink = (hash) => {
    if (location.pathname === '/') {
      return hash
    }
    return `/${hash}`
  }

  return (
    <footer className="site-footer relative">
      <FooterBackground />
      <ParticlesBackground
        particleCount={45}
        speed={0.4}
        maxRadius={2}
        particleColors={['#ffffff', '#ff4d4d', '#38bdf8', '#c084fc']}
        connectLines={true}
        lineColor="rgba(255, 255, 255, 0.08)"
      />
      <div className="footer-container relative z-10">
        <ScrollReveal variant="fade-up">
          <div className="footer-grid">
            {/* Brand / Logo Column */}
            <div className="footer-brand-col">
              <Link 
    to="/" 
    className="footer-logo no-underline inline-block" 
    style={{ background: 'transparent', backgroundColor: 'transparent' }}
  >
    <img 
      src={logo} 
      alt="Shri InfoTech" 
      className="footer-logo-img" 
      style={{ 
        background: 'transparent', 
        backgroundColor: 'transparent',
        display: 'block', // extra space hatane ke liye
        border: 'none'    // border hatane ke liye
      }} 
    />
  </Link>
              <p className="footer-desc">
                Empowering organizations with innovative IT solutions that streamline operations and drive growth.
              </p>
              <div className="footer-socials">
                {['facebook', 'linkedin', 'twitter', 'instagram'].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className="social-icon"
                    whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 8 : -8 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {idx === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links">
                <a href={getNavLink("#services")}>Services</a>
                <a href={getNavLink("#contact")}>Contact</a>
                <a href={getNavLink("#industry")}>Solutions</a>
              </div>
            </div>

            {/* Links Column */}
            <div className="footer-col">
              <h4>Links</h4>
              <div className="footer-links">
                <Link to="/service/web-dev">Web Dev</Link>
                <Link to="/service/app-dev">App Dev</Link>
                <Link to="/service/wordpress">WordPress</Link>
                <Link to="/service/shopify">Shopify</Link>
                <Link to="/service/power-bi">Power BI</Link>
                <Link to="/service/uiux">UI/UX Design</Link>
              </div>
            </div>

            {/* Support Column */}
            <div className="footer-col">
              <h4>Support</h4>
              <div className="footer-links">
                <a href={getNavLink("#contact")}>Help Center</a>
                <a href={getNavLink("#contact")}>Feedback</a>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="footer-col">
              <h4>Contact us</h4>
              <div className="footer-contact-details">
                <div className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+916200157201">+91 62001 57201</a>
                </div>

                <div className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:shriinfotech15@gmail.com">shriinfotech15@gmail.com</a>
                </div>

                <div className="footer-contact-item align-start">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>1st floor of tek star park pashhupjya plaza 2nd floor office no:1, Vijay nagar, Patna</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="footer-divider-line"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Shri Infotech. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
            <span>|</span>
            <a href="#">Legal</a>
            <span>|</span>
            <a href="#">Site map</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
