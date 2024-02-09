import './SavedRecipeCard.css'
import { RecipesData, SavedRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg'
import { useNavigate } from 'react-router-dom';

const SavedRecipeCard: React.FC<SavedRecipeCardProps> =
  ({ recipes, name, image_url, updateSeletedFilteredRecipe }) => {
  console.log("recipes outside function",recipes)
//for now, we aren't going to navigate from the savedRecipe card to the more details page (I'd have to refactor the routing for this... and becuase we have one for webscrape and one from filteredpage to singleFilteredPage, I can't figure it out now. But maybe the routes will have to match somehow with all of them which I think is possible in Part 2)
//   const navigate = useNavigate()

//   const moreDetailClickHandler = (event, name: string, recipes: RecipesData) => {
//     event.preventDefault()
//     // console.log
//     console.log("recipes",recipes)
//     const singleFilteredRecipe = recipes.data.attributes.recipes.find((recipe) => recipe.name.includes(name))
//     updateSeletedFilteredRecipe(singleFilteredRecipe)
//     navigate(`/filteredRecipes/${name}`); // Update path here
//   }

  return (
    //
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      {/* <button type="submit" onClick={(event) => moreDetailClickHandler(event, name, recipes)}>More Details</button>
      {/* <button>Save Button for a delete and post?</button> */}  
    </div>
  );
};

export default SavedRecipeCard;