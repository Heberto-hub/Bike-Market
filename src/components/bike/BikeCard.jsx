import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../common/RatingStars';
import './BikeCard.css';

function BikeCard({ bike }) {
  return (
    <div className="bike-card">
      <img src={bike.image} alt={bike.name} className="bike-image" />
      <div className="bike-info">
        <h3 className="bike-name">{bike.name}</h3>
        <p className="bike-price">${bike.price.toFixed(2)}</p>
        <RatingStars rating={bike.rating} />
        <Link to={`/bike/${bike.id}`} className="bike-details-link">Ver Detalles</Link>
      </div>
    </div>
  );
}

export default BikeCard;