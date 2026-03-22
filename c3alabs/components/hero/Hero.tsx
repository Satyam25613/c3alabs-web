'use client';

import { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import GhostLink from '@/components/buttons/GhostLink';
import { heroContainer, heroHeadline, heroSub, heroCTA } from '@/lib/motion';
import styles from './Hero.module.css';

// Code-split the 3D canvas — never blocks SSR
const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => <div className={styles.canvasPlaceholder} />,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll position of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Cool parallax & scroll fading effects (Antigravity style)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>

      {/* 3D canvas — RIGHT side/BACKGROUND */}
      <div className={styles.coreContainer}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* White radial glow behind the 3D object */}
      <div className={styles.atmosphericGlow} />

      {/* Typography — Parallax scrolling mapped to user scroll */}
      <motion.div
        className={styles.heroContent}
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
      >
        <motion.span
          variants={heroSub}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
            display: 'block',
            marginBottom: 'var(--space-8)',
          }}
        >
          Est. 2024 · AI Infrastructure
        </motion.span>
        <div className={styles.headlineCluster}>
          <motion.h1 variants={heroContainer} initial="hidden" animate="visible">
            <motion.span variants={heroHeadline} className={styles.headlineLine}>Building the Next Generation</motion.span>
            <motion.span variants={heroHeadline} className={styles.headlineLine}>
              of <em>AI Platforms</em>
            </motion.span>
          </motion.h1>
        </div>

        {/* Sub-content: paragraph + CTAs */}
        <div className={styles.subBlock}>
          <motion.p className={styles.sub} variants={heroSub}>
            C3alabs is an AI holding company. We develop foundational AI technologies 
            powering consumer and enterprise products at global scale.
          </motion.p>



          <motion.div className={styles.ctaActions} variants={heroCTA}>
            <ButtonPrimary href="/products">Explore Our Companies</ButtonPrimary>
            <GhostLink href="/careers">Careers →</GhostLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
