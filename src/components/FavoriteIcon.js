import React from 'react';

const FavoriteIcon = ({ isFavorite, onClick }) => {
  return (
    <span onClick={onClick} className="favorite-icon">
      {isFavorite ? '❤️' : '🤍'}
    </span>
  );
};

export default FavoriteIcon;
