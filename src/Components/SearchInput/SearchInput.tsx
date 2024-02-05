import { Recipe } from '../../types';
import { useState } from 'react'
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import { SearchInputProps } from '../../types';
import { useNavigate } from 'react-router-dom';

const SearchInput: React.FC<SearchInputProps> = ({filterRecipesResults}) => {
  let navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState<string>('')
  // const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  
//   const filteredRecipesResults = recipes.filter((recipe) => 
//   recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

  // const displayFilteredRecipes = filteredRecipesResults.map((recipe) => {
  //   console.log("filteredRecipeResults", filteredRecipesResults)
  //   return (
  //     <FilteredRecipePage
  //       recipe={[recipe]}
  //       key={recipe.name}
  //     />
  //   )
  // })
  // const handleSearch = () => {
    // const filteredRecipes = recipes.filter((recipe) =>
    //   recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredRecipes(filteredRecipes);
    // onSearchResults(filteredRecipes);
    //navigate to filteredRecipePage 
  // };

  const clickHandler = () => {
    filterRecipesResults(searchTerm)
    navigate('/filteredrecipes')
  }

  return (
    <form className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <Link to='/filteredrecipes'> */}
      <button className='search-button' onClick={clickHandler}>Go!</button>
      //hide it
      {/* </Link> */}
      {/* <div className='hidden'>{displayFilteredRecipes}</div> */}
    </form>
  );
};

export default SearchInput;

//will need to change Link eventually to navigate as this needs to navigate to either the filteredRecipesPage or the ShowRecipePage depedning on user input. Link is used just for developmental puruposes now 