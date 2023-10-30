import React from 'react'

import AdminSideBar from '../../components/admin/AdminSideBar'
import { AdminDashBoard } from '../../components/admin/AdminDashBoard'
import { DoctorManagement } from '../../components/admin/DoctorManagement'


export const AdminPage = () => {
  return (
    <div>
  

    <div className='flex'>
    <AdminSideBar/>

    {/* <AdminDashBoard/> */}
    {/* <DoctorManagement/> */}
    </div>
    </div>
  )
}
