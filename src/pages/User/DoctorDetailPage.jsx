import React from 'react'
import { DoctorDetails } from '../../components/user/DoctorDetails'
import Navbar from '../../components/user/common/Navbar'
import { UserNavBar } from '../../components/user/common/UserNavBar'


export const DoctorDetailPage = () => {
  return (
    <div>
    <UserNavBar/>
    {/* <Navbar/> */}
    <DoctorDetails/>
   
</div>
  )
}
