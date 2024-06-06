import React from 'react';
import image from '/path/to/your/image.jpg'; // Replace with the correct path

const ImageSection = () => {
  return (
    <div className="flex-shrink-0 md:w-1/2 mb-4 md:mb-0">
      <img src={image} alt="Building" className="w-full h-auto rounded-md shadow-lg" />
    </div>
  );
};

export default ImageSection;
