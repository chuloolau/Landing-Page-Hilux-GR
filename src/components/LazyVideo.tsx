import { useEffect, useRef, useState } from 'react';
import useDeviceCapabilities from '../hooks/useDeviceCapabilities';

type LazyVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  /** Poster opcional para mostrar antes de que cargue el video. */
  poster?: string;
};

/**
 * Video optimizado:
 *  - `preload="metadata"` por defecto (no descarga el video completo hasta que se necesite)
 *  - Reproduce solo cuando entra al viewport (IntersectionObserver)
 *  - En mobile / reduced-motion, pausa cuando sale del viewport (libera CPU/GPU)
 *  - Si el dispositivo prefiere menos movimiento y hay poster, muestra solo el poster
 *    estático sin reproducir el video (ahorra mucha batería y banda en mobile).
 */
export default function LazyVideo({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  className,
  style,
  ...rest
}: LazyVideoProps) {
  const { shouldReduceMotion, prefersReducedMotion } = useDeviceCapabilities();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  // Si el usuario pidió reduced-motion y hay poster, ni siquiera montamos el video.
  const renderAsStatic = prefersReducedMotion && !!poster;

  useEffect(() => {
    if (renderAsStatic) return;
    const el = videoRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const play = () => {
      // .play() devuelve Promise — algunos browsers la rechazan si el user no interactuó
      el.play().catch(() => {
        /* no-op: autoplay bloqueado, esperamos próxima interacción */
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: si no hay IO, comportate como autoplay normal
      setShouldRender(true);
      if (autoPlay) play();
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            if (autoPlay) play();
          } else if (shouldReduceMotion) {
            // En mobile / low-end, pausamos cuando sale del viewport
            el.pause();
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer?.disconnect();
  }, [autoPlay, shouldReduceMotion, renderAsStatic]);

  if (renderAsStatic && poster) {
    return (
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={className}
        style={style}
        loading="lazy"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      // Solo seteamos `src` cuando entra al viewport para no iniciar descarga de
      // videos pesados al cargar la página (especialmente importante con LFS / mobile).
      src={shouldRender ? src : undefined}
      data-src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      className={className}
      style={style}
      {...rest}
    />
  );
}
