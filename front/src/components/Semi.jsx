import React, { useState } from 'react';
import Softgel from '../components/info/Softgel.json';
import NailSec from '../components/NailsSect.astro'

const Semi = () => {
  const images = Softgel.section.images.map(image => image.src);
  const titles = Softgel.section.images.map(image => image.title);
  const texts = Softgel.section.images.map(image => image.text);

  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const changeMainImage = (image, index) => {
    setMainImage(image);
    setCurrentIndex(index);
    setIsZoomed(false); // Cerramos el visor de imágenes al cambiar la imagen
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setMainImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
    setIsZoomed(true); // Mantenemos el visor de imágenes abierto al cambiar la imagen
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setMainImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
    setIsZoomed(true); // Mantenemos el visor de imágenes abierto al cambiar la imagen
  };

  const closeZoom = (event) => {
    if (event.target === event.currentTarget) {
      setIsZoomed(false);
    }
  };

  return (
    <div className="mx-auto py-10 mb-[10em] h-[100dvh]  md:mb-[10dvh] bg-[var(--color-background)] ">
      <h1 className="text-3xl font-bold text-center mb-8 text-[var(--color-primary)] ">Galería de Estética de Uñas</h1>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <img
            src={mainImage}
            alt="Imagen principal"
            className={`size-[450px] shadow-lg cursor-zoom-in cursor-${isZoomed ? '' : 'cursor-zoom-out'} transition-transform duration-300`}
            onClick={toggleZoom}
          />
        </div>
        <div className="mt-4 flex flex-wrap md:grid md:grid-cols-1 justify-center md:absolute md:right-[35px]">
          {Softgel.section.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="size-16  object-cover cursor-pointer border-2 border-transparent hover:border-gray-500 transition m-1"
              onMouseEnter={() => changeMainImage(image.src, index)}
            />
          ))}
        </div>

        <aside className='lg:absolute  lg:left-[30px] lg:top-[150px] lg:w-[330px] text-center md:text-left'>
          <h1 className='text-xl text-[var(--color-primary)]'>{titles[currentIndex]}</h1>
          <p className='text-balance mt-3 text-[var(--color-secondary)] '>{texts[currentIndex]}</p>
        </aside>
      </div>

      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeZoom}>
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeZoom}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={prevImage}
          >
            &larr;
          </button>
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={nextImage}
          >
            &rarr;
          </button>
          <img
            src={mainImage}
            alt="Imagen principal zoom"
            className="max-h-full"
          />
        </div>
      )}
     
    </div>
    
  );
};

export default Semi;
