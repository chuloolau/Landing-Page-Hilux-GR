import { useEffect, useState } from 'react';

/**
 * Detecta capacidades del dispositivo para decidir si renderizar animaciones
 * caras (parallax, autoplay simultáneo de videos, etc.) o usar un fallback
 * estático más liviano.
 *
 * - `isMobile`        → ancho <= 768px (igual al breakpoint md de Tailwind)
 * - `prefersReducedMotion` → el usuario pidió en el SO que las webs animen menos
 * - `isLowEnd`        → poco hardware (memoria < 4GB o < 4 hilos lógicos)
 * - `shouldReduceMotion` → cualquiera de los anteriores → desactivar animaciones caras
 */
export type DeviceCapabilities = {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  isLowEnd: boolean;
  shouldReduceMotion: boolean;
};

const MOBILE_QUERY = '(max-width: 768px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function detectLowEnd(): boolean {
  if (typeof navigator === 'undefined') return false;
  // @ts-expect-error — deviceMemory no está tipado en lib.dom estándar
  const mem = navigator.deviceMemory as number | undefined;
  const cores = navigator.hardwareConcurrency;
  if (typeof mem === 'number' && mem > 0 && mem < 4) return true;
  if (typeof cores === 'number' && cores > 0 && cores < 4) return true;
  return false;
}

export default function useDeviceCapabilities(): DeviceCapabilities {
  // SSR-safe defaults: asumimos desktop sin reduced-motion en el render inicial,
  // y corregimos en el primer effect (no hay SSR acá, pero queda robusto).
  const [caps, setCaps] = useState<DeviceCapabilities>({
    isMobile: false,
    prefersReducedMotion: false,
    isLowEnd: false,
    shouldReduceMotion: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mobileMql = window.matchMedia(MOBILE_QUERY);
    const motionMql = window.matchMedia(REDUCED_MOTION_QUERY);
    const lowEnd = detectLowEnd();

    const update = () => {
      const isMobile = mobileMql.matches;
      const prefersReducedMotion = motionMql.matches;
      setCaps({
        isMobile,
        prefersReducedMotion,
        isLowEnd: lowEnd,
        shouldReduceMotion: isMobile || prefersReducedMotion || lowEnd,
      });
    };

    update();
    mobileMql.addEventListener('change', update);
    motionMql.addEventListener('change', update);
    return () => {
      mobileMql.removeEventListener('change', update);
      motionMql.removeEventListener('change', update);
    };
  }, []);

  return caps;
}
