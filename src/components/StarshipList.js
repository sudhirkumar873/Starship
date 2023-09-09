// src/components/StarshipList.js

import React, { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
      .then((response) => response.json())
      .then((data) => setStarships(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    // Render the starship cards here
    <div className="starship-list">
    {starships.map((starship) => (
      <StarshipCard key={starship.name} starship={starship} />
    ))}
  </div>
  );
};

export default StarshipList;
