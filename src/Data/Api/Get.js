import React, { useState, useEffect } from 'react';

const RecipeFetcher = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        response = await fetch(
          // API endpoint for general recipes
          `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=80ba8d2f&app_key=5a8094fcc947269724c967617293f177&calories=100-10000`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data.hits);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      {/* Render recipes or handle the error as needed */}
      {recipes.map(recipe => (
        <div key={recipe.recipe.uri}>
          <h3>{recipe.recipe.label}</h3>
          {/* Add more details as needed */}
        </div>
      ))}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default RecipeFetcher;
