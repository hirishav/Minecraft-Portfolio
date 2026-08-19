"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './HotbarNav.module.css';

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
    <nav className={styles.hotbarNav}>
      {navItems.map((item, i) => {
        let isActive = activeHash === item.hash;
        
        if (pathname && pathname.startsWith('/work')) {
          isActive = item.name === 'Projects';
        }

        return (
          <a 
            href={item.path} 
            key={i} 
            className={`${styles.hotbarSlot} ${isActive ? styles.active : ''}`}
            onClick={() => setActiveHash(item.hash)} 
            aria-label={item.name}
          >
            <span className={styles.tooltip}>{item.name}</span>
            <div className={styles.iconWrapper}>
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={32}
                height={32}
                className={styles.icon}
              />
            </div>
          </a>
        );
      })}
    </nav>
  );
}
