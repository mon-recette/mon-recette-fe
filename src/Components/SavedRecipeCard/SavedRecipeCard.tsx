import React, { useState } from 'react';
import './SavedRecipeCard.css'
import { SavedRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

const SavedRecipeCard: React.FC<SavedRecipeCardProps> =
  ({ ingredients, instructions, name, image_url }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
  return (
    <section className='small-recipe-card'>
      <h4>{name}</h4>
      <button className='show_details_btn' 
      onClick={toggleDropdown}
      aria-expanded={showDropdown}>
      {showDropdown ? 'Close Details' : 'Show Details'}
      </button>
      {showDropdown === true && (
        <div className='dropdown'
          aria-hidden={!showDropdown}>
          <h5>Ingredients</h5>
          <ul className='no_style'>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h6>Instructions</h6>
          {Array.isArray(instructions) ? (
            instructions.map((instruction, index) => (
              <div key={index}>{index + 1}. {instruction}</div>
            ))
          ) : (
            <div>{instructions}</div>
          )}

          {/* {image_url ? (
            <img className='saved-card-img' src={image_url} alt={`Image of ${name}`} />
          ) : (
            <img src={CookingPot} alt="Cooking Pot" className='saved-page-cooking-pot-img' />
          )} */}
        </div>
      )}
      {/* <ScrollToTopButton /> */}
    </section>
  );
};

export default SavedRecipeCard;

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
