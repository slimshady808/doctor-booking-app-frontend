import React from 'react'

export const SearchFilterBar = () => {
  return (
    <div className="bg-gray-200 shadow-lg p-4 rounded-lg mb-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Filter Dropdown */}
          <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Filter
            </button>
            {/* Dropdown Content */}
            <div className="absolute top-10 right-0 bg-white shadow-lg w-40 py-2 rounded-lg">
              {/* Add your filter options here */}
              <div className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Option 1
              </div>
              <div className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                Option 2
              </div>
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Sort
          </button>
          {/* Dropdown Content */}
          <div className="absolute top-10 right-0 bg-white shadow-lg w-40 py-2 rounded-lg">
            {/* Add your sort options here */}
            <div className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Sort by Option 1
            </div>
            <div className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
              Sort by Option 2
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
