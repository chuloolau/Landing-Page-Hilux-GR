import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';

const items = [
  {
    value: 'Almafuerte',
    label: 'Fabricación en Córdoba',
  },
  {
    value: 'Nº de serie',
    label: 'Trazabilidad por unidad',
  },
  {
    value: 'Service propio',
    label: 'Reparación en fábrica',
  },
  {
    value: 'Nitrógeno',
    label: 'Reservorio externo',
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-bg-soft border-y border-ink/[0.08] py-10 sm:py-12 md:py-16 px-6 md:px-12">
      <ParallaxBlock className="max-w-7xl mx-auto" range={40}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {items.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.08}>
            <div className="flex flex-col gap-1.5">
              <div className="font-display font-bold text-ink text-xl sm:text-2xl md:text-3xl leading-none tracking-[-0.03em]">
                {item.value}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-ink/55">
                {item.label}
              </div>
            </div>
          </FadeIn>
        ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
