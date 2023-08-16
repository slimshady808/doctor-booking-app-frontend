import React from 'react'

export const DoctorAddSlot = () => {
  return (
    <div className="container w-96 mx-auto p-8 mb-40 bg-gray-700 ">
    <h1 className="text-2xl font-semibold mb-4">Create Slots</h1>
    <div className="mb-4">
      <label className="block mb-1 font-semibold">Select Date:</label>
      <input
        type="date"
        className="border rounded p-2 w-full"
        
      />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select Time:</label>
        <select
          className="border rounded p-2 w-full"
         
        >
          <option value="">Select Time</option>
          <option value="10 AM">10 AM</option>
          <option value="10:20 AM">10:20 AM</option>
          <option value="11:40 AM">11:40 AM</option>
          {/* Add other time options here */}
        </select>
        </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Is Available:</label>
        <input
          type="checkbox"
          className="mr-2"
          // checked={isAvailable}
          // onChange={(e) => setIsAvailable(e.target.checked)}
        />
        Available
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        // onClick={handleCreateSlots}
      >
        Create Slot
      </button>
    
    </div>
      
  
  )
}
