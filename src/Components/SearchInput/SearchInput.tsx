import { Recipe } from '../../types';
import { useState } from 'react'
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import { SearchInputProps } from '../../types';
// interface SearchInputProps {
//   recipes: Recipe[];
//   // onSearchResults: (filteredRecipes: Recipe[]) => void;

// }
const SearchInput: React.FC<SearchInputProps> = ({recipes}) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  
  const filteredRecipesResults = recipes.filter((recipe) => 
  recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const displayFilteredRecipes = filteredRecipesResults.map((recipe) => {
    console.log("filteredREcipeResults", filteredRecipesResults)
    return (
      <FilteredRecipePage
        recipe={[recipe]}
        key={recipe.name}
        // key={recipe.name}
        // name={recipe.name}
        // instructions={recipe.instructions}
        // image_url={recipe.image_url}
        // ingredients={recipe.ingredients}
      />
    )
  })
  // const handleSearch = () => {
    // const filteredRecipes = recipes.filter((recipe) =>
    //   recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredRecipes(filteredRecipes);
    // onSearchResults(filteredRecipes);
    //navigate to filteredRecipePage 
  // };

  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      //Link!
      <button className='search-button'>Go!</button>
      //hide it
      <div className='hidden'>{displayFilteredRecipes}</div>
    </div>
  );
};

export default SearchInput;

//will need to change Link eventually to navigate as this needs to navigate to either the filteredRecipesPage or the ShowRecipePage depedning on user input. Link is used just for developmental puruposes now 