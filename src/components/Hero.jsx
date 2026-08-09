import { useState } from 'react';
import heroImage from '../assets/gallery-unboxing.jpeg';
import ImageModal from './ImageModal';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <span className="eyebrow">Piezas hechas a mano · Bogotá</span>
        <h1>
          Pequeños <em>detalles</em>,<br />
          objetos con alma.
        </h1>
        <p>
          Concreto decorativo moldeado a mano en formas que transforman una rutina común en un momento de calma. Tres kits, una misma intención: acompañar tus espacios con belleza silenciosa.
        </p>
        <p style={{ color: 'var(--ink-soft)', maxWidth: '420px', marginBottom: '34px' }}>
          Pedidos limitados desde Bogotá con envío seguro y empaque listo para regalar.
        </p>
        <div className="cta-buttons" style={{ justifyContent: 'flex-start' }}>
          <a href="#refugio" className="btn">Ver los kits</a>
          <a href="#filosofia" className="btn ghost">Nuestra filosofía</a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <button
          type="button"
          className="hero-image-button"
          onClick={() => setOpen(true)}
          aria-label="Ver imagen de hero en grande"
        >
          <img src={heroImage} alt="Kit Refugio de Marfil Nube sobre encimera de baño" />
        </button>
      </div>
      {open && (
        <ImageModal
          image={heroImage}
          alt="Kit Refugio de Marfil Nube sobre encimera de baño"
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
