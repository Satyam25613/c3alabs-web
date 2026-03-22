import Link from 'next/link';
import styles from './Buttons.module.css';

interface ButtonSecondaryProps {
  children: string;
  href: string;
  external?: boolean;
}

export default function ButtonSecondary({ children, href, external }: ButtonSecondaryProps) {
  if (external) {
    return (
      <a
        href={href}
        className={styles.btnSecondary}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.btnSecondary}>
      {children}
    </Link>
  );
}
