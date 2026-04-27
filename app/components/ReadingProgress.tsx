'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed' as const, top: 0, left: 0, right: 0, height: '4px', background: '#0d1a0d', zIndex: 9999 }}>
      <div style={{ height: '100%', width: `${progress}%`, background: '#026f5c', transition: 'width 0.1s ease', position: 'relative' as const }}>
        <div style={{ position: 'absolute' as const, right: '-14px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', borderRadius: '50%', background: '#080c08', border: '2px solid #026f5c', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={20} height={20} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(120deg)' }} />
        </div>
      </div>
    </div>
  );
}