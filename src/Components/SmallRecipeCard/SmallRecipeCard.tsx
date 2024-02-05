import { smallRecipePageProps } from '../../types';

const SmallRecipeCard: React.FC<smallRecipePageProps> = ({ name, instructions, image_url, ingredients }) => {
  return (
    //
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      {image_url ? (
        <img
          className='recipe-thumbnail'
          src={image_url}
          alt={name}
          // onClick={}
        />
        ) : (
          <div className='placeholder-image'>
          {/* Placeholder or alternative content when image_url is null */}
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
