import { filteredRecipePageProps } from '../../types';
import Header from '../Header/Header';
import ReturnToSearchButton from '../ReturnToSearchButton/ReturnToSearchButton';
import SmallRecipeCard from '../SmallRecipeCard/SmallRecipeCard';
import './FilteredRecipePage.css';

const FilteredRecipePage
: React.FC<filteredRecipePageProps>
 = ({ recipes, updateSeletedFilteredRecipe }) => {
  const displayFilteredRecipes = recipes.data.attributes.recipes.map((singleRecipe) => (
    <SmallRecipeCard
      key={singleRecipe.name}
      name={singleRecipe.name}
      image_url={singleRecipe.image_url} //may need to take out
      recipes={recipes}
      updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}
    />
  ));

  return (
    <main className='filtered-recipe-page'>
      <Header />
      <ReturnToSearchButton /> 
      <div className='big_break' role='separator' aria-hidden='true'></div>
      <section className='media-scroll'>
        {displayFilteredRecipes.length > 0 ? (
          displayFilteredRecipes
          ) : (
            <p>No recipes found</p>
            )}
      </section>
            <div className='scroll-to-see-more-text'>Scroll To See More </div>
    </main>
  );
};

export default FilteredRecipePage;
