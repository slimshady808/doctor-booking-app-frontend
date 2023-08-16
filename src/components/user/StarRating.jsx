import React from 'react';

export const StarRating = ({ rating, onRatingChange, interactive }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating ? 'text-yellow-500' : 'text-gray-300';
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 fill-current ${interactive ? 'cursor-pointer' : ''} ${filled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => interactive && onRatingChange(i)}
        >
          <path
            fillRule="evenodd"
            d="M2.934 7.04a1 1 0 01.59-1.32l4.177-1.213 1.705-3.815a1 1 0 011.822 0l1.706 3.815 4.177 1.213a1 1 0 01.59 1.32l-3.158 3.02.74 4.33a1 1 0 01-1.454 1.055L10 14.977l-3.877 2.06a1 1 0 01-1.454-1.056l.74-4.33-3.159-3.019z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <p className="text-gray-600 ml-2">{rating.toFixed(1)}</p>
    </div>
  );
};


