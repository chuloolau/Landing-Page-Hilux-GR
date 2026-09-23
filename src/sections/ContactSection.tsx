import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero cotizar un kit Baratec para Silverado Z-71.',
  );
const SHOP_URL =
  'https://baratecamortiguadores.mitiendanube.com/productos/kitx4-amortiguadores-baratec-s10-2012-high-performance-copia/';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-white"
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={50}>
        {/* Header centrado */}
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-ink/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
              Llev&aacute; tus Amortiguadores
            </span>
            <div className="h-px w-10 bg-ink/30" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink text-center max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Ped&iacute; tu <span className="accent-gradient">kit.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-ink/65 leading-relaxed text-base md:text-lg max-w-xl mx-auto mt-6 text-center">
            Compr&aacute; directo en la tienda online o cotiz&aacute; por
            WhatsApp con asesor&iacute;a t&eacute;cnica.
          </p>
        </FadeIn>

        {/* 2 acciones primarias side-by-side */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 1 — Tienda online */}
          <FadeIn delay={0.3}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10,10,11,0.08)',
                boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(221,226,39,0.5)';
                e.currentTarget.style.boxShadow =
                  '0 28px 60px -16px rgba(10,10,11,0.12), 0 0 0 1px rgba(221,226,39,0.30)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,10,11,0.08)';
                e.currentTarget.style.boxShadow =
                  '0 1px 0 0 rgba(10,10,11,0.03)';
              }}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex-shrink-0">
                <img
                  src="/tablet-tienda.webp"
                  alt="Tienda online Baratec en tablet"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 mb-2">
                  Tienda online
                </div>
                <div className="font-display font-bold text-ink tracking-tight text-2xl sm:text-3xl leading-tight mb-3">
                  Compr&aacute; tu kit
                </div>
                <div className="text-ink/65 text-sm leading-snug mb-6">
                  Cat&aacute;logo completo, pago seguro y env&iacute;o a todo
                  el pa&iacute;s.
                </div>
                <div className="mt-auto inline-flex items-center gap-2 self-start rounded-full font-bold uppercase tracking-[0.18em] px-6 py-3 text-[11px] sm:text-xs transition-all duration-300 bg-accent group-hover:bg-accent-hover group-hover:scale-[1.03] text-ink cta-primary"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.45)',
                  }}
                >
                  Comprar online
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Card 2 — WhatsApp directo */}
          <FadeIn delay={0.4}>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10,10,11,0.08)',
                boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(221,226,39,0.5)';
                e.currentTarget.style.boxShadow =
                  '0 28px 60px -16px rgba(10,10,11,0.12), 0 0 0 1px rgba(221,226,39,0.30)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,10,11,0.08)';
                e.currentTarget.style.boxShadow =
                  '0 1px 0 0 rgba(10,10,11,0.03)';
              }}
            >
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden flex-shrink-0"
                style={{ backgroundColor: '#F2F2EF' }}
              >
                <video
                  src="/hero-rotaviva.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: 'scale(1.12)',
                    transformOrigin: 'center',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0) 65%, rgba(255,255,255,0.55) 100%)',
                  }}
                />
              </div>
              <div className="relative p-6 sm:p-8 flex flex-col flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 mb-2">
                  WhatsApp &middot; Asesor&iacute;a directa
                </div>
                <div className="font-display font-bold text-ink tracking-tight text-2xl sm:text-3xl leading-tight mb-3">
                  Cotiz&aacute; con un asesor
                </div>
                <div className="text-ink/65 text-sm leading-snug mb-6">
                  Ped&iacute; tu presupuesto hoy mismo. Respuesta inmediata.
                  Asesoramiento sin cargo.
                </div>
                <div
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full font-bold uppercase tracking-[0.18em] px-6 py-3 text-[11px] sm:text-xs transition-all duration-300 bg-accent group-hover:bg-accent-hover group-hover:scale-[1.03] text-ink cta-primary"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.55)',
                  }}
                >
                  Comunicate por WhatsApp
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </a>
          </FadeIn>
        </div>

      </ParallaxBlock>

      <footer
        className="max-w-7xl mx-auto mt-20 sm:mt-28 pt-8"
        style={{ borderTop: '1px solid rgba(10,10,11,0.10)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Izquierda — Brand + contacto */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-b.webp"
                alt="Baratec"
                className="h-7 w-auto object-contain pointer-events-none select-none"
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="font-display font-bold uppercase tracking-[0.25em] text-ink text-sm">
                Baratec
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-5">
              <a
                href="mailto:baratec@baratec.com"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/65 hover:text-ink transition-colors"
              >
                baratec@baratec.com
              </a>
              <span className="hidden sm:inline text-ink/25">&middot;</span>
              <a
                href="https://maps.google.com/?q=Calle+Cordoba+115+Almafuerte+Cordoba+Argentina"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/65 hover:text-ink transition-colors"
              >
                Calle C&oacute;rdoba 115, Almafuerte &mdash; C&oacute;rdoba
              </a>
            </div>
          </div>

          {/* Derecha — Copyright */}
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 sm:text-right">
            &copy; {new Date().getFullYear()} &middot; Efrom Technology SA
            &middot; Almafuerte, C&oacute;rdoba &mdash; Argentina
          </div>
        </div>

      </footer>
    </section>
  );
}
