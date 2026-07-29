// src/data/kits.js
import refugioMarmol from '../assets/kit-refugio-marmol.png';
import refugioNube from '../assets/kit-refugio-nube.png';
import luzCalmaMarmol from '../assets/kit-luzcalma-marmol.png';
import luzCalmaNube from '../assets/kit_luzcalma_nube.png';

export const kits = [
  {
    id: 'refugio',
    side: 'left',
    eyebrow: 'Kit para el baño',
    name: 'Refugio',
    tagline: 'Un detalle pensado para transformar los pequeños momentos de cada día.',
    variants: [
      { name: 'Marmoleado negro', swatchClass: 'marmol', image: refugioMarmol },
      { name: 'Marfil Nube', swatchClass: 'nube', image: refugioNube }
    ],
    contains: ['1 Bandeja ovalada', '1 Portacepillos', '1 Dispensador para jabón líquido'],
    material: 'Concreto decorativo',
    colors: [
      { name: 'Marmoleado negro', swatchClass: 'marmol' },
      { name: 'Arena suave', swatchClass: 'arena' }
    ],
    note: 'El cepillo de bambú mostrado es un elemento decorativo y no está incluido en el kit.'
  },
  {
    id: 'luzcalma',
    side: 'right',
    eyebrow: 'Kit para decorar y regalar',
    name: 'Luz & Calma',
    tagline: 'Un detalle pensado para decorar y regalar.',
    variants: [
      { name: 'Marmoleado negro', swatchClass: 'marmol', image: luzCalmaMarmol },
      { name: 'Marfil Nube', swatchClass: 'nube', image: luzCalmaNube }
    ],
    contains: ['1 Florero estriado', '1 Bandeja ovalada', '1 Alhajero con tapa', 'Ramas preservadas de eucalipto'],
    material: 'Concreto decorativo',
    colors: [
      { name: 'Marfil Nube', swatchClass: 'nube' },
      { name: 'Tiza gris', swatchClass: 'gris' }
    ],
    note: 'Un regalo pensado para quienes disfrutan la calma, la decoración y los pequeños detalles.'
  }
];