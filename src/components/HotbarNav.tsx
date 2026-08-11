"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/#home', hash: '#home', icon: '/minecraft/block/grass_block_side.png' },
  { name: 'About', path: '/#about', hash: '#about', icon: '/minecraft/item/book.png' },
  { name: 'Skills', path: '/#skills', hash: '#skills', icon: '/minecraft/item/diamond_sword.png' },
  { name: 'Experience', path: '/#experience', hash: '#experience', icon: '/minecraft/item/filled_map.png' },
  { name: 'Projects', path: '/#work', hash: '#work', icon: '/minecraft/item/nether_star.png' },
  { name: 'Services', path: '/#services', hash: '#services', icon: '/minecraft/item/music_disc_13.png' },
  { name: 'Contact', path: '/#contact', hash: '#contact', icon: '/minecraft/item/paper.png' },
];

export default function HotbarNav() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    navItems.forEach((item) => {
      const id = item.hash.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Add click listeners to handle immediate active state update for smoother UX
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setActiveHash(hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="hotbar-nav">
      {navItems.map((item, i) => {
        let isActive = activeHash === item.hash;
        
        // Ensure "Projects" glows when viewing a specific project
        if (pathname && pathname.startsWith('/work')) {
          isActive = item.name === 'Projects';
        }

        return (
          <a href={item.path} key={i} title={item.name} onClick={() => setActiveHash(item.hash)} style={{
            width: '40px',
            height: '40px',
            position: 'relative',
            backgroundColor: '#8b8b8b',
            border: isActive ? '2px solid #ffffff' : '2px solid #373737',
            borderTopColor: isActive ? '#ffffff' : '#8b8b8b',
            borderLeftColor: isActive ? '#ffffff' : '#8b8b8b',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: isActive ? '0 0 15px rgba(255, 255, 255, 0.9), inset -2px -2px 0px rgba(0,0,0,0.2), inset 2px 2px 0px rgba(255,255,255,0.2)' : 'inset -2px -2px 0px rgba(0,0,0,0.2), inset 2px 2px 0px rgba(255,255,255,0.2)',
            transition: 'all 0.1s'
          }}>
            <img 
              src={item.icon} 
              alt={item.name} 
              style={{ 
                width: '32px', 
                height: '32px', 
                objectFit: 'contain',
                filter: isActive ? 'drop-shadow(0 0 5px rgba(255,255,255,1))' : 'none'
              }} 
            />
          </a>
        );
      })}
    </div>
  );
}
