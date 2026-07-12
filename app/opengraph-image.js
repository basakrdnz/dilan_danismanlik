import { ImageResponse } from 'next/og';

export const alt = 'Dilan Karakoç | Ankara Danışmanlık';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1B2A4A 0%, #1B2A4A 55%, #7B2D42 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#9C7B6B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
              color: '#FFFFFF',
            }}
          >
            D
          </div>
          <div style={{ fontSize: 30, color: '#F0EBE7', fontWeight: 600 }}>
            Dilan Danışmanlık
          </div>
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Ankara&apos;da Profesyonel Danışmanlık
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: '#F0EBE7',
            maxWidth: 900,
          }}
        >
          Bireysel Danışmanlık · Spor Psikolojisi · Eğitim Danışmanlığı
        </div>
      </div>
    ),
    { ...size }
  );
}
