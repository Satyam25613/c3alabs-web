'use client';

import { motion } from 'framer-motion';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';
import { pageTransition } from '@/lib/motion';

export default function NotFound() {
  return (
    <motion.div
      {...pageTransition}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '0 var(--grid-margin)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          color: 'var(--text-3)',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 200,
          fontSize: 'var(--type-display)',
          color: 'var(--text-0)',
          letterSpacing: '-0.03em',
        }}
      >
        This page doesn&rsquo;t exist.
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: 'var(--type-body)',
          color: 'var(--text-3)',
        }}
      >
        But C3alabs does.
      </p>
      <ButtonPrimary href="/">Back to home</ButtonPrimary>
    </motion.div>
  );
}
