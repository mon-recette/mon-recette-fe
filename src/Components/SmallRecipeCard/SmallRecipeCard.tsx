import './SmallRecipeCard.css';
import { RecipesData, SmallRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg';
import { useNavigate } from 'react-router-dom';

const SmallRecipeCard: React.FC<SmallRecipeCardProps> = ({
  recipes,
  name,
  image_url,
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
      updateSeletedFilteredRecipe(singleFilteredRecipe);
      navigate(`/filteredRecipes/${name}`);
    } else {
      console.error(`Recipe with name ${name} not found`);
    }
  };

  return (
    <div className='small-recipe-card'>
      <h3 className='small-recipe-card-name'>{name}</h3>
      {image_url ? (
        <img className='small-recipe-img' src={image_url} alt={`Image of ${name}`}  />
      ) : (
        <img src={CookingPot} alt="Cooking Pot" width={260} />
      )}
      <button type='submit' className='details-button' onClick={(event) => moreDetailClickHandler(event, name, recipes)}>More Details</button>
      {/* <button>Save Button for a delete and post?</button> */} 
    </div>
  );
};

export default SmallRecipeCard;
