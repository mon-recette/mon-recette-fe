import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types';
import { useEffect } from 'react';
import { homePageProps } from '../../types';

//Server error
const HomePage: React.FC<homePageProps> = ({filterRecipesResults}) => {
  return (
    <main>
      <Header />
      <MainLogo />
      <SearchInput filterRecipesResults={filterRecipesResults} />
    </main>
  );
};

export default HomePage;
