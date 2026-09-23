import type { ReactNode } from 'react';

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  target?: string;
  rel?: string;
};

export default function CTAButton({
  children,
  href = '#contacto',
  variant = 'primary',
  className = '',
  target,
  rel,
}: CTAButtonProps) {
  if (variant === 'ghost') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`group inline-flex items-center justify-center rounded-full border border-ink/20 text-ink/80 font-medium uppercase tracking-[0.18em] px-7 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-xs hover:border-ink/60 hover:text-ink transition-all duration-300 ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.18em] px-7 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-xs transition-all duration-300 bg-[#DDE227] hover:bg-[#FFFF33] hover:scale-[1.03] text-[#0A0A0B] cta-primary ${className}`}
      style={{
        boxShadow:
          '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.45)',
      }}
    >
      {children}
    </a>
  );
}
