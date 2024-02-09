
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
        <Route path='/filteredRecipes/:clickedRecipe' element={<ShowSingleFilteredRecipePage selectedFilteredRecipe={selectedFilteredRecipe} postData={postData}/>} /> //add savedRecipe button
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;

//for delete:
// <!--   const postData = (newRecipe: Recipe | postDataProp) => {
//     if ('name' in newRecipe) {
//       // Assuming newRecipe is of type Recipe
//       postAllSavedRecipes(newRecipe)
//         .then((newRecipe) => {
//            ("newRecipe", newRecipe)
//           // Handle the response as needed
//           // setSavedRecipes(savedRecipes => [...savedRecipes, newRecipe])
//         })
//         .catch((error) => {
//           // Handle the error
//           console.error('Error posting recipe:', error);
//         });
//     } else {
//       // Handle the case when newRecipe is of type postDataProp
//        ("newRecipe", newRecipe);
//       // Perform any logic needed for postDataProp
//     }
//   }; -->