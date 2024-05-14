import React, { useState } from 'react';
import SemiData from '../components/info/Semi.json';
import KappingData from '../components/info/Kapping.json';
import SoftGelData from '../components/info/Softgel.json';
import Hand from '../assets/hand.webp';
import HandTwo from '../assets/hand2.svg'
import HandThree from '../assets/hand3.webp'
const Nails = () => {
  const [currentDataType, setCurrentDataType] = useState('semi');

  const handleClick = (type) => {
    setCurrentDataType(type);
  };

  const getDataByType = (type) => {
    switch (type) {
      case 'semi':
        return SemiData;
      case 'kapping':
        return KappingData;
      case 'softgel':
        return SoftGelData;
      default:
        return SemiData; // Por defecto, muestra SemiData si el tipo no coincide
    }
  };

  const currentData = getDataByType(currentDataType);
  const { images, article } = currentData.section;
  const { content, additionalImage, title } = article;

  return (
    <section>
      <div className="rounded-3xl grid grid-cols-2 md:grid-cols-3 place-items-center text-center h-full drop-shadow-lg gap-3 p-3 mx-8" style={{ backgroundColor: 'var(--color-tertiary)' }}>
        <figure>

          <button className={`font-light px-5 py-3 rounded-md transition-all ${currentDataType === 'semi' ? 'scale-110 font-bold text-[var(--color-primary)] '  : ''}`} onClick={() => handleClick('semi')}>
          <img src={Hand.src} className='size-[150px] ' alt="Hand"  />
          <p>Semi-permanent</p>
          </button>
        </figure>

        <figure>
          <button className={`font-light px-5 py-3 rounded-md transition-all ${currentDataType === 'kapping' ? 'scale-110 font-bold text-[var(--color-primary)] '  : ''}`} onClick={() => handleClick('kapping')}>
          <img src={HandTwo.src} className='size-[150px] ' alt="Hand" />
          <p>Kapping</p>
          </button>
        </figure>

        <figure>
          <button className={`font-light px-5 py-3 rounded-md transition-all ${currentDataType === 'softgel' ? 'scale-110 font-bold text-[var(--color-primary)] '  : ''}`} onClick={() => handleClick('softgel')}>
          <img src={HandThree.src} alt="Hand" className='size-[150px] ' />
          <p>Soft Gel Extensions</p>
          </button>
        </figure>
      </div>

     

      <div className="flex flex-wrap gap-5 justify-center p-10">
        {images.map((data, index) => (
          <figure key={index}>
            <img
              loading='lazy'
              src={data.src}
              alt={data.alt}
              className="hover:scale-110"
              style={{ minWidth: '200px', width: '300px', height: '300px', transition: 'all 0.3s' }}
            />
          </figure>
        ))}
      </div>

      <article className="flex items-center flex-col-reverse md:flex-row text-center md:text-left gap-5 p-5" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="flex flex-col gap-5">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <img
          src={additionalImage.src}
          alt={additionalImage.alt}
          style={{ minWidth: '200px', width: '300px', height: '300px', transition: 'all 0.3s' }}
        />
      </article>
    </section>
  );
};

export default Nails;
