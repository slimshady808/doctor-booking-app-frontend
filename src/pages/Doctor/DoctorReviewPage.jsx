import React from 'react'
import { DoctorRevenue } from '../../components/doctor/DoctorRevenue'
import { DocotorReview } from '../../components/doctor/DocotorReview'
import Navbar from '../../components/user/common/Navbar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export default function DoctorReviewPage() {
  return (
    <>
    <DoctorNavBar/>
    {/* <Navbar/> */}
    <div className='flex'>
    <DoctorSideBar/>
     <DocotorReview/>
     </div>
    </>
  )
}

