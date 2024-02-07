import './SmallRecipeCard.css'
import { smallRecipePageProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg'
import { useNavigate } from 'react-router-dom';

const SmallRecipeCard: React.FC<smallRecipePageProps> = ({ recipes, name, instructions, image_url, ingredients, updateSeletedFilteredRecipe }) => {
  const navigate = useNavigate()

  const moreDetailClickHandler = (event, name: string) => {
    event.preventDefault()
    const singleFilteredRecipe = recipes.data.attributes.recipes.find((recipe) => recipe.name.includes(name))
    console.log('name:', name);
    console.log('singleFilteredRecipe:', singleFilteredRecipe);
    updateSeletedFilteredRecipe(singleFilteredRecipe)
    navigate(`/filteredRecipes/${name}`); // Update path here
  }

  return (
    //
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      {/* <p>{ingredients}</p> */}
      {/* <p>{instructions}</p> */}
      //Link to ShowRecipePage
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