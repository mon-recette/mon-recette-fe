import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import SavedRecipesPage from '../SavedRecipePage/SavedRecipesPage';
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Recipe, RecipesData } from '../../types';
import { useState, useEffect } from 'react';
import ShowRecipePage from '../ShowRecipePage/ShowRecipePage';
import { getSavedRecipes, postAllSavedRecipes } from '../apiCalls';
import ShowSingleFilteredRecipePage from '../ShowSingleFilteredRecipePage/ShowSingleFilteredRecipePage';
// import { getSavedRecipes } from '../apiCalls';

function App() {
  const [recipes, setRecipes] = useState<RecipesData>({ data: { attributes: { recipes: [] }, id: null, type: '' } });
  const [ singleRecipe, setSingleRecipe] = useState<Recipe | undefined>();
  const [ savedRecipes, setSavedRecipes ] = useState<Recipe[]>([])
  const [ selectedFilteredRecipe, setselectedFilteredRecipe ] = useState<Recipe>();

  const postData = (newRecipe: Recipe) => {
    postAllSavedRecipes(newRecipe)
    // .then(newRecipe => {
    //   console.log("newRecipe in App", newRecipe)
    // })
  };

  const updateSingleRecipe = (updatedRecipe: Recipe) => {
    setSingleRecipe(updatedRecipe);
  };

  const updateRecipes = (recipes: RecipesData) => {
    setRecipes(recipes);
  };

  const updateSeletedFilteredRecipe = (recipe: Recipe) => {
    setselectedFilteredRecipe(recipe);
  };

  console.log("singleRecipe outside updateSingleRecipe fx",singleRecipe)
  // console.log("recipes outside recipes fx",recipes)
  console.log("selectedFilterecRecipe in App",selectedFilteredRecipe)

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage updateSingleRecipe={updateSingleRecipe} updateRecipes={updateRecipes}
        />} />
        <Route path='/saved' element={<SavedRecipesPage 
        // savedRecipes={savedRecipes}
        />} />
        <Route path='/filteredRecipes' element={<FilteredRecipePage recipes={recipes} updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}/>
          }
        />
        //webscraping
        <Route path='/home/:searchQuery' element={<ShowRecipePage singleRecipe={singleRecipe} postData={postData}/>} /> //add savedRecipe button
        <Route path='/filteredRecipes/:clickedRecipe' element={<ShowSingleFilteredRecipePage selectedFilteredRecipe={selectedFilteredRecipe} postData={postData}/>} /> //add savedRecipe button
        <Route path='/*' element={<ErrorPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
