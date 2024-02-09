import React, { useState } from 'react';
import './SavedRecipeCard.css'
import { SavedRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg';


const SavedRecipeCard: React.FC<SavedRecipeCardProps> =
  ({ recipes, ingredients, instructions, name, image_url, updateSeletedFilteredRecipe }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    
   ("recipes outside function",recipes)
//for now, we aren't going to navigate from the savedRecipe card to the more details page (I'd have to refactor the routing for this... and becuase we have one for webscrape and one from filteredpage to singleFilteredPage, I can't figure it out now. But maybe the routes will have to match somehow with all of them which I think is possible in Part 2)
//   const navigate = useNavigate()

//   const moreDetailClickHandler = (event, name: string, recipes: RecipesData) => {
//     event.preventDefault()
//     //  
//      ("recipes",recipes)
//     const singleFilteredRecipe = recipes.data.attributes.recipes.find((recipe) => recipe.name.includes(name))
//     updateSeletedFilteredRecipe(singleFilteredRecipe)
//     navigate(`/filteredRecipes/${name}`); // Update path here
//   }

  return (
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      <button onClick={toggleDropdown}>Show Details</button>

      {showDropdown && (
        <div className='dropdown'>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          {Array.isArray(instructions) ? (
            instructions.map((instruction, index) => (
              <div key={index}>{index + 1}. {instruction}</div>
            ))
          ) : (
            <div>{instructions}</div>
          )}

          {image_url ? (
            <img src={image_url} alt={`Image of ${name}`} />
          ) : (
            <img src={CookingPot} alt="Cooking Pot" />
          )}
        </div>
      )}
    </div>
  );
};

export default SavedRecipeCard;

