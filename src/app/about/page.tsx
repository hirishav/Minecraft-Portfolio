import React from 'react';
import { siteConfig } from '../../data/config';
import Button from '../../components/Button';

export default function About() {
  return (
    <div className="container" style={{ padding: '6rem 0', minHeight: '80vh', position: 'relative' }}>
      
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(94, 162, 232, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)', zIndex: -1 }}></div>

      <h1 style={{ 
        fontSize: '4rem', 
        marginBottom: '2rem', 
        textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 20px rgba(94, 162, 232, 0.4)',
        background: 'linear-gradient(90deg, #fff, #aaa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }}>
        The Mastermind Behind the Blocks
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          background: 'rgba(20, 20, 20, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: 'var(--mc-green)', 
            marginBottom: '1.5rem',
            fontFamily: 'monospace',
            letterSpacing: '-1px'
          }}>
            &gt; {siteConfig.name}_
          </h2>
          
          <div style={{ fontSize: '1.25rem', color: '#e0e0e0', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              I don&apos;t just write code; I engineer <strong style={{ color: '#5ea2e8' }}>digital ecosystems</strong>. As a relentless problem solver and multi-disciplinary developer, I bridge the gap between vanilla Minecraft&apos;s limitations and boundless imagination. 
            </p>
            <p>
              From architecting <strong style={{ color: 'var(--mc-gold)' }}>high-performance Java plugins</strong> and scaling complex server networks, to forging immersive resource packs and responsive web apps—I own the entire stack. Every pixel placed and every algorithm deployed is driven by an obsession with quality, optimization, and creating unforgettable user experiences.
            </p>
            <p>
              Whether you need a custom launcher, a sophisticated Discord bot, or a full-fledged database-driven minigame network, I deliver <strong style={{ color: '#ff1493' }}>pixel-perfect, lag-free magic</strong>.
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #444', paddingBottom: '0.5rem', display: 'inline-block' }}>My Arsenal</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {[
                { name: 'Java & Spigot/Paper', color: '#f89820' },
                { name: 'Full-Stack Web (Next.js/React)', color: '#61dafb' },
                { name: 'Python & AI/ML', color: '#3776ab' },
                { name: 'C / C++', color: '#00599c' },
                { name: 'TypeScript & JavaScript', color: '#3178c6' },
                { name: 'Database Architecture (SQL/NoSQL)', color: '#336791' },
                { name: 'Resource & Shader Packs', color: '#8a2be2' },
                { name: 'Linux & Docker', color: '#2496ed' },
                { name: 'Discord Bots & APIs', color: '#5865F2' }
              ].map((skill, index) => (
                <span key={index} style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: `1px solid ${skill.color}`,
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  boxShadow: `0 0 10px ${skill.color}33`,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }} className="skill-badge-hover">
                  <span style={{ color: skill.color, marginRight: '8px' }}>⚡</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Button href={siteConfig.discordInvite} variant="primary">
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Start a Project <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>🚀</span>
              </span>
            </Button>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'underline', transition: 'color 0.3s' }} className="github-link-hover">
              View GitHub
            </a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .skill-badge-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2) !important;
          background: rgba(255, 255, 255, 0.1) !important;
        }
        .github-link-hover:hover {
          color: #fff !important;
        }
      `}} />
    </div>
  );
}
