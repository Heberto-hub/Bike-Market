import React, { useState } from 'react';
import RatingStars from '../common/RatingStars';
import './AddReviewForm.css';

function AddReviewForm({ bikeId, onReviewAdded }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [user, setUser] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating > 0 && comment.trim()) {
      const newReview = {
        id: `temp-${Date.now()}`, // ID temporal
        user: user || 'Anónimo',
        rating: rating,
        comment: comment,
      };
      onReviewAdded(bikeId, newReview);
      setRating(0);
      setComment('');
      setUser('');
    } else {
      alert('Por favor, ingresa una calificación y un comentario.');
    }
  };

  return (
    <div className="add-review-form">
      <h3>Deja tu Reseña</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">Tu Nombre (Opcional):</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label>Calificación:</label>
          <RatingStars rating={rating} onRatingChange={handleRatingChange} interactive />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comentario:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            rows="4"
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar Reseña</button>
      </form>
    </div>
  );
}

export default AddReviewForm;