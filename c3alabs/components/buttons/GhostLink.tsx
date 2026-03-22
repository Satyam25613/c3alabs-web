import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Buttons.module.css';

interface GhostLinkProps {
  children: ReactNode;
  href: string;
  external?: boolean;
}

export default function GhostLink({ children, href, external }: GhostLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        className={styles.ghostLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={styles.ghostLink}>
      <span>{children}</span>
    </Link>
  );
}
