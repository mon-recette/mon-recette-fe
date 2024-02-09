import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipeOrwebScrapeRecipe } from '../apiCalls';
import { SearchInputProps, RecipesData, Recipe, isRecipesData, SingleRecipeData } from '../../types';
import './SearchInput.css'
//correct way to do it, is to not fetch everything (bc that slows down everything)
//avoid if else

//
const SearchInput: 
React.FC<SearchInputProps>
= ({updateSingleRecipe, updateRecipes}) => {
  const navigate = useNavigate();
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  // const [ error, setError ] = useState('')
  
  useEffect(() => {
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

  if (searchTerm.trim() !== '') {
    fetchData();
  }
}, [searchTerm, navigate]);

  

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (searchTerm === '') {
      setErrorMessage('Please fill out the search input');
      return;
    }

    if (searchTerm.startsWith('https://')) {
      navigate(`/home/${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/filteredrecipes');
    }
  };

  return (
    <form className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
      <button type="submit" className='search-button' onClick={(event) => clickHandler(event)}>
        Search ingredient!
      </button>
      {errorMessage && <h2 className='error-message'>{`${errorMessage}`}</h2>}
    </form>
  );
};

export default SearchInput;
