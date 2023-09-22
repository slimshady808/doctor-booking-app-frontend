import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
import { BiSolidCheckSquare } from "react-icons/bi";
import { BiSolidMapPin } from "react-icons/bi";
import { BiSolidPen } from "react-icons/bi";
import { BiSolidFileBlank} from "react-icons/bi";
import { BiPowerOff } from "react-icons/bi";

export const DoctorSideBar = () => {
    
const history=useNavigate()
  const logout = ()=>{
    localStorage.removeItem('authToken')
    history('/login')

  }


  return (
    <div className="flex">
    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60 min-h-full">
        <div className="space-y-3">
            <div className="flex items-center">
                <h2 className="text-xl font-bold text-white">Dashboard</h2>
            </div>
           
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <BiSolidCheckSquare className="text-white text-1.5xl" />
                            <span className="text-gray-100">
                         
                            <Link to="/">Pending Booking</Link>
                            </span>
                        </a>
                    </li>
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                             <BiGlobe  className="text-white text-1.5xl" />
                            <span className="text-gray-100">
                            <Link to="/doctor/history">History</Link>
                   </span>
                        </a>
                    </li>
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <BiSolidMapPin className="text-white text-1.5xl" />
                            <span className="text-gray-100">
                    
                            <Link to="/doctor/slot">Slots</Link></span>
                        </a>
                    </li>
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <BiSolidPen className="text-white text-1.5xl" />
                            <span className="text-gray-100">
                            <Link to="/doctor/review">Reviews</Link>
                            </span>
                        </a>
                    </li>
                    <li className="rounded-sm">
                <a className="flex items-center p-2 space-x-3 rounded-md">
                <BiPowerOff className="text-white text-1.5xl" />
                  <span className="text-gray-100" onClick={logout}>Logout</span>
                </a>
              </li>
                </ul>
            </div>
        </div>
    </div>
    {/* <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Total users
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    12,00
                </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Total Profit
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    $ 450k
                </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Total Orders
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    20k
                </div>
            </div>
        </div>
    </div> */}
</div>
  )
}
