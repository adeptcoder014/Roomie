import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src="/pg.webp" alt={property.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold">{property.name}</h3>
      <p className="text-gray-600">{property.price}</p>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-500 font-semibold">{property.visitingToday} People Visiting Today</p>
      <ul className="mt-2">
        {property.features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <div className="mt-4">
        <a href="#" className="text-blue-500 underline">Explore Residence</a>
      </div>
    </div>
  );
}

export default PropertyCard;
