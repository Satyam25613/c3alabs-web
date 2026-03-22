'use client';

import { motion } from 'framer-motion';
import { revealHeadline } from '@/lib/motion';
import GhostLink from '@/components/buttons/GhostLink';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  domain: string;
  category: string;
  description: string;
  learnMoreHref: string;
}

export default function ProductCard({
  name,
  domain,
  category,
  description,
  learnMoreHref,
}: ProductCardProps) {
  return (
    <motion.div className={styles.card} variants={revealHeadline}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <a
          href={`https://${domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.domain}
        >
          {domain} ↗
        </a>
      </div>

      <div className={styles.divider} />

      <h3 className={styles.category}>{category}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <GhostLink href={learnMoreHref}>Learn more →</GhostLink>
      </div>
    </motion.div>
  );
}
