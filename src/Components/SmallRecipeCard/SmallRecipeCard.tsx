import './SmallRecipeCard.css'
import { RecipesData, smallRecipePageProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg'
import { useNavigate } from 'react-router-dom';

const SmallRecipeCard: React.FC<smallRecipePageProps> = ({ recipes, name, instructions, image_url, ingredients, updateSeletedFilteredRecipe }) => {
  console.log("recipes outside function",recipes)

  const navigate = useNavigate()

  const moreDetailClickHandler = (event, name: string, recipes: RecipesData) => {
    event.preventDefault()
    // console.log
    console.log("recipes",recipes)
    const singleFilteredRecipe = recipes.data.attributes.recipes.find((recipe) => recipe.name.includes(name))
    updateSeletedFilteredRecipe(singleFilteredRecipe)
    navigate(`/filteredRecipes/${name}`); // Update path here
  }

  return (
    //
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      <button type="submit" onClick={(event) => moreDetailClickHandler(event, name, recipes)}>More Details</button>
      {/* <button>Save Button for a delete and post?</button> */} 
    </div>
  );
};

export default SmallRecipeCard;
