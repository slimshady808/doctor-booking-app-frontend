
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
import { BsPersonFillAdd } from 'react-icons/bs';
import {fetchDoctors} from '../../Services/AdminService'
import { BlockModal } from '../doctor/BlockModal';


export const DoctorManagement = () => {

  const [doctors,setDoctors]=useState([])



  useEffect(()=>{
   const fetchData= async()=>{
    const response=await fetchDoctors()
    if (response){
      setDoctors(response)
    }
   }
   fetchData()

  },[])


const handleBlockClick =(id)=>{
  console.log(id)
}

  
  return (
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
            <h1 class="text-4xl font-bold text-blue-600 py-4 px-8">
              Doctors..
            </h1>

            <div class="px-6 py-8">
          
          <div  > <Link to={'/admin/add_doctor'} > <span className='float-right'><BsPersonFillAdd size={30} className='mx-5' />Add doctor
          </span></Link></div>
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      No
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Doctor Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Department
                    </th>
                    <th scope="col" class="px-6 py-3">
                      email
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Fee
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>

                      {doctors.map((doctor)=>{

                        return(

                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {doctor.id}
                    </td>
                    <td class="px-6 py-4">{doctor.doctor_name}</td>
                    <td class="px-6 py-4">{doctor.department_name}</td>
                    <td class="px-6 py-4">{doctor.email}</td>
                    <td class="px-6 py-4">{doctor.fee}</td>
                    <td class="px-6 py-4">
                    <Link
                          to={`/admin/doctor_edit/${doctor.id}`} 
                          
                        >
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z"/>
            </svg>
                        </Link>
                    </td>
                    <td class="px-6 py-4">
                    

                      <BlockModal user_id={doctor.user_profile} is_active={doctor.user_active}/>
                    </td>
                  </tr>

                        )
                      })}

                


                </tbody>
              </table>
            </div>
          </div>

  )
}
