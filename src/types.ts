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
  user_id?: number;
}

export interface SearchInputProps {
  updateSingleRecipe: (updatedRecipe: SingleRecipeData) => void;
  updateRecipes: (recipes: RecipesData) => void;
}

export interface filteredRecipePageProps {
  recipes: RecipesData;
  updateSeletedFilteredRecipe: (recipe: Recipe) => void;
}

export interface SmallRecipeCardProps {
  recipes: RecipesData; 
  name: string;
  image_url: string | null;
  updateSeletedFilteredRecipe: (
    recipe: RecipesData['data']['attributes']['recipes'][number],
  ) => void;
}

export interface homePageProps {
  updateSingleRecipe: (updatedRecipe: SingleRecipeData) => void;
  updateRecipes: (recipes: RecipesData) => void;
}

export interface ShowRecipePageProps {
  singleRecipe: SingleRecipeData | undefined;
  postData: (postData: postDataProp) => void;
  updateSavedRecipes: (userSpecificRecipes: SingleRecipe[]) => void;
}

export interface SingleRecipeData {
  data: {
    attributes: SingleRecipe;
    id: null | string;
    type: string;
  };
  image_url?: string;
  id?: null | string;
  type?: string;
}

export interface SingleRecipe {
  name: string;
  instructions: string[] | string | undefined;
  image_url: null | string;
  ingredients: string[];
  user_id?: number;
}

export interface SavedRecipesPageProps {
  recipes: RecipesData;
  savedRecipes: SingleRecipe[];
  updateSavedRecipes: (userSpecificRecipes: SingleRecipe[]) => void; 
  updateSeletedFilteredRecipe: (recipe: Recipe) => void;
}

export interface SavedRecipeCardProps {
  recipes: RecipesData;
  ingredients: string[];
  instructions: string | string[];
  name: string;
  image_url: string | null;
  updateSeletedFilteredRecipe: (recipe: Recipe) => void;
}

export interface postDataProp {
  user_id: number;
  name: string;
  image_url: null | string;
  ingredients: string[];
  instructions: string[] | string;
}

export interface SaveIconProps {
  toggleSavedRecipes: () => void;
  isSaved: boolean;
}

export interface ShowSingleFilteredRecipePageProps {
  selectedFilteredRecipe: Recipe | undefined;
  postData: (postData: postDataProp) => void;
}

// type checker functions 
export const isRecipesData = (obj: any): obj is RecipesData => (
  typeof obj === 'object' &&
  'data' in obj &&
  'attributes' in obj.data &&
  'recipes' in obj.data.attributes
);

