import React from 'react'
import { DoctorRevenue } from '../../components/doctor/DoctorRevenue'
import { DocotorReview } from '../../components/doctor/DocotorReview'
import Navbar from '../../components/user/common/Navbar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'

export default function DoctorReviewPage() {
  return (
    <>
    <Navbar/>
    <div className='flex'>
    <DoctorSideBar/>
     <DocotorReview/>
     </div>
    </>
  )
}

