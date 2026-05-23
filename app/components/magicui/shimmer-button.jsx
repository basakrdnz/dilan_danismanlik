'use client';

import { cn } from '@/lib/utils';

export function ShimmerButton({
  children,
  className,
  shimmerColor = 'rgba(255,255,255,0.2)',
  shimmerSize = '0.1em',
  borderRadius = '0.75rem',
  ...props
}) {
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden font-medium transition-all duration-300 active:scale-[0.98]',
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      {/* Shimmer efekti */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* İçerik */}
      <span className="relative z-10">{children}</span>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
}
