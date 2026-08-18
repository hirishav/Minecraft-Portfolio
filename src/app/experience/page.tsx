import React from 'react';
import Image from 'next/image';

const LOGS = [
  {
    id: 1,
    icon: 'book.png',
    title: 'Senior Java Developer',
    company: 'Top-Tier Factions Network',
    type: 'PLUGIN DEV',
    date: '2023 - Present',
    desc: [
      'Architected highly scalable server mechanics capable of supporting 1000+ concurrent players without TPS drops.',
      'Built custom asynchronous database caching layers (Redis/MongoDB) for real-time data sync across distributed servers.'
    ]
  },
  {
    id: 2,
    icon: 'gold_ingot.png',
    title: 'Custom Systems Engineer',
    company: 'Independent Clients',
    type: 'FREELANCE',
    date: '2022 - Present',
    desc: [
      'Developed bespoke Spigot and Paper plugins, delivering complex economy integrations and dynamic GUI frameworks.',
      'Collaborated closely with server owners to translate unique game design concepts into optimized, bug-free production code.'
    ]
  },
  {
    id: 3,
    icon: 'stick.png',
    title: 'Technical Asset Designer',
    company: 'RPG & SMP Servers',
    type: 'RESOURCE PACKS',
    date: '2022 - 2023',
    desc: [
      'Crafted immersive 3D models and high-resolution textures using Blockbench for custom weapons, mobs, and UI elements.',
      'Integrated assets seamlessly using resource pack frameworks (Oraxen/ItemsAdder) to enhance player immersion without client-side mods.'
    ]
  },
  {
    id: 4,
    icon: 'iron_ingot.png',
    title: 'Network Architect & Admin',
    company: 'Competitive PvP Network',
    type: 'DEVOPS',
    date: '2021 - 2022',
    desc: [
      'Orchestrated and managed high-availability BungeeCord and Velocity proxy setups on Linux-based dedicated servers.',
      'Performed deep performance profiling using Timings v2 and Spark to identify and eliminate severe thread locks and lag spikes.'
    ]
  }
];

export default function Experience() {
  return (
    <div style={{ 
      margin: '-2rem -3rem', // offset the padding from layout
      padding: '6rem 3rem',
      backgroundColor: '#050505',
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(94, 162, 232, 0.1) 0%, transparent 50%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      backgroundSize: '100% 100%, 40px 40px, 40px 40px',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            03 // EXPERIENCE
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '5rem' }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '4rem',
            color: '#fff',
            textShadow: '0 0 20px rgba(255,255,255,0.3)',
            fontFamily: 'monospace',
            letterSpacing: '-2px'
          }}>
            EXECUTION_LOG
          </h1>
          <div style={{ 
            padding: '0.6rem 1.2rem', 
            color: '#5ea2e8', 
            backgroundColor: 'rgba(94, 162, 232, 0.1)', 
            border: '1px solid rgba(94, 162, 232, 0.3)',
            borderRadius: '20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 0 15px rgba(94, 162, 232, 0.2)'
          }}>
            8 Deployments • 4+ Years Active
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '42px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(to bottom, #5ea2e8, rgba(94,162,232,0.1))',
            zIndex: -1
          }}></div>

          {LOGS.map(log => (
            <div key={log.id} style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
              position: 'relative'
            }} className="experience-card">
              
              <div style={{
                width: '84px',
                height: '84px',
                flexShrink: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#111',
                border: '2px solid #333',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
                transition: 'all 0.3s ease',
                zIndex: 2
              }} className="icon-container">
                <Image src={`/minecraft/item/${log.icon}`} alt={log.title} width={48} height={48} style={{ width: '48px', height: '48px', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.5))' }} />
              </div>
              
              <div style={{ 
                flex: 1,
                backgroundColor: 'rgba(20, 20, 20, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
              }} className="content-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 0.5rem 0', fontWeight: '600' }}>{log.title}</h2>
                    <div style={{ color: '#888', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#5ea2e8' }}>@</span> {log.company}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <div style={{ 
                      color: log.type === 'PLUGIN DEV' ? '#00ffcc' : log.type === 'FREELANCE' ? '#ff9900' : '#ff1493', 
                      backgroundColor: log.type === 'PLUGIN DEV' ? 'rgba(0, 255, 204, 0.1)' : log.type === 'FREELANCE' ? 'rgba(255, 153, 0, 0.1)' : 'rgba(255, 20, 147, 0.1)',
                      border: `1px solid ${log.type === 'PLUGIN DEV' ? 'rgba(0, 255, 204, 0.3)' : log.type === 'FREELANCE' ? 'rgba(255, 153, 0, 0.3)' : 'rgba(255, 20, 147, 0.3)'}`,
                      padding: '4px 12px', 
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      letterSpacing: '1px'
                    }}>
                      {log.type}
                    </div>
                    <div style={{ color: '#666', fontSize: '0.95rem', fontFamily: 'monospace' }}>{log.date}</div>
                  </div>
                </div>

                <ul style={{ color: '#d1d8d5', listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {log.desc.map((bullet, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '1.8rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
                      <span style={{ position: 'absolute', left: 0, top: '2px', color: '#5ea2e8', fontSize: '1.2rem' }}>▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .experience-card:hover .icon-container {
          border-color: #5ea2e8 !important;
          box-shadow: 0 0 20px rgba(94, 162, 232, 0.4) !important;
          transform: scale(1.05);
        }
        .experience-card:hover .content-container {
          background-color: rgba(30, 30, 30, 0.9) !important;
          border-color: rgba(255,255,255,0.1) !important;
          transform: translateX(5px);
        }
      `}} />
    </div>
  );
}
