import React from 'react'

import { AllDoctors } from '../../components/user/AllDoctors'
import { SearchFilterBar } from '../../components/user/SearchFilterBar'
import { UserNavBar } from '../../components/user/common/UserNavBar'

export const DoctorsFullPage = () => {
  return (
    <div>
     <UserNavBar/>
      {/* <SearchFilterBar/> */}
      <AllDoctors/>
    </div>
  )
}
