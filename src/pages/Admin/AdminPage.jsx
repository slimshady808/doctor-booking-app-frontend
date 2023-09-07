import React from 'react'
import { Admin } from '../../components/admin/Admin'
import { AdminNavbar } from '../../components/admin/AdminNavbar'
import Navbar from '../../components/user/common/Navbar'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { AdminDashBoard } from '../../components/admin/AdminDashBoard'


export const AdminPage = () => {
  return (
    <div>
  

    <div className='flex'>
    <AdminSideBar/>
    {/* <Admin/> */}
    <AdminDashBoard/>
    </div>
    </div>
  )
}
