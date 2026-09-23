import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkle,
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import LazyVideo from '../components/LazyVideo';

const RAISED_VIDEO = '/hero-rotaviva.mp4';

const VEHICLE_IMAGES = [
  { src: '/silverado-z71.png', color: 'Plata metálico', swatch: '#C8CBCE' },
  { src: '/GNT.avif', color: 'Rojo cherry', swatch: '#9B1C2A' },
  {
    src: '/silverado-z71-negro-metalico.avif',
    color: 'Negro metálico',
    swatch: '#0F1012',
  },
  { src: '/z71---rip-tide.avif', color: 'Azul Rip Tide', swatch: '#1F6373' },
];

const ROW_1: LucideIcon[] = [
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
];
const ROW_2: LucideIcon[] = [
  Camera,
  Brush,
  Box,
  Wand2,
  Figma,
  Framer,
  Type,
  Layers,
];

function SectionLabel({
  children,
  align = 'center',
  variant = 'dark',
}: {
  children: React.ReactNode;
  align?: 'center' | 'start';
  variant?: 'dark' | 'light';
}) {
  return (
    <div
      className={`flex items-center gap-2 ${
        align === 'start' ? 'justify-start' : 'justify-center'
      }`}
    >
      <Sparkle
        className="h-3 w-3"
        style={{ color: '#DDE227' }}
        strokeWidth={1.5}
      />
      <span
        className={`font-mono uppercase tracking-[0.3em] text-[11px] ${
          variant === 'light' ? 'text-ink/55' : 'text-white/70'
        }`}
      >
        {children}
      </span>
      <Sparkle
        className="h-3 w-3"
        style={{ color: '#DDE227' }}
        strokeWidth={1.5}
      />
    </div>
  );
}

