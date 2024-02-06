import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipeOrwebScrapeRecipe } from '../apiCalls';
<!-- import { Recipe } from '../../types';
import { useState } from 'react'; -->

import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import ShowRecipePage from '../ShowRecipePage/ShowRecipePage';
import { Recipe } from '../../types';
import { SearchInputProps } from '../../types';
//correct way to do it, is to not fetch everything (bc that slows down everything)
//avoid if else

const SearchInput: 
React.FC<SearchInputProps>
= ({updateSingleRecipe, updateRecipes}) => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  // const [singleRecipe, setSingleRecipe] = useState<Recipe | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getRecipeOrwebScrapeRecipe(searchTerm);
        //searchTerm.toLowerCase.... 
        if (typeof searchTerm === 'string' && searchTerm.startsWith('https://')) {
          updateSingleRecipe(results)
          // setSingleRecipe(results);
          //webscraping
          
          navigate(`/home/${searchTerm}`);
        } else {
          updateRecipes(results)
          navigate('/filteredrecipes');
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Fetch data when searchTerm changes
    if (searchTerm.trim() !== '') {
      fetchData();
    }
  }, [searchTerm]);

// const SearchInput: React.FC<SearchInputProps> = ({ filterRecipesResults }) => {
  
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const clickHandler = () => {
//     filterRecipesResults(searchTerm);
//     navigate('/filteredrecipes');
//   };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (searchTerm === '') {
      setErrorMessage('Please fill our search input')
      return
    }
  };

  // const handleUpdatedRecipes() {
  //   const updatedRecipe = {

  //   }
  //   updateSingleRecipe(updatedRecipe)
  // }
  
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
        Go!
      </button>

      {/* Conditionally render components based on data availability */}
      {/* {recipes.length > 0 && <FilteredRecipePage recipes={recipes} />} */}
      {/* {singleRecipe && <ShowRecipePage singleRecipe={singleRecipe} />} */}
      {errorMessage && <h2>{`${errorMessage}`}</h2>}

        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className='search-button' onClick={clickHandler}>
        Go!
      </button>
<!--     </form>
  );
};

export default SearchInput; -->
