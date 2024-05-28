import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/350',
  'https://via.placeholder.com/350/0000FF',
  'https://via.placeholder.com/350/FF0000',
  'https://via.placeholder.com/350/00FF00',
  'https://via.placeholder.com/350/0000FF',
  'https://via.placeholder.com/350/FF0000',
  'https://via.placeholder.com/350/00FF00',
  // Agrega más rutas de imágenes aquí
];

const Semi = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [zoomIndex, setZoomIndex] = useState(0);

  const changeMainImage = (image, index) => {
    setMainImage(image);
    setZoomIndex(index);
    setIsZoomed(true); // Mantenemos el visor de imágenes abierto al cambiar la imagen
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
            src={hoveredImage || mainImage}
            alt="Imagen principal"
            className={`w-full h-auto cursor-${isZoomed ? 'zoom-out' : 'zoom-in'} transition-transform duration-300 ${isZoomed ? '' : ''}`}
            onClick={toggleZoom}
          />
        </div>
        <div className="mt-4 flex flex-wrap md:grid md:grid-cols-3 justify-center md:absolute md:right-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Miniatura ${index + 1}`}
              className="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-gray-500 transition m-1"
              onClick={() => changeMainImage(image, index)}
              onMouseEnter={() => setHoveredImage(image)}
              onMouseLeave={() => setHoveredImage(null)}
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
