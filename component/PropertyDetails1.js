import React from 'react';
import PropertyCard from './PropertyCard';

const SimilarProperties = () => {
  const properties = [
    {
      id: 1,
      name: 'Teresina House',
      price: '₹12,699/month',
      location: 'Koramangala',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      visitingToday: 2,
      features: ['Attached Bathroom', 'Single', 'Double'],
    },
    {
      id: 2,
      name: 'Podolsk House',
      price: '₹14,499/month',
      location: 'Koramangala',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      visitingToday: 2,
      features: ['Attached Bathroom', 'Single', 'Double'],
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Other Similar Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default SimilarProperties;
