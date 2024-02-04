import { filteredRecipePageProps } from '../../types';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';

const FilteredRecipePage: React.FC<filteredRecipePageProps> = ({recipe}) => {

  const displayFilteredRecipes = recipe.map((singleRecipe) => {
    return (
      <SmallRecipeCard
        key={singleRecipe.name}
        name={singleRecipe.name}
        instructions={singleRecipe.instructions}
        image_url={singleRecipe.image_url}
        ingredients={singleRecipe.ingredients}
      />
    )
  })

  return (
    <main className='filtered-recipe-page'>
      {displayFilteredRecipes}
    </main>
  );
};

export default FilteredRecipePage;
/////
