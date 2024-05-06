import React, { useState } from 'react';
import SemiData from '../components/info/Semi.json';
import KappingData from '../components/info/Kapping.json';

const YourComponent = () => {
  const [currentDataType, setCurrentDataType] = useState('semi');

  const handleClick = (type) => {
    setCurrentDataType(type); // Establece directamente el nuevo tipo de datos
  };

  const currentData = currentDataType === 'semi' ? SemiData : KappingData;
  const { images, article } = currentData.section;
  const { content, additionalImage, title } = article;

  return (
    <section>
      <div className="flex flex-col gap-5 p-5">
        <button
          className={`bg-blue-500 text-white font-bold px-5 py-3 rounded-md hover:bg-blue-600 ${currentDataType === 'semi' ? 'bg-blue-600' : ''}`}
          onClick={() => handleClick('semi')}
        >
          Semi
        </button>
        <button
          className={`bg-blue-500 text-white font-bold px-5 py-3 rounded-md hover:bg-blue-600 ${currentDataType === 'kapping' ? 'bg-blue-600' : ''}`}
          onClick={() => handleClick('kapping')}
        >
          Kapping
        </button>
      </div>

      <picture>
        <figure className="flex flex-wrap gap-5 justify-center p-10">
          {images.map((data, index) => (
            <figure key={index}>
              <img src={data.src} alt={data.alt} style={{ minWidth: '200px', width: '300px', height: '300px', transition: 'all 0.3s' }} />
            </figure>
          ))}
        </figure>
      </picture>

      <article className="flex items-center flex-col-reverse md:flex-row text-center md:text-left gap-5 p-5" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="flex flex-col gap-5">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        <picture>
          <img src={additionalImage.src} alt={additionalImage.alt} style={{ minWidth: '200px', width: '300px', height: '300px', transition: 'all 0.3s' }} />
        </picture>
      </article>
    </section>
  );
};

export default YourComponent;
