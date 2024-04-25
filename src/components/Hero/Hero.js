import './Hero.css';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import hero from '../../images/hero.jpg';

function Hero() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  function normalize(text) {
    let tekstBezDuzychLiter = text.toLowerCase();

    let bezSpacjiIZnakow = tekstBezDuzychLiter.replace(/\s+/g, '-');

    let bezZnakowSpecjalnych = bezSpacjiIZnakow.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return bezZnakowSpecjalnych;
}

  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

  const productTemplate = (city) => {
    return (
      <a href="#offers" onClick={() => console.log('w')}>
        <div className="hero_city border-1 surface-border border-round m-2 text-center py-5 px-3">
          <div className='img_filter'>
            <img alt={city.name} src={images[`${normalize(city.name)}.jpg`]} />
          </div>
          <div className='hero_city-name'>
            <h4 className="mb-1">{city.name}</h4>
          </div>
        </div>
      </a>
    );
  };
  useEffect(() => {
    setProducts([
      {
        id: '0',
        name: "Koszalin"
      },
      {
        id: '1',
        name: "Już w krótce"
      },
      {
        id: '2',
        name: "Już w krótce"
      },
      {
        id: '3',
        name: "Już w krótce"
      },
    ]);
  }, []);
  return (
    <div className='hero'>
      <div className='filter_bg'></div>
      <div className='hero_text'>
        <h1>Wachlarz wydarzeń w&nbsp;Twojej okolicy</h1>
        <h3>Weź udział w wydarzeniu lub stwórz własne!</h3>
        <Carousel className='container' value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
      </div>
      <img className='hero_img' alt="" src={hero} />
    </div>
  );
}

export default Hero;
