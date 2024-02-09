import './SmallRecipeCard.css';
import { RecipesData, SmallRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg';
import { useNavigate } from 'react-router-dom';

const SmallRecipeCard: React.FC<SmallRecipeCardProps> = ({
  recipes,
  name,
  instructions,
  image_url,
  ingredients,
  updateSeletedFilteredRecipe,
}) => {
  const navigate = useNavigate();

  const moreDetailClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string,
    recipes: RecipesData,
  ) => {
    event.preventDefault();

    if (
      !recipes ||
      !recipes.data ||
      !recipes.data.attributes ||
      !recipes.data.attributes.recipes
    ) {
      console.error('Invalid recipes prop:', recipes);
      return;
    }

    const singleFilteredRecipe = recipes.data.attributes.recipes.find(recipe =>
      recipe.name.includes(name),
    );

    if (singleFilteredRecipe) {
      console.log('name:', name);
      console.log('singleFilteredRecipe:', singleFilteredRecipe);
      updateSeletedFilteredRecipe(singleFilteredRecipe);
      navigate(`/filteredRecipes/${name}`);
    } else {
      console.error(`Recipe with name ${name} not found`);
    }
  };

  return (
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      <button
        type='submit'
        onClick={event => moreDetailClickHandler(event, name, recipes)}>
        More Details
      </button>
    </div>
  );
};

export default SmallRecipeCard;
