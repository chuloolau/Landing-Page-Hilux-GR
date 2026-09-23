import { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent(
    'Hola, quiero cotizar un kit Baratec para Silverado Z-71.',
  );

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Escribir por WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full transition-all duration-500 hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      }`}
      style={{
        backgroundColor: '#25D366',
        boxShadow:
          '0 10px 30px -6px rgba(37,211,102,0.5), 0 0 0 4px rgba(37,211,102,0.15)',
      }}
    >
      <WhatsAppIcon size={28} color="#FFFFFF" />
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: '0 0 0 0 rgba(37,211,102,0.6)',
          animation: 'wa-pulse 2.4s ease-out infinite',
        }}
      />
      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70% { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </a>
  );
}
