import React from 'react'
import { UserBookings } from '../components/user/UserBookings'
import { UserNavBar } from '../components/user/common/UserNavBar'

export const UserBookingPage = () => {
  return (
    <>
    {/* <UserNavBar/> */}
    <UserNavBar/>
    <UserBookings/>
    </>
  )
}
