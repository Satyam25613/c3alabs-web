'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import RoleCard from '@/components/cards/RoleCard';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { pageTransition, containerVariant } from '@/lib/motion';
import styles from './page.module.css';

const ROLES = [
  {
    category: 'AI Research Engineer',
    department: 'Research · Full-time · Remote',
    description: "You'll work on problems at the absolute frontier of what's possible in AI — not applying existing solutions, but figuring out what the solutions should be.",
  },
  {
    category: 'Machine Learning Engineer',
    department: 'Engineering · Full-time · Remote',
    description: "You build at the intersection of models and products. You care about architecture as much as velocity.",
  },
  {
    category: 'AI Infrastructure Engineer',
    department: 'Infrastructure · Full-time · Remote',
    description: "You think in scale, reliability, and inference costs. You've built the invisible layer that everything runs on.",
  },
  {
    category: 'Full Stack Engineer',
    department: 'Engineering · Full-time · Remote',
    description: "You build product end-to-end. You care about what the user actually experiences, not just what ships.",
  },
  {
    category: 'Product Designer',
    department: 'Design · Full-time · Remote',
    description: "You design for clarity, not aesthetics. You think in systems and edge cases, not screens.",
  },
  {
    category: 'Research Scientist',
    department: 'Research · Full-time · Remote',
    description: "You explore novel architectures and alignment research that push the boundaries of foundational models.",
  },
  {
    category: 'Technical Program Manager',
    department: 'Operations · Full-time · Remote',
    description: "You orchestrate complex technical deployments across our portfolio and ensure flawless execution.",
  },
];

export default function CareersPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Careers at C3alabs</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>
              Build the<br />Future of AI.
            </h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>
              We&rsquo;re building something that matters. We need extraordinary people who want to do the most important work of their careers.
            </p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === CULTURE CARDS === */}
      <section className={styles.cultureSection}>
        <RevealWrapper className={styles.container}>
          <div className={styles.cultureHeaderGrid}>
            <div>
              <RevealBody>
                <SectionLabel>Culture</SectionLabel>
              </RevealBody>
              <RevealHeadline>
                <h2 className={styles.cultureHeadline}>
                  A different kind<br />of company.
                </h2>
              </RevealHeadline>
            </div>
            <div className={styles.cultureTextCol}>
              <RevealBody>
                <p className={styles.cultureBodyText}>We don&rsquo;t have a typical startup culture. We have small, elite teams with high ownership and long-term focus. We move deliberately because foundational work requires depth, not just speed.</p>
              </RevealBody>
              <RevealBody>
                <p className={styles.cultureBodyText}>Our culture is built around one principle: hire people who are exceptional at what they do, give them hard problems and full ownership, and get out of their way. Everything else follows from this.</p>
              </RevealBody>
            </div>
          </div>

          <motion.div className={styles.cultureGrid} variants={containerVariant}>
            <RevealBody>
              <div className={styles.cultureCard}>
                <h3 className={styles.cultureTitle}>Work on Frontier AI</h3>
                <p className={styles.cultureBody}>You&rsquo;ll work on problems at the absolute frontier of what&rsquo;s possible in AI &mdash; not applying existing solutions, but figuring out what the solutions should be.</p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.cultureCard}>
                <h3 className={styles.cultureTitle}>Small High-Impact Teams</h3>
                <p className={styles.cultureBody}>We keep teams small intentionally. Every person has outsized impact. There&rsquo;s no room for passengers. Everyone here is a driver.</p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.cultureCard}>
                <h3 className={styles.cultureTitle}>Build at Global Scale</h3>
                <p className={styles.cultureBody}>The products you build here will reach users across the world. You&rsquo;ll think about scale, reliability, and real-world consequences from day one.</p>
              </div>
            </RevealBody>
            <RevealBody>
              <div className={styles.cultureCard}>
                <h3 className={styles.cultureTitle}>Equity &amp; Compensation</h3>
                <p className={styles.cultureBody}>Competitive compensation with meaningful equity. We believe the people who build C3alabs should own a meaningful piece of what they create.</p>
              </div>
            </RevealBody>
          </motion.div>
        </RevealWrapper>
      </section>

      {/* === OPEN ROLES === */}
      <section className={styles.rolesSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>Open Roles</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h2 className={styles.rolesHeadline}>
              We&rsquo;re hiring<br />across all disciplines.
            </h2>
          </RevealHeadline>

          <motion.div className={styles.rolesList} variants={containerVariant}>
            {ROLES.map((role) => (
              <RoleCard key={role.category} {...role} />
            ))}
          </motion.div>

          <RevealCTABlock className={styles.rolesCTA}>
            <p className={styles.bottomCtaText}>Don&rsquo;t see the right role? We&rsquo;re always interested in exceptional people. Send us a note about yourself.</p>
            <ButtonPrimary href="/contact?type=career">Apply Now</ButtonPrimary>
          </RevealCTABlock>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
