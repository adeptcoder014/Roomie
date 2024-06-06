import React from 'react';
import Header from './Header';
import ImageSection from './ImageSection';
import CardSection from './CardSection';
import StatsSection from './StatsSection';

const MainContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="flex flex-col md:flex-row">
        <ImageSection />
        <CardSection />
      </div>
      <StatsSection />
    </div>
  );
};

export default MainContainer;
