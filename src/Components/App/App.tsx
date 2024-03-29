
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import HomePage from '../HomePage/HomePage';
import SavedRecipesPage from '../SavedRecipePage/SavedRecipesPage'
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Recipe, RecipesData, SingleRecipe, SingleRecipeData, postDataProp } from '../../types';
import { useState } from 'react';
import ShowRecipePage from '../ShowRecipePage/ShowRecipePage';
import { postAllSavedRecipes } from "../apiCalls"
import ShowSingleFilteredRecipePage from '../ShowSingleFilteredRecipePage/ShowSingleFilteredRecipePage';

function App() {
  const [recipes, setRecipes] = useState<RecipesData>({ data: { attributes: { recipes: [] }, id: null, type: '' } });
  const [ singleRecipe, setSingleRecipe] = useState<SingleRecipeData| undefined>();
  const [ savedRecipes, setSavedRecipes ] = useState<SingleRecipe[]>([])
  const [ selectedFilteredRecipe, setselectedFilteredRecipe ] = useState<Recipe>();

const postData = (newRecipe: SingleRecipe) => {
  const postDataObject: postDataProp = {
    user_id: 1, 
    name: newRecipe.name,
    image_url: newRecipe.image_url || '',
    ingredients: newRecipe.ingredients || [],
    instructions: newRecipe.instructions || [],
  };

  postAllSavedRecipes(postDataObject)
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.error('Error posting recipe:', error);
    });

  updateSavedRecipes([newRecipe]);
};  

  const updateSingleRecipe = (updatedRecipe: SingleRecipeData ) => {
    setSingleRecipe(updatedRecipe)
  }
  
  const updateRecipes = (recipes: RecipesData) => {
    setRecipes(recipes)
  }

  const updateSeletedFilteredRecipe = ( recipe: Recipe ) => {
    setselectedFilteredRecipe(recipe)
  }
  
 const updateSavedRecipes = (userSpecificRecipes: SingleRecipe[]) => {
  setSavedRecipes(savedRecipes => [...savedRecipes, ...userSpecificRecipes]);
};

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage updateSingleRecipe={updateSingleRecipe} updateRecipes={updateRecipes}
        />} />
        <Route path='/saved' element={<SavedRecipesPage recipes={recipes}
        savedRecipes={savedRecipes} updateSavedRecipes={updateSavedRecipes} updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}
        />} />
        <Route path='/filteredRecipes' element={<FilteredRecipePage recipes={recipes} updateSeletedFilteredRecipe={updateSeletedFilteredRecipe}/>
          }
        />
        <Route path='/home/:searchQuery' element={<ShowRecipePage singleRecipe={singleRecipe} postData={postData} updateSavedRecipes={updateSavedRecipes}/>}/> 
        <Route path='/filteredRecipes/:clickedRecipe' element={<ShowSingleFilteredRecipePage selectedFilteredRecipe={selectedFilteredRecipe} postData={postData}/>} /> 
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;

