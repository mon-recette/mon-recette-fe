export interface RecipesData {
  data: {
    id: null | string;
    type: string;
    attributes: {
      recipes: Recipe[];
    };
  };
}
export interface Recipe {
  name: string;
  instructions: string;
  image_url: null | string;
  ingredients: string[];
}

export interface SearchInputProps {
  filterRecipesResults: (searchTerm: string) => void;
}

export interface filteredRecipePageProps {
  recipes: Recipe[];
  toggleSavedRecipes: (recipe: Recipe) => void;
  savedRecipes: Recipe[]; 
  isSaved: boolean
}

export interface SmallRecipeCardProps {
  // recipe: Recipe;
  name: string;
  instructions: string;
  image_url: string | null;
  ingredients: string[];
  isSaved: boolean; 
  toggleSavedRecipes: (recipe: { name: string; instructions: string; image_url: string | null; ingredients: string[] }) => void;
}

export interface homePageProps {
  filterRecipesResults: (searchTerm: string) => void;
}

export interface SavedRecipesPageProps {
  savedRecipes: Recipe[];
  toggleSavedRecipes: (recipe: Recipe) => void;

}
export interface SaveIconProps {
  toggleSavedRecipes: () => void;
  isSaved: boolean;
}
