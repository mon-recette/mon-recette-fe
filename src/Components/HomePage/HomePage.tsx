import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types';
// import recipesData from '../recipeData';
//Server error
import { homePageProps } from '../../types';

const HomePage: React.FC<homePageProps> = ({
  updateSingleRecipe,
  updateRecipes,
}) => {
  return (
    <main>
      <Header />
      <main className='main-page'>
        <MainLogo />
        <h1 className='home-line'>
          Links from All Recipes, Food Network, A Wicked Whisk, and Taste of
          Home are accepted
        </h1>
        <SearchInput
          updateSingleRecipe={updateSingleRecipe}
          updateRecipes={updateRecipes}
        />
      </main>
    </main>
  );
};

export default HomePage;
