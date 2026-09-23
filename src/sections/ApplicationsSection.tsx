import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

type Application = {
  title: string;
  image: string;
  /** Inline object-position para corregir el encuadre por imagen */
  objectPosition?: string;
};

const applications: Application[] = [
  {
    title: 'Off road',
    image: '/silverado-zr2-azul.webp',
    // Desplazado a la izquierda para sacar el logo Chevy del frame visible
    objectPosition: '15% 50%',
  },
  {
    title: 'Campo',
    image: '/2026-slld-ext-gal-05.avif',
  },
  {
    title: 'Pick-up',
    image: '/2026-slld-tow-03-v2.avif',
  },
];

export default function ApplicationsSection() {
  return (
    <section
      id="aplicaciones"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background image — amortiguadores que sangran detrás del título y cards
          (efecto FOX "DEFINE YOUR STYLE" adaptado a fondo blanco) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/amortiguadores-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            // Aparece centrado vertical, anchurado al fondo. Saturación leve
            // y mix-blend para que se integre con el blanco
            objectPosition: '50% 55%',
            opacity: 0.55,
          }}
        />
        {/* Capa de difuminado top + bottom: el fondo se desvanece hacia los
            extremos para no competir con el título arriba y las cards abajo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 18%, rgba(255,255,255,0.20) 38%, rgba(255,255,255,0.20) 62%, rgba(255,255,255,0.75) 82%, rgba(255,255,255,1) 100%)',
          }}
        />
        {/* Sutil tinte lima a la derecha (acento de marca) */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 85% 50%, rgba(221,226,39,0.10) 0%, rgba(255,255,255,0) 45%)',
          }}
        />
      </div>

      <ParallaxBlock className="relative z-10 max-w-[1600px] mx-auto" range={50}>
        {/* Título principal estilo FOX "DEFINE YOUR STYLE" */}
        <FadeIn>
          <h2
            className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-ink text-center mb-12 sm:mb-16 md:mb-20"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 11rem)' }}
          >
            High Performance
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {applications.map((app, i) => (
            <FadeIn key={app.title} delay={i * 0.1}>
              <a
                href="#contacto"
                className="relative block overflow-hidden h-[400px] sm:h-[460px] md:h-[520px] group cursor-pointer transition-transform duration-500 hover:-translate-y-1"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  style={
                    app.objectPosition
                      ? { objectPosition: app.objectPosition }
                      : undefined
                  }
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,11,0) 40%, rgba(10,10,11,0.85) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 100%, rgba(221,226,39,0.2) 0%, rgba(10,10,11,0) 60%)',
                  }}
                />
                {/* Bottom-left label + Learn more (estilo FOX) */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="font-display font-black uppercase tracking-[-0.01em] text-white text-2xl sm:text-3xl md:text-4xl mb-2">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-[#DDE227]">
                    <span>Conocer más</span>
                    <ArrowUpRight
                      size={12}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
