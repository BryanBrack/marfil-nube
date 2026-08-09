export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <div className="monogram">MN</div>
              <div>
                <div className="brand-name">Marfil Nube</div>
                <div className="brand-sub">Decoración Artesanal</div>
              </div>
            </div>
            <p>Gracias por elegir nuestros productos artesanales. Cada pieza está hecha con dedicación y amor para transformar tus espacios y momentos.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Colección</h5>
              <a href="#esencia">Kit Esencia</a>
              <a href="#refugio">Kit Refugio</a>
              <a href="#luzcalma">Kit Luz &amp; Calma</a>
            </div>
            <div className="footer-col">
              <h5>Marca</h5>
              <a href="#filosofia">Filosofía</a>
              <a href="#materiales">Materiales</a>
              <a href="#proceso">Proceso</a>
            </div>
            <div className="footer-col">
              <h5>Contacto</h5>
              {/* <a href="mailto:hola@marfilnube.com">hola@marfilnube.com</a> */}
              <a href="https://www.instagram.com/marfilnube" target="_blank" rel="noreferrer">@marfilnube</a>
              <a href="tel:+573242544173">+57 324 254 4173</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Marfil Nube — Decoración Artesanal</span>
          <span>Hecho a mano con alma</span>
        </div>
      </div>
    </footer>
  );
}
