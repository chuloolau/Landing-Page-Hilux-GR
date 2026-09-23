import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Menú hamburguesa para mobile (oculto en md+).
 *
 * - Botón hamburguesa fijo en top-right (z alto, sobre cualquier sticky nav).
 * - Drawer slide-from-right con links + CTA Cotizar.
 * - Cierra con: tap en backdrop, tap en link, tecla Escape.
 * - Body scroll bloqueado mientras está abierto.
 * - Accesibilidad: role="dialog", aria-modal, aria-expanded, aria-controls,
 *   aria-labels en los botones y backdrop con aria-hidden.
 */

const NAV_LINKS = [
  { label: 'Desarrollo', href: '#aplicaciones' },
  { label: 'Producto', href: '#productos' },
  { label: 'Instalación', href: '#casos' },
  { label: 'Contacto', href: '#contacto' },
];

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent('Hola, quiero cotizar un kit Baratec.');

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Esc cierra + lock scroll del body mientras está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa — solo mobile, fijo arriba a la derecha */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        className="md:hidden fixed top-4 right-4 z-[60] w-11 h-11 flex items-center justify-center rounded-full bg-white/85 border border-ink/10 text-ink transition-colors hover:bg-white active:scale-95"
        style={{
          backdropFilter: 'blur(12px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(140%)',
          boxShadow: '0 4px 14px -2px rgba(10,10,11,0.12)',
        }}
      >
        <Menu size={20} strokeWidth={2.2} />
      </button>

      {/* Drawer + backdrop con animación */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-[70] bg-ink/45"
              onClick={close}
              aria-hidden="true"
              style={{
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
            />

            <motion.div
              id="mobile-menu-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-[71] w-72 max-w-[85vw] bg-bg flex flex-col shadow-2xl"
            >
              {/* Header del drawer */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-ink/10">
                <img
                  src="/logo-b.png"
                  alt="Baratec"
                  className="h-7 w-auto"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Cerrar menú"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-ink hover:bg-ink/5 transition-colors active:scale-95"
                >
                  <X size={20} strokeWidth={2.2} />
                </button>
              </div>

              {/* Links de navegación */}
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="font-display font-bold uppercase tracking-tight text-ink text-lg py-3 px-3 rounded-lg hover:bg-ink/5 active:bg-ink/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA WhatsApp */}
              <div className="p-5 border-t border-ink/10">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={close}
                  className="block text-center rounded-full font-bold uppercase tracking-[0.18em] px-6 py-3.5 text-xs bg-accent hover:bg-accent-hover text-ink cta-primary transition-colors"
                  style={{
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.55)',
                  }}
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
