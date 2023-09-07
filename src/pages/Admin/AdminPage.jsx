import React from 'react'
import { Admin } from '../../components/admin/Admin'
import { AdminNavbar } from '../../components/admin/AdminNavbar'
import Navbar from '../../components/user/common/Navbar'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { AdminDashBoard } from '../../components/admin/AdminDashBoard'
import { DoctorManagement } from '../../components/admin/DoctorManagement'


export const AdminPage = () => {
  return (
    <div>
  

    <div className='flex'>
    <AdminSideBar/>
    {/* <Admin/> */}
    {/* <AdminDashBoard/> */}
    <DoctorManagement/>
    </div>
    </div>
  )
}
