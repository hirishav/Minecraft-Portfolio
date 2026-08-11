"use client";
import React, { useState, useEffect } from 'react';
import Button from './Button';

interface ReadMeModalProps {
  content?: string;
}

export default function ReadMeModal({ content }: ReadMeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!content) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <Button 
        onClick={() => setIsOpen(true)} 
        style={{ width: '100%', textAlign: 'center', backgroundColor: '#333', borderColor: '#555' }}
      >
        Read Me (How to Use)
      </Button>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
            backgroundColor: 'var(--surface)',
            border: '2px solid var(--mc-green)',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-red)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-pixel)'
              }}
            >
              X
            </button>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--mc-yellow)' }}>How To Use</h2>
            <div style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'var(--font-pixel)',
              fontSize: '1.2rem',
              color: '#d1d8d5',
              lineHeight: '1.6'
            }}>
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
