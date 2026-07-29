export default function ImageModal({ image, alt, onClose }) {
  return (
    <div className="image-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="image-modal-inner" onClick={(event) => event.stopPropagation()}>
        <button className="image-modal-close" type="button" onClick={onClose}>
          Cerrar
        </button>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}
