'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { pageTransition, containerVariant } from '@/lib/motion';
import styles from './page.module.css';

const EXPERTISE = [
  {
    area: 'Technical Infrastructure',
    focus: 'Model Deployment & Scale',
    description: 'Deep technical background in machine learning infrastructure, distributed systems, and model deployment. The engineering core architects the technology platforms enabling both KARAX and SARVAX to operate globally.',
  },
  {
    area: 'Product Strategy',
    focus: 'Consumer & Enterprise Experience',
    description: 'Product leadership with experience shipping AI products to millions of users. Translating complex foundational capabilities into elegant, intuitive experiences that drive sustained adoption.',
  },
  {
    area: 'Engineering Velocity',
    focus: 'Technical Execution',
    description: 'Seasoned engineering leaders who have built and scaled organizations at high-growth AI companies. Overseeing all technical execution across the portfolio with an uncompromising focus on quality.',
  },
  {
    area: 'Fundamental Research',
    focus: 'Architecture & Alignment',
    description: 'Led by PhDs in Machine Learning with prior experience at leading AI labs. Driving the fundamental research agenda at C3alabs, focusing on model efficiency, alignment, and novel architectures.',
  },
  {
    area: 'Operations & Scaling',
    focus: 'Growth Infrastructure',
    description: 'Operations expertise with backgrounds in scaling technology companies from early stage through series funding. Managing cross-portfolio operations and the organizational systems that allow C3alabs to move fast.',
  },
];

export default function TeamPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>The Team</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>
              The people<br />building C3alabs.
            </h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>
              A small group of researchers, engineers, and operators who have spent their careers at the intersection of AI research and product development.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === FOUNDER SPOTLIGHT === */}
      <section className={styles.founderSection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.founderGrid}>
            <div className={styles.founderContent}>
              <RevealBody>
                <SectionLabel>Founder</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.founderName}>Sai Casula</h2>
              </RevealHeadline>
              <RevealBody>
                <span className={styles.founderRole}>Founder &amp; CEO, C3alabs</span>
              </RevealBody>
              <RevealBody>
                <p className={styles.founderBio}>
                  Visionary technologist with deep expertise in AI systems and platform architecture. 
                  Previously led AI initiatives across enterprise and consumer products. 
                  Drives the long-term vision and strategy of the C3alabs holding company and its entire portfolio of applications.
                </p>
              </RevealBody>
              <RevealBody>
                <blockquote className={styles.founderQuote}>
                  &ldquo;A new era of intelligence requires a new foundation. We are not building tools to assist with work. We are building the infrastructure that executes&nbsp;it.&rdquo;
                </blockquote>
              </RevealBody>
            </div>

            <div className={styles.founderVisual}>
              <div className={styles.founderImageWrapper}>
                <Image 
                  src="/sai-casula.png" 
                  alt="Sai Casula - Founder & CEO" 
                  width={400} 
                  height={400} 
                  className={styles.founderImage}
                  priority 
                />
              </div>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* === LEADERSHIP & EXPERTISE === */}
      <section className={styles.expertiseSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Leadership Pedigree</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h2 className={styles.expertiseHeadline}>
              Built by operators who<br />have done it before.
            </h2>
          </RevealHeadline>

          <motion.div className={styles.expertiseGrid} variants={containerVariant}>
            {EXPERTISE.map((item) => (
              <RevealBody key={item.area}>
                <div className={styles.expertiseCard}>
                  <div className={styles.expertiseHeader}>
                    <h3 className={styles.expertiseArea}>{item.area}</h3>
                    <span className={styles.expertiseFocus}>{item.focus}</span>
                  </div>
                  <p className={styles.expertiseDesc}>{item.description}</p>
                </div>
              </RevealBody>
            ))}
          </motion.div>
        </RevealWrapper>
      </section>

      {/* === CTA SECTION === */}
      <section className={styles.ctaSection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaLabel}>
              <SectionLabel>Join the Team</SectionLabel>
            </div>
            <RevealHeadline>
              <h3 className={styles.ctaHeadline}>We&rsquo;re always looking for<br />exceptional people.</h3>
            </RevealHeadline>
            <RevealBody>
              <p className={styles.ctaSub}>
                If you&rsquo;re a researcher, engineer, or operator who wants to work on foundational problems in AI, we want to talk to you.
              </p>
            </RevealBody>
            <RevealCTABlock className={styles.ctaButtonRow}>
              <ButtonPrimary href="/careers">View Open Roles</ButtonPrimary>
            </RevealCTABlock>
          </div>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
