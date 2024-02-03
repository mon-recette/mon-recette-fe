
// environment variables - can be used .env files (put any secrets - this can be added to gitignore)
// never expose apiKey 

// export const getAllRecipes = () => {
//     return fetch(`endpoint add here`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`${response.status}: ${response.message}`);
//         }
//         return response.json();
//     })
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