"use client";
import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<'mojang' | 'loading' | 'done'>('mojang');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (stage === 'mojang') {
      const timer = setTimeout(() => setStage('loading'), 2000);
      return () => clearTimeout(timer);
    } else if (stage === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage('done'), 500);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [stage]);

  if (stage === 'done') {
    return <>{children}</>;
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#111111',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      fontFamily: 'var(--font-pixel)',
      color: '#fff'
    }}>
      {stage === 'mojang' ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: '#e74c3c', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '30px', height: '30px', backgroundColor: '#111111' }}></div>
            </div>
            <h1 style={{ color: '#e74c3c', fontSize: '2rem', letterSpacing: '2px', marginBottom: '0.2rem' }}>MOJANG</h1>
            <p style={{ color: '#888', fontSize: '1rem', letterSpacing: '4px' }}>STUDIOS</p>
          </div>
        </div>
      ) : (
        <div style={{ width: '400px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--mc-green)', fontSize: '2rem', marginBottom: '0.2rem' }}>RISHAV DAS</h2>
          <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Portfolio • Edition 2026</p>
          
          <div style={{ 
            width: '100%', 
            height: '24px', 
            border: '2px solid #000', 
            backgroundColor: '#000',
            position: 'relative'
          }}>
            <div style={{
              width: `${Math.min(progress, 100)}%`,
              height: '100%',
              backgroundColor: 'var(--mc-green)',
              transition: 'width 0.2s'
            }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '1.1rem', color: '#888' }}>
            <span>{
              progress < 25 ? "Connecting to NASA..." :
              progress < 50 ? "Taking permission from Narendra Modi..." :
              progress < 75 ? "Getting inside SBI bank..." :
              "Donating money to Elon Musk..."
            }</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          
          <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginTop: '2rem' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} style={{ 
                width: '24px', 
                height: '24px', 
                backgroundImage: i < (progress / 10) ? 'url(/minecraft/block/grass_block_side.png)' : 'url(/minecraft/block/dirt.png)',
                backgroundSize: 'cover',
                imageRendering: 'pixelated'
              }}></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
