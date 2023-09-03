import React, { useEffect, useState } from 'react';
import { fetchSlots } from '../../Services/DoctorService';
import { get_user_data } from '../../helpers/auth';
import {AiTwotoneDelete } from "react-icons/ai";
import {deleteSlot} from '../../Services/DoctorService'
import { toast,Toaster } from "react-hot-toast";
export const DoctorSlotList = () => {
  const [doctor_id, setDoctor_id] = useState('');
  const [slots, setSlots] = useState([]);
  
  useEffect(() => {
    const user = get_user_data();
    setDoctor_id(user.user_id);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSlots(doctor_id);
        if (response) {
          setSlots(response);
        }
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };
    fetchData();
  }, [doctor_id]);

  const handleDeleteSlot= async (slot_id)=>{
    const data= await deleteSlot(slot_id)
    if (data.status===204){
      setSlots((prevSlots)=>prevSlots.filter((slot)=>slot.id != slot_id))
      toast.success('slot deleted')
    }else{
      toast.error('please try again')
    }

  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm w-54">
     <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="pr-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, index) => (
              <tr
                key={slot.id} // Make sure to replace "id" with the actual slot identifier field
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{slot.date}</td> {/* Replace with the actual date field */}
                <td className="px-6 py-4">{slot.time}</td> {/* Replace with the actual time field */}
                <td
                 className="px-10 py-4"
                 onClick={()=>handleDeleteSlot(slot.id)}
          
                 >

                 <AiTwotoneDelete/></td> {/* Replace with the doctor's name */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
