import wine from '../images/wine.svg'
import career from '../images/career.svg'
import grade from '../images/grade.svg'
import business from '../images/business.svg'
import neighbors from '../images/neighbors.svg'
import wireframe from '../images/wireframe.svg'
import copas from '../images/copas.png'
import amore from '../images/amore.png'
import servedWine from '../images/servedWine.png'
import page404 from '../images/404.png'

export const clubVinos = {
    primary: true,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Club de Vinos',
    headline: 'Selecciones exclusivas para nuestros mejores clientes',
    description:
      'Descubre lo que nuestro Club de Vinos exclusivos ofrece a aquellos que forman parte de la familia Amore Vino',
    buttonLabel: 'Club de Vinos',
    imgStart: '',
    img: wine,
    alt: 'Club de Vinos',
    start: '',
    to: '/club'
};

export const vinosGourmet = {
    primary: true,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Vinos Gourmet',
    headline: 'Para aquellos que quieren mas',
    description:
      'Descubre nuevas experiencias con nuestra selección de vinos gourmet.',
    buttonLabel: 'Vinos Gourmet',
    imgStart: 'imgStart',
    img: career,
    alt: 'Vinos Gourmet',
    start: 'start',
    to: '/gourmet'
};

export const accesorios = {
    primary: true,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Accesorios',
    headline: '¿Algún producto es tu agrado?',
    description:
      'No olvides visitar nuestra tienda para comprar nuestra mejor selección de vinos.',
      buttonLabel: 'Accesorios',
      imgStart: 'imgStart',
    img: grade,
    alt: 'Accesorios',
    start: 'start',
    to: '/accesorios'
};

export const blog = {
    primary: true,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false, 
    topLine: 'Blog',
    headline: 'Conecta con personas con los mismos gustos que tu en nuestro Blog!',
    description:
      'Adentrate en el blog y descubre como es que miles de personas comparten sus experiencas con nuestros vinos de la mas alta calidad.',
    buttonLabel: 'Blog',
    imgStart: 'imgStart',
    img: business,
    alt: 'Blog',
    start: 'start',
    to: '/blog'
};

export const especiales = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Vinos Especiales',
  headline: 'Selección especial de nuestros mejores vinos',
  description:
    'Poseemos vinos de la mejor calidad que cuidan tu paladar por lo que deberias adentrarte a conocer nuestra selección especial',
  buttonLabel: 'Especiales',
  imgStart: 'imgStart',
  img: neighbors,
  alt: 'Vinos Especiales',
  start: 'start',
  to: '/especiales'
};

export const destilados = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Vinos Destilados',
  headline: 'Bebidas de calidad para el deguste de tu paladar',
  description: 'Atrevete a experimentar nuestros productos.',
  buttonLabel: 'Destilados',
  imgStart: 'imgStart',
  img: wireframe,
  alt: 'Vinos Destilados',
  start: 'start',
  to: '/destilados'
};

export const infoDataOne = {
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Caracteristicas Basicas',
  headline: 'Las 5 características básicas de un vino',
  description: 'Un vino debe contener cuerpo para la intensidad de color y la densidad en boca del vino, dulzor para la sensación de dulzor en boca, taninos para las sensaciones de astringencia y rugosidad en boca, acidez para la sensación de frescor en boca y alcohol: la sensación de calidez en boca.',
  imgStart: '',
  img: copas,
  alt: 'Vinos Destilados',
  start: 'start',
};

export const mainDataOne = {
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Vinos y Licores',
  headline: 'Amore Vino... los mejores vino a tu alcance',
  description: 'En Amore Vino, estamos comprometidos con nuestros clientes, por lo que nuestros productos son elaborados con las mas altas técnicas de calidad a nivel global.',
  imgStart: true,
  img: servedWine,
  alt: 'Vinos Destilados',
  start: '',
};

export const mainDataTwo = {
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Vinos y Licores',
  headline: 'Amore Vino... los mejores vino a tu alcance',
  description: 'En Amore Vino, estamos comprometidos con nuestros clientes, por lo que nuestros productos son elaborados con las mas altas técnicas de calidad a nivel global.',
  imgStart: false,
  img: servedWine,
  alt: 'Vinos Destilados',
  start: '',
};


export const amoreImg = {
  lightBg: true,
  imgStart: '',
  img: amore,
  alt: 'Amore Vino',
};

export const Img404 = {
  lightBg: true,
  imgStart: '',
  img: page404,
  alt: 'Amore Vino',
}