"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiHome, FiUser, FiCode, FiBriefcase, FiStar, FiTool, FiMail } from 'react-icons/fi';
import styles from './HotbarNav.module.css';

const navItems = [
  { name: 'Home', path: '/#home', hash: '#home', icon: FiHome },
  { name: 'About', path: '/#about', hash: '#about', icon: FiUser },
  { name: 'Skills', path: '/#skills', hash: '#skills', icon: FiCode },
  { name: 'Experience', path: '/#experience', hash: '#experience', icon: FiBriefcase },
  { name: 'Projects', path: '/#work', hash: '#work', icon: FiStar },
  { name: 'Services', path: '/#services', hash: '#services', icon: FiTool },
  { name: 'Contact', path: '/#contact', hash: '#contact', icon: FiMail },
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

        const IconComponent = item.icon;

        return (
          <a 
            href={item.path} 
            key={i} 
            className={`${styles.hotbarItem} ${isActive ? styles.active : ''}`}
            onClick={() => setActiveHash(item.hash)} 
            aria-label={item.name}
          >
            <span className={styles.tooltip}>{item.name}</span>
            <IconComponent size={22} />
          </a>
        );
      })}
    </nav>
  );
}
