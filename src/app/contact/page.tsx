"use client";
import React from 'react';
import Image from 'next/image';
import { siteConfig } from '../../data/config';
import Button from '../../components/Button';
import { FaInstagram, FaSnapchatGhost, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div id="contact" className="container" style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <h1 className="hero-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Me</h1>
      <p style={{ textAlign: 'center', color: '#a0aab2', marginBottom: '5rem', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 5rem auto' }}>
        Ready to start your next Minecraft project? Reach out through Discord.
      </p>

      <div className={styles.cardContainer}>
        {/* Discord DM Card */}
        <div className={`${styles.card} ${styles.cardDiscord}`}>
          <div className={styles.iconWrapper}>
            <Image 
              src="/minecraft/item/enchanted_book.png" 
              alt="Discord DM" 
              width={64} 
              height={64} 
              className={styles.icon} 
            />
          </div>
          <h2 className={styles.cardTitle}>Discord DM</h2>
          <p className={styles.cardText}>
            Message me directly on Discord. I usually reply within a few hours.
          </p>
          <div className={styles.usernameBox}>
            @{siteConfig.discordUsername}
          </div>
          <Button href={siteConfig.discordInvite} variant="secondary">Join Server</Button>
        </div>

        {/* Ticket Card */}
        <div className={`${styles.card} ${styles.cardTicket}`}>
          <div className={styles.iconWrapper}>
            <Image 
              src="/minecraft/item/paper.png" 
              alt="Open Ticket" 
              width={64} 
              height={64} 
              className={styles.icon} 
            />
          </div>
          <h2 className={styles.cardTitle}>Open a Ticket</h2>
          <p className={styles.cardText}>
            Have a detailed requirement? Open a ticket to get a formal quote.
          </p>
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              &quot;Discord pe requirement bhejo, baaki details hum discuss kar lenge.&quot;
            </p>
          </div>
          <Button href={siteConfig.ticketUrl} variant="primary">Open Ticket</Button>
        </div>
      </div>

      <div style={{ marginTop: '7rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--mc-yellow)', fontFamily: 'var(--font-pixel)', textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}>Other Contacts</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} onMouseOver={(e) => e.currentTarget.style.color = '#E1306C'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="Instagram">
            <FaInstagram />
          </a>
          <a href={siteConfig.snapchat} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} onMouseOver={(e) => e.currentTarget.style.color = '#FFFC00'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="Snapchat">
            <FaSnapchatGhost />
          </a>
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} onMouseOver={(e) => e.currentTarget.style.color = '#1877F2'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="Facebook">
            <FaFacebook />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="GitHub">
            <FaGithub />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} onMouseOver={(e) => e.currentTarget.style.color = '#0077b5'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
