import React from 'react';
import { AllBooking } from '../../components/admin/AllBooking';
import AdminSideBar from '../../components/admin/AdminSideBar';

export const AllBookingPage = () => {
  return (
    <div className='flex'>
      <AdminSideBar />
      <div className='flex-1 bg-gray-200'>
        <AllBooking />
      </div>
    </div>
  );
};