export default function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <span className="eyebrow">Reserva tu kit</span>
        <h2 className="serif">Elige el ritual que quieres regalar</h2>
        <p>Producción artesanal en lotes limitados desde Bogotá. Escríbenos para conocer disponibilidad y tiempos de entrega.</p>
        <p style={{ color: 'var(--ink-soft)', maxWidth: '520px', margin: '0 auto 38px' }}>
          Podemos personalizar la selección de piezas y ayudarte a preparar un regalo listo para sorprender.
        </p>
        <div className="cta-buttons">
          <a href="#refugio" className="btn">Kit Refugio</a>
          <a href="#luzcalma" className="btn ghost">Kit Luz &amp; Calma</a>
        </div>
      </div>
    </section>
  );
}
