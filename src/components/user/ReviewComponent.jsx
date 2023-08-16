import React, { useState } from 'react'
import { StarRating } from './StarRating';

export const ReviewComponent = () => {
  
  const [reviews, setReviews] = useState([
    // Sample static data
    { id: 1, rating: 4, comment: 'Great doctor and service!' },
    { id: 2, rating: 5, comment: 'Highly recommended.' },
    // Add more reviews here...
  ]);

  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  const addReview = () => {
    if (newRating === 0 || newComment.trim() === '') {
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      rating: newRating,
      comment: newComment,
    };

    setReviews([...reviews, newReview]);
    setNewRating(0);
    setNewComment('');
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
  //   <section className="text-gray-700 body-font overflow-hidden bg-white p-4">
  //   <div className="container mx-auto">
  //     <h2 className="text-2xl font-semibold mb-4">Doctor Reviews</h2>
  //     <div className="flex items-center space-x-2 mb-4">
  //       <p className="text-lg font-semibold">
  //         Average Rating:
  //       </p>
  //       <StarRating rating={calculateAverageRating()} />
  //     </div>
  //     <div className="flex items-center mb-4">
  //       <p className="text-lg font-semibold">
  //         Add Your Review:
  //       </p>
  //       <StarRating rating={newRating} onRatingChange={setNewRating} interactive />
  //     </div>
  //     <div className="mb-4">
  //       <textarea
  //         className="w-full px-4 py-2 border rounded-md"
  //         rows="3"
  //         placeholder="Write your review..."
  //         value={newComment}
  //         onChange={(e) => setNewComment(e.target.value)}
  //       ></textarea>
  //     </div>
  //     <button
  //       className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2"
  //       onClick={addReview}
  //     >
  //       Submit Review
  //     </button>
  //     <div className="mt-8">
  //       <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
  //       {reviews.map((review) => (
  //         <div key={review.id} className="mb-4">
  //           <div className="flex items-center space-x-2 mb-2">
  //             <StarRating rating={review.rating} />
  //             <p className="text-gray-600">{getRatingDescription(review.rating)}</p>
  //           </div>
  //           <p>{review.comment}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </section>

  <section className="text-gray-700 body-font overflow-hidden bg-white p-4">
  <div className="container mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Doctor Reviews</h2>
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
        Save Review
      </button>
    </div>
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <StarRating rating={review.rating} />
            <p className="text-gray-600">{getRatingDescription(review.rating)}</p>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
