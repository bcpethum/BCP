import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    badge: 'AI · Group Project',
    title: 'ConfidFace',
    subtitle: 'AI-Based Facial Emotion Analysis for Interview Feedback',
    description:
      'AI-powered web application that analyzes facial expressions in real-time to evaluate user confidence during mock interview sessions. Features a confidence scoring engine with personalized real-time and post-session feedback.',
    tech: ['React.js', 'MongoDB', 'WebRTC', 'Akool API', 'Tailwind CSS'],
    github: 'https://github.com/ConfidFace/ConfidFace.git',
    demo: '#',
    year: '2025',
    status: 'Completed',
    image: '/images/ConfidFace.png',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
    accentColor: '#818cf8',
  },
  {
    badge: 'Full-Stack · Group Project',
    title: 'SaveBite',
    subtitle: 'Sustainable Food Redistribution Platform',
    description:
      'Full-stack web platform connecting local food businesses with customers to sell surplus near-expiry food items at discounted prices, reducing food waste. Implements secure role-based authentication with JWT.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'RESTful APIs', 'JWT'],
    github: 'https://github.com/AhmedHaseen/SE4106-Web-Project.git',
    demo: 'https://www.linkedin.com/posts/bcpethum_thrilled-to-share-our-2nd-year-2nd-semester-ugcPost-7366907184393125888-yLh3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEj5llwBwzfLhKXakaAiiCwRkOqi4X2ZDn4',
    year: '2025',
    status: 'Completed',
    image: '/images/SaveBites.png',
    gradient: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)',
    accentColor: '#4ade80',
  },
  {
    badge: 'AI · Individual Project',
    title: 'Health AI',
    subtitle: 'Real-Time AI Health Voice Assistant',
    description:
      'Real-time AI-powered health voice assistant that converts spoken user input into instant medical insights using speech recognition and AI processing. Built with secure authentication and cloud database integration.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'AssemblyAI', 'Clerk', 'Neon DB'],
    github: 'https://github.com/bcpethum/HealthAI.git',
    demo: '#',
    year: '2025–2026',
    status: 'Completed',
    image: '/images/HealthAi.png',
    gradient: 'linear-gradient(135deg, #0c1445 0%, #1e3a8a 50%, #1d4ed8 100%)',
    accentColor: '#60a5fa',
  },
  {
    badge: 'Community · Group Project',
    title: 'MyTurn',
    subtitle: 'Smart Fuel Queue Optimization System',
    description:
      'Web-based smart fuel queue management platform to reduce congestion and waiting time at fuel stations through digital tokening and scheduled bookings. Features real-time queue tracking with WebSockets.',
    tech: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'WebSockets'],
    github: 'https://github.com/TharukaThennakoon/MyTurn-frontend.git',
    demo: '#',
    year: '2026',
    status: 'Ongoing',
    image: '/images/MyTurn.png',
    gradient: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #c2410c 100%)',
    accentColor: '#fb923c',
  },
];

/* ── SVG icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="projects-section">
      <div className="section-container" ref={ref}>

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Some Things I've Built</h2>
          <div className="section-line" />
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 48 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* ── Preview banner ── */}
              <div className="project-banner" style={{ background: project.gradient }}>
                <span className="project-badge" style={{ color: project.accentColor, borderColor: project.accentColor }}>
                  {project.badge}
                </span>
                {/* Decorative glow blob */}
                <div className="banner-glow" style={{ background: project.accentColor }} />
                {/* Screenshot or fallback SVG */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="banner-screenshot"
                  />
                ) : (
                  <div className="banner-icon" style={{ color: project.accentColor }}>
                    <svg viewBox="0 0 80 60" fill="none">
                      <rect x="4" y="4" width="72" height="52" rx="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                      <circle cx="22" cy="28" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
                      <line x1="38" y1="18" x2="72" y2="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                      <line x1="38" y1="28" x2="66" y2="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                      <line x1="38" y1="38" x2="60" y2="38" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
                    </svg>
                  </div>
                )}
              </div>

              {/* ── Card body ── */}
              <div className="project-body">

                {/* Title row */}
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status === 'Ongoing' ? 'ongoing' : 'completed'}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-subtitle">{project.subtitle} · {project.year}</p>
                <p className="project-description">{project.description}</p>

                {/* Tech tags */}
                <div className="project-tech-tags">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="project-actions">
                  {project.demo && (
                    <a href={project.demo} className="btn-demo" target="_blank" rel="noreferrer" aria-label={`${project.title} demo`}>
                      <ExternalIcon />
                      Demo
                    </a>
                  )}
                  <a href={project.github} className="btn-code" target="_blank" rel="noreferrer" aria-label={`${project.title} code`}>
                    <GithubIcon />
                    Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
