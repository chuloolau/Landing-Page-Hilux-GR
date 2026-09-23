import FadeIn from '../components/FadeIn';

const specs = [
  { label: 'Construcción', value: 'Aluminio anodizado' },
  { label: 'Reservorio externo', value: 'Nitrógeno · Garrafa flotante' },
  { label: 'Vástago', value: 'Acero cromado rectificado' },
  { label: 'Regulación', value: 'Compresión + rebote' },
  { label: 'Aceite', value: 'Específico de competición' },
];

export default function ProductSection() {
  return (
    <section
      id="producto"
      className="relative px-6 md:px-12 py-24 md:py-32 bg-bg"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
        <FadeIn
          x={-30}
          y={0}
          className="lg:col-span-3 hidden lg:flex flex-col"
        >
          <div
            className="relative rounded-2xl overflow-hidden flex-1 min-h-[420px]"
            style={{
              border: '1px solid rgba(10,10,11,0.08)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <img
              src="/producto-detalle.jpg"
              alt="Detalle del amortiguador delantero Baratec High"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 45%, rgba(255,255,255,0.92) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 mb-1.5">
                Detalle
              </div>
              <div className="font-display text-ink font-semibold text-base leading-tight">
                Vástago cromado · garrafa flotante
              </div>
              <div className="text-ink/60 text-xs mt-1.5">
                Industria argentina · Almafuerte
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn
          x={0}
          y={30}
          delay={0.15}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full"
            style={{
              border: '1px solid rgba(10,10,11,0.08)',
              background:
                'radial-gradient(circle at 30% 30%, rgba(221,226,39,0.10) 0%, rgba(255,255,255,0) 60%), #FFFFFF',
            }}
          >
            <video
              src="/hero-rotaviva.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(255,255,255,0.92) 100%)',
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                  Modelo
                </span>
                <div className="font-display font-bold text-ink tracking-tight text-xl sm:text-2xl mt-1">
                  Baratec High
                </div>
              </div>
              <div
                className="font-mono px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium"
                style={{ background: '#DDE227', color: '#0A0A0B' }}
              >
                En stock
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="lg:col-span-4 flex flex-col gap-7 justify-center">
          <FadeIn x={30} y={0}>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-ink/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                El producto
              </span>
            </div>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.1}>
            <h2
              className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
            >
              Ingeniería <br />
              <span className="accent-gradient">de alta exigencia.</span>
            </h2>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.2}>
            <p className="text-ink/65 leading-relaxed text-base md:text-lg">
              Cuerpo de aluminio anodizado, vástago cromado rectificado y
              reservorio externo de nitrógeno — la <em>garrafa negra</em> — que
              mantiene el aceite estable bajo exigencia térmica. Cada unidad
              lleva número de serie grabado en la base.
            </p>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.3}>
            <dl
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6"
              style={{ borderTop: '1px solid rgba(10,10,11,0.10)' }}
            >
              {specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45">
                    {s.label}
                  </dt>
                  <dd className="text-ink font-medium text-sm sm:text-base">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn
          y={30}
          delay={0.15}
          className="lg:hidden col-span-full"
        >
          <div
            className="relative rounded-2xl overflow-hidden h-[260px]"
            style={{
              border: '1px solid rgba(10,10,11,0.08)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <img
              src="/producto-detalle.jpg"
              alt="Detalle del amortiguador delantero Baratec High"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.92) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55 mb-1">
                Detalle
              </div>
              <div className="font-display text-ink font-semibold text-base">
                Vástago cromado · Industria argentina
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
