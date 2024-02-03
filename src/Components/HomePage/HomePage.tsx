import Header from '../Header/Header';
import MainLogo from '../MainLogo/MainLogo';
import SearchInput from '../SearchInput/SearchInput';
// import { getAllRecipes } from '../apiCalls';

const HomePage = () => {
  return (
    <main>
      <Header/>
      <MainLogo/>
      <SearchInput/>
    </main>
  );
};

export default HomePage;
