import React, { useState } from 'react';
import SemiData from '../components/info/Semi.json';
import KappingData from '../components/info/Kapping.json';
import Hand from '../assets/hand.webp'

const Nails = () => {
  const [currentDataType, setCurrentDataType] = useState('semi');
  const handleClick = (type) => {
    setCurrentDataType(type);
  };
  console.log(SemiData.section.images)

  const currentData = currentDataType === 'semi' ? SemiData : KappingData;
  const { images, article } = currentData.section;
  const { content, additionalImage, title } = article;

  return (
    <section>
      <div className="rounded-3xl grid grid-cols-2 md:grid-cols-3 place-items-center text-center h-full drop-shadow-lg gap-3 p-3 mx-8" style={{backgroundColor: 'var(--color-primary)'}}>
        <figure>
          <img src={Hand.src} className='size-[150px] ' alt="Hand" />
          <p>Semi-permanent</p>
        </figure>
        <figure>
          <img src={Hand.src} className='size-[150px] ' />
          <p>Kapping</p>
        </figure>
        <figure>
          <img src={Hand.src} alt="Hand" className='size-[150px] ' />
          <p>Soft Gel Extensions</p>
        </figure>
      </div>

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

      <div className="flex flex-wrap gap-5 justify-center p-10">
        {images.map((data, index) => (
          <figure key={index}>
            <img
              src={(data.src).src}
              alt={data.alt}
              className="hover:scale-110"
              style={{ minWidth: '200px', width: '300px', height: '300px', transition: 'all 0.3s' }}
            ></img>
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
