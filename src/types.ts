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
  // onSearchResults: (filteredRecipes: Recipe[]) => void;
}

export interface filteredRecipePageProps {
  recipes: Recipe[];
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

export interface homePageProps {
  filterRecipesResults: (searchTerm: string) => void;
}