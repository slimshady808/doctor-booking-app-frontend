import React, { useState } from 'react'

import { DoctorDropDown } from './DoctorDropDown';


export const DoctorNavBar = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="flex items-center"
        >
           <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 201.324 201.324" xml:space="preserve">
            
            <circle cx="95.596" cy="10.083" r="10.083"/>
            <circle cx="149.018" cy="10.083" r="10.083"/>
            <path d="M179.06,19.254c-5.123-8.873-14.298-14.17-24.544-14.17v10c6.631,0,12.568,3.428,15.884,9.17
              c3.316,5.743,3.316,12.599,0.001,18.342l-32.122,55.636c-3.315,5.742-9.253,9.17-15.884,9.171c-6.631,0-12.569-3.428-15.885-9.171
              L74.389,42.595c-3.315-5.742-3.315-12.599,0-18.341s9.254-9.171,15.885-9.171v-10c-10.246,0-19.422,5.297-24.545,14.171
              s-5.123,19.468,0,28.341l32.121,55.636c4.272,7.399,11.366,12.299,19.545,13.727v26.832c0,26.211-15.473,47.535-34.492,47.535
              c-19.019,0-34.491-21.324-34.491-47.535v-31.948C59.802,109.52,68.4,99.424,68.4,87.356c0-13.779-11.21-24.989-24.989-24.989
              s-24.989,11.21-24.989,24.989c0,12.067,8.598,22.163,19.989,24.486v31.948c0,31.725,19.959,57.535,44.492,57.535
              c24.532,0,44.491-25.81,44.491-57.535v-26.832c8.178-1.428,15.273-6.328,19.544-13.727l32.122-55.636
              C184.184,38.722,184.184,28.127,179.06,19.254z"/>
                </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800  hidden lg:inline">
            DocTime
          </span>
        </a>

        {/* Navigation Icons */}
        <div className="hidden lg:flex space-x-8">
          {/* ... Your navigation links ... */}
        </div>

        <DoctorDropDown />
      </div>
    </div>
  );
};
