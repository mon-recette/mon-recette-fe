import React, { useEffect, useState } from 'react';
import { SavedRecipesPageProps } from '../../types';
import SavedRecipeCard from '../SavedRecipeCard/SavedRecipeCard';
import Header from '../Header/Header';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton';
import { Recipe } from '../../types';
import { getSavedRecipes } from '../apiCalls';

const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({recipes, savedRecipes, updateSavedRecipes, updateSeletedFilteredRecipe}) => {
  // const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const id = 1
  useEffect(() => {
    getSavedRecipes(id)
    .then((savedRecipeData) => {
      console.log('Received saved recipe data:', savedRecipeData);
      const allSavedRecipes = savedRecipeData.data.attributes.recipes
      const userSpecificRecipes = allSavedRecipes.filter(recipe => recipe.user_id === id)
      console.log('User specific recipes:', userSpecificRecipes);
      updateSavedRecipes(userSpecificRecipes)
    });
  }, [id]);

  console.log('savedRecipes', savedRecipes);

  const displayUserSpecificSavedRecipes = savedRecipes.flat().map((savedRecipe) => {
    return (
      <SavedRecipeCard
        key={savedRecipe.name}
        name={savedRecipe.name}
        instructions={savedRecipe.instructions}
        image_url={savedRecipe.image_url}
        ingredients={savedRecipe.ingredients}
        recipes={recipes}
        updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}
        // isSaved={true}
        // toggleSavedRecipes={() => toggleSavedRecipes(savedRecipe)}
      />
    )
  })
  
console.log("displayUserSpecificSavedRecipes ",displayUserSpecificSavedRecipes )
  return (
    <main className='saved-recipes-page'>
      <Header />
      <ReturnToSearchButton />
      {displayUserSpecificSavedRecipes.length > 0 ? (
        displayUserSpecificSavedRecipes 
      ) : (
        <p>No saved recipes found! Add some!</p>
      )}
      <ScrollToTopButton />
    </main>
  );
};

export default SavedRecipesPage;
