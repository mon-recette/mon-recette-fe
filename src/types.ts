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

interface SearchInputProps {
  recipes: Recipe[];
}