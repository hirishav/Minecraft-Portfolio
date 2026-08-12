"use client";
import React, { useState } from 'react';

const SKILLS = [
  // --- LEGENDARY (Row 1) ---
  { id: 1, icon: 'diamond_sword.png', name: 'Java', rarity: 'Legendary', type: 'Languages', desc: 'Primary development language for Minecraft plugins and mods.' },
  { id: 2, icon: 'redstone.png', name: 'Spigot & Paper API', rarity: 'Legendary', type: 'Minecraft', desc: 'Core framework for building highly optimized server plugins.' },
  { id: 3, icon: 'command_block.png', name: 'NMS (Net Server)', rarity: 'Legendary', type: 'Minecraft', desc: 'Deep-level server modifications and custom packets.' },
  { id: 5, icon: 'nether_star.png', name: 'React & Next.js', rarity: 'Legendary', type: 'Frameworks', desc: 'Building dynamic and fast web interfaces and portfolios.' },
  { id: 6, icon: 'enchanted_book.png', name: 'AI & ML', rarity: 'Legendary', type: 'Tools', desc: 'LLMs, AI integration, and prompt engineering.' },
  { id: 7, icon: 'filled_map.png', name: 'BungeeCord & Velocity', rarity: 'Legendary', type: 'Minecraft', desc: 'Proxy software for creating scalable server networks.' },

  // --- EPIC (Row 2) ---
  { id: 10, icon: 'emerald.png', name: 'Python', rarity: 'Epic', type: 'Languages', desc: 'Versatile language for scripting, backend, and AI integration.' },
  { id: 11, icon: 'lapis_lazuli.png', name: 'TypeScript / TSX', rarity: 'Epic', type: 'Languages', desc: 'Type-safe web development for modern applications.' },
  { id: 12, icon: 'music_disc_13.png', name: 'Blockbench', rarity: 'Epic', type: 'Minecraft', desc: 'Custom 3D modeling and texturing for resource packs.' },
  { id: 14, icon: 'iron_pickaxe.png', name: 'DevOps & Linux', rarity: 'Epic', type: 'Tools', desc: 'Linux environments, Docker containerization, and Git.' },
  { id: 15, icon: 'experience_bottle.png', name: 'Forge & Fabric', rarity: 'Epic', type: 'Minecraft', desc: 'Creating custom client and server-side modifications.' },
  { id: 16, icon: 'ender_pearl.png', name: 'Cloud & VPS Hosting', rarity: 'Epic', type: 'Tools', desc: 'Deploying and managing scalable Minecraft networks.' },

  // --- RARE & COMMON (Row 3) ---
  { id: 19, icon: 'iron_sword.png', name: 'C & C++', rarity: 'Rare', type: 'Languages', desc: 'Low-level performance and systems programming.' },
  { id: 20, icon: 'slime_ball.png', name: 'Node.js', rarity: 'Rare', type: 'Frameworks', desc: 'Backend runtime for scalable web apps and Discord bots.' },
  { id: 21, icon: 'bucket.png', name: 'SQL Databases', rarity: 'Rare', type: 'Data', desc: 'MySQL, PostgreSQL, MariaDB, SQLite for relational data.' },
  { id: 23, icon: 'magma_cream.png', name: 'NoSQL & Cache', rarity: 'Rare', type: 'Data', desc: 'MongoDB and Redis for fast, flexible data storage.' },
  { id: 24, icon: 'gold_ingot.png', name: 'Web Fundamentals', rarity: 'Common', type: 'Languages', desc: 'JavaScript, HTML, CSS for building intuitive frontends.' },
  { id: 25, icon: 'paper.png', name: 'Data Serialization', rarity: 'Common', type: 'Data', desc: 'JSON, YAML, XML for configuration and data exchange.' },
  { id: 22, icon: 'book.png', name: 'Gradle & Maven', rarity: 'Rare', type: 'Tools', desc: 'Build automation tools for Java and Kotlin projects.' },
];

