export interface RecipesData {
  data: {
    attributes: {
      recipes: Recipe[];
    };
    id: null | string;
    type: string;
  };
}
export interface Recipe { 
  name: string;
  instructions: string;
  image_url: null | string;
  ingredients: string[];
}

export interface SearchInputProps {
  updateSingleRecipe: (updatedRecipe: Recipe) => void; 
  updateRecipes: (recipes: RecipesData) => void;
}

export interface filteredRecipePageProps {
  recipes: RecipesData;

//   filterRecipesResults: (searchTerm: string) => void;
// }

// export interface filteredRecipePageProps {
//   recipes: Recipe[];
//   toggleSavedRecipes: (recipe: Recipe) => void;
//   savedRecipes: Recipe[]; 
//   isSaved: boolean
}

export interface SmallRecipeCardProps {
  name: string;
  instructions: string;
  image_url: string | null;
  ingredients: string[];
  isSaved: boolean; 
  toggleSavedRecipes: (recipe: { name: string; instructions: string; image_url: string | null; ingredients: string[] }) => void;
}
export interface homePageProps {
  updateSingleRecipe: (updatedRecipe: Recipe) => void; 
  updateRecipes: (recipes: RecipesData) => void;
}

export interface ShowRecipePageProps {
  singleRecipe: Recipe | undefined; //may be due to multiple recipes
}

// export interface Ingredient {
//   name: string;
// }

//   filterRecipesResults: (searchTerm: string) => void;
// }
// export interface SavedRecipesPageProps {
//   savedRecipes: Recipe[];
//   toggleSavedRecipes: (recipe: Recipe) => void;
// }
// export interface SaveIconProps {
//   toggleSavedRecipes: () => void;
//   isSaved: boolean;
// }

