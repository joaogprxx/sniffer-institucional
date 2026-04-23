import { type CSSProperties } from 'react';

export function IPhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="lg:w-[320px] shrink-0 flex justify-center lg:justify-end">
      <div style={{
        position: 'relative', width: 280, background: '#1a1a1a',
        borderRadius: 44, padding: 12, flexShrink: 0,
        boxShadow: 'inset 0 0 0 2px #3a3a3a, 0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px #111',
      }}>
        <div style={{
          position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 6, background: '#2a2a2a', borderRadius: 3, zIndex: 2,
        }} />
        {/* scrollbarWidth/msOverflowStyle are non-standard props requiring the cast */}
        <div
          className="[&::-webkit-scrollbar]:hidden"
          style={{ borderRadius: 34, overflowY: 'scroll', overflowX: 'hidden', background: '#000', height: 580, scrollbarWidth: 'none', msOverflowStyle: 'none' } as CSSProperties}
        >
          <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}
