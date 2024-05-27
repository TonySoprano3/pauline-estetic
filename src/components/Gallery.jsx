import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/350',
  'https://via.placeholder.com/350/0000FF',
  'https://via.placeholder.com/350/FF0000',
  'https://via.placeholder.com/350/00FF00',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    setSelectedImage({
      src: images[(selectedImage.index + 1) % images.length],
      index: (selectedImage.index + 1) % images.length,
    });
  };

  const handlePrevious = () => {
    setSelectedImage({
      src: images[(selectedImage.index - 1 + images.length) % images.length],
      index: (selectedImage.index - 1 + images.length) % images.length,
    });
  };

  return (
    <div className="App">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uña ${index + 1}`}
              className="cursor-pointer"
              onClick={() => setSelectedImage({ src: image, index })}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative flex items-center">
            <button
              className="text-white text-3xl mr-4"
              onClick={handlePrevious}
            >
              &lt;
            </button>
            <div className="relative">
              <img src={selectedImage.src} alt="Selected" className="max-h-screen max-w-full" />
              <button
                className="absolute top-0 right-0 mt-4 mr-4 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
            <button
              className="text-white text-3xl ml-4"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
