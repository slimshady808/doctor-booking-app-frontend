import React from 'react'

export const DoctorSlotList = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm w-54">
    <div className="pr-6 ">
    {/* {booking.length===0 ?(<NoPendingBooking/>):( */}
     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
         <th scope="col" className="px-6 py-3">
           No
         </th>
         <th scope="col" className="px-6 py-3">
           date
         </th>
         <th scope="col" className="px-6 py-3">
           Time
         </th>
         <th scope="col" className="px-6 py-3">
           Name
         </th>
       
       </tr>
     </thead>
     <tbody>
     {/* {booking.map((bookingItem) => ( */}

         <tr
           
           className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
         >
           <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
           {/* {bookingItem.booking_id} */}
           </td>
           <td className="px-6 py-4">slot_date</td>
           <td className="px-6 py-4">slot_time</td>
           <td className="px-6 py-4"> </td>
     
          
         </tr>
       {/* ))} */}
     </tbody>
   </table>
    {/* )} */}
   
   </div>
  
   </div>
  )
}
