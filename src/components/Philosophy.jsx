export default function Philosophy() {
  return (
    <section className="philosophy" id="filosofia">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Hecho a mano con alma</span>
          <h2 className="serif">Cada pieza cuenta una historia</h2>
          <div className="divider" />
        </div>
        <div className="phil-grid">
          <div className="phil-item">
            <span className="num">I.</span>
            <h3 className="serif">Moldeado artesanal</h3>
            <p>Cada objeto se vierte y talla a mano en concreto decorativo, por lo que ninguna pieza es idéntica a otra.</p>
          </div>
          <div className="phil-item">
            <span className="num">II.</span>
            <h3 className="serif">Materia con carácter</h3>
            <p>Texturas facetadas y estriadas que capturan la luz distinto según la hora del día, como la piedra natural.</p>
          </div>
          <div className="phil-item">
            <span className="num">III.</span>
            <h3 className="serif">Empaque con intención</h3>
            <p>Cada kit llega envuelto en papel, viruta de kraft y una tarjeta de bienvenida — listo para regalar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
