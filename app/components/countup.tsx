'use client';
import { useEffect, useState, useRef } from 'react';

export default function CountUp({ end, suffix = '', decimal = false }: { end: number; suffix?: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
          }
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, decimal]);

  return <div ref={ref}>{decimal ? count.toFixed(1) : count}{suffix}</div>;
}