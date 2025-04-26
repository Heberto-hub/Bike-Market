import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewList.css';

function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>Aún no hay reseñas para esta bicicleta.</p>;
  }

  return (
    <div className="review-list">
      <h3>Reseñas de los Usuarios</h3>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;