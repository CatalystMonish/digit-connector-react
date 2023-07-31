import React, { useState } from 'react';
import { MagnifyingGlassIcon }  from '@heroicons/react/24/solid';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call the onSearch prop with the current search term
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    // Update the search term state when the input value changes
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Call handleSearch when the "Enter" key is pressed
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center border rounded-md p-2 my-5 bg-white">
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="text-gray-600 focus:outline-none"
        onClick={handleSearch}
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBox;
