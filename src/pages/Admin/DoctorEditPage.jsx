import React from 'react'
import { EditDoctor } from '../../components/admin/EditDoctor'
import AdminSideBar from '../../components/admin/AdminSideBar'

export const DoctorEditPage = () => {
  return (
    <div style={{display:'flex'}}>
    <AdminSideBar/>
      <EditDoctor/>
    </div>
  )
}
