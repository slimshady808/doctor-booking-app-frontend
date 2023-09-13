import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'
import { TestTitles } from '../../components/admin/TestTitles'

export const TestTitlesPage = () => {
  return (
    <div style={{display:'flex'}}>
    <AdminSideBar/>
    <div className='flex-1'>
    <TestTitles/>
    </div>
  </div>
  )
}
