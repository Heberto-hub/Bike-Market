import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import bikesData from "../data/bikes";
import RatingStars from '../components/common/RatingStars';
import ReviewList from '../components/review/ReviewList';
import AddReviewForm from '../components/review/AddReviewForm';
import { CartContext } from "../contexts/CartContext";
import './BikeDetailPage.css';

function BikeDetailPage() {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundBike = bikesData.find(bike => bike.id === parseInt(id, 10));
    setBike(foundBike);
  }, [id]);

  const handleAddToCart = () => {
    if (bike) {
      addToCart(bike);
      alert(`${bike.name} ha sido añadido al carrito.`);
    }
  };

  const handleReviewAdded = (bikeId, newReview) => {
    
    setBike(prevBike => {
      if (prevBike && prevBike.id === bikeId) {
        return { ...prevBike, reviews: [...prevBike.reviews, newReview] };
      }
      return prevBike;
    });
  };

  if (!bike) {
    return <div>Cargando detalles...</div>;
  }

  return (
    <div className="bike-detail-page">
      <div className="bike-detail-header">
        <img src={bike.image} alt={bike.name} className="bike-detail-image" />
        <div className="bike-detail-info">
          <h2>{bike.name}</h2>
          <RatingStars rating={bike.rating} size="large" />
          <p className="bike-detail-price">Precio: ${bike.price.toFixed(2)}</p>
          <p className="bike-detail-description">{bike.description}</p>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Añadir al Carrito
          </button>
        </div>
      </div>
      <ReviewList reviews={bike.reviews} />
      <AddReviewForm bikeId={bike.id} onReviewAdded={handleReviewAdded} />
    </div>
  );
}

export default BikeDetailPage;