import { useEffect, useState } from 'react';
import CTAButton from './CTAButton';

const navLinks = [
  { label: 'Desarrollo', href: '#aplicaciones' },
  { label: 'Producto', href: '#productos' },
  { label: 'Instalación', href: '#casos' },
];

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent('Hola, quiero cotizar un kit Baratec.');

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Throttle con requestAnimationFrame: nunca más de 1 cálculo por frame.
    // Crítico en mobile donde el scroll dispara muchos eventos por segundo.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setVisible(window.scrollY > window.innerHeight * 0.6);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
        style={{
          backgroundColor: 'rgba(250,250,247,0.78)',
          backdropFilter: 'blur(16px) saturate(140%)',
          WebkitBackdropFilter: 'blur(16px) saturate(140%)',
          borderBottom: '1px solid rgba(10,10,11,0.08)',
        }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-20">
          <a href="#" className="flex items-center" aria-label="Baratec">
            <img
              src="/logo-b.png"
              alt="Baratec"
              className="h-9 sm:h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <CTAButton
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
          >
            Cotizar
          </CTAButton>
        </nav>
      </div>
    </>
  );
}
