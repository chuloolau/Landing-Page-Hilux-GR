// Type declaration for the <model-viewer> web component from Google.
// Allows using <model-viewer ... /> as a JSX element with the common attributes.

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type ModelViewerAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  src?: string;
  alt?: string;
  poster?: string;
  'camera-controls'?: boolean | '';
  'auto-rotate'?: boolean | '';
  'auto-rotate-delay'?: string | number;
  'rotation-per-second'?: string;
  'shadow-intensity'?: string | number;
  'shadow-softness'?: string | number;
  'environment-image'?: string;
  exposure?: string | number;
  'tone-mapping'?: string;
  'camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'max-camera-orbit'?: string;
  'field-of-view'?: string;
  'disable-zoom'?: boolean | '';
  'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
  'interaction-prompt-style'?: 'wiggle' | 'basic';
  ar?: boolean | '';
  'ar-modes'?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerAttributes;
    }
  }
}

export {};
