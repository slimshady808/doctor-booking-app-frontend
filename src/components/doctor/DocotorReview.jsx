import React, { useEffect, useState } from 'react'
import { getAccessToken } from '../../helpers/auth'
import {fetchReview} from '../../Services/DoctorService'
import jwt_decode from 'jwt-decode'
import { StarRating } from '../user/StarRating'
export const DocotorReview = () => {
  const [reviews,setReviews] = useState([])
  const [doctorId,setDoctorId]=useState('')

  useEffect(()=>{
    const token=getAccessToken()
    const decode=jwt_decode(token)
    setDoctorId(decode.user_id)
  },[])

  useEffect(()=>{
    if (doctorId !==''){
      const fetchData = async () => {
        const data= await fetchReview(4)
        setReviews(data);
      }
      fetchData();
    }
  },[doctorId]);

console.log(reviews)
  
const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;



  return (
  //   <div className="bg-gray-100 min-h-screen py-6">
  //   <div className="max-w-3xl mx-auto px-4">
  //     <h1 className="text-2xl font-semibold mb-4">Doctor Reviews</h1>
  //     <div className="space-y-4">
  //       {reviews.map((review) => (
  //         <div
  //           key={review.id}
  //           className="bg-white p-4 rounded-lg shadow-md"
  //         >
  //           <div className="flex items-center justify-between">
  //             <h2 className="text-lg font-semibold">
  //               {review.user_name}
  //             </h2>
  //             <span className="text-gray-500">{review.created_at}</span>
  //           </div>
  //           <p className="mt-2 text-gray-700">{review.content}</p>
  //           <div className="mt-2 flex items-center">
  //             <span className="text-yellow-400 mr-1">
  //             <StarRating rating={review.rating} />
  //             </span>
  //             <span className="text-gray-500">
                
  //             </span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>

  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
    {reviews.map((review) => (
      <div
        key={review.id}
        className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
      >
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative p-5 bg-white rounded-sm">
          <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="font-semibold leading-5">{review.user_name}</h6>
          </div>
          <p className="mb-2 text-sm text-gray-900">{review.content}</p>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-400 mr-1">
              <StarRating rating={review.rating} />
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
 