'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import { pageTransition, containerVariant } from '@/lib/motion';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>About C3alabs</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>
              Foundational AI<br />for a new era.
            </h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>
              C3alabs is a technology holding company building the infrastructure and products 
              that will define the next generation of artificial&nbsp;intelligence.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === COMPANY NARRATIVE === */}
      <section className={styles.narrativeSection}>
        <RevealWrapper className={styles.narrativeContainer}>
          <RevealBody>
            <SectionLabel>Mission</SectionLabel>
          </RevealBody>
          <RevealBody>
            <h3 className={styles.paragraph} style={{ fontSize: '1.25rem', color: 'var(--text-0)', marginBottom: '1rem' }}>
              We exist to build AI systems that genuinely elevate the human condition.
            </h3>
          </RevealBody>
          <RevealBody>
            <p className={styles.paragraph}>
              C3alabs was founded on a single conviction: the most consequential AI developments
              won&rsquo;t come from applications layered on top of existing systems &mdash; they&rsquo;ll come 
              from building the foundational layers correctly from the start.
            </p>
          </RevealBody>
          <RevealBody>
            <p className={styles.paragraph}>
              Through KARAX and SARVAX, we&rsquo;re addressing both ends of the AI adoption curve 
              simultaneously &mdash; making AI accessible to individuals while equipping enterprises 
              with the infrastructure to build intelligent systems at scale.
            </p>
          </RevealBody>

          <RevealBody>
            <div style={{ marginTop: '4rem' }}>
              <SectionLabel>Vision</SectionLabel>
            </div>
          </RevealBody>
          <RevealBody>
            <h3 className={styles.paragraph} style={{ fontSize: '1.25rem', color: 'var(--text-0)', marginBottom: '1rem' }}>
              A world where intelligence is abundant, accessible, and aligned with human values.
            </h3>
          </RevealBody>
          <RevealBody>
            <p className={styles.paragraph}>
              We don&rsquo;t build products. We build infrastructure that enables others to build products. 
              The highest-leverage position in any technology wave is not at the application layer &mdash; 
              it&rsquo;s in the platforms and primitives that everything else runs on.
            </p>
          </RevealBody>
          <RevealBody>
            <p className={styles.paragraph}>
              C3alabs is building those primitives for the AI era. We&rsquo;re patient, precise, and deeply 
              committed to doing this right.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === MISSION STATEMENT (Hidden as it is merged above, or kept as a break) === */}
      <section className={styles.missionSection}>
        <RevealWrapper className={`${styles.container} ${styles.center}`}>
          <RevealHeadline>
            <h2 className={styles.missionStatement}>
              We build foundational AI.
            </h2>
          </RevealHeadline>
        </RevealWrapper>
      </section>

      {/* === PRINCIPLES === */}
      <section className={styles.principlesSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Principles</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h2 className={styles.principlesHeadline}>
              The principles that guide our infrastructure.
            </h2>
          </RevealHeadline>

          <motion.div className={styles.principlesList} variants={containerVariant}>
            <RevealBody>
              <div className={styles.principleRow}>
                <div className={styles.principleLeft}>
                  <span className={styles.principleNumber}>01</span>
                  <h3 className={styles.principleTitle}>Long-term Thinking.</h3>
                </div>
                <p className={styles.principleBody}>
                  We optimize for decades, not quarters. Every architectural decision, product choice, 
                  and hire is made with an eye toward the next ten years. Short-term pressure is the 
                  enemy of foundational work.
                </p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.principleRow}>
                <div className={styles.principleLeft}>
                  <span className={styles.principleNumber}>02</span>
                  <h3 className={styles.principleTitle}>Responsible Development.</h3>
                </div>
                <p className={styles.principleBody}>
                  We believe AI development carries extraordinary responsibility. We build carefully, 
                  test rigorously, and never trade safety for speed. The systems we build will be 
                  trusted with important decisions.
                </p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.principleRow}>
                <div className={styles.principleLeft}>
                  <span className={styles.principleNumber}>03</span>
                  <h3 className={styles.principleTitle}>Research-Driven Innovation.</h3>
                </div>
                <p className={styles.principleBody}>
                  Our most important competitive advantage is depth of understanding. We invest heavily 
                  in research because products built on shallow understanding create technical debt that 
                  compounds exponentially.
                </p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.principleRow}>
                <div className={styles.principleLeft}>
                  <span className={styles.principleNumber}>04</span>
                  <h3 className={styles.principleTitle}>Foundational Systems.</h3>
                </div>
                <p className={styles.principleBody}>
                  We build systems designed to last. Infrastructure that doesn&rsquo;t have to be rebuilt 
                  every few years. Abstractions that remain valuable as the underlying models evolve. 
                  Foundations that compound over time.
                </p>
              </div>
            </RevealBody>
          </motion.div>
        </RevealWrapper>
      </section>

      {/* === CTA === */}
      <section className={styles.ctaSection}>
        <RevealWrapper className={`${styles.container} ${styles.center}`}>
          <RevealCTABlock className={styles.ctaRow}>
            <ButtonPrimary href="/team">Meet the team</ButtonPrimary>
            <ButtonSecondary href="/products">See our companies</ButtonSecondary>
          </RevealCTABlock>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
