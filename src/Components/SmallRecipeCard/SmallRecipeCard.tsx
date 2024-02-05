import React, { useState } from 'react';
import SaveIcon from '../SaveIcon/SaveIcon';
import { SmallRecipeCardProps } from '../../types';
import CookingPot from '../../Images /Cooking-pot.jpg';
import './SmallRecipeCard.css';
import { useEffect } from 'react';

const SmallRecipeCard: React.FC<SmallRecipeCardProps> = ({
  name,
  instructions,
  image_url,
  ingredients,
  toggleSavedRecipes,
  isSaved,
}) => {
  const [saved, setSaved] = useState<boolean>(isSaved);

  useEffect(() => {
    setSaved(isSaved);
  }, [isSaved]);

  const handleToggleSaved = (): void => {
    toggleSavedRecipes({ name, instructions, image_url, ingredients });
    setSaved((prevSaved) => !prevSaved);
  };
  console.log('Saved?',isSaved)

  return (
    <div className='small-recipe-card'>
      <h3>{name}</h3>
      <SaveIcon toggleSavedRecipes={handleToggleSaved} isSaved={saved} />
      {image_url ? (
        <img className='recipe-thumbnail' src={image_url} alt={name} />
      ) : (
        <div className='placeholder-image'>
          <img className='cooking-pot' src={CookingPot} alt='cooking pot' />
        </div>
      )}
    </div>
  );
};

export default SmallRecipeCard;
