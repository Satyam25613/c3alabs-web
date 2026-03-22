'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Buttons.module.css';

interface ButtonPrimaryProps {
  children: string;
  href: string;
  external?: boolean;
  fullWidth?: boolean;
}

export default function ButtonPrimary({ children, href, external, fullWidth }: ButtonPrimaryProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const style = {
    '--mouse-x': `${mousePos.x}%`,
    '--mouse-y': `${mousePos.y}%`,
  } as React.CSSProperties;

  const className = `${styles.btnPrimary} ${fullWidth ? styles.fullWidth : ''}`;

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onMouseMove={handleMouseMove}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.btnGlow} />
        <span className={styles.btnText}>{children}</span>
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      style={style}
    >
      <span className={styles.btnGlow} />
      <span className={styles.btnText}>{children}</span>
    </Link>
  );
}
