import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import ImageModal from './ImageModal';

export default function KitSection({ kit }) {
  const [ref, visible] = useReveal();
  const [open, setOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(kit.variants[0]);

  const handleSelectVariant = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <section className="section" id={kit.id}>
      <div className={`container kit ${kit.side}`}>
        <button
          type="button"
          className={`kit-media reveal ${visible ? 'visible' : ''}`}
          ref={ref}
          onClick={() => setOpen(true)}
          aria-label={`Ver ${kit.name} en grande`}
        >
          <img
            key={selectedVariant.name}
            className={`kit-image ${selectedVariant.swatchClass || ''}`}
            src={selectedVariant.image}
            alt={`${kit.name} de Marfil Nube`}
          />
        </button>
        <div className="kit-info reveal visible">
          <span className="eyebrow">{kit.eyebrow}</span>
          <h2 className="serif">{kit.name}</h2>
          <p className="tagline">{kit.tagline}</p>
            <div className="meta-item">
              <span className="meta-label">Colores</span>
              <div className="meta-value color-list">
                {kit.variants.map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    className={`color-option ${selectedVariant.name === variant.name ? 'active' : ''}`}
                    onClick={() => handleSelectVariant(variant)}
                  >
                    <span className={`swatch ${variant.swatchClass}`}></span>
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          <span className="contains-label">El kit contiene</span>
          <ul className="contains-list">
            {kit.contains.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="meta-row">
            <div className="meta-item">
              <span className="meta-label">Material</span>
              <span className="meta-value">{kit.material}</span>
            </div>
          </div>
          <p className="note">{kit.note}</p>
        </div>
      </div>
      {open && (
        <ImageModal
          image={selectedVariant.image}
          alt={`${kit.name} de Marfil Nube`}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}