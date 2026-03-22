'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { pageTransition } from '@/lib/motion';
import styles from './page.module.css';

export default function InvestorsPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Investor Relations</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>
              Investing in the<br />infrastructure layer.
            </h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>
              C3alabs is building an ecosystem of AI platforms positioned at the highest-leverage points in the AI value chain.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === THE OPPORTUNITY === */}
      <section className={styles.opportunitySection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.twoColGrid}>
            <div>
              <RevealBody>
                <SectionLabel>The Opportunity</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.sectionHeadline}>
                  Infrastructure plays<br />capture the most<br />durable value.
                </h2>
              </RevealHeadline>
            </div>
            <div className={styles.opportunityTextContent}>
              <RevealBody>
                <p className={styles.bodyText}>
                  Every major technology wave has the same structure: applications come and go, but infrastructure endures. The companies that built the internet&rsquo;s infrastructure &mdash; the databases, the networking protocols, the cloud platforms &mdash; are the most valuable companies in the world today.
                </p>
              </RevealBody>
              <RevealBody>
                <p className={styles.bodyText}>
                  AI is undergoing the same transition from applications to infrastructure. C3alabs is positioning itself at the foundational layer of this transition &mdash; building the platforms on which the next generation of AI products will be built.
                </p>
              </RevealBody>
              <RevealBody>
                <p className={styles.bodyText}>
                  By operating across both consumer (KARAX) and enterprise (SARVAX) markets simultaneously, C3alabs captures data, distribution, and strategic leverage impossible to acquire through a single-product approach.
                </p>
              </RevealBody>
            </div>
          </div>

          <RevealBody>
            <div className={styles.highlightBox}>
              <div className={styles.highlightLabel}>
                <SectionLabel>Investment Thesis</SectionLabel>
              </div>
              <blockquote className={styles.highlightQuote}>
                &ldquo;The highest-leverage position in AI is not building the best application &mdash; it&rsquo;s building the platform that great applications run on.&rdquo;
              </blockquote>
            </div>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* PORTFOLIO OVERVIEW INTENTIONALLY OMITTED PER USER PROMPT */}

      {/* === INVESTMENT PHILOSOPHY === */}
      <section className={styles.philosophySection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.twoColGrid}>
            <div>
              <RevealBody>
                <SectionLabel>Investment Philosophy</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.sectionHeadline}>
                  How we think<br />about capital.
                </h2>
              </RevealHeadline>
            </div>
            <div className={styles.philosophyList}>
              <RevealBody>
                <div className={styles.philosophyItem}>
                  <span className={styles.philosophyItemTitle}>Long-Term AI Infrastructure</span>
                  <p className={styles.philosophyItemText}>
                    We invest in infrastructure that compounds in value over time. We don&rsquo;t optimize for short-term metrics that don&rsquo;t translate to durable business value.
                  </p>
                </div>
              </RevealBody>
              <RevealBody>
                <div className={styles.philosophyItem}>
                  <span className={styles.philosophyItemTitle}>Scalable Platform Architecture</span>
                  <p className={styles.philosophyItemText}>
                    Every capital allocation decision is evaluated against a single question: does this increase the platform&rsquo;s ability to scale? We don&rsquo;t build features. We build leverage.
                  </p>
                </div>
              </RevealBody>
              <RevealBody>
                <div className={styles.philosophyItem}>
                  <span className={styles.philosophyItemTitle}>Responsible Development</span>
                  <p className={styles.philosophyItemText}>
                    We believe responsible AI development is a competitive advantage, not a constraint. Companies that cut corners on safety create technical and reputational debt that compounds dangerously.
                  </p>
                </div>
              </RevealBody>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* === CLOSING CTA === */}
      <section className={styles.ctaSection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaLabel}>
              <SectionLabel>Interested in Investing?</SectionLabel>
            </div>
            <RevealHeadline>
              <h3 className={styles.ctaHeadline}>We&rsquo;re selectively engaging<br />with aligned investors.</h3>
            </RevealHeadline>
            <RevealBody>
              <p className={styles.ctaSub}>
                If you&rsquo;re a long-term investor with conviction in foundational AI infrastructure, we&rsquo;d like to speak with you.
              </p>
            </RevealBody>
            <RevealCTABlock className={styles.ctaButtonRow}>
              <ButtonPrimary href="/contact?type=investor">Investor Inquiries</ButtonPrimary>
            </RevealCTABlock>
          </div>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
