import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── EmailJS credentials loaded from .env ──────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ───────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container" ref={sectionRef}>

        {/* ── Header ── */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="contact-pretitle">04. What's Next?</p>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            I'm currently open to new internship and entry level opportunities. Whether you have a role in mind, a project to collaborate on, or just want to connect my inbox is always open. I'll do my best to get back to you!
          </p>
        </motion.div>

        {/* ── Form card ── */}
        <motion.div
          className="contact-card"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>

            {/* Name */}
            <motion.div className="form-group" variants={itemVariants}>
              <label className="form-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                className="form-input"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </motion.div>

            {/* Email */}
            <motion.div className="form-group" variants={itemVariants}>
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className="form-input"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </motion.div>

            {/* Message */}
            <motion.div className="form-group" variants={itemVariants}>
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="form-input form-textarea"
                name="message"
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={itemVariants}>
              <button
                id="contact-submit-btn"
                type="submit"
                className={`form-submit${status === 'sending' ? ' sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>

            {/* Feedback messages */}
            {status === 'success' && (
              <motion.p
                className="form-feedback success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="form-feedback error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </motion.div>

      </div>

      <footer className="footer">
        {/* Social icons row */}
        <div className="footer-socials">
          {/* GitHub */}
          <a href="https://github.com/bcpethum" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/bcpethum" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:bcpethum@gmail.com" aria-label="Email" className="footer-social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; 2026 Chamidu Pethum. <span className="footer-accent">All</span> rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
