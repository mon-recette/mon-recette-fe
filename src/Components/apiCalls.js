
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

export const getRecipeOrwebScrapeRecipe = (searchInput) => {
    return fetch(`https://mon-recette-be.herokuapp.com/api/v1/searches?term=${searchInput}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.message}`);
        }
        return response.json();
    })
}
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