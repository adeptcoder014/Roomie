import React from 'react';

const FrankfurtHouseDetails = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
        <div className="flex justify-between mb-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Available Occupancies</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <span className="block text-lg font-semibold">Double Occupancy</span>
              <span className="block text-gray-500">₹13,899/mo*</span>
            </div>
          </div>
          <form className="bg-gray-100 p-4 rounded-lg w-72 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 text-gray-900">Get updates over WhatsApp</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                required
              />
              <label className="ml-2 text-gray-900">
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

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Amenities</h2>
          <div className="flex flex-wrap space-x-2 space-y-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full">1 Attached Washroom</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Spacious Cupboard</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <div className="flex flex-wrap space-x-2 space-y-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Hot and Delicious Meals</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">High-Speed WIFI</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Workout Zone</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Professional Housekeeping</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Spacious Refrigerator</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Washing Machine</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Hot Water Supply</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Biometric Enabled Entry</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Food Menu</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Days</th>
                  <th className="py-2 px-4 border">Breakfast</th>
                  <th className="py-2 px-4 border">Lunch</th>
                  <th className="py-2 px-4 border">Evening Snacks</th>
                  <th className="py-2 px-4 border">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: 'Day 1', breakfast: 'Bread Jam, Coffee', lunch: 'Chapati, Paneer Curry', snacks: 'Masala Tea, Khakra', dinner: 'Chapati, Dal Fry' },
                  { day: 'Day 2', breakfast: 'Pancakes, Fruit Juice', lunch: 'Rice, Chicken Curry', snacks: 'Fruit Salad, Milk', dinner: 'Noodles, Manchurian' },
                  // Add more rows as needed
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border">{item.day}</td>
                    <td className="py-2 px-4 border">{item.breakfast}</td>
                    <td className="py-2 px-4 border">{item.lunch}</td>
                    <td className="py-2 px-4 border">{item.snacks}</td>
                    <td className="py-2 px-4 border">{item.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrankfurtHouseDetails;
