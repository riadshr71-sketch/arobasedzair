'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const liens = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Sélection', href: '/categorie/equipe-nationale' },
    { label: 'Transferts', href: '/categorie/transferts' },
    { label: 'Clubs', href: '/categorie/clubs' },
    { label: 'Championnat', href: '/categorie/championnat' },
    { label: 'Jeunes', href: '/categorie/jeunes' },
    { label: 'Statistiques', href: '/categorie/statistiques' },
    { label: 'Recherche', href: '/recherche' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'À Propos', href: '/a-propos' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recherche?q=${encodeURIComponent(searchQuery)}`);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '70px', position: 'relative' as const, zIndex: 100 }}>
        <div className="nav-desktop-left" style={{ display: 'flex', gap: '16px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
          {[
            { label: 'Accueil', href: '/' },
            { label: 'Actualités', href: '/actualites' },
            { label: 'Sélection', href: '/categorie/equipe-nationale' },
            { label: 'Transferts', href: '/categorie/transferts' },
            { label: 'Clubs', href: '/categorie/clubs' },
            { label: 'Championnat', href: '/categorie/championnat' },
            { label: 'Jeunes', href: '/categorie/jeunes' },
            { label: 'Statistiques', href: '/categorie/statistiques' },
          ].map(l => (
            <a key={l.label} href={l.href} style={{ color: active === l.label ? '#026f5c' : '#5a7a6a', borderBottom: active === l.label ? '2px solid #026f5c' : 'none', paddingBottom: '2px', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'absolute' as const, left: '50%', transform: 'translateX(-50%)' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={70} height={70} style={{ objectFit: 'contain' }} />
        </a>

        <div className="nav-desktop-right" style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
          <form onSubmit={(e) => { e.preventDefault(); const q = (e.currentTarget.querySelector('input') as HTMLInputElement).value; if (q.trim()) window.location.href = `/recherche?q=${encodeURIComponent(q)}`; }} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            <input
              type="text"
              placeholder="Rechercher..."
              style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRight: 'none', borderRadius: '3px 0 0 3px', padding: '6px 12px', fontSize: '11px', color: '#f0f5f0', outline: 'none', width: '160px', fontFamily: 'Barlow, sans-serif' }}
            />
            <button type="submit" style={{ background: '#026f5c', border: 'none', borderRadius: '0 3px 3px 0', padding: '6px 10px', cursor: 'pointer', color: '#f0f5f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f0f5f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </form>
          <a href="/galerie" style={{ color: active === 'Galerie' ? '#026f5c' : '#5a7a6a', textDecoration: 'none' }}>Galerie</a>
          <a href="/a-propos" style={{ color: active === 'À Propos' ? '#026f5c' : '#5a7a6a', textDecoration: 'none' }}>À Propos</a>
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

      <div style={{ background: '#060a06', maxHeight: menuOpen ? '800px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', zIndex: 99, position: 'relative' as const, borderBottom: menuOpen ? '1px solid #0d2a1f' : 'none' }}>
        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article..."
              style={{ flex: 1, background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '10px 14px', fontSize: '13px', color: '#f0f5f0', outline: 'none', fontFamily: 'Barlow, sans-serif' }}
            />
            <button type="submit" style={{ background: '#026f5c', border: 'none', borderRadius: '4px', padding: '10px 14px', color: '#f0f5f0', cursor: 'pointer', fontSize: '14px' }}>
              🔍
            </button>
          </form>
          {liens.filter(l => l.label !== 'Recherche').map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: active === l.label ? '#026f5c' : '#8a9a8a', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none', padding: '12px 0', borderBottom: i < liens.length - 2 ? '1px solid #0d2a1f' : 'none' }}>
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