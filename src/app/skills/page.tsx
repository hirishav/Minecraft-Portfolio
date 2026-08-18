"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const SKILLS = [
  // --- LEGENDARY ---
  { id: 1, icon: 'diamond_sword.png', name: 'Java', rarity: 'Legendary', color: '#FFAA00', type: 'Languages', desc: 'Primary development language for Minecraft plugins and scalable backend systems.' },
  { id: 2, icon: 'redstone.png', name: 'Spigot & Paper API', rarity: 'Legendary', color: '#FFAA00', type: 'Minecraft', desc: 'Core framework for building highly optimized server plugins and mechanics.' },
  { id: 3, icon: 'command_block.png', name: 'NMS (Net Server)', rarity: 'Legendary', color: '#FFAA00', type: 'Minecraft', desc: 'Deep-level server modifications and custom packets.' },
  { id: 4, icon: 'nether_star.png', name: 'React & Next.js', rarity: 'Legendary', color: '#FFAA00', type: 'Frameworks', desc: 'Building dynamic, blazing-fast web interfaces, portfolios, and full-stack apps.' },
  { id: 5, icon: 'enchanted_book.png', name: 'AI & ML Integration', rarity: 'Legendary', color: '#FFAA00', type: 'Tools', desc: 'LLMs, AI integration, prompt engineering, and intelligent system design.' },
  { id: 6, icon: 'filled_map.png', name: 'BungeeCord & Velocity', rarity: 'Legendary', color: '#FFAA00', type: 'Minecraft', desc: 'Proxy software for architecting and deploying scalable server networks.' },
  { id: 7, icon: 'ender_eye.png', name: 'Shader Packs', rarity: 'Legendary', color: '#FFAA00', type: 'Minecraft', desc: 'Advanced GLSL shader development for immersive visual overhauls.' },

  // --- EPIC ---
  { id: 10, icon: 'emerald.png', name: 'Python', rarity: 'Epic', color: '#FF55FF', type: 'Languages', desc: 'Versatile language for scripting, backend services, and machine learning.' },
  { id: 11, icon: 'lapis_lazuli.png', name: 'TypeScript / TSX', rarity: 'Epic', color: '#FF55FF', type: 'Languages', desc: 'Type-safe web development for modern, robust web applications.' },
  { id: 12, icon: 'music_disc_13.png', name: 'Blockbench & 3D Modeling', rarity: 'Epic', color: '#FF55FF', type: 'Design', desc: 'Custom 3D modeling and high-resolution texturing for resource packs.' },
  { id: 13, icon: 'iron_pickaxe.png', name: 'DevOps & Linux', rarity: 'Epic', color: '#FF55FF', type: 'Tools', desc: 'Linux environments, Docker containerization, and automated CI/CD pipelines.' },
  { id: 14, icon: 'experience_bottle.png', name: 'Forge & Fabric', rarity: 'Epic', color: '#FF55FF', type: 'Minecraft', desc: 'Creating custom client-side and server-side mod modifications.' },
  { id: 15, icon: 'ender_pearl.png', name: 'Cloud Architecture', rarity: 'Epic', color: '#FF55FF', type: 'Infrastructure', desc: 'Deploying and managing scalable Minecraft networks on AWS, GCP, and VPS.' },
  { id: 16, icon: 'compass.png', name: 'UI/UX Design', rarity: 'Epic', color: '#FF55FF', type: 'Design', desc: 'Designing intuitive, engaging, and modern user interfaces for web and game.' },

  // --- RARE & COMMON ---
  { id: 19, icon: 'iron_sword.png', name: 'C & C++', rarity: 'Rare', color: '#5555FF', type: 'Languages', desc: 'Low-level performance, game engines, and systems programming.' },
  { id: 20, icon: 'slime_ball.png', name: 'Node.js', rarity: 'Rare', color: '#5555FF', type: 'Frameworks', desc: 'Backend runtime for scalable web APIs and sophisticated Discord bots.' },
  { id: 21, icon: 'bucket.png', name: 'SQL Databases', rarity: 'Rare', color: '#5555FF', type: 'Data', desc: 'MySQL, PostgreSQL, MariaDB for complex, relational data structures.' },
  { id: 22, icon: 'magma_cream.png', name: 'NoSQL & Cache', rarity: 'Rare', color: '#5555FF', type: 'Data', desc: 'MongoDB and Redis for lightning-fast, flexible data storage.' },
  { id: 23, icon: 'gold_ingot.png', name: 'Web Fundamentals', rarity: 'Common', color: '#ffffff', type: 'Languages', desc: 'JavaScript, HTML, CSS for building intuitive frontends.' },
  { id: 24, icon: 'paper.png', name: 'Data Serialization', rarity: 'Common', color: '#ffffff', type: 'Data', desc: 'JSON, YAML, XML for configuration and cross-platform data exchange.' },
  { id: 25, icon: 'book.png', name: 'Gradle & Maven', rarity: 'Rare', color: '#5555FF', type: 'Tools', desc: 'Build automation tools for seamless Java and Kotlin project compilation.' },
];

