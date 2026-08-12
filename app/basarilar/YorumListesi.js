'use client';

import { useState, useRef } from 'react';

const INITIAL_COUNT = 6;

export default function YorumListesi({ yorumlar }) {
  const [expanded, setExpanded] = useState(false);
  const btnRef = useRef(null);

  function toggle() {
    if (expanded) {
      // Önce kapat, sonra butona kaydır
      setExpanded(false);
      setTimeout(() => {
        btnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    } else {
      setExpanded(true);
    }
  }

  const gorunenler = expanded ? yorumlar : yorumlar.slice(0, INITIAL_COUNT);
  const fazlaVar = yorumlar.length > INITIAL_COUNT;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {gorunenler.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl border border-border p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300"
          >
            {/* Yıldızlar */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Yorum */}
            <blockquote className="flex-1">
              <p className="text-foreground-muted leading-relaxed italic">
                &ldquo;{testimonial.yorum}&rdquo;
              </p>
            </blockquote>

            {/* Kişi Bilgisi */}
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {testimonial.ad.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.ad} {testimonial.soyad}
                </p>
                <p className="text-xs text-foreground-muted">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Devamını Gör / Gizle Butonu */}
      {fazlaVar && (
        <div className="mt-10 flex flex-col items-center gap-2">
          <button
            ref={btnRef}
            onClick={toggle}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white! text-sm font-semibold shadow-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
          >
            {expanded ? 'Yorumları Gizle' : `Devamını Gör (${yorumlar.length - INITIAL_COUNT} yorum daha)`}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {!expanded && (
            <p className="text-xs text-foreground-muted">
              Toplam {yorumlar.length} danışan yorumu
            </p>
          )}
        </div>
      )}
    </>
  );
}
