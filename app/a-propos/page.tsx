import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function APropos() {
  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active="À Propos" />

      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '60px 40px', textAlign: 'center' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Qui sommes-nous</span>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
        </div>
        <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '56px', lineHeight: 1, margin: '0 0 20px', textTransform: 'uppercase' as const }}>
          Le média 100%<br /><span style={{ color: '#026f5c' }}>Football Algérien</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#6a8a7a', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
          Arobasedzair est un média indépendant dédié à l'actualité du football algérien. Créé par des passionnés, pour des passionnés.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>

        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
            <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Notre Histoire</h2>
          </div>
          <p style={{ fontSize: '15px', color: '#8a9e8a', lineHeight: 1.9 }}>
            Arobasedzair est né en 2022 sur Twitter, fondé par 3 jeunes étudiants passionnés par l'Équipe Nationale d'Algérie. Ce qui a commencé comme un simple compte de fans s'est rapidement transformé en un véritable média de référence. Au fil des années, nous avons grandi, professionnalisé notre approche et élargi notre couverture à l'ensemble du football algérien. Aujourd'hui, Arobasedzair c'est plus de 30 000 abonnés cumulés sur l'ensemble de nos réseaux sociaux, une communauté passionnée et engagée, et l'ambition de devenir le média incontournable du football algérien.
          </p>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
            <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Notre Mission</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '⚽', title: 'Actualités en temps réel', desc: "Couvrir toute l'actualité du football algérien avec rapidité et précision." },
              { icon: '📸', title: 'Photos exclusives', desc: 'Proposer des images inédites des matchs, entraînements et coulisses.' },
              { icon: '🔍', title: 'Analyses approfondies', desc: 'Décrypter les tactiques, les performances et les enjeux du football algérien.' },
              { icon: '🤝', title: 'Communauté passionnée', desc: 'Fédérer une communauté de supporters algériens autour du football.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#f0f5f0', marginBottom: '8px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#5a7a6a', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
            <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Arobasedzair en chiffres</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { chiffre: '2022', label: 'Année de création', icon: '📅' },
              { chiffre: '13K+', label: 'Abonnés Twitter', icon: '𝕏' },
              { chiffre: '2.5K+', label: 'Abonnés Instagram', icon: '◈' },
              { chiffre: '30K+', label: 'Communauté cumulée', icon: '👥' },
            ].map(item => (
              <div key={item.label} style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '28px 20px', textAlign: 'center' as const }}>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '32px', color: '#026f5c', marginBottom: '6px' }}>{item.chiffre}</div>
                <div style={{ fontSize: '11px', color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '1px', fontWeight: 700 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
            <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Directeur de Publication</h2>
          </div>
          <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '28px', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#026f5c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontFamily: 'Druk, Georgia, serif', color: '#f0f5f0', flexShrink: 0 }}>
              R
            </div>
            <div>
              <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '20px', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '6px' }}>Riad</div>
              <div style={{ fontSize: '12px', color: '#026f5c', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '10px' }}>Fondateur · Photographe · Directeur de Publication</div>
              <div style={{ fontSize: '13px', color: '#5a7a6a', lineHeight: 1.6 }}>Photographe et créateur de contenu spécialisé dans le football algérien. Fondateur d'Arobasedzair, média indépendant dédié à la couverture du football algérien depuis 2022.</div>
            </div>
          </div>
        </div>

        <div style={{ background: '#026f5c', borderRadius: '8px', padding: '40px', textAlign: 'center' as const }}>
          <h3 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '24px', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '12px' }}>Collaborations & Partenariats</h3>
          <p style={{ fontSize: '13px', color: '#c0e0d0', lineHeight: 1.7, marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
            Vous souhaitez collaborer avec Arobasedzair ? Écrivez-nous directement et nous reviendrons vers vous rapidement.
          </p>
          <a href="/contact" style={{ display: 'inline-block', background: '#f0f5f0', color: '#026f5c', fontSize: '12px', fontWeight: 700, padding: '13px 28px', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
            Nous contacter →
          </a>
        </div>

      </div>

      <div className="footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '11px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
          <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>À Propos</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2025 · Média 100% Football Algérien</div>
      </div>

    </main>
  );
}