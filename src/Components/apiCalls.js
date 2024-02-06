
// environment variables - can be used .env files (put any secrets - this can be added to gitignore)
// never expose apiKey 

// export const getAllRecipes = () => {
//     return fetch(`https://mon-recette-be.herokuapp.com/api/v1/searches?term=`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`${response.status}: ${response.message}`);
//         }
//         return response.json();
//     })
// }

export const getRecipeOrwebScrapeRecipe = (searchTerm) => {
    return fetch(`https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/searches?term=${searchTerm}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            throw error; // Rethrow the error to be caught by the calling code
        });
}

export const getSavedRecipes = () => {
    return fetch(`endpt for saved recipe`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            throw error; // Rethrow the error to be caught by the calling code
        });
}

export function postAllSavedRecipes(newRecipe) {
    return fetch('endpt for saved recipe', {
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

// export const getRecipeOrwebScrapeRecipe = (searchQuery) => {
//     return fetch(`https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/searches?term=${searchQuery}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`${response.status}: ${response.statusText}`);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error('Error fetching recipe:', error);
//             throw error; // Rethrow the error to be caught by the calling code
//         });
// }

// export const getUsers = () => {
//     return fetch(`end point ?`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`${response.status}: ${response.message}`);
//         }
//         return response.json();
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }