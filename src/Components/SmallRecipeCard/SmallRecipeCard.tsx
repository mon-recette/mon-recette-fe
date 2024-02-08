import './SmallRecipeCard.css'
import { SmallRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg'
import { useNavigate } from 'react-router-dom';

const SmallRecipeCard: React.FC<SmallRecipeCardProps> = ({ recipes, name, updateSeletedFilteredRecipe }) => {
  const navigate = useNavigate();

  const moreDetailClickHandler = (event: React.MouseEvent<HTMLButtonElement>, name: string) => {
    event.preventDefault();
    
    if (recipes && recipes.data && recipes.data.attributes.recipes) {
      const singleFilteredRecipe = recipes.data.attributes.recipes.find((recipe) => recipe.name.includes(name));

      if (singleFilteredRecipe) {
        console.log('name:', name);
        console.log('singleFilteredRecipe:', singleFilteredRecipe);
        updateSeletedFilteredRecipe(singleFilteredRecipe);
        navigate(`/filteredRecipes/${name}`);
      } else {
        console.error(`Recipe with name ${name} not found`);
      }
    } else {
      console.error('Invalid recipes prop:', recipes);
    }
  };

  return (
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      <button type="submit" onClick={(event) => moreDetailClickHandler(event, name)}>More Details</button>
    </div>
  );
};

export default SmallRecipeCard;

      {/* {image_url ? (
        <img
          className='recipe-thumbnail'
          src={image_url}
          alt={name}
        />
        ) : (
          <div className='placeholder-image'>
          <img
          className='cooking-pot'
          src={CookingPot}
          alt='cooking pot'
            />
        </div>
      )} */}
      {/* <img className='recipe-thumbnail'
          src={image_url}
          alt={name}
        ></img> */}