import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';
import LazyVideo from '../components/LazyVideo';

const cases = [
  {
    src: '/silverado-azul.mp4',
    label: 'Z-71 Azul',
    description: 'Control de recorrido.',
  },
  {
    src: '/silverado-gris.mp4',
    label: 'Z-71 Gris',
    description: 'Estabilidad en alta y baja velocidad.',
  },
  {
    src: '/silverado-roja.mp4',
    label: 'Z-71 Roja',
    description: 'Mayor adherencia en condiciones adversas.',
  },
];

export default function CasosRealesSection() {
  return (
    <section
      id="casos"
      className="relative px-6 md:px-12 py-24 md:py-32"
      style={{ backgroundColor: '#F2F2EF' }}
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={50}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-ink/30" />
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                  Casos reales
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
              >
                Relevamiento<br />
                <span className="accent-gradient">a Medida</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-ink/60 max-w-md text-base leading-relaxed">
              La configuraci&oacute;n de nuestros amortiguadores ha sido
              meticulosamente dise&ntilde;ada para mejorar la seguridad,
              potenciar el rendimiento y optimizar la experiencia de
              conducci&oacute;n del veh&iacute;culo.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cases.map((c, i) => (
            <FadeIn key={c.src} delay={i * 0.1}>
              <article
                className="relative rounded-2xl overflow-hidden aspect-[9/16] group cursor-pointer transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: '#F2F2EF',
                  boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 18px 40px -16px rgba(10,10,11,0.25), 0 0 0 1px rgba(221,226,39,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 1px 0 0 rgba(10,10,11,0.03)';
                }}
              >
                <LazyVideo
                  src={c.src}
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  style={{
                    transform: 'scale(1.05)',
                    transformOrigin: 'center',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 100%, rgba(221,226,39,0.2) 0%, rgba(0,0,0,0) 55%)',
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <p className="text-white/90 leading-snug text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
                    {c.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
