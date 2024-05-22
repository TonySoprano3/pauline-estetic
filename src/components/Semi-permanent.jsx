import React, { useState } from 'react';
import SemiData from '../components/info/Semi.json';
import KappingData from '../components/info/Kapping.json';
import SoftGelData from '../components/info/Softgel.json';
import Hand from '../assets/hand.webp';
import HandTwo from '../assets/hand2.svg'
import HandThree from '../assets/hand3.webp'
const Nails = () => {
  
  const [currentDataType, setCurrentDataType] = useState('semi');
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleClick = (type) => {
    setCurrentDataType(type);
    setZoomedImage(null);
  };

  const handleImageClick = (index) => {
    setZoomedImage(index);
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
  const { content, additionalImage, title, subtitle } = article;

  return (
    <section>
      <div className=" grid grid-cols-3  place-items-center text-center h-full gap-3 p-3 md:mx-8 md:rounded-[4.5rem]  " style={{ backgroundColor: 'var(--color-secondary)' }}>
        <figure>

          <button className={`font-extralight  px-5 py-3 rounded-md transition-all ${currentDataType === 'softgel' ? 'scale-110 font-bold text-[var(--color-primary)] drop-shadow '  : 'text-[var(--color-text)] '}`} onClick={() => handleClick('softgel')}>
          <img src={Hand.src} className='size-[150px] ' alt="Hand"  />
          <p>Extensiones Softgel</p>
          </button>
        </figure>

        <figure>
          <button className={`font-light px-5 py-3 rounded-md transition-all ${currentDataType === 'semi' ? 'scale-110 font-bold text-[var(--color-primary)] drop-shadow '  : 'text-[var(--color-text)]'}`} onClick={() => handleClick('semi')}>
          <img src={HandTwo.src} className='size-[150px] ' alt="Hand" />
          <p>Semi y Kapping</p>
          </button>
        </figure>

        <figure>
          <button className={`font-light px-5 py-3 rounded-md transition-all ${currentDataType === 'kapping' ? 'scale-110 font-bold text-[var(--color-primary)] drop-shadow '  : 'text-[var(--color-text)]'}`} onClick={() => handleClick('kapping')}>
          <img src={HandThree.src} alt="Hand" className='size-[150px] ' />
          <p>Ver Todo</p>
          </button>
        </figure>
      </div>

     
    
      <div className="flex flex-wrap gap-5 justify-center p-10">
        {images.map((data, index) => (
          <figure key={index}
          onClick={() => handleImageClick(index)}
          >
           
            <img

              loading='lazy'
              src={data.src}
              alt={data.alt}
              className={zoomedImage === index ? " " : "hover:scale-110"}
              style={{ minWidth: '200px', width: '300px', height: '300px', transition: 'all 0.3s',  }}
            />
        
          </figure>
        ))}
      </div>

      <article className="flex items-center flex-col-reverse md:flex-row text-center md:text-left gap-[9rem] p-5" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="flex flex-col gap-3">
          <h2 className='text-3xl  font-bold text-[var(--color-secondary)] '>{title}</h2>
          <h3 className='text-lg/relaxed'>{subtitle}</h3>
          <p className='text-base/relaxed text-[var(--color-text)] '>{content}</p>
        </div>
        <img
          src={additionalImage.src}
          alt={additionalImage.alt}
          style={{ width: '100%', height: '300px' }}
        />
      </article>
      
    </section>
    
  );
};

export default Nails;