function MarqueeRow({
  icons,
  direction,
  variant = 'dark',
}: {
  icons: LucideIcon[];
  direction: 'left' | 'right';
  variant?: 'dark' | 'light';
}) {
  const items = [...icons, ...icons];
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex gap-3 w-max ${animClass}`}>
        {items.map((Icon, i) => (
          <div
            key={i}
            className={`h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
              variant === 'light' ? '' : 'liquid-glass'
            }`}
            style={
              variant === 'light'
                ? {
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10,10,11,0.08)',
                    boxShadow: '0 1px 3px 0 rgba(10,10,11,0.05)',
                  }
                : undefined
            }
          >
            <Icon
              className={`h-5 w-5 md:h-6 md:w-6 ${
                variant === 'light' ? 'text-ink/70' : 'text-white/85'
              }`}
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  const [vehicleIdx, setVehicleIdx] = useState(0);
  const currentVehicle = VEHICLE_IMAGES[vehicleIdx];

  return (
    <section className="relative w-full bg-bg text-ink antialiased px-4 sm:px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:py-28">
      {/* Eyebrow */}
      <div className="max-w-7xl mx-auto flex items-center gap-3 mb-6">
        <div className="h-px w-10 bg-ink/30" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
          Features
        </span>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-14">
        <div className="max-w-3xl">
          <h2
            className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-ink"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          >
            Hi, I&apos;m{' '}
            <span className="accent-gradient">Max Reed!</span>
          </h2>
          <p className="mt-6 text-ink/65 leading-relaxed text-base md:text-lg max-w-2xl">
            A London-based independent creator shaping sharp visual systems,
            web-ready products, and story-first campaigns. With a decade of
            craft behind me, I help ideas move with focus and intention.
          </p>
        </div>
        <a
          href="#contacto"
          className="group relative inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.18em] px-7 py-3 sm:px-8 sm:py-3.5 text-[11px] sm:text-xs transition-all duration-300 bg-accent hover:bg-accent-hover hover:scale-[1.03] text-ink cta-primary flex-shrink-0"
          style={{
            boxShadow:
              '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.45)',
          }}
        >
          Let&apos;s Team Up Today
        </a>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* === Column 1 — 01 Vehículo (configurador color) === */}
        <article
          className="relative rounded-2xl overflow-hidden min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex flex-col md:col-span-2 lg:col-span-1"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(10,10,11,0.08)',
          }}
        >
          {/* Showcase: imagen con crossfade */}
          <div className="relative flex-1 min-h-[400px] md:min-h-[460px] lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentVehicle.src}
                src={currentVehicle.src}
                alt={`Silverado Z-71 ${currentVehicle.color}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 w-full h-full object-contain p-6"
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex flex-col p-5 md:p-6 gap-4">
            <SectionLabel variant="light" align="start">
              01 Vehículo
            </SectionLabel>

            {/* Color swatches estilo configurador etec */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                {VEHICLE_IMAGES.map((v, i) => {
                  const isActive = i === vehicleIdx;
                  return (
                    <button
                      key={v.src}
                      onClick={() => setVehicleIdx(i)}
                      aria-label={v.color}
                      title={v.color}
                      className="relative rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
                      style={{
                        width: isActive ? '26px' : '20px',
                        height: isActive ? '26px' : '20px',
                        backgroundColor: v.swatch,
                        border:
                          v.swatch.toLowerCase() === '#c8cbce'
                            ? '1px solid rgba(10,10,11,0.18)'
                            : '1px solid rgba(10,10,11,0.08)',
                        boxShadow: isActive
                          ? '0 0 0 2px #FFFFFF, 0 0 0 3.5px #0A0A0B, 0 4px 10px -2px rgba(0,0,0,0.2)'
                          : '0 1px 3px 0 rgba(0,0,0,0.15)',
                      }}
                    />
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`swatch-name-${vehicleIdx}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55"
                >
                  {currentVehicle.color}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </article>

        {/* === Column 2 — Client Voice + 10M+ === */}
        <div className="grid grid-rows-1 md:grid-rows-[auto_1fr] gap-4 md:gap-5">
          {/* Client Voice */}
          <article className="noise-overlay relative rounded-2xl overflow-hidden bg-[#324444] p-5 md:p-6">
            <div className="relative z-10">
              <SectionLabel align="start">Client Voice</SectionLabel>
              <p className="mt-4 font-display text-[13.5px] sm:text-sm leading-[1.6] text-white/90">
                &ldquo;Max reshaped our image with a degree of finesse and
                vision that surpassed what we&apos;d hoped for. The process
                felt graceful, and the outcomes speak for themselves.&rdquo;
              </p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/65">
                <span className="text-white">Elena Brooks</span>
                {' · '}Creative Director — Halcyon
              </div>
            </div>
          </article>

          {/* 10M+ */}
          <article className="relative rounded-2xl overflow-hidden bg-black min-h-[300px] flex flex-col">
            <LazyVideo
              src={RAISED_VIDEO}
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
              <div className="flex-1 flex items-center justify-center">
                <span
                  className="font-display font-bold tracking-[-0.04em] text-white text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-none"
                  style={{
                    filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.55))',
                  }}
                >
                  10M
                  <span className="accent-gradient">+</span>
                </span>
              </div>
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/75">
                Raised for startups
              </div>
            </div>
          </article>
        </div>

        {/* === Column 3 — Daily Software + Reach Me === */}
        <div className="grid grid-rows-1 md:grid-rows-[1fr_auto] gap-4 md:gap-5">
          {/* Silverado Z-71 — kit completo */}
          <article
            className="relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(10,10,11,0.08)',
            }}
          >
            <img
              src="/kit-completo.webp"
              alt="Kit completo Baratec Z-71 — 2 delanteros + 2 traseros con reservorio externo"
              className="absolute inset-0 w-full h-full object-contain p-6"
              loading="lazy"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 100%)',
              }}
            />
            <div className="relative z-10 flex flex-col h-full p-5 md:p-6 gap-4">
              <div>
                <SectionLabel variant="light">Silverado Z-71</SectionLabel>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <MarqueeRow icons={ROW_1} direction="left" variant="light" />
                <MarqueeRow icons={ROW_2} direction="right" variant="light" />
              </div>
            </div>
          </article>

          {/* Reach Me */}
          <article className="noise-overlay relative rounded-2xl overflow-hidden bg-[#324444] p-5 md:p-6">
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <SectionLabel align="start">Reach Me</SectionLabel>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/55 mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:hi@maxreed.com"
                      className="font-display text-white text-[14px] sm:text-[15px] hover:text-accent transition-colors"
                    >
                      hi@maxreed.com
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/55 mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+442078163"
                      className="font-display text-white text-[14px] sm:text-[15px] hover:text-accent transition-colors"
                    >
                      +44 207 81 63
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Open contact"
                className="h-9 w-9 rounded-full flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                style={{
                  background: '#DDE227',
                  boxShadow: '0 4px 12px -2px rgba(221,226,39,0.4)',
                }}
              >
                <ArrowUpRight
                  className="h-4 w-4"
                  color="#0A0A0B"
                  strokeWidth={2.2}
                />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
