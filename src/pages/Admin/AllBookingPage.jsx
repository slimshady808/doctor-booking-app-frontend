import React from 'react';
import { AllBooking } from '../../components/admin/AllBooking';
import AdminSideBar from '../../components/admin/AdminSideBar';

export const AllBookingPage = () => {
  return (
    <div className='flex '>
    <div className="h-screen fixed">
      <AdminSideBar  />
      </div>
      <div className='flex-1 bg-gray-200 ml-60'>
        <AllBooking />
      </div>
    </div>
  );
};