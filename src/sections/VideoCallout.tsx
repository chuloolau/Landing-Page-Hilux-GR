import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import LazyVideo from '../components/LazyVideo';
import useDeviceCapabilities from '../hooks/useDeviceCapabilities';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero saber más sobre la tecnología Baratec.',
  );

export default function VideoCallout() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { shouldReduceMotion } = useDeviceCapabilities();

  // Parallax: el texto baja con el scroll (mismo efecto que el Hero).
  // Desactivado en mobile / reduced-motion.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const contentYActive = useTransform(scrollYProgress, [0, 1], ['-15%', '30%']);
  const contentY = shouldReduceMotion ? undefined : contentYActive;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Split layout — texto izquierda + video derecha (espejo del Hero) */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] min-h-[80vh] lg:min-h-screen">
        {/* Columna izquierda — texto con parallax (baja con el scroll) */}
        <motion.div
          style={{ y: contentY }}
          className="relative flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 bg-white"
        >
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-ink/30" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                Amortiguador
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2
              className="font-display font-black uppercase leading-[0.88] tracking-[-0.01em] text-ink select-none"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 6rem)' }}
            >
              <span className="block">Monotubo</span>
              <span className="accent-gradient block">presurizado</span>
              <span className="block">Reservorio</span>
              <span className="block">Nitr&oacute;geno</span>
              <span className="accent-gradient block">Externo</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-7 text-ink/65 leading-relaxed text-base md:text-lg max-w-xl">
              Amortiguador Monotubo Presurizado con Reservorio Independiente.
              Cuerpo de acero de 55&nbsp;mm, v&aacute;lvula sintetizada de
              50&nbsp;mm y piezas de aluminio anodizado. Ofrece regulaci&oacute;n
              de altura de porta espiral.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-9">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-[0.18em] px-7 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-xs transition-all duration-300 bg-accent hover:bg-accent-hover hover:scale-[1.03] text-ink cta-primary"
                style={{
                  boxShadow:
                    '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.55)',
                }}
              >
                Conocer más
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </FadeIn>
        </motion.div>

        {/* Columna derecha — video institucional, más chico y con bordes redondeados */}
        <div className="relative w-full h-[55vh] lg:h-auto flex items-center justify-center bg-white">
          <LazyVideo
            src="/nuevo-video.mp4"
            preload="metadata"
            className="max-h-[70%] max-w-[70%] object-contain rounded-2xl"
            style={{
              boxShadow: '0 30px 80px -20px rgba(10,10,11,0.25)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
