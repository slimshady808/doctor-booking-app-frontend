import React from 'react';
import bannerImage from './banner.png'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="relative bg-gray-200">
    <img
      className="object-cover w-full h-120"
      src={bannerImage}
      alt="Banner"
    />
    <div className="absolute inset-0  opacity-70"></div>
    <div className="absolute bottom-36 left-36 text-white">
      <h1 className="text-3xl font-extrabold text-blue-700">Book Appointment:</h1>
      <p className="mt-4 text-lg font-semibold text-blue-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="mt-6 px-8 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md shadow-md">
        
        <Link to="/user/doctor/full/list" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Book Appointment</Link>
      </button>
    </div>
  </div>
  );
};

export default Banner;
