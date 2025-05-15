import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://storage.googleapis.com/a1aa/image/5ac89b79-b695-4d24-8283-24db0838e22e.jpg',
      alt: 'White flowers with green background'
    },
    {
      id: 2,
      src: 'https://storage.googleapis.com/a1aa/image/c60231a7-18d5-4e14-a949-ef72ae4c92d3.jpg',
      alt: 'Green fern leaves closeup'
    },
    {
      id: 3,
      src: 'https://storage.googleapis.com/a1aa/image/728ddef4-f680-4068-58f4-62f415a7bfcb.jpg',
      alt: 'Kingfisher bird perched on branch with green blurred background'
    },
    {
      id: 4,
      src: 'https://storage.googleapis.com/a1aa/image/6fd81d99-438d-4c8e-365a-d7fac462a6cc.jpg',
      alt: 'Blue lake with mountains and clouds'
    },
    {
      id: 5,
      src: 'https://storage.googleapis.com/a1aa/image/34e84713-bed0-4a82-dd07-a37ba5ae70c9.jpg',
      alt: 'Large tree in field with blue sky'
    },
    {
      id: 6,
      src: 'https://storage.googleapis.com/a1aa/image/cf23f5e9-846d-4c9b-b0a9-60039e481237.jpg',
      alt: 'Green hills with sunlight'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(2); // Starting with the kingfisher image as in the original

  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen p-4">
      {/* Main Image Display */}
      <div className="relative w-full max-w-4xl flex items-center justify-center mb-6">
        <button 
          onClick={goToPrevious}
          aria-label="Previous" 
          className="absolute left-0 z-10 text-white text-2xl p-4 hover:bg-white/10 rounded-full"
        >
          <FaArrowLeft />
        </button>
        
        <img 
          alt={images[currentImageIndex].alt}
          className="max-w-full max-h-[400px] object-contain"
          height="400"
          src={images[currentImageIndex].src}
          width="800"
        />
        
        <button 
          onClick={goToNext}
          aria-label="Next" 
          className="absolute right-0 z-10 text-white text-2xl p-4 hover:bg-white/10 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex space-x-4 overflow-x-auto max-w-4xl w-full scrollbar-hide">
        {images.map((image, index) => (
          <img 
            key={image.id}
            alt={image.alt}
            className={`flex-shrink-0 w-24 h-24 object-cover rounded-sm cursor-pointer ${
              index === currentImageIndex ? 'border border-gray-400' : ''
            }`}
            height="100"
            src={image.src}
            width="100"
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;