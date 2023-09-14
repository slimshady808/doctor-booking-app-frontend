import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { Department } from '../../components/admin/Department'

export const DepartmentPage = () => {
  return (
    <div className='flex '>
    <div className="h-screen fixed">
      <AdminSideBar  />
      </div>
      <div className='flex-1 bg-gray-200 ml-60 mb-16'>
        <Department />
      </div>
    </div>
  )
}



