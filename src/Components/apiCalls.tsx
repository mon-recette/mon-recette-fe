import { RecipesData, postDataProp } from '../types'

export const getRecipeOrwebScrapeRecipe = (searchTerm: string): Promise<RecipesData> => {

    return fetch(`https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/searches?term=${searchTerm}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            throw error; 
        });
}

export const getSavedRecipes = (id: number): Promise<RecipesData> => {

    return fetch(`https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/recipes?user_id=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            throw error; 
        });
}

export const postAllSavedRecipes = (newRecipe: postDataProp): Promise<any> => {

    return fetch('https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json(); 
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  }