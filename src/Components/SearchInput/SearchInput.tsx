import { Recipe } from '../../types';
import { useState } from 'react';
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import { SearchInputProps } from '../../types';
import { useNavigate } from 'react-router-dom';

const SearchInput: React.FC<SearchInputProps> = ({ filterRecipesResults }) => {
  
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const clickHandler = () => {
    filterRecipesResults(searchTerm);
    navigate('/filteredrecipes');
  };

  return (
    <form className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className='search-button' onClick={clickHandler}>
        Go!
      </button>
    </form>
  );
};

export default SearchInput;
