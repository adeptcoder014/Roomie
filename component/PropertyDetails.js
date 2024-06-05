import React from 'react';

const PropertyDetails = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h1 className="text-2xl font-bold mb-4">Details of Frankfurt House</h1>
      <p className="mb-4">
        Frankfurt House by Stanza Living is not your everyday PG in Koramangala. It's your second home. To begin with, all the home-like comforts you're used to are waiting for you in this fully-furnished hostel for Female. Housekeeping services so you don't have to spend time cleaning your room.
      </p>
      <a href="#" className="text-blue-500">Read more</a>
      <div className="mt-4">
        <a href="#" className="text-blue-500 underline">Policies & House Rules</a>
      </div>
      <div className="mt-6">
        <input type="checkbox" id="whatsappUpdates" className="mr-2" />
        <label htmlFor="whatsappUpdates">Get updates over WhatsApp</label>
      </div>
      <div className="mt-4">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms">
          I have read and agreed to the <a href="#" className="text-blue-500">terms and conditions</a> and <a href="#" className="text-blue-500">privacy policy</a> and hereby confirm to proceed.
        </label>
      </div>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Schedule a Visit</button>
      </div>
    </div>
  );
}

export default PropertyDetails;
