import React from 'react';
import { siteConfig } from '../../data/config';
import Button from '../../components/Button';

const SERVICES = [
  {
    title: 'Core Server Plugins',
    category: 'MINECRAFT',
    icon: '⚡',
    color: '#00ffcc',
    desc: 'High-performance, bespoke Java plugins engineered for Spigot and Paper. From complex economy systems to unique gameplay mechanics, I build robust backend systems that scale without impacting TPS.',
    features: ['Custom Mechanics', 'Asynchronous processing', 'NMS manipulation', 'Economy & GUIs']
  },
  {
    title: 'Full-Stack Web Apps',
    category: 'WEB DEV',
    icon: '🌐',
    color: '#ff1493',
    desc: 'Modern, responsive, and blazing-fast web applications built with React and Next.js. I design pixel-perfect UI/UX interfaces connected to powerful backends and scalable databases.',
    features: ['Next.js & React', 'API Architecture', 'Sleek UI/UX Design', 'Database Integration']
  },
  {
    title: 'Resource & Shader Packs',
    category: 'VISUALS',
    icon: '🎨',
    color: '#8a2be2',
    desc: 'Transform your game visually without client-side mods. I craft custom UI menus, 3D models via Blockbench, animated textures, and stunning shader pack modifications.',
    features: ['Blockbench 3D Models', 'Custom UI/Fonts', 'Emissive Textures', 'Shader Tweaks']
  },
  {
    title: 'Advanced Discord Systems',
    category: 'AUTOMATION',
    icon: '🤖',
    color: '#5865F2',
    desc: 'Sophisticated Discord bots and integrations that bridge the gap between your community and your servers. Featuring advanced verification, ticketing, and live syncing.',
    features: ['Live Server Sync', 'Custom Slash Commands', 'Automated Moderation', 'OAuth2 Integrations']
  },
  {
    title: 'Cloud & Database Architecture',
    category: 'INFRASTRUCTURE',
    icon: '☁️',
    color: '#32cd32',
    desc: 'Enterprise-grade database schemas and cloud setups. From Redis caching layers to complex MySQL/MongoDB distributed structures designed for maximum data integrity.',
    features: ['MySQL / MongoDB', 'Redis Caching', 'Data Migration', 'Performance Tuning']
  },
  {
    title: 'Network DevOps',
    category: 'SYSTEMS',
    icon: '🛡️',
    color: '#ff9900',
    desc: 'Linux server administration and high-availability proxy configurations (BungeeCord/Velocity). I identify bottlenecks, optimize threads, and secure your network.',
    features: ['BungeeCord / Velocity', 'Linux Administration', 'TPS Profiling', 'DDoS Mitigation']
  },
  {
    title: 'Mod Development',
    category: 'MINECRAFT',
    icon: '⚙️',
    color: '#ff4500',
    desc: 'Client-side and server-side modding using Forge or Fabric. Bringing entirely new dimensions, custom entities, and complex systems that go far beyond vanilla capabilities.',
    features: ['Forge & Fabric', 'Custom Entities', 'World Generation', 'Client-side Systems']
  },
  {
    title: 'Custom Launchers',
    category: 'SOFTWARE',
    icon: '🚀',
    color: '#ff0000',
    desc: 'Standalone desktop applications and custom Minecraft launchers tailored to your brand, ensuring players have a seamless, secure, and branded entry into your network.',
    features: ['Auto-updaters', 'Branded UI', 'Secure Auth', 'Modpack Integration']
  }
];

export default function Services() {
  return (
    <div style={{ 
      padding: '6rem 2rem',
      backgroundColor: '#050505',
      backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.1) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(0, 255, 204, 0.1) 0%, transparent 40%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ 
            padding: '0.4rem 0.8rem', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            color: '#aaa',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '4px',
            fontSize: '0.9rem',
            letterSpacing: '2px'
          }}>
            04 // SERVICES
          </div>
        </div>

        <div style={{ marginBottom: '5rem' }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '4.5rem',
            color: '#fff',
            textShadow: '0 0 30px rgba(255, 20, 147, 0.4)',
            fontFamily: 'monospace',
            letterSpacing: '-2px',
            textTransform: 'uppercase'
          }}>
            SYSTEM_MODULES
          </h1>
          <p style={{ color: '#888', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px' }}>
            Comprehensive engineering solutions ranging from highly optimized game mechanics to full-stack web applications and robust cloud infrastructure.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {SERVICES.map((svc, i) => (
            <div key={i} className="service-card" style={{
              backgroundColor: 'rgba(20, 20, 20, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px',
              padding: '2.5rem',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: svc.color, opacity: 0.8 }} className="accent-line"></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', filter: `drop-shadow(0 0 10px ${svc.color}80)` }}>{svc.icon}</div>
                <div style={{ 
                  color: svc.color,
                  backgroundColor: `${svc.color}15`,
                  border: `1px solid ${svc.color}40`,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}>
                  {svc.category}
                </div>
              </div>

              <h2 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '600' }}>{svc.title}</h2>
              <p style={{ color: '#a0aab2', fontSize: '1.05rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '2rem' }}>
                {svc.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {svc.features.map((feat, j) => (
                  <span key={j} style={{ 
                    color: '#d1d8d5', 
                    fontSize: '0.85rem', 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '6rem', 
          textAlign: 'center',
          backgroundColor: 'rgba(255, 20, 147, 0.05)',
          border: '1px solid rgba(255, 20, 147, 0.2)',
          borderRadius: '20px',
          padding: '4rem 2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', textShadow: '0 0 15px rgba(255,20,147,0.5)' }}>Ready to initialize a project?</h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Whether it&apos;s a complex web application, a robust server network, or a custom plugin, I&apos;m ready to bring your vision to life.
          </p>
          <Button href={siteConfig.ticketUrl} variant="primary">
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
              Commence Uplink 📡
            </span>
          </Button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.8);
          border-color: rgba(255,255,255,0.2) !important;
        }
        .service-card:hover .accent-line {
          box-shadow: 0 0 20px currentColor;
        }
      `}} />
    </div>
  );
}
