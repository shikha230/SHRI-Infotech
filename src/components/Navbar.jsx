import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import BorderGlow from './BorderGlow'
import Magnet from './Magnet'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Helper to handle hash navigation from subpages vs homepage
  const getNavLink = (hash) => {
    if (location.pathname === '/') {
      return hash
    }
    return `/${hash}`
  }

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: getNavLink("#services") },
    { name: "Team", link: getNavLink("#choose-us") },
    { name: "Contact", link: getNavLink("#contact") },
  ]

  return (
    <header className="custom-navbar-header">
      <div className="custom-navbar-container">
        
        {/* Logo Area */}
        <div className="custom-logo-area">
          <div className="w-full h-full">
            <Link to="/" className="custom-logo-brand">
              <img src={logo} alt="SHRI InfoTech" className="custom-logo-img" />
            </Link>
          </div>
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
                {item.link.startsWith('/') && !item.link.includes('#') ? (
                  <Link to={item.link} className="custom-nav-link">
                    {item.name}
                  </Link>
                ) : (
                  <a href={item.link} className="custom-nav-link">
                    {item.name}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Project Button */}
          <a
            href={getNavLink("#projects")}
            className="navbar-projects-btn ml-auto inline-block px-7 py-2.5 rounded-full font-semibold text-[14.5px] no-underline leading-none shadow-sm cursor-pointer select-none"
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
      {item.link.startsWith('/') && !item.link.includes('#') ? (
        <Link to={item.link} onClick={() => setIsOpen(false)}>
          {item.name}
        </Link>
      ) : (
        <a href={item.link} onClick={() => setIsOpen(false)}>
          {item.name}
        </a>
      )}
    </li>
  ))}
</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
