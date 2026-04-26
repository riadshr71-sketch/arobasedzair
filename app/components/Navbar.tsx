'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const liens = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Équipe Nationale', href: '/categorie/equipe-nationale' },
    { label: 'Transferts', href: '/categorie/transferts' },
    { label: 'Clubs', href: '/categorie/clubs' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'À Propos', href: '/a-propos' },
  ];

  return (
    <>
      <nav style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '70px', position: 'relative' as const, zIndex: 100 }}>
        
        {/* LIENS GAUCHE - desktop uniquement */}
        <div className="nav-desktop-left" style={{ display: 'flex', gap: '24px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
          {['Accueil', 'Actualités', 'Équipe Nationale', 'Transferts', 'Clubs'].map(l => (
            <a key={l} href={l === 'Accueil' ? '/' : l === 'Actualités' ? '/actualites' : `/categorie/${l.toLowerCase().replace(' ', '-').replace('é', 'e').replace('î', 'i')}`} style={{ color: active === l ? '#026f5c' : '#5a7a6a', borderBottom: active === l ? '2px solid #026f5c' : 'none', paddingBottom: '2px', textDecoration: 'none' }}>
              {l}
            </a>
          ))}
        </div>

        {/* LOGO CENTRE */}
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'absolute' as const, left: '50%', transform: 'translateX(-50%)' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={70} height={70} style={{ objectFit: 'contain' }} />
        </a>

        {/* LIENS DROITE - desktop uniquement */}
        <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
          {['Galerie', 'À Propos'].map(l => (
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

        {/* HAMBURGER - mobile uniquement */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', marginLeft: 'auto' }}
        >
          <div style={{ width: '24px', height: '2px', background: '#f0f5f0', marginBottom: '5px', transition: 'all 0.3s' }}></div>
          <div style={{ width: '24px', height: '2px', background: '#f0f5f0', marginBottom: '5px' }}></div>
          <div style={{ width: '24px', height: '2px', background: '#f0f5f0' }}></div>
        </button>
      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '16px 20px', display: 'flex', flexDirection: 'column' as const, gap: '16px', zIndex: 99 }}>
          {liens.map(l => (
            <a key={l.label} href={l.href} style={{ color: active === l.label ? '#026f5c' : '#8a9a8a', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact" style={{ color: '#f0f5f0', fontSize: '13px', fontWeight: 700, padding: '10px 16px', background: '#026f5c', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none', textAlign: 'center' as const }}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}