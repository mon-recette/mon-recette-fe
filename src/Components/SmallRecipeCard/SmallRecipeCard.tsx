import './SmallRecipeCard.css'
import { smallRecipePageProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg'
const SmallRecipeCard: React.FC<smallRecipePageProps> = ({ name, instructions, image_url, ingredients }) => {
  return (
    //
    <div className='small-recipe-card'>
      {/* // onClick={} */}
      <h3>{name}</h3>
      {image_url ? (
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
      )}
      <p>{ingredients}</p>
      <p>{instructions}</p>
      //Link to ShowRecipePage
      <button>More Details</button>
      
    </div>
  );
};

export default SmallRecipeCard;
