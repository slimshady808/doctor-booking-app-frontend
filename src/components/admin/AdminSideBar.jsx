import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
import { BiSolidCheckSquare } from "react-icons/bi";
import { BiSolidMapPin } from "react-icons/bi";
import { BiSolidPen } from "react-icons/bi";
import { BiSolidFileBlank} from "react-icons/bi";
import { BiPowerOff } from "react-icons/bi";

export default function AdminSideBar() {

  const history =useNavigate()
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
                                  
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg> */}
                                    <BiSolidBookmarkPlus className="text-white text-1.5xl" />
                                    <span className="text-gray-100">
                                    <Link to="/">Doctors</Link></span>
                                    
                                </a>
                            </li>
                            {/* <li className="rounded-sm">
                                <a
         
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                    <span className="text-gray-100">
                                    <Link to="/admin/doctor_management">Doctor</Link>
                              

                                    </span>
                                </a>
                            </li> */}
                            <li className="rounded-sm">
                                <a
                     
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg> */}
                                    <BiGlobe  className="text-white text-1.5xl" />
                                    <span className="text-gray-100">
                                    <Link to='/admin/user/list'>Users</Link>
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg> */}

                                    <BiSolidCheckSquare className="text-white text-1.5xl" />
                                    <span className="text-gray-100">
                                    <Link to="/admin/all_booking">Booking</Link>
                                    </span>
                                </a>
                            </li>

                            <li className="rounded-sm">
                                <a
                                
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <BiSolidMapPin className="text-white text-1.5xl" />
                                    <span className="text-gray-100">
                                    <Link to="/admin/department">Department</Link>
                                    </span>
                                </a>
                            </li>

                            <li className="rounded-sm">
                                <a
                                
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <BiSolidPen className="text-white text-1.5xl" />
                                    <span className="text-gray-100">
                                    <Link to="/admin/qualification">Qualification</Link>
                                    </span>
                                </a>
                            </li>


                            <li className="rounded-sm">
                                <a
                                
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <BiSolidFileBlank className="text-white text-1.5xl" />
                                    <span className="text-gray-100">
                                    <Link to="/admin/test_titles">Test Titles</Link>
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

        </div>
    );
}
