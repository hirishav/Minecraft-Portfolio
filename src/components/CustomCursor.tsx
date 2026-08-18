"use client";
import React, { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

interface Point {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: -1000, y: -1000 });
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    
    // Animation loop for dragon tail
    let animationFrameId: number;
    const canvas = canvasRef.current;
    
    // Initialize points
    const numPoints = 30;
    pointsRef.current = Array(numPoints).fill({ x: -1000, y: -1000 });
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const render = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          const points = pointsRef.current;
          
          // Move head to mouse
          const headX = points[0].x + (mouseRef.current.x - points[0].x) * 0.5;
          const headY = points[0].y + (mouseRef.current.y - points[0].y) * 0.5;
          
          const newPoints = [{ x: headX, y: headY }];
          
          // Move rest of body
          for (let i = 1; i < numPoints; i++) {
            newPoints.push({
              x: points[i].x + (newPoints[i-1].x - points[i].x) * 0.4,
              y: points[i].y + (newPoints[i-1].y - points[i].y) * 0.4
            });
          }
          
          pointsRef.current = newPoints;
          
          // Draw dragon segments (skeletal spine)
          for (let i = 0; i < numPoints - 1; i++) {
            const p1 = newPoints[i];
            const p2 = newPoints[i+1];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const angle = Math.atan2(dy, dx);
            
            // Only draw if points have caught up to screen (avoid glitch at start)
            if (p1.x < -500) continue;

            const size = Math.max(0.5, 8 - i * 0.25); // Tapering size
            const alpha = Math.max(0, 1 - i / numPoints);
            
            ctx.save();
            ctx.translate(p1.x, p1.y);
            ctx.rotate(angle);
            
            // Set glow effect
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(255, 0, 0, 0.8)';
            
            // Use a bright, glowing red
            ctx.fillStyle = `rgba(255, 20, 20, ${alpha})`;
            ctx.strokeStyle = `rgba(255, 50, 50, ${alpha * 0.8})`;
            ctx.lineWidth = 2;
            
            // Draw central spine dot
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
            ctx.fill();
            
            // Connect to next spine segment
            if (i < numPoints - 2) {
              const nextDist = Math.hypot(dx, dy);
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(nextDist, 0);
              ctx.stroke();
            }
            
            // Draw skeletal ribs every few segments
            if (i % 2 === 0 && i > 0 && i < numPoints - 5) {
                const ribLength = size * 3.5;
                const ribSweep = size * 1.5;
                
                // Top rib
                ctx.beginPath();
                ctx.moveTo(0, size * 0.6);
                ctx.quadraticCurveTo(-ribSweep, ribLength * 0.5, -ribSweep, ribLength);
                ctx.stroke();
                
                // Bottom rib
                ctx.beginPath();
                ctx.moveTo(0, -size * 0.6);
                ctx.quadraticCurveTo(-ribSweep, -ribLength * 0.5, -ribSweep, -ribLength);
                ctx.stroke();
            }
            
            // Draw larger head at index 0 (skull-like)
            if (i === 0) {
              ctx.beginPath();
              // Skull base
              ctx.moveTo(size, size * 1.2);
              ctx.lineTo(size * 2, size * 0.8);
              ctx.lineTo(size * 3, 0); // Snout tip
              ctx.lineTo(size * 2, -size * 0.8);
              ctx.lineTo(size, -size * 1.2);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
              
              // Horns
              ctx.beginPath();
              ctx.moveTo(size, size * 1.2);
              ctx.quadraticCurveTo(0, size * 3, -size * 2, size * 4);
              ctx.stroke();
              
              ctx.beginPath();
              ctx.moveTo(size, -size * 1.2);
              ctx.quadraticCurveTo(0, -size * 3, -size * 2, -size * 4);
              ctx.stroke();
            }

            ctx.restore();
          }
          
          animationFrameId = requestAnimationFrame(render);
        };
        
        render();
      }
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ 
          pointerEvents: 'none', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 9998,
          width: '100vw',
          height: '100vh'
        }}
      />
      <div 
        className={`${styles.cursor} ${isHovering ? styles.hovering : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
    </>
  );
}
