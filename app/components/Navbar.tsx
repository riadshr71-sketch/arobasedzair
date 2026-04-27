'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const liens = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualites', href: '/actualites' },
    { label: 'Equipe Nationale', href: '/categorie/equipe-nationale' },
    { label: 'Transferts', href: '/categorie/transferts' },
    { label: 'Clubs', href: '/categorie/clubs' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'A Propos', href: '/a-propos' },
  ];

  return (
    <>
      <nav style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '70px', position: 'relative' as const, zIndex: 100 }}>
        <div className="nav-desktop-left" style={{ display: 'flex', gap: '24px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
          {['Accueil', 'Actualites', 'Equipe Nationale', 'Transferts', 'Clubs'].map(l => (
            <a key={l} href={l === 'Accueil' ? '/' : l === 'Actualites' ? '/actualites' : `/categorie/${l.toLowerCase().replace(/ /g, '-')}`} style={{ color: active === l ? '#026f5c' : '#5a7a6a', borderBottom: active === l ? '2px solid #026f5c' : 'none', paddingBottom: '2px', textDecoration: 'none' }}>
              {l}
            </a>
          ))}
        </div>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'absolute' as const, left: '50%', transform: 'translateX(-50%)' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={70} height={70} style={{ objectFit: 'contain' }} />
        </a>
        <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
          {['Galerie', 'A Propos'].map(l => (
            <a key={l} href={l === 'Galerie' ? '/galerie' : '/a-propos'} style={{ color: active === l ? '#026f5c' : '#5a7a6a', textDecoration: 'none' }}>
              {l}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a href="https://twitter.com/arobasedzair2" target="_blank" style={{ textDecoration: 'none' }}>
              <Image src="/images/twitter-x-logo-png-9.png" alt="Twitter" width={20} height={20} style={{ objectFit: 'contain' }} />
            </a>
            <a href="https://instagram.com/arobasedzair_" target="_blank" style={{ textDecoration: 'none' }}>
              <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} style={{ objectFit: 'contain' }} />
            </a>
            <a href="/contact" style={{ color: '#f0f5f0', fontSize: '10px', fontWeight: 700, padding: '7px 14px', border: '1px solid #2a4a3a', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
              Contact
            </a>
          </div>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', marginLeft: 'auto' }}>
          <div style={{ width: '24px', height: '2px', background: '#f0f5f0', marginBottom: '5px', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ width: '24px', height: '2px', background: '#f0f5f0', marginBottom: '5px', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }}></div>
          <div style={{ width: '24px', height: '2px', background: '#f0f5f0', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </button>
      </nav>

      <div style={{ background: '#060a06', maxHeight: menuOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', zIndex: 99, position: 'relative' as const, borderBottom: menuOpen ? '1px solid #0d2a1f' : 'none' }}>
        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
          {liens.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: active === l.label ? '#026f5c' : '#8a9a8a', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none', padding: '12px 0', borderBottom: i < liens.length - 1 ? '1px solid #0d2a1f' : 'none' }}>
              {l.label}
            </a>
          ))}
          <a href="/contact" style={{ display: 'block', background: '#026f5c', color: '#f0f5f0', fontSize: '13px', fontWeight: 700, padding: '12px 16px', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none', textAlign: 'center' as const, marginTop: '8px' }}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}