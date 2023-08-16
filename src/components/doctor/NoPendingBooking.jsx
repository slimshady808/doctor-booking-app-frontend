import React from 'react'

export const NoPendingBooking = () => {
  return (
      <div className="flex justify-center items-center h-screen  bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg animate__animated animate__fadeInUp">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">No Bookings Available</h2>
        <p className="text-gray-500">There are currently no pending bookings for this doctor.</p>
        <div className="mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 animate__animated animate__pulse animate__infinite"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
