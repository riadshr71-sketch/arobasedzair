import Navbar from '../components/Navbar';
import Image from 'next/image';
export default function Contact() {
  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active="Contact" />

      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '60px 40px', textAlign: 'center' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Nous contacter</span>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
        </div>
        <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '56px', lineHeight: 1, margin: '0 0 20px', textTransform: 'uppercase' as const }}>
          Contactez<br /><span style={{ color: '#026f5c' }}>Arobasedzair</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#6a8a7a', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
          Pour toute collaboration, partenariat ou information, écrivez-nous directement.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
              <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '20px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Nos coordonnées</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
              <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>📧</span>
                <div>
                  <div style={{ fontSize: '11px', color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '1px', fontWeight: 700, marginBottom: '4px' }}>Email</div>
                  <a href="mailto:arobasedzair@proton.me" style={{ fontSize: '14px', color: '#026f5c', textDecoration: 'none', fontWeight: 700 }}>arobasedzair@proton.me</a>
                </div>
              </div>
              <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Image src="/images/twitter-x-logo-png-9.png" alt="Twitter" width={28} height={28} style={{ objectFit: 'contain', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '1px', fontWeight: 700, marginBottom: '4px' }}>Twitter / X</div>
                  <a href="https://twitter.com/arobasedzair2" target="_blank" style={{ fontSize: '14px', color: '#026f5c', textDecoration: 'none', fontWeight: 700 }}>@arobasedzair2</a>
                </div>
              </div>
              <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Image src="/images/instagram_PNG10.png" alt="Instagram" width={28} height={28} style={{ objectFit: 'contain', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '1px', fontWeight: 700, marginBottom: '4px' }}>Instagram</div>
                  <a href="https://instagram.com/arobasedzair_" target="_blank" style={{ fontSize: '14px', color: '#026f5c', textDecoration: 'none', fontWeight: 700 }}>@arobasedzair_</a>
                </div>
              </div>
              <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Image src="/images/tiktok png.png" alt="TikTok" width={28} height={28} style={{ objectFit: 'contain', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '1px', fontWeight: 700, marginBottom: '4px' }}>TikTok</div>
                  <a href="https://tiktok.com/@arobasedzair" target="_blank" style={{ fontSize: '14px', color: '#026f5c', textDecoration: 'none', fontWeight: 700 }}>@arobasedzair</a>
                </div>
              </div>
              <div style={{ background: '#026f5c', borderRadius: '8px', padding: '20px' }}>
                <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '8px' }}>Collaborations & Partenariats</div>
                <p style={{ fontSize: '13px', color: '#c0e0d0', lineHeight: 1.6, margin: 0 }}>
                  Vous souhaitez collaborer avec Arobasedzair ? Envoyez-nous un message et nous reviendrons vers vous rapidement.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
              <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '20px', margin: 0, textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Envoyer un message</h2>
            </div>
            <form action="https://formspree.io/f/xqewozje" method="POST" style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#5a7a6a', marginBottom: '8px' }}>Nom complet</label>
                <input type="text" name="nom" placeholder="Votre nom" style={{ width: '100%', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '12px 16px', color: '#f0f5f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' as const }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#5a7a6a', marginBottom: '8px' }}>Email</label>
                <input type="email" name="email" placeholder="votre@email.com" style={{ width: '100%', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '12px 16px', color: '#f0f5f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' as const }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#5a7a6a', marginBottom: '8px' }}>Objet</label>
                <select name="objet" style={{ width: '100%', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '12px 16px', color: '#f0f5f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' as const }}>
                  <option>Collaboration</option>
                  <option>Partenariat</option>
                  <option>Information</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#5a7a6a', marginBottom: '8px' }}>Message</label>
                <textarea name="message" placeholder="Votre message..." rows={6} style={{ width: '100%', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '12px 16px', color: '#f0f5f0', fontSize: '14px', outline: 'none', resize: 'vertical' as const, boxSizing: 'border-box' as const }} />
              </div>
              <button type="submit" style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '12px', fontWeight: 700, padding: '14px', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', border: 'none', cursor: 'pointer' }}>
                Envoyer le message →
              </button>
              <p style={{ fontSize: '11px', color: '#4a6a5a', textAlign: 'center' as const }}>
                Ou écrivez directement à <a href="mailto:arobasedzair@proton.me" style={{ color: '#026f5c' }}>arobasedzair@proton.me</a>
              </p>
            </form>
          </div>

        </div>
      </div>

      <div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2025 · Média 100% Football Algérien</div>
      </div>

    </main>
  );
}