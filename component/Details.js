import React from 'react';

const FrankfurtHouse = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="your-image-url.jpg"
            alt="Frankfurt House"
          />
          <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded">
            Unisex
          </div>
          <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded">
            23 People Viewing Now
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">Frankfurt House</h1>
          <p className="text-gray-700 mb-2">
            33/1, Christ Lane, Venkateshwara Layout, Koramangala, Bengaluru
          </p>
          <p className="text-lg font-bold mb-4">Starts from ₹13,899/mo*</p>
          <p className="text-sm text-gray-500 mb-4">
            *Denotes starting price exclusive of GST. Final prices may vary based on room occupancy, customized services, and additional attributes.
          </p>
          <div className="relative mb-4">
            <iframe
              className="w-full h-48 rounded-md"
              src="your-virtual-tour-url"
              frameBorder="0"
              allowFullScreen
              title="Virtual Tour"
            ></iframe>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="whatsapp-updates"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="whatsapp-updates" className="ml-2 block text-sm text-gray-900">
                  Get updates over WhatsApp
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I have read and agreed to the terms and conditions and privacy policy
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Schedule a Visit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrankfurtHouse;
