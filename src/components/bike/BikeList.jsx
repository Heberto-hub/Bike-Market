import React from 'react';
import BikeCard from './BikeCard';
import bikesData from '../../data/bikes';
import './BikeList.css';

function BikeList() {
  return (
    <div className="bike-list">
      {bikesData.map(bike => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
}

export default BikeList;