import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
import { useState } from 'react';
import { Recipe } from '../../types'

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <main>
      <Header />
      <MainLogo />
      <SearchInput recipes={recipes} />
    </main>
  );
};

export default HomePage;
