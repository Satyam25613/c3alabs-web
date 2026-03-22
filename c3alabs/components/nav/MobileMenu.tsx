'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo} onClick={onClose}>
          <span className={styles.logoName}>C3alabs</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        <button className={styles.close} onClick={onClose} aria-label="Close menu">
          ✕
        </button>
      </div>

      <nav className={styles.menuLinks}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.menuLink}
            data-active={pathname === link.href || undefined}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
