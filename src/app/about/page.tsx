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
            &gt; {siteConfig.name}
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
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid #444', paddingBottom: '0.5rem', display: 'inline-block' }}>My Arsenal</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
              {[
                { name: 'Java & Spigot/Paper', color: '#f89820', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
                { name: 'Full-Stack Web (Next.js/React)', color: '#ffffff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                { name: 'Python & AI/ML', color: '#3776ab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'C / C++', color: '#00599c', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
                { name: 'TypeScript & JavaScript', color: '#3178c6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                { name: 'Database Architecture', color: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                { name: 'Resource & Shader Packs', color: '#FFAA00', icon: '/minecraft/item/diamond.png' },
                { name: 'Linux & Docker', color: '#2496ed', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                { name: 'Discord Bots & APIs', color: '#FF55FF', icon: '/minecraft/item/redstone.png' }
              ].map((skill, index) => (
                <div key={index} className={`skill-badge-hover float-anim-${index % 3}`} style={{
                  background: 'rgba(20, 20, 30, 0.6)',
                  border: `1px solid ${skill.color}55`,
                  color: '#fff',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  boxShadow: `0 8px 20px ${skill.color}22`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: '#fff',
                    borderRadius: '4px',
                    padding: skill.icon.includes('minecraft') ? '0' : '2px',
                    overflow: 'hidden'
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
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
          transform: translateY(-8px) scale(1.05) !important;
          box-shadow: 0 15px 25px rgba(255, 255, 255, 0.15), 0 0 15px currentColor !important;
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: currentColor !important;
        }
        .github-link-hover:hover {
          color: #fff !important;
        }
        
        @keyframes float0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(4px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(2px); }
          50% { transform: translateY(-6px); }
        }
        
        .float-anim-0 { animation: float0 4s ease-in-out infinite; }
        .float-anim-1 { animation: float1 5s ease-in-out infinite; }
        .float-anim-2 { animation: float2 4.5s ease-in-out infinite; }
      `}} />
    </div>
  );
}
