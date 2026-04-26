import Image from 'next/image';

export default function Navbar({ active }: { active?: string }) {
 const liens = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Équipe Nationale', href: '/categorie/equipe-nationale' },
    { label: 'Transferts', href: '/categorie/transferts' },
    { label: 'Clubs', href: '/categorie/clubs' },
  ];

  const liensDropite = [
    { label: 'Galerie', href: '/galerie' },
    { label: 'À Propos', href: '/a-propos' },
  ];

  return (
    <nav style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', height: '70px' }}>
      <div style={{ display: 'flex', gap: '24px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
        {liens.map(l => (
          <a key={l.label} href={l.href} style={{ color: active === l.label ? '#026f5c' : '#5a7a6a', borderBottom: active === l.label ? '2px solid #026f5c' : 'none', paddingBottom: '2px', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
      </div>
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={70} height={70} style={{ objectFit: 'contain' }} />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1.5px' }}>
        {liensDropite.map(l => (
          <a key={l.label} href={l.href} style={{ color: active === l.label ? '#026f5c' : '#5a7a6a', borderBottom: active === l.label ? '2px solid #026f5c' : 'none', paddingBottom: '2px', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '10px' }}>
          <a href="https://twitter.com/arobasedzair2" target="_blank" style={{ textDecoration: 'none' }}>
            <Image src="/images/twitter-x-logo-png-9.png" alt="Twitter" width={20} height={20} style={{ objectFit: 'contain' }} />
          </a>
          <a href="https://instagram.com/arobasedzair_" target="_blank" style={{ textDecoration: 'none' }}>
            <Image src="/images/instagram_PNG10.png" alt="Instagram" width={20} height={20} style={{ objectFit: 'contain' }} />
          </a>
          <a href="/contact" style={{ color: active === 'Contact' ? '#026f5c' : '#f0f5f0', fontSize: '10px', fontWeight: 700, padding: '7px 14px', border: '1px solid #2a4a3a', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}