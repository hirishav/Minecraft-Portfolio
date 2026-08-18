"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AudioManager() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false);
  
  const [isMuted, setIsMuted] = useState(false);
  const isMutedRef = useRef(false);
  
  const wowAudioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering the global click
    const newState = !isMuted;
    setIsMuted(newState);
    isMutedRef.current = newState;

    if (newState) {
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
        heartbeatIntervalRef.current = null;
      }
    } else {
      if (startedRef.current) {
        playWardenHeartbeat();
        heartbeatIntervalRef.current = setInterval(playWardenHeartbeat, 1500);
      }
    }
  };

  const playWardenHeartbeat = () => {
    if (!audioCtxRef.current || isMutedRef.current) return;
    const ctx = audioCtxRef.current;
    
    [0, 0.2].forEach(delay => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(50, ctx.currentTime + delay);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + delay + 0.2);
      
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + delay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.3);
    });
  };

  const playFlash = () => {
    if (!audioCtxRef.current || isMutedRef.current) return;
    const ctx = audioCtxRef.current;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  };

  const playEnderman = () => {
    if (!audioCtxRef.current || isMutedRef.current) return;
    const ctx = audioCtxRef.current;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  };

  const playWow = () => {
    if (isMutedRef.current || !wowAudioRef.current) return;
    const wowSound = wowAudioRef.current;
    wowSound.currentTime = 0; // Cut off previous playback
    wowSound.volume = 0.5;
    wowSound.playbackRate = 1.5; // Make it play faster and shorter
    wowSound.play().catch(e => console.error("Wow playback failed", e));
  };

  useEffect(() => {
    wowAudioRef.current = new Audio('/sounds/wow.mp3');
    wowAudioRef.current.preload = 'auto';

    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      initAudio();

      if (!startedRef.current) {
        startedRef.current = true;
        if (!isMutedRef.current) {
          playWardenHeartbeat();
          heartbeatIntervalRef.current = setInterval(playWardenHeartbeat, 1500);
        }
      }

      const target = e.target as HTMLElement;
      
      // Do not play click sounds if clicking the mute button itself
      if (target.closest('#mute-btn')) return;

      const isButton = target.closest('button') || target.closest('.mc-button-action') || target.closest('a');
      
      if (isButton) {
        playEnderman();
      } else {
        playFlash();
      }
    };

    let lastHoveredElement: Element | null = null;
    const handleGlobalHover = (e: MouseEvent) => {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended' || isMutedRef.current) return;

      const target = e.target as HTMLElement;
      if (target.closest('#mute-btn')) return;

      const isInteractive = target.closest('button') || target.closest('a') || target.closest('.role-tag') || target.closest('.mc-button-action') || target.closest('.social-icon') || target.closest('.hover-target');
      
      if (isInteractive && isInteractive !== lastHoveredElement) {
        lastHoveredElement = isInteractive;
        playWow();
      } else if (!isInteractive) {
        lastHoveredElement = null;
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('mouseover', handleGlobalHover);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('mouseover', handleGlobalHover);
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      id="mute-btn"
      onClick={toggleMute}
      title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
      className="mc-button-action mute-btn-responsive"
    >
      {isMuted ? (
        <span style={{ fontSize: '24px', filter: 'grayscale(100%)', opacity: 0.5 }}>🔇</span>
      ) : (
        <Image 
          src="/minecraft/item/music_disc_13.png" 
          alt="Sound On" 
          width={32}
          height={32}
          style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
        />
      )}
    </button>
  );
}
