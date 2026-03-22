'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody } from '@/components/sections/RevealWrapper';
import ContactForm from '@/components/contact/ContactForm';
import GhostLink from '@/components/buttons/GhostLink';
import { pageTransition } from '@/lib/motion';
import { CONTACT, PRODUCTS } from '@/lib/constants';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Contact</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>Get in touch.</h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>
              For investors, builders, press, and enterprise&nbsp;partnerships.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === FORM + DIRECT INFO === */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <RevealWrapper>
              <RevealBody>
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </RevealBody>
            </RevealWrapper>

            <RevealWrapper className={styles.directInfo}>
              <RevealBody>
                <SectionLabel>Or reach directly</SectionLabel>
              </RevealBody>

              <RevealBody>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>FOUNDER</span>
                  <span className={styles.contactName}>{CONTACT.founderName}</span>
                  <GhostLink href={`mailto:${CONTACT.founderEmail}`}>
                    {CONTACT.founderEmail} →
                  </GhostLink>
                </div>
              </RevealBody>

              <RevealBody>
                <div className={styles.contactSep} />
              </RevealBody>



              <RevealBody>
                <div className={styles.contactBlock}>
                  <span className={styles.contactLabel}>COMPANIES</span>
                  <GhostLink href={PRODUCTS.karax.url} external>
                    karax.ai ↗
                  </GhostLink>
                  <GhostLink href={PRODUCTS.sarvax.url} external>
                    sarvax.ai ↗
                  </GhostLink>
                </div>
              </RevealBody>

              <RevealBody>
                <div className={styles.contactSep} />
              </RevealBody>

              <RevealBody>
                <p className={styles.responseNote}>
                  &ldquo;We read everything. We respond selectively and&nbsp;honestly.&rdquo;
                </p>
              </RevealBody>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
