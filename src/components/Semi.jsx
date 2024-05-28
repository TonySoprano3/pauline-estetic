import React, { useState } from 'react';
import Softgel from '../components/info/Softgel.json';

const Semi = () => {
  const images = Softgel.section.images.map(image => image.src);

  const [mainImage, setMainImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);

  const changeMainImage = (image, index) => {
    setMainImage(image);
    setZoomIndex(index);
    setIsZoomed(false); // Cerramos el visor de imágenes al cambiar la imagen
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const nextImage = () => {
    const nextIndex = (zoomIndex + 1) % images.length;
    setMainImage(images[nextIndex]);
    setZoomIndex(nextIndex);
    setIsZoomed(true); // Mantenemos el visor de imágenes abierto al cambiar la imagen
  };

  const prevImage = () => {
    const prevIndex = (zoomIndex - 1 + images.length) % images.length;
    setMainImage(images[prevIndex]);
    setZoomIndex(prevIndex);
    setIsZoomed(true); // Mantenemos el visor de imágenes abierto al cambiar la imagen
  };

  const closeZoom = (event) => {
    if (event.target === event.currentTarget) {
      setIsZoomed(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Galería de Estética de Uñas</h1>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <img
            src={mainImage}
            alt="Imagen principal"
            className={`size-[450px] cursor-${isZoomed ? 'zoom-out' : 'zoom-in'} transition-transform duration-300`}
            onClick={toggleZoom}
          />
        </div>
        <div className="mt-4 flex flex-wrap md:grid md:grid-cols-2 justify-center md:absolute md:right-[30px] ">
          {Softgel.section.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-gray-500 transition m-1"
              onMouseEnter={() => changeMainImage(image.src, index)}
            />
          ))}
        </div>
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
