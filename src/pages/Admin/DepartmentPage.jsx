import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { Department } from '../../components/admin/Department'

export const DepartmentPage = () => {
  return (
    <div style={{display:'flex'}}>
    <AdminSideBar/>
   <Department/>
  </div>
  )
}
