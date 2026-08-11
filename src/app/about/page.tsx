import React from 'react';
import { siteConfig } from '../../data/config';
import Button from '../../components/Button';

export default function About() {
  return (
    <div className="container" style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>About Me</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-green)', marginBottom: '1.5rem' }}>{siteConfig.name}</h2>
          <p style={{ fontSize: '1.2rem', color: '#d1d8d5', marginBottom: '1.5rem', maxWidth: '800px' }}>
            I am a Minecraft developer, builder, and problem solver. I enjoy creating custom server experiences that go beyond vanilla limitations. 
          </p>
          <p style={{ fontSize: '1.2rem', color: '#d1d8d5', marginBottom: '2rem', maxWidth: '800px' }}>
            Whether it's writing optimized Java plugins, designing immersive resource packs, or configuring complex server networks, I build solutions tailored to your community's needs. My goal is to make your server stand out with high-quality, professional assets.
          </p>
          
          <Button href={siteConfig.discordInvite} variant="primary">Let's Talk</Button>
        </div>
      </div>
    </div>
  );
}
