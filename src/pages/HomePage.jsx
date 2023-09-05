import React, { useEffect } from 'react'

import Banner from '../components/banner'
import { Department } from '../components/Department'
import { Steps } from '../components/Steps'

import Navbar from '../components/user/common/Navbar'
import { Footer } from '../components/user/common/Footer'
import { UserNavBar } from '../components/user/common/UserNavBar'

export const HomePage = () => {

  return (
    <div>
    <UserNavBar/>
    {/* <Navbar/> */}
    <Banner/>
    <Department/>
    <Steps/>
    <Footer/>
    </div>
  )
}
