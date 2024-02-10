import React, { useEffect } from 'react';
import { SavedRecipesPageProps } from '../../types';
import SavedRecipeCard from '../SavedRecipeCard/SavedRecipeCard';
import Header from '../Header/Header';
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton';
import { getSavedRecipes } from '../apiCalls';
import './SavedRecipesPage.css'

const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({ recipes, savedRecipes, updateSavedRecipes, updateSeletedFilteredRecipe }) => {
  const id = 1;

  useEffect(() => {
    getSavedRecipes(id)
      .then((savedRecipeData) => {
        const allSavedRecipes = savedRecipeData.data.attributes.recipes;
        const userSpecificRecipes = allSavedRecipes.filter((recipe) => recipe.user_id === id);
        updateSavedRecipes(userSpecificRecipes);
      });
  }, [id]);

  const uniqueRecipeNamesSet = new Set(savedRecipes.flat().map((recipe) => recipe.name));

  const uniqueRecipes = Array.from(uniqueRecipeNamesSet).map((recipeName) => {
    const firstMatchingRecipe = savedRecipes.find((recipe) => recipe.name === recipeName);
  
    return (
      <SavedRecipeCard
        key={recipeName}
        name={recipeName}
        instructions={firstMatchingRecipe?.instructions || []}
        image_url={firstMatchingRecipe?.image_url || ''}
        ingredients={firstMatchingRecipe?.ingredients || []}
        recipes={recipes}
        updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}
      />
    );
  });

  return (
    <main className='saved-recipes-page'>
      <Header />
      <ReturnToSearchButton />
      <div className='scroll-saved-page'>
      {uniqueRecipes.length > 0 ? (
        uniqueRecipes
      ) : (
        <p className='no-recipes-text'>No saved recipes found! Add some!</p>
      )}
      </div>
    </main>
  );
};

export default SavedRecipesPage;
