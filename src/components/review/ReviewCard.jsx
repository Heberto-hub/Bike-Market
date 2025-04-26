import React from 'react';
import RatingStars from '../common/RatingStars';
import './ReviewCard.css';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <p className="review-user">{review.user} dijo:</p>
      <RatingStars rating={review.rating} size="small" />
      <p className="review-comment">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;