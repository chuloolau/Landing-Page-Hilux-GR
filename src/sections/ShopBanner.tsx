import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

const SHOP_URL = 'https://amortiguadores.baratec.com/';
const TABLET_IMAGE = '/tablet-tienda.webp';

export default function ShopBanner() {
  return (
    <section
      className="relative px-6 md:px-12 py-20 md:py-28"
      style={{ backgroundColor: '#F2F2EF' }}
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={40}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-12 items-center">
          {/* Columna izquierda — título + CTA */}
          <FadeIn>
            <div className="text-center lg:text-left">
              <h2
                className="font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink mb-8 sm:mb-10"
                style={{ fontSize: 'clamp(2.25rem, 6.5vw, 5.5rem)' }}
              >
                Nueva tienda
                <br />
                oficial
              </h2>

              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-[0.18em] px-8 py-4 sm:px-10 sm:py-4.5 text-xs sm:text-sm transition-all duration-300 bg-accent hover:bg-accent-hover hover:scale-[1.03] text-ink cta-primary"
                style={{
                  boxShadow:
                    '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 18px 44px -8px rgba(221,226,39,0.55)',
                }}
              >
                Comprar online
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </FadeIn>

          {/* Columna derecha — imagen del tablet (mockup) */}
          <FadeIn delay={0.15}>
            <div className="relative w-full flex items-center justify-center">
              <img
                src={TABLET_IMAGE}
                alt="Tienda oficial Baratec en tablet"
                className="w-full max-w-xl h-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  // Si la imagen no existe, muestra placeholder visual sin romper
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </FadeIn>
        </div>
      </ParallaxBlock>
    </section>
  );
}
