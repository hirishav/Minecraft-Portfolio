"use client";
import React from 'react';
import { siteConfig } from '../../data/config';
import Button from '../../components/Button';
import { FaInstagram, FaSnapchatGhost, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="container" style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 0px rgba(0,0,0,0.5)', textAlign: 'center' }}>Contact Me</h1>
      <p style={{ textAlign: 'center', color: '#a0aab2', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        Ready to start your next Minecraft project? Reach out through Discord.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', border: '2px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>💬</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Discord DM</h2>
          <p style={{ color: '#a0aab2', marginBottom: '2rem' }}>
            Message me directly on Discord. I usually reply within a few hours.
          </p>
          <div style={{ marginBottom: '2rem', fontFamily: 'var(--font-pixel)', fontSize: '1.2rem', padding: '1rem', background: '#0d0f0e', border: '1px solid var(--border)' }}>
            @{siteConfig.discordUsername}
          </div>
          <Button href={siteConfig.discordInvite} variant="secondary">Join Server</Button>
        </div>

        <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', border: '2px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>🎫</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Open a Ticket</h2>
          <p style={{ color: '#a0aab2', marginBottom: '2rem' }}>
            Have a detailed requirement? Open a ticket to get a formal quote.
          </p>
          <p style={{ color: '#d1d8d5', marginBottom: '2rem', fontSize: '0.9rem' }}>
            "Discord pe requirement bhejo, baaki details hum discuss kar lenge."
          </p>
          <Button href={siteConfig.ticketUrl} variant="primary">Open Ticket</Button>
        </div>
      </div>

      <div style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--mc-yellow)' }}>Other Contacts</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2.5rem', color: '#a0aab2', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#E1306C'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="Instagram">
            <FaInstagram />
          </a>
          <a href={siteConfig.snapchat} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2.5rem', color: '#a0aab2', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFC00'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="Snapchat">
            <FaSnapchatGhost />
          </a>
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2.5rem', color: '#a0aab2', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1877F2'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="Facebook">
            <FaFacebook />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2.5rem', color: '#a0aab2', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="GitHub">
            <FaGithub />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '2.5rem', color: '#a0aab2', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#0077b5'} onMouseOut={(e) => e.currentTarget.style.color = '#a0aab2'} title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
