import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types';
// import recipesData from '../recipeData';
import { useEffect } from 'react';
import { getRecipeOrwebScrapeRecipe } from '../apiCalls';
//Server error

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getRecipeOrwebScrapeRecipe(SearchInput)
    .then(recipeData => {
      // if (string starts with Http...)
      //then navigate to showRecipe Page
      //else 
      //filteredRecipe page....
      // console.log("recipeData", recipeData)
      // setRecipes(recipeData.data.attributes.recipes)

    })
  }, []);

  //will have to create function and savedRecipe -> find recipe that is saved then reset recipes to pass into saved recipe

  return (
    <main>
      <Header />
      <MainLogo />
      <SearchInput recipes={recipes}/>
    </main>
  );
};

export default HomePage;
