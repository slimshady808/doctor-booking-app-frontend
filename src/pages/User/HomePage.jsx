import React, { useEffect } from 'react'

import Banner from '../../components/user/banner'
import { Department } from '../../components/user/Department'


import Navbar from '../../components/user/common/Navbar'
import { Footer } from '../../components/user/common/Footer'
import { UserNavBar } from '../../components/user/common/UserNavBar'
import { getAccessToken } from '../../helpers/auth'
import { useNavigate } from 'react-router-dom'
import { Steps } from '../../components/user/Steps'

export const HomePage = () => {



  console.log('home')
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
