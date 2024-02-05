
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import HomePage from '../HomePage/HomePage';
import SavedRecipesPage from '../SavedRecipePage/SavedRecipePage'
import FilteredRecipePage from '../FilteredRecipePage/FilteredRecipePage';
import ErrorPage from '../ErrorPage/ErrorPage'
import { Recipe, filteredRecipePageProps } from '../../types'
import recipesData from '../recipeData';
import { useState } from 'react';

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  const filterRecipesResults = (searchTerm: string) => {
    const filteredResults = recipesData.data.attributes.recipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredRecipes(filteredResults)
  }

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage filterRecipesResults={filterRecipesResults} />} />
        <Route path='/saved' element={<SavedRecipesPage/>} />
        <Route path='/filteredrecipes' element={<FilteredRecipePage
            recipes={filteredRecipes}
          />
          }
        />
        <Route path='*' element={<ErrorPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;

//QUESTION ON PERSON WITH TYPESCRIPT KNOWLEDGE: MEET ALEX:
// When you use the component in your Routes, you need to provide the expected recipe prop with the correct type, which is an array of Recipe objects.

//If you have a TypeScript component with specific prop types, and you are using it in another part of your application (such as in your routes), TypeScript will enforce that you provide the correct props according to the defined types. However, how you pass the props can depend on the specific structure and requirements of your application.

// In general, if you have a component that expects certain props, you should provide those props with the correct types when using the component. This is to ensure that your components are used consistently and that you catch potential errors at compile-time rather than runtime.

// Here's a breakdown:

// 1. **Component Definition:**
//    - If you define a component with specific prop types:

//      ```tsx
//      interface filteredRecipePageProps {
//        recipe: Recipe[];
//      }

//      const FilteredRecipePage: React.FC<filteredRecipePageProps> = ({ recipe }) => {
//        // Component logic
//        // ...
//        return (
//          // Component JSX
//        );
//      };
//      ```

// 2. **Component Usage:**
//    - When you use this component elsewhere (e.g., in your routes), you should provide the expected props according to the defined types:

//      ```tsx
//      <Route
//        path='/allrecipes'
//        element={
//          <FilteredRecipePage
//            recipe={[
//              {
//                name: "Recipe Name",
//                instructions: "Recipe Instructions",
//                image_url: "recipe_image_url",
//                ingredients: ['ingredient1', 'ingredient2'],
//              }
//            ]}
//          />
//        }
//      />
//      ```

// If in your previous projects you did not explicitly declare the prop types when using components, it could be due to various reasons such as less strict TypeScript settings or different coding practices. However, declaring and enforcing prop types is generally a good practice for better code consistency and catching potential issues early in the development process.