import { Recipe } from '../../types';
import { useState } from 'react'

interface SearchInputProps {
  recipes: Recipe[];
  // onSearchResults: (filteredRecipes: Recipe[]) => void;

}

const SearchInput: React.FC<SearchInputProps> = ({recipes}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  
  const displayFilteredRecipes = recipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  const handleSearch = () => {
    // const filteredRecipes = recipes.filter((recipe) =>
    //   recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    setFilteredRecipes(filteredRecipes);
    // onSearchResults(filteredRecipes);
    //navigate to filteredRecipePage 
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
      />
      <button className='search-button'>Go!</button>
    </div>
  );
};

export default SearchInput;

//will need to change Link eventually to navigate as this needs to navigate to either the filteredRecipesPage or the ShowRecipePage depedning on user input. Link is used just for developmental puruposes now 