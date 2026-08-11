import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../data/config';
import styles from './Footer.module.css';
import { FaInstagram, FaSnapchatGhost, FaFacebook, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.brand}>
          <div className={styles.brandName}>{siteConfig.name}</div>
          <p className={styles.description}>{siteConfig.description}</p>
        </div>
        
        <div className={styles.links}>
          <h4>Navigation</h4>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/work" className={styles.link}>Work</Link>
        </div>

        <div className={styles.links}>
          <h4>Connect</h4>
          <a href={siteConfig.discordInvite} target="_blank" rel="noopener noreferrer" className={styles.link}>Discord</a>
          <a href={siteConfig.ticketUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>Open a Ticket</a>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href={siteConfig.discordInvite} target="_blank" rel="noopener noreferrer" className={styles.link} title="Discord" style={{ fontSize: '1.5rem' }}><FaDiscord /></a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={styles.link} title="Instagram" style={{ fontSize: '1.5rem' }}><FaInstagram /></a>
            <a href={siteConfig.snapchat} target="_blank" rel="noopener noreferrer" className={styles.link} title="Snapchat" style={{ fontSize: '1.5rem' }}><FaSnapchatGhost /></a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className={styles.link} title="Facebook" style={{ fontSize: '1.5rem' }}><FaFacebook /></a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={styles.link} title="GitHub" style={{ fontSize: '1.5rem' }}><FaGithub /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link} title="LinkedIn" style={{ fontSize: '1.5rem' }}><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
