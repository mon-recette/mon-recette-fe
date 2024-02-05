import { filteredRecipePageProps } from '../../types';
import Header from '../Header/Header';
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton';
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
         <SmallRecipeCard
          key={singleRecipe.name}
          name={singleRecipe.name}
          instructions={singleRecipe.instructions}
          image_url={singleRecipe.image_url}
          ingredients={singleRecipe.ingredients}
          isSaved={savedRecipes.some(
            savedRecipe => savedRecipe.name === singleRecipe.name,
          )}
          toggleSavedRecipes={() => toggleSavedRecipes(singleRecipe)}
        />
    );
  });

  return (
    <main className='filtered-recipe-page'>
      <Header />
      <ReturnToSearchButton /> 
      {displayFilteredRecipes.length > 0 ? (
        displayFilteredRecipes
      ) : (
        <p>No recipes found</p>
      )}
    </main>
  );
};

export default FilteredRecipePage;
