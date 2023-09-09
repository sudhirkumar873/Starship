import React, { useState, useEffect } from 'react';
import StarshipCard from './components/StarshipCard';
import FavoriteIcon from './components/FavoriteIcon';
import './App.css';
import './components/StarshipCard.css';


function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
      .then((response) => response.json())
      .then((data) => setStarships(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleFavorite = (starshipName) => {
    setStarships((prevStarships) =>
      prevStarships.map((ship) => {
        if (ship.name === starshipName) {
          return { ...ship, isFavorite: !ship.isFavorite };
        }
        return ship;
      })
    );

    // Get existing favorites from local storage
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Add or remove the starship from favorites
    const updatedFavorites = starships
      .filter((ship) => ship.isFavorite)
      .map((ship) => ship.name);

    // Save updated favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    // Load favorites from local storage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Set initial favorite status for each starship
    setStarships((prevStarships) =>
      prevStarships.map((ship) => ({
        ...ship,
        isFavorite: savedFavorites.includes(ship.name),
      }))
    );
  }, []);

  return (
    <div className="App">
      <h1>Starship App</h1>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard
            key={starship.name}
            starship={starship}
            onToggleFavorite={() => toggleFavorite(starship.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
