import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types';
import recipesData from '../recipeData';
import { useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(recipesData.data.attributes.recipes)
    console.log(recipesData);
  }, []);

  return (
    <main>
      <Header />
      <MainLogo />
      <SearchInput recipes={recipes}/>
    </main>
  );
};

export default HomePage;
