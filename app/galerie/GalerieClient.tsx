'use client';
import Image from 'next/image';
import { useState } from 'react';

type Photo = {
  titre: string;
  image: { url: string };
  categorie: string;
};

export default function GalerieClient({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected === null) return;
    setSelected(selected === 0 ? photos.length - 1 : selected - 1);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected === null) return;
    setSelected(selected === photos.length - 1 ? 0 : selected + 1);
  };

  const photo = selected !== null ? photos[selected] : null;

  return (
    <>
      {photo && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative' as const, maxWidth: '90vw', maxHeight: '90vh', width: '900px', height: '600px' }}>
            <Image src={photo.image.url} alt={photo.titre} fill style={{ objectFit: 'contain' }} />
          </div>

          {/* FLECHE GAUCHE */}
          <button onClick={prev} style={{ position: 'absolute' as const, left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: '1px solid #2a4a3a', color: '#f0f5f0', width: '48px', height: '48px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            ←
          </button>

          {/* FLECHE DROITE */}
          <button onClick={next} style={{ position: 'absolute' as const, right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: '1px solid #2a4a3a', color: '#f0f5f0', width: '48px', height: '48px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            →
          </button>

          <div style={{ position: 'absolute' as const, bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' as const }}>
            <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '16px', color: '#f0f5f0', marginBottom: '6px' }}>{photo.titre}</div>
            <div style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px', display: 'inline-block' }}>{photo.categorie}</div>
            <div style={{ fontSize: '11px', color: '#5a7a6a', marginTop: '8px' }}>{(selected ?? 0) + 1} / {photos.length}</div>
          </div>

          <div onClick={() => setSelected(null)} style={{ position: 'absolute' as const, top: '20px', right: '30px', color: '#f0f5f0', fontSize: '32px', cursor: 'pointer', fontWeight: 300 }}>✕</div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {photos.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: 'relative' as const, height: '260px', borderRadius: '6px', overflow: 'hidden', background: '#0a0f0a', border: hovered === i ? '1px solid #026f5c' : '1px solid #0d2a1f', cursor: 'pointer', transition: 'border-color 0.3s' }}
          >
            <Image
              src={p.image.url}
              alt={p.titre}
              fill
              style={{ objectFit: 'cover', transform: hovered === i ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.4s ease' }}
            />
            <div style={{ position: 'absolute' as const, inset: 0, background: hovered === i ? 'linear-gradient(to top, rgba(2,111,92,0.3) 0%, transparent 60%)' : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', transition: 'background 0.3s' }} />
            <div style={{ position: 'absolute' as const, bottom: 0, left: 0, right: 0, padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#f0f5f0', fontWeight: 600 }}>{p.titre}</span>
              <span style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
                {p.categorie}
              </span>
            </div>
            {hovered === i && (
              <div style={{ position: 'absolute' as const, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.9 }}>
                <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={80} height={80} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}