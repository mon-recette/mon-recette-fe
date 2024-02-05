import React from 'react';
import { SavedRecipesPageProps } from '../../types';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';

const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({ savedRecipes, toggleSavedRecipes }) => {
  const displaySavedRecipes = savedRecipes.map((savedRecipe) => (
    <SmallRecipeCard
      key={savedRecipe.name}
      name={savedRecipe.name}
      instructions={savedRecipe.instructions}
      image_url={savedRecipe.image_url}
      ingredients={savedRecipe.ingredients}
      isSaved={false}
      toggleSavedRecipes={() => toggleSavedRecipes(savedRecipe)}
    />
  ));

  return (
    <main className='saved-recipes-page'>
      {displaySavedRecipes.length > 0 ? (
        displaySavedRecipes
      ) : (
        <p>No saved recipes found</p>
      )}
    </main>
  );
};

export default SavedRecipesPage;