export default function Skills() {
  const [hovered, setHovered] = useState<any>(null);

  return (
    <div style={{ marginTop: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ padding: '0.2rem 0.5rem', border: '1px solid var(--mc-green)', color: 'var(--mc-green)' }}>
          02 - SKILLS
        </div>
      </div>
      <h1 className="mc-shadow" style={{ fontSize: '4rem', color: '#fff', marginBottom: '1rem' }}>INVENTORY</h1>
      <p style={{ color: '#aaa', marginBottom: '4rem' }}>
        Hover an item to inspect it. 
        <span style={{ color: '#fff', marginLeft: '1rem' }}>Common</span>
        <span style={{ color: '#5555FF', marginLeft: '1rem' }}>Rare</span>
        <span style={{ color: '#FF55FF', marginLeft: '1rem' }}>Epic</span>
        <span style={{ color: '#FFAA00', marginLeft: '1rem' }}>Legendary</span>
      </p>

      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        {/* Inventory Background Container */}
        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>
          <div className="inventory-scale" style={{ 
            backgroundImage: 'url(/minecraft/gui/container/inventory.png)',
            backgroundSize: '512px 512px',
            backgroundPosition: 'top left',
            imageRendering: 'pixelated',
            position: 'relative',
            margin: '0 auto'
          }}>
            {/* Inventory Grid (Scaled 2x from 256x256 sprite) */}
            <div style={{ 
              position: 'absolute', 
              top: '168px', 
              left: '16px', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(9, 36px)', 
              gridTemplateRows: 'repeat(3, 36px)',
              gap: '0px'
            }}>
              {Array.from({ length: 27 }).map((_, i) => {
                const skill = SKILLS.find(s => s.id === i);
                return (
                  <div 
                    key={i} 
                    style={{ width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: skill ? 'pointer' : 'default' }}
                    onMouseEnter={() => skill && setHovered(skill)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => skill && setHovered(skill)}
                  >
                    {skill && (
                      <img 
                        src={`/minecraft/item/${skill.icon}`} 
                        alt={skill.name} 
                        style={{ 
                          width: '32px', 
                          height: '32px',
                          ...(skill.icon === 'command_block.png' ? { objectFit: 'cover', objectPosition: 'top' } : { objectFit: 'contain' })
                        }} 
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tooltip Display */}
        {hovered ? (
          <div style={{ 
            border: '2px solid #360094', 
            backgroundColor: '#100010', 
            padding: '1rem',
            width: '400px',
            height: 'fit-content',
            boxShadow: 'inset 0 0 0 2px #100010, inset 0 0 0 4px #260058'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img 
                src={`/minecraft/item/${hovered.icon}`} 
                alt={hovered.name} 
                style={{ 
                  width: '32px', 
                  height: '32px',
                  ...(hovered.icon === 'command_block.png' ? { objectFit: 'cover', objectPosition: 'top' } : { objectFit: 'contain' })
                }} 
              />
              <div>
                <div style={{ color: hovered.rarity === 'Legendary' ? '#FFAA00' : hovered.rarity === 'Epic' ? '#FF55FF' : '#5555FF', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {hovered.name}
                </div>
                <div style={{ color: hovered.rarity === 'Legendary' ? '#FFAA00' : hovered.rarity === 'Epic' ? '#FF55FF' : '#5555FF', textTransform: 'uppercase', fontSize: '0.8rem', border: '1px solid', padding: '0 4px', display: 'inline-block' }}>
                  {hovered.rarity}
                </div>
              </div>
            </div>
            
            <div style={{ color: '#aaa', marginBottom: '1rem' }}>
              Category: <span style={{ color: '#fff' }}>{hovered.type}</span>
            </div>
            
            <div style={{ color: '#5555FF' }}>
              {hovered.desc}
            </div>
          </div>
        ) : (
          <div className="hide-on-mobile" style={{ width: '400px' }}></div>
        )}
      </div>
    </div>
  );
}
