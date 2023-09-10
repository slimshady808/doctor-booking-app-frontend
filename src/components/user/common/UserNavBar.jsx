import React from 'react';
import { ProfileDropDown } from './ProfileDropDown';

export const UserNavBar = () => {
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
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase hidden lg:inline">
            Company
          </span>
        </a>

        {/* Navigation Icons */}
        <div className="hidden lg:flex space-x-8">
          <a
            href="/"
            aria-label="Home"
            title="Home"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Home
          </a>
          <a
            href="/"
            aria-label="About"
            title="About"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            About
          </a>
          <a
            href="/"
            aria-label="Features"
            title="Features"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Features
          </a>
        </div>

        {/* Profile Dropdown */}
        <ProfileDropDown />
      </div>
    </div>
  );
};
