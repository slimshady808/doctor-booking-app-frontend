import React from 'react'
import { Admin } from '../../components/admin/Admin'
import { AdminNavbar } from '../../components/admin/AdminNavbar'
import Navbar from '../../components/user/common/Navbar'
import AdminSideBar from '../../components/admin/AdminSideBar'


export const AdminPage = () => {
  return (
    <div>
    <Navbar/>

    <div className='flex'>
    <AdminSideBar/>
    <Admin/>
    </div>
    </div>
  )
}
