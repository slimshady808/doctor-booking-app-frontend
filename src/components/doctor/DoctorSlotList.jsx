import React, { useEffect, useState } from 'react';
import { fetchSlots } from '../../Services/DoctorService';
import { get_user_data } from '../../helpers/auth';

import {deleteSlot} from '../../Services/DoctorService'
import { toast,Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
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

    <div>
    <h1 className="text-2xl font-bold mb-4 text-black">Slots</h1>
    <Toaster position="top-center" reverseOrder={false}></Toaster>
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
    <Link to="/doctor/addSlot">
      <AiOutlineFileAdd
        className="text-3xl text-green-500 cursor-pointer absolute top-12 right-10 m-4"
        style={{ zIndex: 1 }}
      /></Link>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {slots.map((slot) => (
            <tr key={slot.id}>
              <td className="px-6 py-4 whitespace-nowrap">{slot.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{slot.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{slot.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
              {/* <Link to={`/admin/edit_qualification/${qualification.id}`}>
                <button
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2"
                  
                >
                <BiSolidEdit/>
                </button>
                </Link> */}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => handleDeleteSlot(slot.id)}
                >
                <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>



  );
};
