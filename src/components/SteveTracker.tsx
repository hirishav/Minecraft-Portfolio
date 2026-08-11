'use client';
import { useEffect } from 'react';

export default function SteveTracker() {
  useEffect(() => {
    const head = document.querySelector('.s-head') as HTMLElement;
    const steve = document.querySelector('.steve') as HTMLElement;
    
    if (!head || !steve) return;

    const handleMouseMove = (e: MouseEvent) => {
      const headRect = head.getBoundingClientRect();
      const headX = headRect.left + headRect.width / 2;
      const headY = headRect.top + headRect.height / 2;

      const dx = e.clientX - headX;
      const dy = e.clientY - headY;

      const maxRotateX = 50;
      const maxRotateY = 60;

      let angleY = (dx / (window.innerWidth / 2)) * maxRotateY;
      let angleX = -(dy / (window.innerHeight / 2)) * maxRotateX; 

      angleY = Math.max(-maxRotateY, Math.min(maxRotateY, angleY));
      angleX = Math.max(-maxRotateX, Math.min(maxRotateX, angleX));

      const style = window.getComputedStyle(steve);
      const matrix = new DOMMatrixReadOnly(style.transform);
      if (matrix.a < 0) {
        angleY = -angleY;
      }

      head.style.transform = `perspective(200px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (head) head.style.transform = 'none';
    };
  }, []);

  return null;
}
