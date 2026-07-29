// src/data/kits.js
import refugioImage from '../assets/kit-refugio.png';
import luzCalmaImage from '../assets/kit-luz-calma.png';

export const kits = [
  {
    id: 'refugio',
    side: 'left',
    eyebrow: 'Kit para el baño',
    name: 'Refugio',
    tagline: 'Un detalle pensado para transformar los pequeños momentos de cada día.',
    image: refugioImage,
    contains: ['1 Bandeja ovalada', '1 Portacepillos', '1 Dispensador para jabón líquido'],
    material: 'Concreto decorativo',
    color: 'Marmoleado negro',
    swatchClass: 'marmol',
    note: 'El cepillo de bambú mostrado es un elemento decorativo y no está incluido en el kit.'
  },
  {
    id: 'luzcalma',
    side: 'right',
    eyebrow: 'Kit para decorar y regalar',
    name: 'Luz & Calma',
    tagline: 'Un detalle pensado para decorar y regalar.',
    image: luzCalmaImage,
    contains: ['1 Florero estriado', '1 Bandeja ovalada', '1 Alhajero con tapa', 'Ramas preservadas de eucalipto'],
    material: 'Concreto decorativo',
    color: 'Marfil Nube',
    swatchClass: 'nube',
    note: 'Un regalo pensado para quienes disfrutan la calma, la decoración y los pequeños detalles.'
  }
];