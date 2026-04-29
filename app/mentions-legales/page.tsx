import Image from 'next/image';
import Navbar from '../components/Navbar'

export default function MentionsLegales() {
  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active="" />

      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '48px 40px', textAlign: 'center' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Informations légales</span>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
        </div>
        <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '48px', lineHeight: 1, margin: 0, textTransform: 'uppercase' as const }}>
          Mentions <span style={{ color: '#026f5c' }}>Légales</span>
        </h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px' }}>

        {[
          {
            titre: 'Éditeur du site',
            contenu: [
              'Nom du média : Arobasedzair',
              'Email : arobasedzair@proton.me',
              'Réseaux sociaux : @arobasedzair2 (Twitter/X) · @arobasedzair_ (Instagram) · @arobasedzair (TikTok)',
            ]
          },
          {
            titre: 'Hébergement',
            contenu: [
              'Hébergeur : Vercel Inc.',
              'Adresse : 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis',
              'Site : vercel.com',
            ]
          },
          {
            titre: 'Propriété intellectuelle',
            contenu: [
              'Les textes et contenus éditoriaux publiés sur ce site sont la propriété d\'Arobasedzair.',
              'Les images illustrant les articles sont issues de sources tierces (agences, réseaux sociaux, clubs). Elles restent la propriété de leurs auteurs respectifs et sont utilisées à titre informatif.',
              'Les photos de la galerie sont la propriété exclusive d\'Arobasedzair et ne peuvent être reproduites sans autorisation écrite préalable.',
              'Le logo Arobasedzair est une création originale protégée.',
            ]
          },
          {
            titre: 'Données personnelles',
            contenu: [
              'Les données collectées via le formulaire de contact (nom, email, message) sont utilisées uniquement pour répondre aux demandes.',
              'Elles ne sont pas transmises à des tiers.',
              'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données.',
              'Pour exercer ce droit : arobasedzair@proton.me',
            ]
          },
          {
            titre: 'Cookies',
            contenu: [
              'Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.',
              'Aucun cookie publicitaire ou de traçage n\'est utilisé.',
            ]
          },
          {
            titre: 'Responsabilité',
            contenu: [
              'Arobasedzair s\'efforce de fournir des informations exactes et à jour.',
              'Nous ne pouvons être tenus responsables d\'éventuelles erreurs ou omissions.',
              'Les liens externes renvoient vers des sites tiers dont nous ne sommes pas responsables.',
            ]
          },
        ].map(section => (
          <div key={section.titre} style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '4px', height: '22px', background: '#026f5c' }}></div>
              <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '18px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>{section.titre}</h2>
            </div>
            <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {section.contenu.map((ligne, i) => (
                <p key={i} style={{ fontSize: '14px', color: '#8a9e8a', lineHeight: 1.7, margin: 0, paddingLeft: '16px', borderLeft: '2px solid #0d2a1f' }}>
                  {ligne}
                </p>
              ))}
            </div>
          </div>
        ))}

        <p style={{ fontSize: '12px', color: '#4a6a5a', textAlign: 'center' as const, marginTop: '40px' }}>
          Dernière mise à jour : Avril 2026
        </p>

      </div>

      <div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <a href="/mentions-legales" style={{ fontSize: '11px', color: '#3a5a4a', textDecoration: 'none' }}>Mentions légales</a>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2026 · Média 100% Football Algérien</div>
      </div>

    </main>
  );
}