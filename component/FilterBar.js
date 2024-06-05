import React from 'react';
import FilterButton from './FilterButton';

const FilterBar = () => {
    return (
        <div className="flex flex-wrap items-center p-4 bg-white shadow-md rounded-lg space-x-2">
            <div className="flex space-x-2">
                <FilterButton active icon="🏠" text="PG/Hostels" />
                <FilterButton icon="🏢" text="Flats" />
            </div>
            <div className="flex-grow flex flex-wrap items-center space-x-2 ml-2">
                <Dropdown text="Locality" />
                <Dropdown text="Budget" />
                <Dropdown text="Gender" />
                <Dropdown text="Preferred By" />
            </div>
            <div className="flex space-x-2">
                <button className="border rounded-lg p-2 text-gray-600 flex items-center space-x-1">
                    <span className="material-icons">tune</span>
                    <span>More Filters</span>
                </button>
                <Dropdown text="Sort By: Popularity" />
            </div>
        </div>
    );
}

export default FilterBar;
