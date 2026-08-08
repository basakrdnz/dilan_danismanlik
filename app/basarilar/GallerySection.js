'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '../components/magicui/blur-fade';
import { Badge } from '../components/ui/badge';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (1).jpeg',
    category: 'seminer',
    title: '24. Uluslararası PDR Kongresi',
    description: 'Kongre açılış töreninde meslektaşlarımız ve akademisyenlerimizle bir arada.',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (2).jpeg',
    category: 'seminer',
    title: 'Uluslararası PDR Kongresi Ekibimiz',
    description: '24. Uluslararası Psikolojik Danışma ve Rehberlik Kongresi sunumumuz sonrası ekibimizle.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (3).jpeg',
    category: 'seminer',
    title: 'Bilnet Okulları "Doğru İletişim" Semineri',
    description: 'Veliler ve eğitimcilere yönelik gerçekleştirdiğimiz iletişim ve empati semineri.',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (4).jpeg',
    category: 'seminer',
    title: 'Çocuklarda Adaptasyon Süreci',
    description: 'Okul öncesi eğitimde çocukların okula uyum ve gelişim süreçleri üzerine sunumumuz.',
  },
  {
    id: 5,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (5).jpeg',
    category: 'seminer',
    title: 'Çocukların Dünyasında Sınırların Gücü',
    description: 'Bilnet Okulları Rehberlik Bölümü iş birliğiyle velilere yönelik sınır koyma eğitimi.',
  },
  {
    id: 6,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (6).jpeg',
    category: 'seminer',
    title: 'Rehberlik Semineri Sunumu',
    description: 'Çocuk gelişimi ve sınırların önemi üzerine konuşmamızdan bir kare.',
  },
  {
    id: 7,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.04 (7).jpeg',
    category: 'seminer',
    title: 'Seminerden Uygulamalı Çalışmalar',
    description: 'Katılımcılarla birlikte gerçekleştirdiğimiz interaktif rehberlik uygulamaları.',
  },
  {
    id: 8,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05.jpeg',
    category: 'seminer',
    title: 'Kürsü Konuşması',
    description: 'Rehberlik ve psikolojik danışmanlıkta güncel yaklaşımlar üzerine konuşmamız.',
  },
  {
    id: 9,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05 (1).jpeg',
    category: 'seminer',
    title: '"Otomatik Pilot" Slayt Sunumu',
    description: 'Günlük yaşamda farkındalık ve otomatik davranış kalıpları üzerine sunumumuz.',
  },
  {
    id: 10,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05 (2).jpeg',
    category: 'spor',
    title: 'Eskrim Sporcuları ile Mental Hazırlık',
    description: 'Müsabaka öncesi odaklanma, kaygı yönetimi ve mental hazırlık çalışmaları.',
  },
  {
    id: 11,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05 (3).jpeg',
    category: 'spor',
    title: 'Halkapınar Spor Salonu Çalışmaları',
    description: 'Genç eskrimcilerle müsabaka öncesi motivasyon ve özgüven seansı.',
  },
  {
    id: 12,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05 (4).jpeg',
    category: 'spor',
    title: 'Eskrim Turnuvası Ödül Töreni',
    description: 'Mental destek sağladığımız sporcularımızın kürsü ve madalya sevinci.',
  },
  {
    id: 13,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05 (5).jpeg',
    category: 'spor',
    title: 'Açık Alan Sporcu Danışmanlığı',
    description: 'Turnuva esnasında sporcularımızın performans takibi ve saha içi mental desteği.',
  },
  {
    id: 14,
    type: 'image',
    src: '/images/WhatsApp Image 2026-07-20 at 21.42.05 (6).jpeg',
    category: 'spor',
    title: 'Eskrim Turnuvası Başarı Sertifikası',
    description: 'Başarıyla tamamlanan turnuva sonrasında antrenörler ve şampiyon sporcumuzla.',
  },
  {
    id: 15,
    type: 'video',
    src: '/images/WhatsApp Video 2026-07-20 at 21.42.05.mp4',
    category: 'spor',
    title: 'Eskrim Turnuvası Performans Anları',
    description: 'Sporcularımızın müsabaka heyecanı ve mental odaklanma süreçleri.',
  }
];

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'seminer', label: 'Seminer & Kongreler' },
  { id: 'spor', label: 'Spor Danışmanlığı' }
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    activeTab === 'all' ? true : item.category === activeTab
  );

  const openLightbox = (id) => {
    const index = filteredItems.findIndex(item => item.id === id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else {
      setLightboxIndex(filteredItems.length - 1);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else {
      setLightboxIndex(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="py-20 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <BlurFade>
          <div className="text-center mb-10">
            <Badge variant="secondary" size="md" className="mb-4">
              Galeri
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Etkinlikler & Çalışmalar
            </h2>
            <p className="text-foreground-muted text-lg max-w-xl mx-auto">
              Seminerlerimiz, kongre sunumlarımız ve sporcularımızla gerçekleştirdiğimiz mental antrenman çalışmalarından kareler.
            </p>
          </div>
        </BlurFade>

        {/* Kategori Filtresi */}
        <BlurFade delay={0.1}>
          <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 active:scale-[0.98] ${
                  activeTab === category.id
                    ? 'bg-primary text-white! shadow-md'
                    : 'bg-white text-foreground-muted hover:bg-surface-dark border border-border/40'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Grid Listesi */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 aspect-[4/3] flex flex-col"
              >
                {/* Medya Bölümü */}
                <div className="relative flex-1 overflow-hidden bg-surface-dark">
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video 
                        src={item.src} 
                        muted 
                        playsInline
                        className="w-full h-full object-cover brightness-95" 
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute w-12 h-12 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                </div>

                {/* Alt Bilgi */}
                <div className="p-4 border-t border-border/40 group-hover:border-transparent transition-colors">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-0.5">
                        {item.category === 'seminer' ? 'Seminer & Kongre' : 'Spor Danışmanlığı'}
                      </span>
                      <h4 className="font-semibold text-secondary text-sm line-clamp-1">{item.title}</h4>
                    </div>
                    {item.type === 'video' && (
                      <span className="shrink-0 text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">
                        Video
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-10 select-none cursor-zoom-out"
          >
            {/* Kapatma Butonu */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors z-[10000]"
              aria-label="Kapat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Sol Ok */}
            <button
              onClick={showPrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors z-[10000]"
              aria-label="Önceki Görsel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Sağ Ok */}
            <button
              onClick={showNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors z-[10000]"
              aria-label="Sonraki Görsel"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Medya İçeriği Kutusu */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center cursor-default bg-secondary-dark/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="relative w-full flex-1 aspect-[4/3] max-h-[70vh] flex items-center justify-center bg-black">
                {activeItem.type === 'video' ? (
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="max-w-full max-h-full object-contain select-none"
                    draggable={false}
                  />
                )}
              </div>

              {/* Açıklama */}
              <div className="w-full bg-secondary-dark p-6 sm:px-8 border-t border-white/10 text-white">
                <div className="flex justify-between items-center gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold">{activeItem.title}</h3>
                  <span className="shrink-0 text-[10px] bg-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {activeItem.category === 'seminer' ? 'Seminer' : 'Spor Danışmanlığı'}
                  </span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                  {activeItem.description}
                </p>
                <div className="mt-4 text-[11px] text-white/40 font-medium">
                  Görsel {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
