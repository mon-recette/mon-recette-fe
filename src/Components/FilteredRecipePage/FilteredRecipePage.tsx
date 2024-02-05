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

import { filteredRecipePageProps } from '../../types';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';

const FilteredRecipePage: React.FC<filteredRecipePageProps> = ({ recipes }) => {
  console.log('recipe', recipes)
  const displayFilteredRecipes = recipes.map((singleRecipe) => (
    <SmallRecipeCard
      key={singleRecipe.name}
      name={singleRecipe.name}
      instructions={singleRecipe.instructions}
      image_url={singleRecipe.image_url}
      ingredients={singleRecipe.ingredients}
    />
  ));

  return (
    <main className='filtered-recipe-page'>
      {displayFilteredRecipes.length > 0 ? (
        displayFilteredRecipes
      ) : (
        <p>No recipes found</p>
      )}
      
    </main>
  );
};

export default FilteredRecipePage;
