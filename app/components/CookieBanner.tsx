'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed' as const,
      bottom: 0,
      left: 0,
      right: 0,
      background: '#060a06',
      borderTop: '1px solid #0d2a1f',
      padding: '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      zIndex: 9999,
      flexWrap: 'wrap' as const,
    }}>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <p style={{ margin: 0, fontSize: '13px', color: '#8a9a8a', lineHeight: 1.6 }}>
          🍪 Arobasedzair utilise des cookies techniques pour assurer le bon fonctionnement du site.{' '}
          <a href="/mentions-legales" style={{ color: '#026f5c', textDecoration: 'none', fontWeight: 700 }}>
            En savoir plus
          </a>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={refuse}
          style={{ background: 'transparent', border: '1px solid #2a4a3a', color: '#5a7a6a', fontSize: '11px', fontWeight: 700, padding: '8px 20px', borderRadius: '3px', cursor: 'pointer', textTransform: 'uppercase' as const, letterSpacing: '1px' }}
        >
          Refuser
        </button>
        <button
          onClick={accept}
          style={{ background: '#026f5c', border: 'none', color: '#f0f5f0', fontSize: '11px', fontWeight: 700, padding: '8px 20px', borderRadius: '3px', cursor: 'pointer', textTransform: 'uppercase' as const, letterSpacing: '1px' }}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}