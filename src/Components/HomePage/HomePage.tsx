import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types';
import recipesData from '../recipeData';
import { useEffect } from 'react';

//Server error
const HomePage = () => {

  useEffect(() => {
    setRecipes(recipesData.data.attributes.recipes)
    console.log(recipesData);
  }, []);

  //will have to create function and savedRecipe -> find recipe that is saved then reset recipes to pass into saved recipe
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <main>
      <Header />
      <MainLogo />
      <SearchInput recipes={recipes}/>
    </main>
  );
};

export default HomePage;
