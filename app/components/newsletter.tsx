'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ background: '#026f5c', padding: '40px', textAlign: 'center' as const }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>📬</div>
        <h3 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 8px', color: '#f0f5f0' }}>
          La newsletter Arobasedzair
        </h3>
        <p style={{ fontSize: '13px', color: '#c0e8d0', marginBottom: '24px', lineHeight: 1.6 }}>
          Recois les meilleures actus du football algerien directement dans ta boite mail.
        </p>

        {status === 'success' ? (
          <div style={{ background: '#080c08', borderRadius: '4px', padding: '14px 20px', color: '#f0f5f0', fontSize: '13px', fontWeight: 700 }}>
            ✅ Merci ! Verifie ta boite mail pour confirmer ton inscription.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="ton@email.com"
              required
              style={{ flex: 1, background: '#080c08', border: 'none', borderRadius: '3px', padding: '12px 16px', fontSize: '13px', color: '#f0f5f0', outline: 'none', fontFamily: 'Barlow, sans-serif' }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{ background: '#080c08', border: 'none', borderRadius: '3px', padding: '12px 20px', color: '#026f5c', fontSize: '11px', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase' as const, letterSpacing: '1px', flexShrink: 0 }}
            >
              {status === 'loading' ? '...' : "S'abonner"}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p style={{ fontSize: '12px', color: '#ff6b6b', marginTop: '8px' }}>
            Une erreur est survenue. Réessaie.
          </p>
        )}
      </div>
    </div>
  );
}