import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  /* ── Scroll-spy via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(n => n.href.slice(1)); // strip '#'

    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          // Trigger when section occupies the middle band of the viewport
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  /* ── Navbar shrink on scroll ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-content">

        <div className="nav-logo">
          <span>{scrolled ? 'BCP' : 'BCPETHUM'}</span>
        </div>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={id}>
                <a
                  href={href}
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => setActiveSection(id)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="nav-btn"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/Bcpethum_CV.pdf';
            link.download = 'Bcpethum_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Resume
        </button>

      </div>
    </motion.nav>
  );
};

export default Navbar;
