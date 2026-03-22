import Link from 'next/link';
import Image from 'next/image';
import { SITE, FOOTER_GROUPS } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section: Slogan + Links */}
        <div className={styles.topSection}>
          <div className={styles.sloganBlock}>
            <h2 className={styles.slogan}>Experience execution</h2>
          </div>

          <div className={styles.linksGrid}>
            {FOOTER_GROUPS.map((group) => (
              <div key={group.label} className={styles.linkGroup}>
                <span className={styles.groupLabel}>{group.label}</span>
                {group.links.map((link) => (
                  'external' in link && link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={styles.link}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Massive Wordmark */}
        <div className={styles.wordmarkContainer}>
          <svg
            className={styles.wordmarkSvg}
            viewBox="0 0 1000 240"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              className={styles.wordmarkText}
            >
              C3alabs
            </text>
          </svg>
        </div>

        {/* Bottom utility bar */}
        <div className={styles.bottomBar}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="C3alabs Logo" 
              width={120} 
              height={28} 
              className={styles.logoImg}
            />
          </Link>

          <div className={styles.utilityLinks}>
            <span className={styles.copyright}>{SITE.copyright}</span>
            <Link href="/contact" className={styles.utilityLink}>Privacy</Link>
            <Link href="/contact" className={styles.utilityLink}>Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
