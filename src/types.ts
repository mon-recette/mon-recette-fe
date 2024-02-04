export interface RecipesData {
  data: {
    id: null | string;
    type: string;
    attributes: {
      recipes: Recipe[];
    };
  };
}

// export interface RecipesData {
//   data: {
//     attributes: {
//       recipes: Recipe[];
//     };
//   };
// }

// export interface RecipesData  {
//   id: number | null;
//   type: string;
//   attributes: {
//     recipes: Recipe[];
//   };
// };

export interface Recipe {
  name: string;
  instructions: string;
  image_url: null | string;
  ingredients: string[];
}

export interface SearchInputProps {
  recipes: Recipe[];
  // onSearchResults: (filteredRecipes: Recipe[]) => void;
}

export interface filteredRecipePageProps {
  recipe: Recipe[];
  // name: string;
  // instructions: string;
  // image_url: string | null;
  // ingredients: string[];
}

export interface smallRecipePageProps {
  // recipe: Recipe;
  name: string;
  instructions: string;
  image_url: string | null;
  ingredients: string[];
}