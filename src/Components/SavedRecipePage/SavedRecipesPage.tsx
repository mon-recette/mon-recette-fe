import React from 'react';
import { SavedRecipesPageProps } from '../../types';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';
import Header from '../Header/Header';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton'



//why is it going to this pageeeE??? when we have a search input
const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({ savedRecipes }) => {
  console.log('Saved Recipes:', savedRecipes)
  const displaySavedRecipes = savedRecipes.map((savedRecipe) => (
    <SmallRecipeCard
      key={savedRecipe.name}
      name={savedRecipe.name}
      instructions={savedRecipe.instructions}
      image_url={savedRecipe.image_url}
      ingredients={savedRecipe.ingredients}
      isSaved={true}
      // toggleSavedRecipes={() => toggleSavedRecipes(savedRecipe)}
    />
  ));

  return (
    <main className='saved-recipes-page'>
      <Header />
      <ReturnToSearchButton /> 
      {displaySavedRecipes.length > 0 ? (
        displaySavedRecipes
        ) : (
          <p>No saved recipes found! Add some!</p>
          )}
      <ScrollToTopButton /> 
    </main>
  );
};

export default SavedRecipesPage;
