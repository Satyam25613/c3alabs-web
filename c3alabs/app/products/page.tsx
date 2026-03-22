'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import ButtonSecondary from '@/components/buttons/ButtonSecondary';
import { pageTransition } from '@/lib/motion';
import { PRODUCTS } from '@/lib/constants';
import styles from './page.module.css';

export default function ProductsPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Portfolio</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>
              Two platforms.<br />
              One ecosystem.
            </h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>
              We are building fully integrated systems that capture foundational leverage across both consumer and enterprise dimensions of the AI&nbsp;lifecycle.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === KARAX === */}
      <section className={styles.productSection}>
        <div className={styles.accentBar} style={{ background: 'var(--text-0)' }} />
        <RevealWrapper className={styles.container}>
          <div className={styles.productGrid}>
            <div className={styles.productContent}>
              <RevealBody>
                <SectionLabel>B2C Company</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.productName}>
                  KARAX
                </h2>
              </RevealHeadline>
              <RevealBody>
                <span className={styles.productTagline}>{PRODUCTS.karax.tagline}</span>
              </RevealBody>
              <RevealBody>
                <p className={styles.productBody}>
                  A consumer AI platform designed to help individuals access powerful AI tools in a simple and intuitive way. 
                  KaraX is built on the belief that the most transformative AI experiences will be personal, context-aware, 
                  and deeply integrated into how individuals think and&nbsp;work.
                </p>
                <p className={styles.productBody}>
                  KaraX delivers intelligent capabilities through an interface that respects human attention &mdash; 
                  no prompt engineering required. Just intelligence, available when you&nbsp;need it.
                </p>
              </RevealBody>
              <RevealBody>
                <div className={styles.statsRow}>
                </div>
              </RevealBody>
              <RevealCTABlock className={styles.productCTA}>
                <ButtonPrimary href={PRODUCTS.karax.url} external>Visit karax.ai →</ButtonPrimary>
              </RevealCTABlock>
            </div>

            <div className={styles.productPanel}>
              <RevealBody>
                <div className={styles.panel} style={{ borderColor: 'rgba(0,0,0,0.12)' }}>
                  <span className={styles.panelLabel}>What KARAX does</span>
                  <div className={styles.panelList}>
                    <div className={styles.panelItem}>Connects to your email, calendar, meetings, and documents — one interface for everything</div>
                    <div className={styles.panelItem}>Executes multi-step tasks without you managing each step manually</div>
                    <div className={styles.panelItem}>Remembers your context across every session — you never repeat yourself</div>
                    <div className={styles.panelItem}>Runs across 100+ tools without manual handoffs between them</div>
                  </div>
                </div>
              </RevealBody>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* === SARVAX === */}
      <section className={styles.productSection}>
        <div className={styles.accentBar} style={{ background: 'var(--text-0)' }} />
        <RevealWrapper className={styles.container}>
          <div className={`${styles.productGrid} ${styles.reversed}`}>
            <div className={styles.productPanel}>
              <RevealBody>
                <div className={styles.panel} style={{ borderColor: 'rgba(0,0,0,0.12)' }}>
                  <span className={styles.panelLabel}>Agent roles</span>
                  <div className={styles.panelList}>
                    <div className={styles.panelItem}>HR Agent — conducts interviews, manages onboarding, handles compliance end-to-end</div>
                    <div className={styles.panelItem}>Revenue Agent — manages pipeline, CRM updates, and outbound without a RevOps hire</div>
                    <div className={styles.panelItem}>Ops Agent — handles vendor management, reporting, and scheduling autonomously</div>
                    <div className={styles.panelItem}>Support Agent — resolves Tier 1 to Tier 3 tickets without human escalation</div>
                  </div>
                </div>
              </RevealBody>
            </div>

            <div className={styles.productContent}>
              <RevealBody>
                <SectionLabel>B2B Company</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.productName}>
                  SARVAX
                </h2>
              </RevealHeadline>
              <RevealBody>
                <span className={styles.productTagline}>{PRODUCTS.sarvax.tagline}</span>
              </RevealBody>
              <RevealBody>
                <p className={styles.productBody}>
                  An enterprise AI infrastructure platform enabling organizations to build and deploy intelligent systems at&nbsp;scale. 
                  SarvaX answers the critical question facing every organization: how do you move from AI experimentation to 
                  production-grade systems that are reliable, auditable, and deeply integrated with existing&nbsp;workflows?
                </p>
                <p className={styles.productBody}>
                  SarvaX provides the primitives enterprises need &mdash; from model orchestration and deployment infrastructure 
                  to governance frameworks and compliance&nbsp;tooling.
                </p>
              </RevealBody>
              <RevealBody>
                <div className={styles.statsRow}>
                </div>
              </RevealBody>
              <RevealCTABlock className={styles.productCTA}>
                <ButtonPrimary href={PRODUCTS.sarvax.url} external>Visit sarvax.ai →</ButtonPrimary>
              </RevealCTABlock>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* === COMPANIES CTA === */}
      <section className={styles.ctaSection}>
        <RevealWrapper className={`${styles.container} ${styles.center}`}>
          <RevealHeadline>
            <h2 className={styles.ctaHeadline}>Interested in what we&rsquo;re building?</h2>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.ctaSub}>For investors, press, and potential&nbsp;partners.</p>
          </RevealBody>
          <RevealCTABlock className={styles.ctaRow}>
            <ButtonPrimary href="/thesis">Read the Thesis</ButtonPrimary>
            <ButtonSecondary href="/contact">Get in touch</ButtonSecondary>
          </RevealCTABlock>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
