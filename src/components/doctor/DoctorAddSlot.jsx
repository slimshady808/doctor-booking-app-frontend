import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import {Toaster} from 'react-hot-toast'
import {createSlot} from '../../Services/DoctorService'
import {get_user_data} from '../../helpers/auth'
import { useNavigate } from 'react-router-dom'
export const DoctorAddSlot = () => {
  const navigate=useNavigate()
  const [selectedDate,setSelectedDate]=useState('')
  const [selectedTIme,setSelectedTime]=useState('')
  const [doctor_id,setDoctor_id]=useState('')

  useEffect(()=>{
    const data = get_user_data()
    setDoctor_id(data.user_id)
  },[])
  const handleCreateSlots= async ()=>{
    if (!selectedDate || !selectedTIme){
      toast.error('please select date and time before booking')
      return
    }
    
    // console.log(doctor_id,'doc')
    let slotData={
     "doctor":doctor_id,
     "time": selectedTIme,
     "date":selectedDate,
     "is_available":true
    }


    const response= await createSlot(slotData)
    if (response){
      toast.success('slot added')
      navigate('/doctor/slot')

    }else{
      // toast.error('error occured')
    }

  }
  return (
    <div className="container w-96 mx-auto p-8 mb-40 bg-gray-700 ">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
    <h1 className="text-2xl font-semibold mb-4">Create Slots</h1>
    <div className="mb-4">
      <label className="block mb-1 font-semibold">Select Date:</label>
      <input
        type="date"
        className="border rounded p-2 w-full"
        onChange={e=>setSelectedDate(e.target.value)}
      />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select Time:</label>
        <select
          className="border rounded p-2 w-full"
          onChange={e=>setSelectedTime(e.target.value)}
        >
          <option value="">Select Time</option>
          <option value="10 AM">10 AM</option>
          <option value="10:20AM">10:20 AM</option>
          <option value="11:40AM">11:40 AM</option>
          <option value="12:00 PM">12 PM</option>
          <option value="12:20 PM">12:20 PM</option>
          <option value="2:40 PM">2:40 PM</option>
          <option value="3 PM">3:00 PM</option>
          <option value="3:20 PM">3:20 PM</option>
          <option value="3:40 PM">3:40 PM</option>
          <option value="4:00 PM">4:00 PM</option>
      
        </select>
        </div>
     
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleCreateSlots}
      >
        Create Slot
      </button>
    
    </div>
      
  
  )
}
