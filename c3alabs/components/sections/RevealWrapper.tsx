'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { containerVariant, revealHeadline, revealBody, revealCTA } from '@/lib/motion';

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealWrapper({ children, className, delay = 0 }: RevealWrapperProps) {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealHeadline({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={revealHeadline} className={className}>
      {children}
    </motion.div>
  );
}

export function RevealBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={revealBody} className={className}>
      {children}
    </motion.div>
  );
}

export function RevealCTABlock({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={revealCTA} className={className}>
      {children}
    </motion.div>
  );
}
