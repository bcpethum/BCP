import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const roles = ['Software Engineer', 'Full Stack Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">

      {/* ── Animated Background ── */}
      <div className="hero-bg">
        {/* Soft aurora orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        {/* Dot grid overlay */}
        <div className="hero-grid"></div>

        {/* Floating rings */}
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>

        {/* Micro floating dots */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className={`dot dot-${i}`}></div>
        ))}

        {/* Shooting lines */}
        <div className="shoot shoot-1"></div>
        <div className="shoot shoot-2"></div>
      </div>

      {/* ── Content ── */}
      <div className="hero-content">

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="highlight">Chamidu Pethum</span>
        </motion.h1>

        <div className="hero-role">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="role-tag"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Building responsive, scalable web & mobile applications.<br />
          Specialized in <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. MERN Stack & <strong>Python</strong>.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="btn-primary">View Projects &rarr;</a>
          <button
            className="btn-secondary"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Bcpethum_CV.pdf';
              link.download = 'Bcpethum_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV &#x2935;
          </button>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="https://github.com/bcpethum" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href="https://linkedin.com/in/bcpethum" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="mailto:bcpethum@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="#about" className="scroll-chevron" aria-label="Scroll to About">&#8964;</a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
