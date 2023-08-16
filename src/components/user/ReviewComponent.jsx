import React, { useEffect, useState } from 'react'
import { StarRating } from './StarRating';
import {fetchReview,createReview,updateReview} from '../../Services/UserService'
import { getAccess, getAccessToken } from '../../helpers/auth';
import { toast,Toaster } from "react-hot-toast";
import jwt_decode from 'jwt-decode'
export const ReviewComponent = (props) => {
  const {doctorId} =props
  const [reviews,setReviews]=useState([])
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [userId,setUserId]=useState('')
  const [userReview,setUserReview]=useState(null); 

  useEffect(()=>{
    const token= getAccessToken()
    const decode= jwt_decode(token)
    setUserId(decode.user_id)
  },[])
  // console.log(userId,'user')
  useEffect(()=>{
    const fetchData = async()=>{
      const data= await fetchReview(doctorId)
      if (data){
        setReviews(data)
      }
    }
    fetchData()
  },[doctorId,userId])


useEffect(()=>{
  const userOwnReview= reviews.find((review)=>review.user===userId)
  setUserReview(userOwnReview || null)

  if (userOwnReview){
    setNewRating(userOwnReview.rating);
    setNewComment(userOwnReview.content)
  }
},[reviews,userId])

const otherUserReviews= reviews.filter((review)=>review.user !== userId)





  const addReview = async () => {
   if (newRating === 0 || newComment.trim() === '') {
      console.log('Validation failed');
      toast.error('please add review and rating')
      return;
    }
    
    const formData = new FormData();
    formData.append('content', newComment);
    formData.append('rating', newRating);
    formData.append('user', userId);
    formData.append('doctor', doctorId);
    formData.append('created_at', new Date().toISOString().split('T')[0]);
    if (userReview){
      const updatedReview = await updateReview(userReview.id,formData)
      if (updatedReview){
          console.log('updated')
          toast.success('Review saved')

      }else{
        toast.error('error for updating review')
      }
    }else{
      const response = await createReview(formData)
      if (response){
        console.log('review created')
        toast.success('Review saved')
      }else{
        console.log('error occured to add reviews')
        toast.error('error for saving review')
      }

    }

   
  };
  


 

  // Calculate the average rating from reviews
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
   
  };

  // Get a description for the rating
  const getRatingDescription = (rating) => {
    if (rating <= 2) return 'Poor';
    if (rating <= 3) return 'Fair';
    if (rating <= 4) return 'Good';
    return 'Excellent';
  };
  return (


  <section className="text-gray-700 body-font overflow-hidden bg-white p-4">
   <Toaster position='top-center' reverseOrder='false' ></Toaster>
  <div className="container mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Doctor Reviews {doctorId}</h2>
    <div className="flex items-center space-x-2 mb-4">
      <p className="text-lg font-semibold">
        Average Rating:
      </p>
      <StarRating rating={calculateAverageRating()} />
    </div>
    <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <p className="text-lg font-semibold">
          Add Your Review:
        </p>
        <StarRating rating={newRating} onRatingChange={setNewRating} interactive />
      </div>
      <textarea
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        rows="3"
        placeholder="Write your review..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button
        className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline-blue"
        onClick={addReview}
      >
      {userReview ? 'Update Review' : 'Save Review'}
      </button>
    </div>
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
      {otherUserReviews.map((review) => (
        <div 
        key={review.id} 
        className="mb-4">
        <h1 className='title-font font-medium mb-4'>{review.user_name}</h1>
          <div className="flex items-center space-x-2 mb-2">
            <StarRating rating={review.rating} />
            <p className="text-gray-600">{getRatingDescription(review.rating)}</p>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
