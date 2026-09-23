import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

type Product = {
  image: string;
  title: string;
  subtitle: string;
};

const PRODUCTS: Product[] = [
  {
    image: '/kit-completo.webp',
    title: 'Baratec High Performance',
    subtitle: 'Kit completo',
  },
  {
    image: '/delanteros.webp',
    title: 'Delantero',
    subtitle: 'Regulable en altura',
  },
  {
    image: '/traseros.webp',
    title: 'Trasero',
    subtitle: 'Sin regulación',
  },
];

export default function ProductCarousel() {
  return (
    <section
      id="productos"
      className="relative px-6 md:px-12 py-16 md:py-24 bg-bg"
    >
      <ParallaxBlock className="max-w-7xl mx-auto" range={50}>
        <div className="mb-10 sm:mb-14 flex flex-col items-start text-left">
          <FadeIn>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-ink/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                Productos
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink text-left"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
            >
              Nuevo
              <br />
              <span className="accent-gradient">desarrollo Z-71</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PRODUCTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <article
                className="relative rounded-2xl overflow-hidden bg-white aspect-[4/5] group cursor-pointer transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(10,10,11,0.08)',
                  boxShadow: '0 1px 0 0 rgba(10,10,11,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(221,226,39,0.6)';
                  e.currentTarget.style.boxShadow =
                    '0 18px 40px -16px rgba(10,10,11,0.18), 0 0 0 1px rgba(221,226,39,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(10,10,11,0.08)';
                  e.currentTarget.style.boxShadow =
                    '0 1px 0 0 rgba(10,10,11,0.03)';
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-5 left-5 right-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="font-display font-bold text-ink tracking-tight text-lg sm:text-xl mb-1">
                    {p.title}
                  </div>
                  <div className="text-ink/65 text-sm leading-snug">
                    {p.subtitle}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
