import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Oil from '../images/Nutriment Blue Oil .jpg'
import Creme from '../images/green-hemp-oil-sq.jpg'
import Mask from '../images/Dermaplane_peptide_mask.jpg.jpeg'
import Lotion from '../images/VitalitySkinCareProductsphotosbyKristinaPearlPhotographyLakeTappsWA-1624-2-scaled.jpg'
import '../styles/HomeCarousel.css';

const HomeCarousel = () => {
 
  const handleAddToCart = (product) => {
    console.log(`Added ${product.description} to cart!`);
  };

  const products = [
    {
      imgSrc: Lotion,
      imgAlt: 'lotionProduct',
      description: 'Organic Sun Glow Body Lotion - 16oz w/ Travel Size',
      price: '$32.99',
    },
    {
      imgSrc: Creme,
      imgAlt: 'bodyCreme',
      description: 'Herbal Skin Creme - 8oz Variety Packs (3 Packs)',
      price: '$10.98',
    },
    {
      imgSrc: Oil,
      imgAlt: 'oils',
      description: 'Essential Oils - 4oz',
      price: '$8.98',
    },
    {
      imgSrc: Mask,
      imgAlt: 'faceMask',
      description: 'Organic Face Mask - 30 day supply',
      price: '$24.98',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} containerClass="carousel-container">
        {products.map((product, index) => (
          <div key={index} className="gridImg1">
            <img src={product.imgSrc} alt={product.imgAlt} className="photo" />
            <p className='prd-description'>{product.description}</p>
            <p className="price">{product.price}</p>
            <button onClick={() => handleAddToCart(product)} className='carousel-btn'>Add to Cart</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

