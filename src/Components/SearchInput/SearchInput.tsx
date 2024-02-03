import React from 'react';
import { Recipe } from '../../types';

const SearchInput: React.FC<{ recipes: Recipe[] }> = ({ recipes }) => {
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
