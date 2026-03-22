'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/sections/SectionLabel';
import RevealWrapper, { RevealHeadline, RevealBody, RevealCTABlock } from '@/components/sections/RevealWrapper';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { pageTransition, containerVariant } from '@/lib/motion';
import styles from './page.module.css';

const ARGUMENTS = [
  {
    number: '01',
    title: 'The limits of assistance',
    paragraphs: [
      'Almost every major AI product launched in the last three years is built around generation: you prompt, it replies. The value is entirely in the conversation. The burden of actually doing the work remains on the user.',
      'This happened because it is the path of least resistance. Engineering a chatbot is structurally simpler than engineering a system that executes multi-step work across disparate tools.',
      'The result is a market flooded with tools that make people more informed, but not fundamentally less busy. The bottleneck of human execution was not solved. It was just rebranded as a productivity problem.'
    ],
  },
  {
    number: '02',
    title: 'The shift to execution',
    paragraphs: [
      'The next era of software is not conversational. It is autonomous. It is about systems that own workflows from start to finish without supervision.',
      'The companies that define this decade will not be building better chat interfaces. They will be building the infrastructure where the system does the job — completely and accountably.',
      'This shift from AI-that-advises to AI-that-executes is not a feature update. It is a category shift. The window to own this category — to become the infrastructure that businesses trust to actually do the work — is open right now.'
    ],
  },
  {
    number: '03',
    title: 'The holding company structure',
    paragraphs: [
      'The problem of execution looks different for an individual than it does for an enterprise. They require distinct products, distinct brands, and distinct go-to-market motions.',
      'Building these as features within a single app leads to software that is too complex for the individual and too generic for the enterprise. Building them as independent companies solves this.',
      'KARAX serves the individual. SARVAX serves the business. C3alabs provides the shared execution infrastructure that powers both. This structure allows us to attack multiple massive markets without diluting our focus or our product.'
    ],
  },
  {
    number: '04',
    title: 'The unbuilt layer',
    paragraphs: [
      'Core model reasoning crossed the necessary threshold in 2023. The question is no longer whether models are smart enough. The question is who is building the scaffolding required to make them useful.',
      'While the industry burns billions training foundational models, we are building the missing application layer — the infrastructure that converts raw model reasoning into finished, reliable work.',
      'The first company to build a trusted brand around autonomous execution — a system that users actually trust to finish complex work — secures a position that is nearly impossible to displace. We are building that company.'
    ],
  },
  {
    number: '05',
    title: 'The C3alabs advantage',
    paragraphs: [
      'We operate with extreme conviction. Both KARAX and SARVAX are live. Both have users. Both execute successfully without the crutch of venture capital to subsidized growth.',
      'We are not seeking capital to figure out what to build. We are seeking capital to aggressively scale the infrastructure that we have already proven works.',
      'Category-defining companies are rarely those with the most initial capital. They are the ones that understand the problem with the highest resolution, and build the right structure to solve it. C3alabs is structurally designed to win.'
    ],
  },
];

export default function ThesisPage() {
  return (
    <motion.div {...pageTransition}>
      {/* === PAGE HERO === */}
      <section className={styles.heroSection}>
        <RevealWrapper className={styles.container}>
          <RevealBody>
            <SectionLabel>The Thesis</SectionLabel>
          </RevealBody>
          <RevealHeadline>
            <h1 className={styles.heroHeadline}>
              The execution layer<br />
              is the most valuable unbuilt<br />
              infrastructure in&nbsp;AI.
            </h1>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.heroSub}>A thesis on why AI that does the work is the only software that&nbsp;matters.</p>
          </RevealBody>
        </RevealWrapper>
      </section>

      {/* === THE ARGUMENT === */}
      <section className={styles.argumentSection}>
        <motion.div
          className={styles.argumentContainer}
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {ARGUMENTS.map((arg, idx) => (
            <RevealBody key={arg.number}>
              <div className={styles.argBlock}>
                <div className={styles.argHeader}>
                  <span className={styles.argNumber}>{arg.number} /</span>
                  <h2 className={styles.argTitle}>{arg.title}</h2>
                </div>
                {arg.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={styles.argBody}>{p}</p>
                ))}
                {idx < ARGUMENTS.length - 1 && (
                  <hr className={styles.argDivider} />
                )}
              </div>
            </RevealBody>
          ))}
        </motion.div>
      </section>

      {/* === THE INVITATION === */}
      <section className={styles.invitationSection}>
        <RevealWrapper className={styles.invitationContainer}>
          <RevealHeadline>
            <div className={styles.invitationStatement}>
              <p>&ldquo;If you read this and found yourself disagreeing with something &mdash; we&rsquo;d like to talk.</p>
              <p style={{ marginTop: '1.5rem' }}>If you read this and found yourself nodding &mdash; we&rsquo;d especially like to talk.&rdquo;</p>
            </div>
          </RevealHeadline>
          <RevealBody>
            <p className={styles.invitationSub}>
              C3alabs is currently self-funded. We are selectively speaking with investors 
              who share a long-term, category-building perspective. We are not 
              looking for capital to validate the idea. We are looking for 
              partners who understand why the execution layer is the most important 
              infrastructure bet in AI &mdash; and who want to be part of building 
              the company that owns&nbsp;it.
            </p>
          </RevealBody>
          <RevealCTABlock className={styles.invitationCTA}>
            <ButtonPrimary href="/contact?type=investor">Start a conversation</ButtonPrimary>
          </RevealCTABlock>
        </RevealWrapper>
      </section>
    </motion.div>
  );
}
