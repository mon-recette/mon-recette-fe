const SearchInput = () => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'></input>
      <button className='search-button'>Go!</button>
    </div>
  );
};

export default SearchInput;
