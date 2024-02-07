import React, { useEffect, useState } from 'react';
import { SavedRecipesPageProps } from '../../types';
import SavedRecipeCard from '../SavedRecipeCard/SavedRecipeCard';
import Header from '../Header/Header';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton';
import { Recipe } from '../../types';
import { getSavedRecipes } from '../apiCalls';

// ... (your imports)

const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({ recipes, savedRecipes, updateSavedRecipes, updateSeletedFilteredRecipe }) => {
  const id = 1;

  useEffect(() => {
    getSavedRecipes(id)
      .then((savedRecipeData) => {
        console.log('Received saved recipe data:', savedRecipeData);
        const allSavedRecipes = savedRecipeData.data.attributes.recipes;
        const userSpecificRecipes = allSavedRecipes.filter((recipe) => recipe.user_id === id);
        console.log('User specific recipes:', userSpecificRecipes);
        updateSavedRecipes(userSpecificRecipes);
      });
  }, [id]);

  console.log('savedRecipes', savedRecipes);

  const uniqueRecipeNamesSet = new Set(savedRecipes.flat().map((recipe) => recipe.name));

  console.log("uniqueRecipeNamesSet", uniqueRecipeNamesSet);

  const uniqueRecipes = Array.from(uniqueRecipeNamesSet).map((recipeName) => {
    const firstMatchingRecipe = savedRecipes.find((recipe) => recipe.name === recipeName);

    return (
      <SavedRecipeCard
        key={recipeName}
        name={recipeName}
        instructions={firstMatchingRecipe?.instructions || ''}
        image_url={firstMatchingRecipe?.image_url || ''}
        ingredients={firstMatchingRecipe?.ingredients || []}
        recipes={recipes}
        updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}
      />
    );
  });

  console.log("uniqueRecipes", uniqueRecipes);

  return (
    <main className='saved-recipes-page'>
      <Header />
      <ReturnToSearchButton />
      {uniqueRecipes.length > 0 ? (
        uniqueRecipes
      ) : (
        <p>No saved recipes found! Add some!</p>
      )}
      <ScrollToTopButton />
    </main>
  );
};

export default SavedRecipesPage;


// const SavedRecipesPage: React.FC<SavedRecipesPageProps> = ({recipes, savedRecipes, updateSavedRecipes, updateSeletedFilteredRecipe}) => {
//   // const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
//   const id = 1
//   useEffect(() => {
//     getSavedRecipes(id)
//     .then((savedRecipeData) => {
//       console.log('Received saved recipe data:', savedRecipeData);
//       const allSavedRecipes = savedRecipeData.data.attributes.recipes
//       const userSpecificRecipes = allSavedRecipes.filter(recipe => recipe.user_id === id)
//       console.log('User specific recipes:', userSpecificRecipes);
//       updateSavedRecipes(userSpecificRecipes)
//     });
//   }, [id]);

//   console.log('savedRecipes', savedRecipes);

//   const displayUserSpecificSavedRecipes = savedRecipes.flat().map((savedRecipe) => {
//     return (
//       <SavedRecipeCard
//         key={savedRecipe.name}
//         name={savedRecipe.name}
//         instructions={savedRecipe.instructions}
//         image_url={savedRecipe.image_url}
//         ingredients={savedRecipe.ingredients}
//         recipes={recipes}
//         updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}
//         // isSaved={true}
//         // toggleSavedRecipes={() => toggleSavedRecipes(savedRecipe)}
//       />
//     )
//   })
//   // const uniqueRecipes = [...new Set(displayUserSpecificSavedRecipes)];
//   const uniqueRecipes = [...new Set(displayUserSpecificSavedRecipes)];

//   console.log("uniqueRecipes",uniqueRecipes)

// console.log("displayUserSpecificSavedRecipes ",displayUserSpecificSavedRecipes )
//   return (
//     <main className='saved-recipes-page'>
//       <Header />
//       <ReturnToSearchButton />
//       {uniqueRecipes.length > 0 ? (
//         uniqueRecipes 
//       ) : (
//         <p>No saved recipes found! Add some!</p>
//       )}
//       <ScrollToTopButton />
//     </main>
//   );
// };

// export default SavedRecipesPage;
