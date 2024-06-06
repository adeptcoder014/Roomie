import React from 'react';
import Header from '../component/Header';
import ImageSection from '../component/ImageSection';
import CardSection from '../component/CardSection';
import StatsSection from '../component/StatsSection';

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
