import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { Qualification } from '../../components/admin/Qualification'

export const QualificationPage = () => {
  return (
    <div style={{display:'flex'}}>
    <AdminSideBar/>
    <div className='flex-1'>
    <Qualification />
    </div>
    
  </div>
  )
}
