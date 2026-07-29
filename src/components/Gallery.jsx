import galleryPack from '../assets/gallery-unboxing.jpeg';
import galleryDetail from '../assets/kit-luz-calma.png';

export default function Gallery() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Detrás de la creación</span>
          <h2 className="serif">Del taller a tu mesa</h2>
          <div className="divider" />
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={galleryPack} alt="Kit Luz y Calma recién desempacado con ramas de eucalipto y tarjeta de agradecimiento" />
            <span className="g-tag">El empaque</span>
          </div>
          <div className="gallery-item">
            <img src={galleryDetail} alt="Alhajero abierto mostrando joyas dentro del kit Luz y Calma" />
            <span className="g-tag">El detalle</span>
          </div>
        </div>
        <p className="gallery-caption">Cada pedido sale del taller envuelto a mano, listo para abrir.</p>
      </div>
    </section>
  );
}
