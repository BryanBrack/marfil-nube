export default function Materials() {
  return (
    <section className="materials" id="materiales">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Ficha técnica</span>
          <h2 className="serif">De qué están hechas</h2>
          <div className="divider" />
        </div>
        <div className="mat-grid">
          <div className="mat-card">
            <div className="mat-icon">A</div>
            <h4 className="serif">Concreto decorativo</h4>
            <p>Base de cada pieza, moldeada a mano para lograr formas facetadas y estriadas.</p>
          </div>
          <div className="mat-card">
            <div className="mat-icon">B</div>
            <h4 className="serif">Variación natural</h4>
            <p>Ligeras diferencias de color o textura hacen única cada creación.</p>
          </div>
          <div className="mat-card">
            <div className="mat-icon">C</div>
            <h4 className="serif">Acabados en negro</h4>
            <p>Herrajes y dispensadores en negro mate para un contraste sobrio.</p>
          </div>
          <div className="mat-card">
            <div className="mat-icon">D</div>
            <h4 className="serif">Empaque protegido</h4>
            <p>Viruta de kraft y papel de seda cuidan cada pieza durante el envío.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
