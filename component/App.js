import React from 'react';
import PropertyDetails from './components/PropertyDetails';
import SimilarProperties from './components/SimilarProperties';

function App() {
  return (
    <div className="p-4">
      <PropertyDetails />
      <SimilarProperties />
    </div>
  );
}

export default App;
