'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function NumberTicker({
  value,
  suffix = '',
  prefix = '',
  delay = 0,
  duration = 2000,
  className,
  ...props
}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Sayısal değeri çıkar (örn: "500+" → 500, "98%" → 98)
  const numericValue = typeof value === 'string'
    ? parseFloat(value.replace(/[^0-9.]/g, ''))
    : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart easing
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(eased * numericValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(numericValue);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasStarted, numericValue, duration, delay]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)} {...props}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
