'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field =
  'w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white transition-all duration-200';

const fieldErr =
  'w-full px-4 py-3 rounded-xl border border-red-300 bg-red-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 focus:bg-white transition-all duration-200';

export default function YorumModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ ad: '', soyad: '', email: '', yorum: '' });
  const [durum, setDurum] = useState('idle');
  const [hata, setHata] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => setMounted(true), []);

  const emailGecersiz = form.email.length > 0 && !emailRegex.test(form.email);
  const yorumKisa = form.yorum.length > 0 && form.yorum.length < 50;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function close() {
    setOpen(false);
    if (durum === 'success') {
      setTimeout(() => {
        setDurum('idle');
        setForm({ ad: '', soyad: '', email: '', yorum: '' });
        setHata('');
        setEmailTouched(false);
      }, 300);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDurum('loading');
    setHata('');
    try {
      const res = await fetch('/api/yorum-gonder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setHata(data.error || 'Bir hata oluştu.'); setDurum('error'); }
      else setDurum('success');
    } catch {
      setHata('Bağlantı hatası. Lütfen tekrar deneyin.');
      setDurum('error');
    }
  };

  return (
    <>
      {/* Trigger */}
      <button
        id="yorum-yap-btn"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white! text-sm font-semibold shadow-sm hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.97]"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Sen de Deneyimini Paylaş
      </button>

      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="yorum-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* Panel */}
          <div className="relative w-full sm:max-w-[520px] sm:mx-4 bg-white sm:rounded-2xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh]">

            {/* Gradient header bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] animate-[shimmer_3s_linear_infinite]" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4">
              <div>
                <h2 id="yorum-modal-title" className="font-heading text-xl font-bold text-slate-800">
                  Deneyimini Paylaş
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Yorumun onaylandıktan sonra yayımlanacak
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Kapat"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-all duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable body */}
            <div className="px-6 pb-6 overflow-y-auto">
              {durum === 'success' ? (
                /* ── Başarı ekranı ── */
                <div className="py-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg mb-5">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-800 mb-2">
                    Yorumunuz Alındı!
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[300px]">
                    Teşekkürler! Yorumunuz incelendikten sonra onaylanarak bu sayfada yayımlanacak.
                  </p>
                  <button
                    onClick={close}
                    className="mt-7 px-8 py-3 bg-primary text-white! rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                  >
                    Kapat
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} id="yorum-formu" className="space-y-4">

                  {/* Ad & Soyad */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="yorum-ad" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                        Ad <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" id="yorum-ad" name="ad"
                        value={form.ad} onChange={handleChange}
                        required placeholder="Adınız"
                        className={field} disabled={durum === 'loading'}
                      />
                    </div>
                    <div>
                      <label htmlFor="yorum-soyad" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                        Soyad <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" id="yorum-soyad" name="soyad"
                        value={form.soyad} onChange={handleChange}
                        required placeholder="Soyadınız"
                        className={field} disabled={durum === 'loading'}
                      />
                    </div>
                  </div>

                  {/* E-posta */}
                  <div>
                    <label htmlFor="yorum-email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                      E-posta <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email" id="yorum-email" name="email"
                      value={form.email} onChange={handleChange}
                      onBlur={() => setEmailTouched(true)}
                      required placeholder="ornek@mail.com"
                      className={(emailTouched && emailGecersiz) ? fieldErr : field}
                      disabled={durum === 'loading'}
                    />
                    {emailTouched && emailGecersiz && (
                      <p className="mt-1 text-xs text-red-500">Geçerli bir e-posta adresi girin.</p>
                    )}
                  </div>

                  {/* Yorum */}
                  <div>
                    <label htmlFor="yorum-metin" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                      Yorumunuz <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="yorum-metin" name="yorum"
                      value={form.yorum} onChange={handleChange}
                      required minLength={50} rows={4}
                      placeholder="Dilan Hoca ile çalışma deneyiminizi bizimle paylaşın..."
                      className={`${yorumKisa ? fieldErr : field} resize-none`}
                      disabled={durum === 'loading'}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {yorumKisa
                        ? <p className="text-xs text-red-500">En az 50 karakter giriniz.</p>
                        : <span />}
                      <span className={`text-xs tabular-nums ml-auto ${form.yorum.length >= 50 ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                        {form.yorum.length} / 50+
                      </span>
                    </div>
                  </div>

                  {/* Hata */}
                  {durum === 'error' && (
                    <div className="flex items-start gap-2.5 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {hata}
                    </div>
                  )}

                  {/* Gönder */}
                  <button
                    type="submit" id="yorum-gonder-btn"
                    disabled={durum === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white! py-3.5 rounded-xl text-sm font-semibold shadow-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {durum === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Yorumu Gönder
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Yorumunuz moderasyon sürecinden geçtikten sonra yayımlanacaktır.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        , document.body)}
    </>
  );
}
