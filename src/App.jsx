import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import KitSection from './components/KitSection';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { kits } from './data/kits';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Philosophy />
      {kits.map((kit) => <KitSection key={kit.id} kit={kit} />)}
      <Materials />
      <Gallery />
      <Cta />
      <Footer />
      <a
        href="https://wa.me/573242544173"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-label">WhatsApp</span>
      </a>
    </>
  );
}