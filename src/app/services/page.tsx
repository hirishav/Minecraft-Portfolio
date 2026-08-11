import React from 'react';
import { siteConfig } from '../../data/config';
import Button from '../../components/Button';

export default function Services() {
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '4rem', textShadow: '2px 2px 0px rgba(0,0,0,0.5)', textAlign: 'center' }}>My Services</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', border: '2px solid var(--border)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>Custom Plugins</h2>
          <p style={{ color: '#a0aab2', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Custom Minecraft plugins built exactly according to your server requirements.
          </p>
          <ul style={{ color: '#d1d8d5', marginLeft: '1.5rem', lineHeight: '2' }}>
            <li>Custom commands and utilities</li>
            <li>Advanced moderation systems</li>
            <li>Economy and shop integrations</li>
            <li>Unique gameplay mechanics</li>
            <li>Optimized for performance</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', border: '2px solid var(--border)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>Resource Packs</h2>
          <p style={{ color: '#a0aab2', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Custom resource packs to transform your server visually without requiring client-side mods.
          </p>
          <ul style={{ color: '#d1d8d5', marginLeft: '1.5rem', lineHeight: '2' }}>
            <li>Custom UI and menus (using fonts/textures)</li>
            <li>Custom Model Data for unique items and weapons</li>
            <li>Animated textures and emissive blocks</li>
            <li>Server-side pack forcing support</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', border: '2px solid var(--border)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>Texture Packs</h2>
          <p style={{ color: '#a0aab2', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Custom textures and visual assets for specific gamemodes.
          </p>
          <ul style={{ color: '#d1d8d5', marginLeft: '1.5rem', lineHeight: '2' }}>
            <li>PvP optimized packs (low fire, short swords)</li>
            <li>Themed packs (RPG, Sci-fi, Medieval)</li>
            <li>High-resolution asset creation</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', border: '2px solid var(--border)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>Custom Systems</h2>
          <p style={{ color: '#a0aab2', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Complete custom server features and external integrations.
          </p>
          <ul style={{ color: '#d1d8d5', marginLeft: '1.5rem', lineHeight: '2' }}>
            <li>Discord to Minecraft bot integrations</li>
            <li>Database setups (MySQL, MongoDB)</li>
            <li>BungeeCord / Velocity network configuration</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to build something?</h2>
        <Button href={siteConfig.ticketUrl} variant="primary">Get a Quote</Button>
      </div>
    </div>
  );
}
