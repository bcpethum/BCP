import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'TypeScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Tailwind CSS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'HTML5',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Linux',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const languages = [
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
];

// Triplicate for a seamless infinite loop
const langTrack = [...languages, ...languages, ...languages];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="skills-section">
      <div className="section-container" ref={ref}>

        {/* Header */}
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Technologies &amp; Frameworks</h2>
          <p className="section-subtitle">Tools and technologies I use to build amazing things.</p>
        </motion.div>

        {/* Grid */}
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.045, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.05 }}
            >
              <div className="skill-icon-wrap">
                <img src={skill.icon} alt={skill.name} className="skill-icon" loading="lazy" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Programming Languages Marquee ── */}
      <motion.div
        className="lang-strip"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="lang-strip-label">Programming Languages</p>

        <div className="lang-marquee-wrapper">
          <div className="lang-fade lang-fade-left" />
          <div className="lang-fade lang-fade-right" />

          <div className="lang-track">
            {langTrack.map((lang, i) => (
              <div className="lang-item" key={i}>
                <div className="lang-icon-wrap">
                  <img src={lang.icon} alt={lang.name} className="lang-icon" loading="lazy" />
                </div>
                <span className="lang-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Skills;
