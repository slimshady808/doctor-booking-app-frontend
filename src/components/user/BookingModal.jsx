import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import {getLocal,getAccess}  from '../../helpers/auth'
import jwt_decode from 'jwt-decode'
import {fetchAvailableDates} from '../../Services/UserService'

export const BookingModal = (props) => {
const {doctorId}=props
const [isModalOpen, setIsModalOpen] = useState(false);
const [userId,setUserId]=useState('')
const [availableDate,setAvailableDate]=useState([])

const patients = ['Patient 1', 'Patient 2', 'Patient 3'];
const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(()=>{
    const token= getAccess()
    const user= jwt_decode(token)
    
    setUserId(user.user_id)
  },[])

  useEffect(()=>{
    const fetchData = async ()=>{
      const data= await fetchAvailableDates(doctorId)
  if (data){
      setAvailableDate(data)
   }
   }
    fetchData()
  },[doctorId])



  

  return (
    <>
    {/* Modal toggle */}
    <button
      onClick={toggleModal}
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
     Edit Address
    </button>

    {/* Main modal */}
    {isModalOpen && (
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className=" my-24 mx-96 relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={toggleModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>


          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 mx-32 text-xl font-medium text-gray-900 dark:text-white">
              Booking page
            </h3>
            <div className="flex flex-col">
            <div className="flex mx-2 flex-row justify-center">
       
              {availableDate.map((date,index)=>(
                <div className="px-2 py-1 bg-gray-200 rounded-md ml-1 mr-1">2023-08-05</div>
              ))}
             
            
         
            </div>
            <div className="flex mx-2 flex-row justify-center">
              {/* Display available slots in small boxes */}
              <div className="px-2 py-1 bg-gray-200 rounded-md ml-1 mt-1 mr-1">10 AM</div>
              <div className="px-2 py-1 bg-gray-200 rounded-md ml-1 mt-1 mr-1">10:20 AM</div>
              
              {/* Add more slot boxes here */}
            </div>
          </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's Age"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="place"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's place"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
                {/* Add buttons or other elements here */}
              </div>

              <div className="mt-8">
        {/* List of patients linked to the user */}
        <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          Patients Linked to the User
        </h4>
        <select
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        >
          {patients.map((patient) => (
            <option key={patient} value={patient}>
              {patient}
            </option>
          ))}
        </select>
      </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>
            </form>

            {/* <div className="mt-8"> */}
              {/* List of patients linked to the user */}
              {/* <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Patients Linked to the User
              </h4>
              <ul>
                <li className="mb-2 text-sm text-gray-900 dark:text-white">
                  Patient 1
                </li>
                <li className="mb-2 text-sm text-gray-900 dark:text-white">
                  Patient 2
                </li>
                
              </ul>
            </div> */}
          </div>



       
            {/* <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 mx-32 text-xl font-medium text-gray-900 dark:text-white">
                Booking page
              </h3>
              <div className='w-full h-20 bg-sky-300'>

              </div>
              <form className="space-y-6" >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                  

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="patient's name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
   
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="patient's mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    id="age"
       
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="patient's Age"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="place"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="patient's place"
                    required
                  />
                </div>
                
              </div>
              <div className="flex justify-between">
              
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                edit
              </button>
  
              </form>

            </div> */}
          </div>
        </div>
      </div>
    )}
  </>
  )
}
