import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

type Pillar = {
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
};

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent('Hola, quiero consultar por el service Baratec.');

const pillars: Pillar[] = [
  {
    tag: 'Service',
    title: 'Service propio',
    description:
      'Reparación y revisión en nuestra fábrica de Almafuerte. Cada amortiguador tiene historial de service por número de serie.',
    image: '/producto-detalle.jpg',
    href: WHATSAPP_HREF,
    external: true,
  },
  {
    tag: 'Manual',
    title: 'Manual técnico',
    description:
      'Cada unidad lleva manual de instalación y mantenimiento. Disponible en PDF y QR — escaneable desde el embalaje.',
    image: '/qr-manual-delantero.jpg',
    href: '/manual-delantero.pdf',
    external: true,
  },
  {
    tag: 'Empresa',
    title: 'Almafuerte, Córdoba',
    description:
      'Diseñamos y producimos en Argentina hace más de una década. Industria local con tecnología, ingeniería y control de calidad propio.',
    image: '/kit-completo.webp',
    href: '#contacto',
  },
];

export default function ThreePillars() {
  return (
    <section className="relative px-6 md:px-12 py-20 md:py-28 bg-bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-ink/30" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Más de Baratec
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Detrás del
                <br />
                <span className="accent-gradient">producto.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-ink/60 max-w-md text-base leading-relaxed">
              No es solo el amortiguador. Service propio, manuales técnicos
              y una fábrica argentina detrás de cada unidad.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p, i) => (
            <FadeIn key={p.tag} delay={i * 0.1}>
              <a
                href={p.href}
                target={p.external ? '_blank' : undefined}
                rel={p.external ? 'noreferrer noopener' : undefined}
                className="group relative block rounded-2xl overflow-hidden h-[420px] sm:h-[460px] md:h-[500px] cursor-pointer transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(10,10,11,0.10)',
                  boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(221,226,39,0.6)';
                  e.currentTarget.style.boxShadow =
                    '0 18px 40px -16px rgba(10,10,11,0.25), 0 0 0 1px rgba(221,226,39,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,11,0.10)';
                  e.currentTarget.style.boxShadow =
                    '0 1px 0 0 rgba(10,10,11,0.03)';
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,11,0.10) 0%, rgba(10,10,11,0) 35%, rgba(10,10,11,0.55) 70%, rgba(10,10,11,0.92) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 80% 100%, rgba(221,226,39,0.22) 0%, rgba(10,10,11,0) 55%)',
                  }}
                />

                {/* Top-right arrow */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-[#DDE227]"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <ArrowUpRight
                      size={18}
                      color="#0A0A0B"
                      strokeWidth={2.2}
                    />
                  </span>
                </div>

                {/* Content bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2 transition-colors duration-300 group-hover:text-[#DDE227]">
                    {p.tag}
                  </div>
                  <h3 className="font-display font-bold text-white tracking-[-0.02em] text-2xl sm:text-3xl mb-2">
                    {p.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-sm">
                    {p.description}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
