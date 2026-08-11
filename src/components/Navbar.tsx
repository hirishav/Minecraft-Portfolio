"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '../data/config';
import Button from './Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo/logo.png" alt="Logo" />
          {siteConfig.name}
        </Link>

        <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className={styles.link} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/work" className={styles.link} onClick={() => setIsOpen(false)}>Work</Link>
          <Button href={siteConfig.discordInvite} variant="primary">Discord</Button>
        </div>
      </div>
    </nav>
  );
}
