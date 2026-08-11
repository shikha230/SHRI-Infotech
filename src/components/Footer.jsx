import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import { FooterBackground } from './BackgroundDecorations'
import ParticlesBackground from './ParticlesBackground'
import logo from '../assets/logo.jpeg'
import whiteLogo from '../assets/white-logo.png'

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
                className="footer-logo no-underline inline-block hover:opacity-95 transition-opacity"
              >
                <img 
                  src={whiteLogo} 
                  alt="Shri InfoTech" 
                  className="h-20 w-auto object-contain block border-0" 
                />
              </Link>
              <p className="footer-desc">
                Empowering organizations with innovative IT solutions that streamline operations and drive growth.
              </p>
              <div className="footer-socials">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/company/shri-infotech-it-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="18" fill="#0A66C2" />
                    <g transform="translate(6, 6)">
                      <path
                        fill="#FFFFFF"
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                      />
                    </g>
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/official_shriinfotech?igsh=MTk4eGhkcDN6YXBrcA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 36 36">
                    <defs>
                      <radialGradient id="instaGradFooterComp" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="90%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <rect width="36" height="36" rx="18" fill="url(#instaGradFooterComp)" />
                    <rect x="9.5" y="9.5" width="17" height="17" rx="4.5" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="18" cy="18" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="22.3" cy="13.7" r="1.1" fill="#FFFFFF" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Company Column */}
            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links">
                <a href={getNavLink("#services")}>Services</a>
                <a href={getNavLink("#contact")}>Contact</a>
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
                <a href={getNavLink("#reviews")}>Review</a>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="footer-col footer-contact-col">
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
                  <span>1st floor of tek star park, Pashhupjya plaza 2nd floor, Office No. 1, Vijay nagar, Patna</span>
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
