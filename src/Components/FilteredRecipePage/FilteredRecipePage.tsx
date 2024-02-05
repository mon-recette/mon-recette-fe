// import { filteredRecipePageProps } from '../../types';
// import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';

// const FilteredRecipePage: React.FC<filteredRecipePageProps> = ({recipe}) => {

//   const displayFilteredRecipes = recipe.map((singleRecipe) => {
//     return (
//       <SmallRecipeCard
//         key={singleRecipe.name}
//         name={singleRecipe.name}
//         instructions={singleRecipe.instructions}
//         image_url={singleRecipe.image_url}
//         ingredients={singleRecipe.ingredients}
//       />
//     )
//   })

//   return (
//     <main className='filtered-recipe-page'>
//       {displayFilteredRecipes}
//     </main>
//   );
// };

// export default FilteredRecipePage;
// /////
// FilteredRecipePage.tsx

import { filteredRecipePageProps } from '../../types';
import Header from '../Header/Header';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';

const FilteredRecipePage: React.FC<filteredRecipePageProps> = ({
  recipes,
  toggleSavedRecipes,
  savedRecipes,
}) => {
  console.log('recipe', recipes);

  const displayFilteredRecipes = recipes.map(singleRecipe => {
    const isSaved = savedRecipes.some(
      savedRecipe => savedRecipe.name === singleRecipe.name,
    );

    return (
      <main className='filtered-recipe-page'>
        
        <SmallRecipeCard
          key={singleRecipe.name}
          name={singleRecipe.name}
          instructions={singleRecipe.instructions}
          image_url={singleRecipe.image_url}
          ingredients={singleRecipe.ingredients}
          isSaved={savedRecipes.some(
            savedRecipe => savedRecipe.name === singleRecipe.name,
          )} // Determine saved status dynamically
          toggleSavedRecipes={() => toggleSavedRecipes(singleRecipe)}
        />
      </main>
    );
  });

  return (
    <main className='filtered-recipe-page'>
      <Header />
      {displayFilteredRecipes.length > 0 ? (
        displayFilteredRecipes
      ) : (
        <p>No recipes found</p>
      )}
    </main>
  );
};

export default FilteredRecipePage;
