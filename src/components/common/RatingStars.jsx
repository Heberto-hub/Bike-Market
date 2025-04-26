import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faStarHalfAlt as faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons';
import './RatingStars.css';

function RatingStars({ rating, size = 'medium', interactive = false, onRatingChange }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarSolid} size={size} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} size={size} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStarRegular} size={size} />);
    }
  }

  const handleClick = (starIndex) => {
    if (interactive && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  return (
    <div className="rating-stars" onClick={interactive ? undefined : undefined}>
      {stars.map((star, index) => (
        <span key={index} onClick={() => handleClick(index)}>
          {star}
        </span>
      ))}
    </div>
  );
}

export default RatingStars;