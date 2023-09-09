import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon';
import './StarshipCard.css';

const StarshipCard = ({ starship, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(starship.isFavorite || false);

  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <FavoriteIcon isFavorite={isFavorite} onClick={onToggleFavorite} />
    </div>
  );
};

export default StarshipCard;
