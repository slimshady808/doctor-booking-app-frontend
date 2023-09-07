import React from 'react'
import { UserList } from '../../components/admin/UserList'
import AdminSideBar from '../../components/admin/AdminSideBar'

export const UserListPage = () => {
  return (
    <div className='flex'>
    <AdminSideBar/>
      <UserList/>
    </div>
  )
}
