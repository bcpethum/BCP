import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [menuOpen,       setMenuOpen]       = useState(false);

  /* ── Scroll-spy via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(n => n.href.slice(1));

    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
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

  /* ── Lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Bcpethum_CV.pdf';
    link.download = 'Bcpethum_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-content">

          <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <span>{scrolled ? 'BCP' : 'BCPETHUM'}</span>
          </a>

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

          <button className="nav-btn" onClick={handleResumeDownload}>
            Resume
          </button>

          {/* Hamburger toggle */}
          <button
            id="nav-hamburger-btn"
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

        </div>
      </motion.nav>

      {/* ── Mobile full-screen drawer ── */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <ul className="mobile-menu-links">
          {NAV_ITEMS.map(({ label, href }, i) => {
            const id = href.slice(1);
            return (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: menuOpen ? i * 0.06 : 0 }}
              >
                <a
                  href={href}
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <div className="mobile-menu-divider" />

        <motion.button
          className="mobile-menu-btn"
          onClick={handleResumeDownload}
          initial={{ opacity: 0, y: 20 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: menuOpen ? 0.35 : 0 }}
        >
          Download Resume
        </motion.button>
      </div>
    </>
  );
};

export default Navbar;
