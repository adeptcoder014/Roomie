import React from 'react';

const FilterButton = ({ active, icon, text }) => {
    return (
        <button className={`flex items-center space-x-2 p-2 rounded-lg ${active ? 'bg-green-200 text-green-700' : 'border text-gray-600'}`}>
            <span>{icon}</span>
            <span>{text}</span>
        </button>
    );
}

export default FilterButton;
