import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipeOrwebScrapeRecipe } from '../apiCalls';
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import ShowRecipePage from '../ShowRecipePage/ShowRecipePage';
import { Recipe } from '../../types';

const SearchInput = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [singleRecipe, setSingleRecipe] = useState<Recipe | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getRecipeOrwebScrapeRecipe(searchTerm);
        //searchTerm.toLowerCase.... 
        if (typeof searchTerm === 'string' && searchTerm.startsWith('https://')) {
          setSingleRecipe(results);
        } else {
          setRecipes(results);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/filteredrecipes');
  };

  return (
    <form className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Enter link or search term'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className='search-button' onClick={(event) => clickHandler(event)}>
        Go!
      </button>

      {/* Conditionally render components based on data availability */}
      {recipes.length > 0 && <FilteredRecipePage recipes={recipes} />}
      {singleRecipe && <ShowRecipePage singleRecipe={singleRecipe} />}
    </form>
  );
};

export default SearchInput;


// import { Recipe } from '../../types';
// import { useState } from 'react'
// import { SearchInputProps } from '../../types';
// import { useNavigate } from 'react-router-dom';
// import { getRecipeOrwebScrapeRecipe } from '../apiCalls';
// import { useEffect } from 'react';
// import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
// import ShowRecipePage from '../ShowRecipePage/ShowRecipePage';

// const SearchInput
// // : React.FC<SearchInputProps> 
// = (
//   // {filterRecipesResults}
//   ) => {
//   let navigate = useNavigate()
//   const [ recipes, setRecipes ] = useState<Recipe[]>([])
//   const [ singleRecipe, setSingleRecipe] = useState<Recipe>()
//   const [searchTerm, setSearchTerm] = useState<string>('')

  
//   // const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  
// //   const filteredRecipesResults = recipes.filter((recipe) => 
// //   recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
// // );

//   // const displayFilteredRecipes = filteredRecipesResults.map((recipe) => {
//   //   console.log("filteredRecipeResults", filteredRecipesResults)
//   //   return (
//   //     <FilteredRecipePage
//   //       recipe={[recipe]}
//   //       key={recipe.name}
//   //     />
//   //   )
//   // })
//   // const handleSearch = () => {
//     // const filteredRecipes = recipes.filter((recipe) =>
//     //   recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//     // );
//     // setFilteredRecipes(filteredRecipes);
//     // onSearchResults(filteredRecipes);
//     //navigate to filteredRecipePage 
//   // };


//   //first api call condition
//   //const show Recipes... go through and filter... based on condition to pass into the components
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const results = await getRecipeOrwebScrapeRecipe(searchTerm);
//         if (typeof searchTerm === 'string' && searchTerm.startsWith('https://')) {
//           setSingleRecipe(results)
//         } else {
//           setRecipes(results)
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };
//     // Fetch data when searchTerm changes
//     if (searchTerm.trim() !== '') {
//       fetchData();
//     }
//   }, [searchTerm]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault()
//     // filterRecipesResults(searchTerm)
//     navigate('/filteredrecipes')
//   }

//   return (
//     <form className='search-bar'>
//       <input
//         type='text'
//         className='search-input'
//         placeholder='Enter link or search term'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {/* <Link to='/filteredrecipes'> */}
//       <button type="submit" className='search-button' onClick={(event) => clickHandler(event)}>Go!</button>
//       //hide it
//       {/* </Link> */}
//       {/* <div className='hidden'>{displayFilteredRecipes}</div> */}
//     </form>
//   );
// };

// export default SearchInput;

// //will need to change Link eventually to navigate as this needs to navigate to either the filteredRecipesPage or the ShowRecipePage depedning on user input. Link is used just for developmental puruposes now 