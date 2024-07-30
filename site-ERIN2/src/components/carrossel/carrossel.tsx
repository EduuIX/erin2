import React, { useState, useEffect } from 'react';
import './carrossel.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Adicionando mudança automática de imagem
  useEffect(() => {
    const interval = setInterval(nextImage, 2500); // Muda a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <button onClick={nextImage}><i className="fa-solid fa-arrow-left"></i></button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={prevImage}><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  );
};

export default Carousel;
