'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export type LogoLoopItem = {
  node: ReactNode;
  title: string;
};

type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  hoverSpeed?: number;
  direction?: 'left' | 'right';
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
};

export function LogoLoop({
  logos,
  speed = 40,
  hoverSpeed = 18,
  direction = 'left',
  gap = 48,
  fadeOut = false,
  fadeOutColor = 'hsl(222 47% 6%)',
  ariaLabel = 'Technology icons',
}: LogoLoopProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const offsetRef = useRef(0);
  const targetSpeedRef = useRef(speed);
  const [copyCount, setCopyCount] = useState(2);

  useEffect(() => {
    const root = rootRef.current;
    const sequence = sequenceRef.current;
    const track = trackRef.current;
    if (!root || !sequence || !track) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let previousTime = 0;
    let currentSpeed = speed;

    const measure = () => {
      const sequenceWidth = sequence.getBoundingClientRect().width;
      const viewportWidth = root.getBoundingClientRect().width;
      if (sequenceWidth <= 0) return;

      widthRef.current = sequenceWidth;
      setCopyCount(Math.max(2, Math.ceil(viewportWidth / sequenceWidth) + 2));
      offsetRef.current = direction === 'right' ? -sequenceWidth : 0;
      track.style.transform = 'translate3d(' + offsetRef.current + 'px, 0, 0)';
    };

    const observer = new ResizeObserver(measure);
    observer.observe(root);
    observer.observe(sequence);
    measure();

    const animate = (time: number) => {
      if (previousTime === 0) previousTime = time;
      const elapsed = Math.min(time - previousTime, 48);
      previousTime = time;
      currentSpeed += (targetSpeedRef.current - currentSpeed) * Math.min(elapsed / 180, 1);

      const width = widthRef.current;
      if (!reducedMotion && width > 0) {
        const distance = (currentSpeed * elapsed) / 1000;
        if (direction === 'left') {
          offsetRef.current = (offsetRef.current - distance) % width;
        } else {
          offsetRef.current = (offsetRef.current + distance) % width;
          if (offsetRef.current >= 0) offsetRef.current -= width;
        }
        track.style.transform = 'translate3d(' + offsetRef.current + 'px, 0, 0)';
      }

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [direction, speed]);

  const setHovered = (hovered: boolean) => {
    targetSpeedRef.current = hovered ? hoverSpeed : speed;
  };

  const renderSet = (copy: number) => (
    <div
      key={copy}
      ref={copy === 0 ? sequenceRef : undefined}
      className="flex shrink-0 items-center"
      style={{ gap, paddingRight: gap }}
      aria-hidden={copy !== 0}
    >
      {logos.map((logo, index) => (
        <span
          key={logo.title + '-' + index}
          role="img"
          aria-label={copy === 0 ? logo.title : undefined}
          tabIndex={copy === 0 ? 0 : -1}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          className="group/logo relative flex h-24 w-12 shrink-0 cursor-default items-center justify-center text-[36px] text-accent outline-none transition-transform duration-200 hover:scale-110 focus-visible:scale-110"
        >
          {logo.node}
          <span className="pointer-events-none absolute left-1/2 top-[68px] z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-border/70 bg-card px-2.5 py-1 text-xs font-medium text-foreground opacity-0 transition-opacity duration-150 group-hover/logo:opacity-100 group-focus-visible/logo:opacity-100">
            {logo.title}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label={ariaLabel}
      className="relative h-24 w-full min-w-0 overflow-hidden"
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={trackRef} className="absolute left-0 top-0 flex w-max will-change-transform">
        {Array.from({ length: copyCount }, (_, index) => renderSet(index))}
      </div>
      {fadeOut && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-14"
            style={{ background: 'linear-gradient(to right, ' + fadeOutColor + ', transparent)' }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-14"
            style={{ background: 'linear-gradient(to left, ' + fadeOutColor + ', transparent)' }}
          />
        </>
      )}
    </div>
  );
}