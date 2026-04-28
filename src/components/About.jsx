import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={itemVariants} className="section-title">About Me</motion.h2>
          <motion.div variants={itemVariants} className="section-line"></motion.div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.p variants={itemVariants}>
              Hello! I'm <span className="text-highlight">Chamidu Pethum</span>,  a passionate Software Engineering undergraduate who loves building things that live on the internet. My journey into development started with curiosity about how web apps work and that curiosity quickly turned into a love for writing clean, functional code.
            </motion.p>
            <motion.p variants={itemVariants}>
              I work across the full stack comfortable with React, Node.js, MongoDB, Python, and PostgreSQL and I'm always looking to expand my toolkit. I enjoy collaborative teamwork, problem-solving under pressure, and shipping products that make a real difference.
            </motion.p>
            <motion.p variants={itemVariants}>
              I'm currently seeking an internship opportunity where I can keep learning, growing, and building things I'm proud of.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="photo-glow-ring">
              <div className="photo-inner">
                <img src="/Profile.jpg" alt="Chamidu Pethum" className="about-photo" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
