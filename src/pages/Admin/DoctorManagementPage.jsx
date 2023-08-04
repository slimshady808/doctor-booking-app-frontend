import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { DoctorManagement } from '../../components/admin/DoctorManagement'

export const DoctorManagementPage = () => {
  return (
    <div style={{display:'flex'}}>
      <AdminSideBar/>
      <DoctorManagement/>
    </div>
  )
}
