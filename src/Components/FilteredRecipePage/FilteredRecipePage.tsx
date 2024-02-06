import { filteredRecipePageProps } from '../../types';
import Header from '../Header/Header';
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';

const FilteredRecipePage
: React.FC<filteredRecipePageProps>
 = ({ recipes }) => {
  console.log('recipes in FilteredPage', recipes)
  
  const displayFilteredRecipes = recipes.data.attributes.recipes.map((singleRecipe) => (
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
