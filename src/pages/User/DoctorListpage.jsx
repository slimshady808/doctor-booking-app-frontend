import React from 'react'


import { UserNavBar } from '../../components/user/common/UserNavBar'
import { DoctorList } from '../../components/user/DoctorList'

export const DoctorListpage = () => {
  return (
    <>
    <UserNavBar/>

<DoctorList/>
    </>
  )
}
