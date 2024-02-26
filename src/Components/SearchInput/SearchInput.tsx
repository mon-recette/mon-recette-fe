import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipeOrwebScrapeRecipe } from '../apiCalls';
import { SearchInputProps, RecipesData, Recipe, isRecipesData, SingleRecipeData } from '../../types';
import './SearchInput.css';

const SearchInput: React.FC<SearchInputProps> = ({ updateSingleRecipe, updateRecipes }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetchData = async () => {
    try {
      const results = await getRecipeOrwebScrapeRecipe(searchTerm);

      if (isRecipesData(results)) {
        updateRecipes(results);
      } else {
        updateSingleRecipe(results as SingleRecipeData);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (searchTerm === '') {
      setErrorMessage('Please fill out the search input');
      return;
    }

    fetchData();
    if (searchTerm.startsWith('https://')) {
      navigate(`/home/${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/filteredrecipes');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchData();
      if (searchTerm.startsWith('https://')) {
        navigate(`/home/${encodeURIComponent(searchTerm)}`);
      } else {
        navigate('/filteredrecipes');
      }
    }
  };

  useEffect(() => {
  }, []); 

  return (
    <form className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        onKeyPress={handleKeyPress}
        aria-label="Search"
      />
      <button type="submit" className='search-button' onClick={clickHandler}>
        Search ingredient!
      </button>
      {errorMessage && <h2 className='error-message' role='alert'>{`${errorMessage}`}</h2>}
    </form>
  );
};

export default SearchInput;


