import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
// import { getAllRecipes } from '../apiCalls';

//Server error
const HomePage = () => {

  //will have to create function and savedRecipe -> find recipe that is saved then reset recipes to pass into saved recipe
  return (
    <main>
      <Header/>
      <MainLogo/>
      <SearchInput/>
    </main>
  );
};

export default HomePage;
