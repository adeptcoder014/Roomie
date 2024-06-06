import React from 'react';

const CardSection = () => {
  return (
    <div className="md:w-1/2 flex flex-col space-y-4">
      <Card 
        title="Modern Student Housing"
        image="/path/to/student.jpg" // Replace with the correct path
        alt="Student Housing"
      />
      <Card 
        title="Co-living for Professionals"
        image="/path/to/professionals.jpg" // Replace with the correct path
        alt="Co-living for Professionals"
      />
      <Card 
        title="Managed Apartments"
        image="/path/to/apartments.jpg" // Replace with the correct path
        alt="Managed Apartments"
      />
    </div>
  );
};

const Card = ({ title, image, alt }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-md shadow-lg">
      <img src={image} alt={alt} className="w-16 h-16 rounded-full mr-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default CardSection;
