
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import HomePage from '../HomePage/HomePage';
import SavedRecipesPage from '../SavedRecipePage/SavedRecipesPage'
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import ErrorPage from '../ErrorPage/ErrorPage'
import { Recipe, RecipesData } from '../../types'
import { useState, useEffect } from 'react';
import ShowRecipePage from '../ShowRecipePage/ShowRecipePage';
import { getSavedRecipes, postAllSavedRecipes } from "../apiCalls"

function App() {
  const [recipes, setRecipes] = useState<RecipesData>({ data: { attributes: { recipes: [] }, id: null, type: '' } });
  const [ singleRecipe, setSingleRecipe] = useState<Recipe | undefined>();

  const [ savedRecipes, setSavedRecipes ] = useState<Recipe[]>([])

  useEffect(() => {
    getSavedRecipes() 
    .then(savedRecipeData => {
      setSavedRecipes(savedRecipeData.data.attributes.recipes)
    }) 
  })

  const postData = (newRecipe: Recipe) => {
    postAllSavedRecipes(newRecipe)
    .then(newRecipe => {
      console.log("newRecipe", newRecipe)
      setSavedRecipes(savedRecipes => [...savedRecipes, newRecipe])
    })
  }

  const updateSingleRecipe = (updatedRecipe: Recipe ) => {
     {/* {singleRecipe && <ShowRecipePage singleRecipe={singleRecipe} />} */}
    // if (singleRecipe) {
    //   setSingleRecipe(updatedRecipe)
    // }
    setSingleRecipe(updatedRecipe)
  }

  const updateRecipes = (recipes: RecipesData) => {
    setRecipes(recipes)
  }
  console.log("singleRecipe outside updateSingleRecipe fx",singleRecipe)
  // console.log("recipes outside recipes fx",recipes)

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage updateSingleRecipe={updateSingleRecipe} updateRecipes={updateRecipes}
        />} />
        <Route path='/saved' element={<SavedRecipesPage savedRecipes={savedRecipes}/>} />
        <Route path='/filteredRecipes' element={<FilteredRecipePage recipes={recipes}/>
          }
        />
        //webscraping
        <Route path='/home/:searchQuery' element={<ShowRecipePage singleRecipe={singleRecipe} postData={postData}/>} />
        <Route path='/home/:searchQuery/*' element={<ErrorPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;