// lib/motion.ts — C3ALABS Motion System v3
// Rebuilt with Antigravity "Silk" easing principle:
// cubic-bezier(0.16, 1, 0.3, 1) — sharp entry, extremely long cushioned decay.
// This single curve is what makes premium sites feel "physical, not coded."

import { Variants } from 'framer-motion';

// === EASING CURVES ===
export const easing = {
  // The "Silk" curve — Antigravity's signature. Used for EVERYTHING.
  silk:      [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Subtle spring — for CTAs and interactive elements only
  spring:    [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  // Smooth in-out — for page transitions
  inOutCubic:[0.65, 0, 0.35, 1] as [number, number, number, number],
};

// === HEADLINE REVEAL ===
// Antigravity pattern: fade + translateY(24px) + NO scale.
// Scale creates a "zoom" feel that fights the editorial tone.
// Pure y-translate reads as "rising into frame" — more premium.
export const revealHeadline: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easing.silk,
    },
  },
};

// === BODY TEXT REVEAL ===
export const revealBody: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.silk,
    },
  },
};

// === CTA REVEAL ===
export const revealCTA: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.silk,
    },
  },
};

// === CONTAINER — Stagger orchestrator ===
// Antigravity uses 100ms stagger. Tighter than before (was 120ms).
export const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// === SIMPLE FADE (labels, metadata) ===
export const fadeVariant: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easing.silk },
  },
};

// === PAGE TRANSITION ===
export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing.inOutCubic,
    },
  },
};

// === HERO ENTRANCE SEQUENCE ===
// Antigravity pattern: staggered cascade with precise delays
// Label → Headline → Sub → CTAs, each 100ms apart
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Label: pure fade, no movement. It's metadata, not a statement.
export const heroLabel: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easing.silk },
  },
};

// Headline: the biggest movement. 28px rise with silk decay.
export const heroHeadline: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: easing.silk },
  },
};

// Sub-paragraph: gentle 14px rise.
export const heroSub: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing.silk },
  },
};

// CTA: decisive arrival, silk easing (no spring — too playful for a holding company).
export const heroCTA: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing.silk },
  },
};
