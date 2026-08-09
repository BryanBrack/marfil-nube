// src/data/kits.js
import refugioMarmol from '../assets/kit-refugio-marmol.jpeg';
import refugioNube from '../assets/kit-refugio-nube.png';
import luzCalmaMarmol from '../assets/kit-luzcalma-marmol.jpeg';
import luzCalmaNube from '../assets/kit_luzcalma_nube.png';
import esenciaImage from '../assets/kit-esencia.jpeg';

export const kits = [
  {
    id: 'esencia',
    side: 'right',
    eyebrow: 'Kit para decorar y regalar',
    name: 'Esencia',
    tagline: 'Un detalle pensado para aportar calma, forma y presencia a los espacios cotidianos.',
    variants: [
      { name: 'Blanco marfil', swatchClass: 'nube', image: esenciaImage }
    ],
    contains: ['1 pieza de decoración', 'Diseño pensado para regalar', 'Embalaje listo para entregar'],
    material: 'Concreto decorativo',
    colors: [
      { name: 'Blanco marfil', swatchClass: 'nube' }
    ],
    note: 'Una propuesta delicada para quienes buscan un regalo con presencia y una sensación serena.'
  },
  {
    id: 'refugio',
    side: 'right',
    eyebrow: 'Kit para el baño',
    name: 'Refugio',
    tagline: 'Un detalle pensado para transformar los pequeños momentos de cada día.',
    variants: [
      { name: 'Marmoleado negro', swatchClass: 'marmol', image: refugioMarmol },
      { name: 'Blanco marfil', swatchClass: 'nube', image: refugioNube }
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
      { name: 'Blanco marfil', swatchClass: 'nube', image: luzCalmaNube }
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