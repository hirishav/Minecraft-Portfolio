import React from 'react';

const QUESTS = [
  {
    id: 1,
    icon: 'book.png',
    title: 'Senior Java Developer',
    company: 'Top-Tier Factions Network',
    type: 'PLUGIN DEV',
    date: '2023-Now',
    desc: [
      'Engineered high-performance core server mechanics to support large concurrent player bases.',
      'Developed custom asynchronous database solutions for rapid data retrieval without impacting TPS.'
    ]
  },
  {
    id: 2,
    icon: 'gold_ingot.png',
    title: 'Custom Systems Engineer',
    company: 'Various Independent Clients',
    type: 'FREELANCE',
    date: '2022-Now',
    desc: [
      'Designed and delivered custom Spigot and Paper plugins ranging from complex economy systems to advanced GUIs.',
      'Consistently met strict client deadlines while maintaining bug-free, highly optimized codebases.'
    ]
  },
  {
    id: 3,
    icon: 'stick.png',
    title: 'Technical Asset Designer',
    company: 'RPG & SMP Servers',
    type: 'RESOURCE PACKS',
    date: '2022-2023',
    desc: [
      'Modeled and textured unique 3D items, weapons, and UI elements utilizing Blockbench.',
      'Seamlessly integrated assets into live environments using frameworks like Oraxen and ItemsAdder.'
    ]
  },
  {
    id: 4,
    icon: 'iron_ingot.png',
    title: 'Network Architect & Admin',
    company: 'Competitive PvP Network',
    type: 'DEVOPS',
    date: '2021-2022',
    desc: [
      'Configured and maintained scalable network environments via BungeeCord/Velocity on Linux systems.',
      'Profiled and resolved severe TPS bottlenecks using tools like Spark and Timings v2.'
    ]
  }
];

export default function Experience() {
  return (
    <div style={{ 
      margin: '-2rem -3rem', // offset the padding from layout
      padding: '4rem 3rem',
      backgroundImage: 'url(/minecraft/gui/options_background.png)',
      backgroundSize: '64px 64px',
      imageRendering: 'pixelated',
      minHeight: '100vh',
      boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.5)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.2rem 0.5rem', border: '1px solid var(--mc-yellow)', color: 'var(--mc-yellow)' }}>
            03 - EXPERIENCE
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
          <h1 className="mc-shadow hero-title" style={{ margin: 0 }}>QUEST LOG</h1>
          <div style={{ border: '2px solid #555', padding: '0.5rem 1rem', color: 'var(--mc-gold)', backgroundColor: 'rgba(0,0,0,0.5)', width: 'fit-content' }}>
            8 Quests Complete • 4 Years Active
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {QUESTS.map(quest => (
            <div key={quest.id} style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid #222',
              borderTopColor: '#555',
              borderLeftColor: '#555',
              position: 'relative'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                flexShrink: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                border: '2px solid #000'
              }}>
                <img src={`/minecraft/item/${quest.icon}`} alt={quest.title} style={{ width: '48px', height: '48px' }} />
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>{quest.title}</h2>
                    <div style={{ color: '#aaa', fontSize: '1.1rem' }}>{quest.company}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: quest.type === 'PLUGIN DEV' ? '#55FF55' : quest.type === 'FREELANCE' ? '#FFAA00' : '#FF55FF', border: `1px solid ${quest.type === 'PLUGIN DEV' ? '#55FF55' : quest.type === 'FREELANCE' ? '#FFAA00' : '#FF55FF'}`, padding: '2px 6px', display: 'inline-block', marginBottom: '4px' }}>
                      {quest.type}
                    </div>
                    <div style={{ color: '#555', fontSize: '0.9rem' }}>{quest.date}</div>
                  </div>
                </div>

                <ul style={{ color: '#FFAA00', listStyleType: 'none', padding: 0 }}>
                  {quest.desc.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
                      <span style={{ position: 'absolute', left: 0, top: '4px', fontSize: '0.8rem' }}>▶</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
