import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AboutSection from './about/page';
import SkillsSection from './skills/page';
import ExperienceSection from './experience/page';
import WorkSection from './work/page';
import ServicesSection from './services/page';
import ContactSection from './contact/page';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', scrollBehavior: 'smooth' }}>
      {/* Hero Section */}
      <section id="home">
        <div className="responsive-grid-hero">
          {/* Left Column */}
          <div>
            <style dangerouslySetInnerHTML={{__html: `
              .role-tag-modern {
                padding: 0.6rem 1.2rem;
                font-size: 0.85rem;
                border-radius: 50px;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: bold;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                backdrop-filter: blur(4px);
                position: relative;
              }
              .role-tag-modern:hover {
                transform: translateY(-5px) scale(1.05);
                z-index: 10;
                background-color: color-mix(in srgb, var(--tag-color) 25%, transparent) !important;
                border-color: color-mix(in srgb, var(--tag-color) 80%, transparent) !important;
                box-shadow: 0 10px 25px color-mix(in srgb, var(--tag-color) 50%, transparent), 0 0 15px color-mix(in srgb, var(--tag-color) 80%, transparent) !important;
              }
              @keyframes enchantedText {
                0% { background-position: 0% 50%; filter: drop-shadow(0px 5px 25px rgba(94, 162, 232, 0.6)); }
                25% { filter: drop-shadow(0px 5px 25px rgba(160, 32, 240, 0.6)); }
                50% { background-position: 100% 50%; filter: drop-shadow(0px 5px 25px rgba(255, 20, 147, 0.6)); }
                75% { filter: drop-shadow(0px 5px 25px rgba(0, 255, 204, 0.6)); }
                100% { background-position: 0% 50%; filter: drop-shadow(0px 5px 25px rgba(94, 162, 232, 0.6)); }
              }
            `}} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--mc-green)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--mc-green)' }}></div>
              Available for work - Chennai, India
            </div>

            <h1 className="hero-title sexy-move" style={{
              background: 'linear-gradient(45deg, #5ea2e8, #a020f0, #ff1493, #00ffcc)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'enchantedText 6s ease infinite, sexyMove 3s ease-in-out infinite',
              marginBottom: '1.5rem',
              display: 'inline-block',
              paddingRight: '20px'
            }}>
              RISHAV<br/>DAS
            </h1>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {[
                { text: 'Plugin Developer', color: 'var(--mc-green)' },
                { text: 'Resource Pack Creator', color: 'var(--mc-yellow)' },
                { text: 'Verified Discord Bot Dev', color: '#5ea2e8' },
                { text: 'Texture Pack Dev', color: 'var(--mc-gold)' },
                { text: 'Minecraft Launcher Builder', color: 'var(--mc-red)' },
                { text: 'Website Developer', color: '#ff69b4' },
                { text: 'App Developer', color: '#00ffcc' },
                { text: 'Full Stack Engineer', color: '#ff9900' },
                { text: 'API Architect', color: '#a020f0' },
                { text: 'UI/UX Designer', color: '#ff1493' },
                { text: 'Cloud Systems Architect', color: '#00ced1' },
                { text: 'Database Expert', color: '#32cd32' },
                { text: 'Shader Packs Developer', color: '#8a2be2' },
                { text: 'Mod Developer', color: '#ff4500' },
                { text: 'Server Administrator', color: '#4682b4' },
                { text: '3D Modeler', color: '#ff8c00' }
              ].map((role, i) => (
                <div key={i} className="role-tag-modern" style={{
                  '--tag-color': role.color,
                  border: `1px solid color-mix(in srgb, var(--tag-color) 40%, transparent)`,
                  backgroundColor: `color-mix(in srgb, var(--tag-color) 10%, transparent)`,
                  color: 'var(--tag-color)',
                  boxShadow: `0 0 10px color-mix(in srgb, var(--tag-color) 20%, transparent)`,
                  animation: `float${i % 3} ${4 + (i % 3)}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.2}s`
                } as React.CSSProperties}>
                  <span style={{ fontSize: '1.2rem', textShadow: `0 0 10px var(--tag-color)` }}>•</span>
                  {role.text}
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--mc-gray)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px' }}>
              I build custom Minecraft experiences end-to-end - from optimized plugins and APIs to high-quality resource packs and complex server setups. Every system I design is intentional.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
              <Link href="#work" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                backgroundColor: 'var(--mc-gold)',
                color: '#000',
                border: '2px solid var(--mc-yellow)',
                borderBottomWidth: '4px',
                borderRightWidth: '4px',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }} className="mc-button-action">
                <span style={{ fontSize: '1.5rem' }}>▶</span> View Work
              </Link>

              <Link href="#contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                backgroundColor: '#444',
                color: '#fff',
                border: '2px solid #666',
                borderBottomWidth: '4px',
                borderRightWidth: '4px',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }} className="mc-button-action">
                ✉ Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { icon: 'nether_star.png', num: '50+', label: 'Projects' },
                { icon: 'diamond_sword.png', num: '4+', label: 'Years' },
                { icon: 'emerald.png', num: '200+', label: 'Customers' }
              ].map((stat, i) => (
                <div key={i} style={{
                  minWidth: '100px',
                  padding: '0 1rem',
                  height: '100px',
                  border: '2px solid #444',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <Image src={`/minecraft/item/${stat.icon}`} alt={stat.label} width={32} height={32} style={{ width: '32px', height: '32px' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--mc-yellow)', fontWeight: 'bold' }}>{stat.num}</div>
                    <div style={{ color: '#888', fontSize: '0.9rem' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div style={{ 
              border: '4px solid #333', 
              backgroundColor: '#111', 
              padding: '1.5rem', 
              marginTop: '3rem',
              boxShadow: 'inset 4px 4px 0px 0px rgba(0,0,0,0.5)'
            }}>
              <h2 style={{ color: 'var(--mc-yellow)', marginBottom: '1rem', fontSize: '1.5rem', textTransform: 'uppercase' }}>Technical Arsenal</h2>
              
              <div className="responsive-grid-2">
                <div>
                  <div style={{ color: 'var(--mc-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>&gt; Languages & Data</div>
                  <div style={{ color: 'var(--mc-gray)', fontSize: '1.1rem', lineHeight: '1.5' }}>Java, Python, C, C++, TypeScript (TS), TSX, JavaScript, HTML, CSS, JSON, YAML, XML</div>
                </div>
                <div>
                  <div style={{ color: 'var(--mc-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>&gt; Databases & Cache</div>
                  <div style={{ color: 'var(--mc-gray)', fontSize: '1.1rem', lineHeight: '1.5' }}>MySQL, MongoDB, PostgreSQL, Redis, SQLite, MariaDB</div>
                </div>
                <div>
                  <div style={{ color: 'var(--mc-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>&gt; Minecraft & Frameworks</div>
                  <div style={{ color: 'var(--mc-gray)', fontSize: '1.1rem', lineHeight: '1.5' }}>Spigot/Paper API, BungeeCord, NMS, React, Next.js, Node.js, Blockbench</div>
                </div>
                <div>
                  <div style={{ color: 'var(--mc-green)', fontWeight: 'bold', marginBottom: '0.5rem' }}>&gt; AI / ML & Tools</div>
                  <div style={{ color: 'var(--mc-gray)', fontSize: '1.1rem', lineHeight: '1.5' }}>LLMs, Machine Learning, AI Integration, Git, Docker, Linux, Gradle</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 2D Scene */}
            <div style={{ 
              height: '250px', 
              backgroundColor: '#5ea2e8', 
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid #000'
            }}>
              {/* Ground */}
              <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '40px', display: 'flex' }}>
                {Array.from({ length: 15 }).map((_, i) => (
                  <Image key={`grass-${i}`} src="/minecraft/block/grass_block_side.png" width={40} height={40} style={{ width: '40px', height: '40px' }} alt="grass" />
                ))}
              </div>
              <div style={{ position: 'absolute', bottom: '-40px', width: '100%', height: '40px', display: 'flex' }}>
                {Array.from({ length: 15 }).map((_, i) => (
                  <Image key={`dirt-${i}`} src="/minecraft/block/dirt.png" width={40} height={40} style={{ width: '40px', height: '40px' }} alt="dirt" />
                ))}
              </div>
              {/* Cherry Blossom Tree (Left) */}
              <div style={{ position: 'absolute', bottom: '40px', left: '2%', width: '120px', height: '160px' }}>
                <Image src="/minecraft/block/cherry_log.png" width={40} height={40} style={{ position: 'absolute', bottom: '0', left: '40px', width: '40px', height: '40px' }} alt="log" />
                <Image src="/minecraft/block/cherry_log.png" width={40} height={40} style={{ position: 'absolute', bottom: '40px', left: '40px', width: '40px', height: '40px' }} alt="log" />
                
                <Image src="/minecraft/block/cherry_leaves.png" width={40} height={40} style={{ position: 'absolute', bottom: '80px', left: '0px', width: '40px', height: '40px' }} alt="leaves" />
                <Image src="/minecraft/block/cherry_leaves.png" width={40} height={40} style={{ position: 'absolute', bottom: '80px', left: '40px', width: '40px', height: '40px' }} alt="leaves" />
                <Image src="/minecraft/block/cherry_leaves.png" width={40} height={40} style={{ position: 'absolute', bottom: '80px', left: '80px', width: '40px', height: '40px' }} alt="leaves" />
                
                <Image src="/minecraft/block/cherry_leaves.png" width={40} height={40} style={{ position: 'absolute', bottom: '120px', left: '40px', width: '40px', height: '40px' }} alt="leaves" />
              </div>

              {/* Oak Tree (Right) */}
              <div style={{ position: 'absolute', bottom: '40px', right: '2%', width: '120px', height: '160px' }}>
                <Image src="/minecraft/block/oak_log.png" width={40} height={40} className="broken-log" style={{ position: 'absolute', bottom: '0', left: '40px', width: '40px', height: '40px' }} alt="log" />
                <Image src="/minecraft/block/oak_log.png" width={40} height={40} style={{ position: 'absolute', bottom: '40px', left: '40px', width: '40px', height: '40px' }} alt="log" />
                
                <Image src="/minecraft/block/oak_leaves.png" width={40} height={40} className="broken-leaves" style={{ position: 'absolute', bottom: '80px', left: '0px', width: '40px', height: '40px' }} alt="leaves" />
                <Image src="/minecraft/block/oak_leaves.png" width={40} height={40} className="broken-leaves" style={{ position: 'absolute', bottom: '80px', left: '40px', width: '40px', height: '40px' }} alt="leaves" />
                <Image src="/minecraft/block/oak_leaves.png" width={40} height={40} className="broken-leaves" style={{ position: 'absolute', bottom: '80px', left: '80px', width: '40px', height: '40px' }} alt="leaves" />
                
                <Image src="/minecraft/block/oak_leaves.png" width={40} height={40} className="broken-leaves" style={{ position: 'absolute', bottom: '120px', left: '40px', width: '40px', height: '40px' }} alt="leaves" />
              </div>

              {/* Animated Steve */}
              <div className="steve">
                <div className="s-head"></div>
                <div className="s-body"></div>
                <div className="s-arm s-arm-l"></div>
                <div className="s-arm s-arm-r">
                  <div className="s-axe"></div>
                </div>
                <div className="s-leg s-leg-l"></div>
                <div className="s-leg s-leg-r"></div>
              </div>
            </div>

            {/* User Image in Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                border: '12px solid #8B5A2B',
                outline: '4px solid #5C3A21',
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1 / 1',
                backgroundColor: '#333'
              }}>
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <Image src="/images/profile.png" alt="Rishav Das" fill={true} style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 60%, transparent 100%)',
                padding: '2rem 1rem 1rem 1rem',
                textAlign: 'center',
                backdropFilter: 'blur(2px)'
              }}>
                <div style={{ 
                  color: '#fff', 
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  letterSpacing: '3px',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
                  marginBottom: '0.5rem',
                  fontFamily: 'monospace'
                }}>
                  RISHAV DAS
                </div>
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  justifyContent: 'center', 
                  flexWrap: 'wrap'
                }}>
                  {[
                    { text: 'Full Stack', color: '#ff1493' },
                    { text: 'Shader Dev', color: '#00ffcc' },
                    { text: 'UI/UX', color: '#ff9900' }
                  ].map((role, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      color: role.color,
                      backgroundColor: `${role.color}15`,
                      border: `1px solid ${role.color}50`,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: `0 0 10px ${role.color}40`,
                      animation: `float${idx % 3} ${4 + idx}s ease-in-out infinite`
                    }}>
                      {role.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about" style={{ paddingTop: '4rem' }}><AboutSection /></section>
      <section id="skills" style={{ paddingTop: '4rem' }}><SkillsSection /></section>
      <section id="experience" style={{ paddingTop: '4rem' }}><ExperienceSection /></section>
      <section id="work" style={{ paddingTop: '4rem' }}><WorkSection /></section>
      <section id="services" style={{ paddingTop: '4rem' }}><ServicesSection /></section>
      <section id="contact" style={{ paddingTop: '4rem' }}><ContactSection /></section>
    </div>
  );
}
