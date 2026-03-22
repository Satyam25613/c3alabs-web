'use client';

import { motion } from 'framer-motion';
import { revealHeadline } from '@/lib/motion';
import styles from './RoleCard.module.css';

interface RoleCardProps {
  category: string;
  department?: string;
  description: string;
}

export default function RoleCard({ category, department, description }: RoleCardProps) {
  return (
    <motion.div className={styles.row} variants={revealHeadline}>
      <h3 className={styles.category}>{category}</h3>
      {department && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
            marginTop: '4px',
            display: 'block',
          }}
        >
          {department}
        </span>
      )}
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
