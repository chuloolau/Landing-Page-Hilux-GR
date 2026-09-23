import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import useDeviceCapabilities from '../hooks/useDeviceCapabilities';

export default function BaratecHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { shouldReduceMotion } = useDeviceCapabilities();

  // Parallax: imagen baja con las letras estilo FOX. La imagen se desplaza
  // bastante hacia abajo creando profundidad. El contenido baja un poco y
  // mantiene opacidad full (no se desvanece).
  // En mobile / reduced-motion se desactiva (es el efecto más caro de la página).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageYActive = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const imageScaleActive = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const contentYActive = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const imageY = shouldReduceMotion ? undefined : imageYActive;
  const imageScale = shouldReduceMotion ? undefined : imageScaleActive;
  const contentY = shouldReduceMotion ? undefined : contentYActive;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col w-full overflow-hidden bg-white"
    >
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
        <a href="#" className="flex items-center" aria-label="Baratec">
          <img
            src="/logo-b.png"
            alt="Baratec"
            className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          <a
            href="#aplicaciones"
            className="nav-link-fox"
          >
            Desarrollo
          </a>
          <a
            href="#productos"
            className="nav-link-fox"
          >
            Producto
          </a>
          <a
            href="#casos"
            className="nav-link-fox"
          >
            Instalación
          </a>
        </div>
      </nav>

      {/* Split layout estilo FOX: texto izquierda (bg blanco) + imagen derecha */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] w-full">
        {/* Columna izquierda — texto sobre fondo blanco */}
        <motion.div
          style={{ y: contentY }}
          className="relative flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 bg-white"
        >
          <FadeIn delay={0.25} y={40}>
            <h1
              className="font-display font-black uppercase leading-[0.95] tracking-[-0.01em] text-ink text-left select-none break-words"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 6.5rem)' }}
            >
              <span className="block">Z-71</span>
              <span className="accent-gradient block">SILVERADO</span>
              <span className="block">
                CAMBIA TU MANERA
                <br />
                <span className="accent-gradient">DE ANDAR</span>
              </span>
            </h1>
          </FadeIn>
        </motion.div>

        {/* Columna derecha — imagen Silverado con parallax */}
        <div className="relative w-full h-[55vh] lg:h-auto overflow-hidden bg-bg">
          <motion.img
            src="/hero-silverado-barro.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: '50% 50%',
              y: imageY,
              scale: imageScale,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(221,226,39,0.18) 0%, rgba(0,0,0,0) 55%)',
            }}
          />
        </div>
      </div>

    </section>
  );
}
