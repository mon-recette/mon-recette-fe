import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types';
import { useEffect } from 'react';
import { homePageProps } from '../../types';

//Server error
const HomePage: React.FC<homePageProps> = ({filterRecipesResults}) => {
  //will have to create function and savedRecipe -> find recipe that is saved then reset recipes to pass into saved recipe
  // const [recipes, setRecipes] = useState<Recipe[]>([]);

  // useEffect(() => {
  //   setRecipes(recipesData.data.attributes.recipes)
  //   console.log(recipesData);
  // }, []);


  return (
    <main>
      <Header />
      <MainLogo />
      <SearchInput filterRecipesResults={filterRecipesResults} />
    </main>
  );
};

export default HomePage;
