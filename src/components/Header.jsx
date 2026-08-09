export default function Header() {
  return (
    <header className="site-header">
      <div className="nav container">
        <div className="brand">
          <div className="monogram">MN</div>
          <div className="brand-copy">
            <div className="brand-name">Marfil Nube</div>
            <div className="brand-sub">Decoración Artesanal</div>
          </div>
        </div>
        <nav className="links" aria-label="Navegación principal">
          <a href="#filosofia">Filosofía</a>
          <a href="#esencia">Kit Esencia</a>
          <a href="#refugio">Kit Refugio</a>
          <a href="#luzcalma">Kit Luz &amp; Calma</a>
          <a href="#materiales">Materiales</a>
          <a href="#proceso">Proceso</a>
        </nav>
      </div>
    </header>
  );
}
