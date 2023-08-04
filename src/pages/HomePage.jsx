import React from 'react'

import Banner from '../components/banner'
import { Department } from '../components/Department'
import { Steps } from '../components/Steps'

import Navbar from '../components/user/common/Navbar'
import { Footer } from '../components/user/common/Footer'

export const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Department/>
    <Steps/>
    <Footer/>
    </div>
  )
}
