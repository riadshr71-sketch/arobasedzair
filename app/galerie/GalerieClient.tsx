'use client';
import Image from 'next/image';
import { useState } from 'react';

type Photo = {
  titre: string;
  image: { url: string };
  categorie: string;
};

export default function GalerieClient({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: 'fixed' as const, inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative' as const, maxWidth: '90vw', maxHeight: '90vh', width: '900px', height: '600px' }}>
            <Image src={selected.image.url} alt={selected.titre} fill style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ position: 'absolute' as const, bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' as const }}>
            <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '16px', color: '#f0f5f0', marginBottom: '6px' }}>{selected.titre}</div>
            <div style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px', display: 'inline-block' }}>{selected.categorie}</div>
          </div>
          <div style={{ position: 'absolute' as const, top: '20px', right: '30px', color: '#f0f5f0', fontSize: '32px', cursor: 'pointer', fontWeight: 300 }}>✕</div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setSelected(photo)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: 'relative' as const, height: '260px', borderRadius: '6px', overflow: 'hidden', background: '#0a0f0a', border: hovered === i ? '1px solid #026f5c' : '1px solid #0d2a1f', cursor: 'pointer', transition: 'border-color 0.3s' }}
          >
            <Image
              src={photo.image.url}
              alt={photo.titre}
              fill
              style={{ objectFit: 'cover', transform: hovered === i ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.4s ease' }}
            />
            <div style={{ position: 'absolute' as const, inset: 0, background: hovered === i ? 'linear-gradient(to top, rgba(2,111,92,0.3) 0%, transparent 60%)' : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', transition: 'background 0.3s' }} />
            <div style={{ position: 'absolute' as const, bottom: 0, left: 0, right: 0, padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#f0f5f0', fontWeight: 600 }}>{photo.titre}</span>
              <span style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
                {photo.categorie}
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