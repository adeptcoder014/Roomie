import React from 'react';

const StatsSection = () => {
  return (
    <div className="flex justify-around mt-8">
      <StatCard 
        stat="24+"
        description="Cities"
      />
      <StatCard 
        stat="450+"
        description="Residences"
      />
      <StatCard 
        stat="70,000+"
        description="Beds"
      />
    </div>
  );
};

const StatCard = ({ stat, description }) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{stat}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
};

export default StatsSection;
