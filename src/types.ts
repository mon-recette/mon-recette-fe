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
  updateSeletedFilteredRecipe: (recipe: Recipe) => void;
}

export interface SmallRecipeCardProps {
  name: string;
  instructions: string;
  image_url: string | null;
  ingredients: string[];
  isSaved?: boolean; 
  toggleSavedRecipes?: (recipe: { name: string; instructions: string; image_url: string | null; ingredients: string[] }) => void;
  recipes?: RecipesData;
  updateSeletedFilteredRecipe: (recipe: RecipesData['data']['attributes']['recipes'][number]) => void; 

}
export interface homePageProps {
  updateSingleRecipe: (updatedRecipe: Recipe) => void; 
  updateRecipes: (recipes: RecipesData) => void;
}

export interface ShowRecipePageProps {
  singleRecipe: Recipe | RecipesData | undefined;
  postData: ( recipes : Recipe ) => void;
}

// export interface Ingredient {
//   name: string;
// }

export interface SavedRecipesPageProps {
  savedRecipes: Recipe[];
  updateSeletedFilteredRecipe: (recipe: Recipe) => void;
}

export interface postDataProp {
  user_id: number; 
  name: string | undefined
  // image_url: null | string;
  ingredients: string[] | undefined; 
  instructions: string | undefined; 
}
export interface SaveIconProps {
  toggleSavedRecipes: () => void;
  isSaved: boolean;
}

export interface ShowSingleFilteredRecipePageProps {
  selectedFilteredRecipe: Recipe | undefined;
  postData: (recipe: postDataProp) => void;
}
