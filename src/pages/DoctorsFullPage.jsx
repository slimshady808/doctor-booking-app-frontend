import React from 'react'
import Navbar from '../components/user/common/Navbar'
import { AllDoctors } from '../components/user/AllDoctors'
import { SearchFilterBar } from '../components/user/SearchFilterBar'

export const DoctorsFullPage = () => {
  return (
    <div>
      <Navbar/>
      {/* <SearchFilterBar/> */}
      <AllDoctors/>
    </div>
  )
}
