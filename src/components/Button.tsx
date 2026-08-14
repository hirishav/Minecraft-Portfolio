import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
  downloadName?: string;
}

export default function Button({ children, href, onClick, variant = 'secondary', className = '', style, downloadName }: ButtonProps) {
  const combinedClasses = `${styles.button} ${variant === 'primary' ? styles.primary : ''} ${className}`;

  if (href) {
    // Treat external links differently
    if (href.startsWith('http') || href.endsWith('.zip') || href.startsWith('/downloads/')) {
      const isExternal = href.startsWith('http');
      const downloadAttr = downloadName ? downloadName : (!isExternal ? "" : undefined);
      return (
        <a href={href} target={isExternal ? "_blank" : undefined} download={downloadAttr} rel="noopener noreferrer" className={combinedClasses} style={style}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} style={style}>
      {children}
    </button>
  );
}
