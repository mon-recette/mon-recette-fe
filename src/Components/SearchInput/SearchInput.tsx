import React from 'react';
import { Recipe } from '../../types';

const SearchInput: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
  return (
    <form className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
      />
      <button className='search-button'>Go!</button>
    </form>
  );
};

export default SearchInput;