export default function Skills() {
  const [hovered, setHovered] = useState<typeof SKILLS[0] | null>(null);

  return (
    <div style={{ 
      padding: '6rem 2rem', 
      backgroundColor: '#050505',
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            02 // TECH_ARSENAL
          </div>
        </div>
        
        <h1 style={{ 
          fontSize: '4rem', 
          color: '#fff', 
          marginBottom: '1rem',
          fontFamily: 'monospace',
          letterSpacing: '-2px',
          textShadow: '0 0 20px rgba(255,255,255,0.3)'
        }}>INVENTORY</h1>
        
        <p style={{ color: '#aaa', marginBottom: '4rem', fontSize: '1.1rem' }}>
          Hover over an item to inspect its capabilities. 
          <span style={{ color: '#ffffff', marginLeft: '1rem', borderBottom: '2px solid #ffffff' }}>Common</span>
          <span style={{ color: '#5555FF', marginLeft: '1rem', borderBottom: '2px solid #5555FF' }}>Rare</span>
          <span style={{ color: '#FF55FF', marginLeft: '1rem', borderBottom: '2px solid #FF55FF' }}>Epic</span>
          <span style={{ color: '#FFAA00', marginLeft: '1rem', borderBottom: '2px solid #FFAA00' }}>Legendary</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="skills-layout">
          {/* Inventory Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '1.5rem',
            alignContent: 'start'
          }}>
            {SKILLS.map((skill, i) => (
              <div 
                key={i} 
                className="modern-mc-slot"
                style={{ 
                  width: '100%',
                  aspectRatio: '1/1',
                  backgroundColor: hovered?.id === skill.id ? `rgba(${hexToRgb(skill.color)}, 0.2)` : 'rgba(20, 20, 20, 0.8)',
                  border: `2px solid ${hovered?.id === skill.id ? skill.color : '#333'}`,
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: hovered?.id === skill.id ? `0 10px 20px rgba(${hexToRgb(skill.color)}, 0.3)` : '0 5px 15px rgba(0,0,0,0.5)',
                  transform: hovered?.id === skill.id ? 'translateY(-5px) scale(1.05)' : 'none'
                }}
                onMouseEnter={() => setHovered(skill)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(skill)}
              >
                <Image 
                  src={`/minecraft/item/${skill.icon}`} 
                  alt={skill.name}
                  width={48}
                  height={48}
                  style={{ 
                    width: '60%', 
                    height: '60%',
                    filter: hovered?.id === skill.id ? `drop-shadow(0 0 10px ${skill.color})` : 'drop-shadow(0 2px 5px rgba(0,0,0,0.5))',
                    transition: 'all 0.3s ease',
                    ...(skill.icon === 'command_block.png' ? { objectFit: 'cover', objectPosition: 'top' } : { objectFit: 'contain' })
                  }} 
                />
              </div>
            ))}
          </div>

          {/* Tooltip Inspector */}
          <div style={{ 
            minHeight: '250px'
          }}>
            {hovered ? (
              <div style={{ 
                backgroundColor: 'rgba(10, 10, 15, 0.9)', 
                border: `2px solid ${hovered.color}`, 
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: `0 15px 35px rgba(0,0,0,0.5), inset 0 0 30px rgba(${hexToRgb(hovered.color)}, 0.15)`,
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease',
                animation: 'fadeIn 0.3s ease-out',
                position: 'sticky',
                top: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: `1px solid rgba(255,255,255,0.1)`, paddingBottom: '1.5rem' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: 'rgba(0,0,0,0.5)', 
                    borderRadius: '12px',
                    border: `1px solid ${hovered.color}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: `inset 0 0 15px rgba(${hexToRgb(hovered.color)}, 0.2)`
                  }}>
                    <Image 
                      src={`/minecraft/item/${hovered.icon}`} 
                      alt={hovered.name}
                      width={48}
                      height={48}
                      style={{ 
                        width: '60%', 
                        height: '60%',
                        filter: `drop-shadow(0 0 10px ${hovered.color})`,
                        ...(hovered.icon === 'command_block.png' ? { objectFit: 'cover', objectPosition: 'top' } : { objectFit: 'contain' })
                      }} 
                    />
                  </div>
                  <div>
                    <h2 style={{ color: hovered.color, fontSize: '2rem', margin: '0 0 0.5rem 0', textShadow: `0 0 15px ${hovered.color}80` }}>
                      {hovered.name}
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ 
                        color: hovered.color, 
                        backgroundColor: `rgba(${hexToRgb(hovered.color)}, 0.1)`,
                        border: `1px solid ${hovered.color}`, 
                        padding: '4px 12px', 
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: '1px'
                      }}>
                        {hovered.rarity}
                      </span>
                      <span style={{ color: '#888', fontSize: '0.9rem', letterSpacing: '1px' }}>
                        TYPE: <span style={{ color: '#fff' }}>{hovered.type}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: '#d1d8d5', fontSize: '1.2rem', lineHeight: '1.6', margin: 0 }}>
                  {hovered.desc}
                </p>
              </div>
            ) : (
              <div style={{ 
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(20, 20, 20, 0.4)',
                border: '2px dashed rgba(255,255,255,0.1)',
                borderRadius: '16px',
                color: '#555',
                fontSize: '1.2rem',
                fontFamily: 'monospace',
                minHeight: '250px'
              }}>
                [ AWAITING_INSPECTION ]
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 900px) {
          .skills-layout {
            grid-template-columns: 1fr 450px !important;
          }
        }
      `}} />
    </div>
  );
}

// Helper function to convert hex to rgb for rgba transparency
function hexToRgb(hex: string) {
  if (hex === '#fff' || hex === '#ffffff') return '255, 255, 255';
  
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : '255, 255, 255';
}
