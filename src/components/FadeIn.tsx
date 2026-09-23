import { motion } from 'framer-motion';
import type { ReactNode, ElementType } from 'react';
import useDeviceCapabilities from '../hooks/useDeviceCapabilities';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const { shouldReduceMotion, prefersReducedMotion } = useDeviceCapabilities();
  const MotionComponent = motion.create(as);

  // Si el SO pidió reduced-motion, sin animación (solo opacity 1 directo).
  // Si es mobile (no reduced-motion), reducimos el transform Y a la mitad para
  // que el efecto sea más sutil y menos costoso (menos repintado).
  const effectiveY = prefersReducedMotion ? 0 : shouldReduceMotion ? Math.round(y / 2) : y;
  const effectiveX = prefersReducedMotion ? 0 : shouldReduceMotion ? Math.round(x / 2) : x;
  const effectiveDuration = prefersReducedMotion ? 0 : duration;

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x: effectiveX, y: effectiveY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay: prefersReducedMotion ? 0 : delay,
        duration: effectiveDuration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
