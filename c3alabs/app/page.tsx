'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/hero/Hero';
import SectionLabel from '@/components/sections/SectionLabel';
import SectionDivider from '@/components/sections/SectionDivider';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import ProductCard from '@/components/cards/ProductCard';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import { containerVariant } from '@/lib/motion';
import { pageTransition } from '@/lib/motion';
import { PRODUCTS } from '@/lib/constants';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      {/* === HERO === */}
      <Hero />

      {/* P3 — Section break: gradient-fade 1px line signals chapter shift */}
      <hr className="section-break" />

      {/* === INTRO STATEMENT === */}
      <section className={styles.introSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Our Mission</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <blockquote className={styles.introStatement}>
              Building intelligent systems that accelerate innovation across every&nbsp;industry.
            </blockquote>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.introSupporting}>
              We believe the most consequential advances of the next century will emerge from 
              foundational AI infrastructure. We&rsquo;re building that&nbsp;foundation.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === WHAT WE DO === */}
      <section className={styles.whatWeDoSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>How we build</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h2 className={styles.sectionHeadline}>
              We find the gap. We build the company. We scale the infrastructure.
            </h2>
          </RevealHeadline>

          <motion.div className={styles.threeCol} variants={containerVariant}>
            <RevealBody>
              <div className={styles.col}>
                <span className={styles.colNumber}>01</span>
                <h3 className={styles.colTitle}>Find the gap</h3>
                <p className={styles.colBody}>
                  We identify markets where AI can own entire workflows — not assist with them. 
                  The test is not whether AI can help. It is whether AI can finish. We only build in markets where finishing is&nbsp;possible.
                </p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.col}>
                <span className={styles.colNumber}>02</span>
                <h3 className={styles.colTitle}>Build the company</h3>
                <p className={styles.colBody}>
                  Each company we build operates independently — separate brand, separate team, separate market. 
                  We don&rsquo;t build features inside C3alabs. We build companies that stand on their&nbsp;own.
                </p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.col}>
                <span className={styles.colNumber}>03</span>
                <h3 className={styles.colTitle}>Scale the core</h3>
                <p className={styles.colBody}>
                  Every company we own runs on the same execution infrastructure. What compounds beneath the surface 
                  is what gives C3alabs an advantage that grows over time — and that no competitor can replicate by watching from the&nbsp;outside.
                </p>
              </div>
            </RevealBody>
          </motion.div>
        </RevealWrapper>
        <SectionDivider />
      </section>

      {/* === INFRASTRUCTURE DEEP DIVE === */}
      <section className={styles.infrastructureSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>What powers everything</SectionLabel>
          </RevealBody>

          <RevealBody>
             <div className={styles.infraIsland}>
                <h3 className={styles.infraHeadline}>
                  We aren&rsquo;t training models. We&rsquo;re building the layer that makes models actually&nbsp;work.
                </h3>
                
                <div className={styles.infraGrid}>
                  <div className={styles.infraItem}>
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
                    <span className={styles.infraTitle}>Persistent Context</span>
                    <p className={styles.infraDesc}>Knows what was executed, what was learned, and what comes next. No restarting. No re-briefing. The system carries the full history of your work.</p>
                  </div>
                  <div className={styles.infraItem}>
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
                    <span className={styles.infraTitle}>Universal Navigation</span>
                    <p className={styles.infraDesc}>If a human can use an interface, the system can operate it. No API required. The execution engine works across tools the same way a person would.</p>
                  </div>
                  <div className={styles.infraItem}>
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
                    <span className={styles.infraTitle}>Multi-step Orchestration</span>
                    <p className={styles.infraDesc}>Complex workflows broken into sequenced operations, each one completed before the next begins. Not suggested. Executed.</p>
                  </div>
                  <div className={styles.infraItem}>
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} variant="white" />
                    <span className={styles.infraTitle}>Self-Correcting Reliability</span>
                    <p className={styles.infraDesc}>When something fails, the system detects it, corrects it, and verifies the outcome before surfacing results. You only see finished work.</p>
                  </div>
                </div>
             </div>
          </RevealBody>

        </RevealWrapper>
      </section>

      {/* === STATS STRIP === */}
      <section className={styles.statsSection}>
        <RevealWrapper className={styles.container}>
          <motion.div className={styles.statsStrip} variants={containerVariant}>
            <RevealBody>
              <div className={styles.statBlock}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>AI Platforms</span>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.statBlock}>
                <span className={styles.statNumber}>&infin;</span>
                <span className={styles.statLabel}>Ambition</span>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.statBlock}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Long-term Vision</span>
              </div>
            </RevealBody>
          </motion.div>
        </RevealWrapper>
      </section>

      {/* === COMPANIES PREVIEW === */}
      <section className={styles.companiesSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Our Companies</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h2 className={styles.sectionHeadline}>
              Two platforms. One&nbsp;vision.
            </h2>
          </RevealHeadline>

          <motion.div className={styles.twoCardGrid} variants={containerVariant}>
            <ProductCard
              name="KARAX"
              domain={PRODUCTS.karax.domain}
              category="Consumer AI Platform"
              description="A natively autonomous assistant designed to execute complex, multi-step workflows for individuals. No prompt engineering required."
              learnMoreHref="/products"
            />
            <ProductCard
              name="SARVAX"
              domain={PRODUCTS.sarvax.domain}
              category="Enterprise AI Platform"
              description="Production-grade AI infrastructure allowing organizations to build, deploy, and scale autonomous agents with absolute security."
              learnMoreHref="/products"
            />
          </motion.div>

          <RevealCTABlock className={styles.centerCTA}>
            <ButtonSecondary href="/products">See both companies →</ButtonSecondary>
          </RevealCTABlock>
        </RevealWrapper>
      </section>


      {/* === JOIN THE TEAM TEASER === */}
      <section className={styles.joinSection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.joinGrid}>
            <div className={styles.joinContent}>
              <RevealBody>
                <SectionLabel>Join the team</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.joinHeadline}>
                  We&rsquo;re looking for<br />the exceptional.
                </h2>
              </RevealHeadline>
            </div>
            <div className={styles.joinBody}>
              <RevealBody>
                <p className={styles.joinText}>
                  We hire researchers, engineers, and builders who think deeply and work with extraordinary conviction. 
                  If you want to work on problems that matter at the frontier of AI, we want to hear from you.
                </p>
              </RevealBody>
              <RevealCTABlock>
                <ButtonPrimary href="/careers">View open roles</ButtonPrimary>
              </RevealCTABlock>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* P3 — Final chapter break before CTA */}
      <hr className="section-break" />

      {/* === CLOSING CTA === */}
      <section className={`${styles.closingSection} section-atmosphere`}>
        <RevealWrapper className={`${styles.container} ${styles.centerText}`}>
          <RevealHeadline>
            <h2 className={styles.closingHeadline}>
              If this is the kind of company you want to be part of.
            </h2>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.closingSub}>
              For investors who think in decades, builders who think in systems, and press who cover what&rsquo;s actually&nbsp;next.
            </p>
          </RevealBody>
          <RevealCTABlock className={styles.closingCTARow}>
            <ButtonPrimary href="/thesis">Read the thesis</ButtonPrimary>
            <ButtonSecondary href="/contact">Get in touch</ButtonSecondary>
          </RevealCTABlock>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
