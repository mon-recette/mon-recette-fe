![Mon Recette](/src/Images%20/Main-logo.png)

![Tests](https://badgen.net/badge/tests/passing/green?icon=github)

# <h1 align=center> 👩🏻‍🍳 Mon Recette 👨🏻‍🍳

  ### 💻 Technologies Used in Frontend
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)
![React](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Router](https://img.shields.io/badge/react--router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## 💡 Project Overview
> This product allows users to save their favorite recipes across multiple websites all in one place.

Grandma used to have a bin full of recipes written on index cards from her favorite books and magazines. That was messy, easy-to-lose, and the cards decayed, especially if you spilt your pasta water on it while following along. The internet changed things, and we can digitally save recipes! However, many websites only save recipes from their website, and don't allow you to import recipes from other locations.

Enter Mon Recette. You can save and edit recipes from multiple websites. Grandma doesn't need to worry about losing or ruining her index cards, and you don't need to worry about having to visit multiple places to find that one recipe you are looking for, but couldn't remember if it belonged to this blog or that blog or allrecipes or foodnetwork, etc.

## Installation

OS X & Linux:
This project runs on React 18.2.1.

Fork and clone [this repository](https://github.com/mon-recette/mon-recette-fe), which is the front-end of our application.

Fork and clone [this repository](https://github.com/mon-recette/mon_recette_be) to access our back-end.

Windows:

This product is not compatible with Windows.

## API
This application uses a free and unlimited api called [TheMealDB](https://www.themealdb.com/api.php). You don't need to sign up for a key, or use a key at all!


## Why Use Mon Recette?

There are plenty of great websites with amazing recipes that will turn any evening into a memory that will last a lifetime. That downside is that those recipes are saved in multiple locations, not in a single place. With Mon Recette, you can import and save recipes from:
1. TheMealDB
2. Food Network
3. All Recipes
4. A Wicked Whisk
5. Taste of Home

We hope to add more complete functionality by incorporating AI to webscrape a more robust collection of websites. Stay tuned!

## What Can This Do?
Mon Recette will save all your recipes in one place. 

### Landing/Log In
<img width="1385" alt="Screenshot 2024-02-10 at 12 20 57 PM" src="https://github.com/mon-recette/mon-recette-fe/assets/119434450/ebc2bbac-92bc-4784-a1eb-51fa83687b28">

Users can create an account using their email (future extension) 
Once an account has been made, the user will be able to login and see their User Dashboard.

### User dashboard
<img width="1381" alt="Screenshot 2024-02-10 at 9 51 32 AM" src="https://github.com/mon-recette/mon-recette-fe/assets/119434450/a8845065-b9c0-4a1f-abf8-3ef12db9edfc">

Functionality here is very simple and straightforward. Either go to your saved recipes list, or search for a food item such as chicken (to find recipes for chicken) or paste in the url from a recipe you found at a different website.

If searching for food terms, it will return a list of recipes with images you can browse.
<img width="1325" alt="Screenshot 2024-02-10 at 7 43 28 AM" src="https://github.com/mon-recette/mon-recette-fe/assets/119434450/2a33d466-7ef2-4477-af84-c0670343d579">


Opening up the more details page to see the recipe instructions and ingredients.
<img width="1376" alt="Screenshot 2024-02-10 at 9 44 46 AM" src="https://github.com/mon-recette/mon-recette-fe/assets/119434450/1a3cbefa-9c4c-45cc-a642-25ba7bb30672">

If pasting a url, it will return that recipe with the ingredients list and instructions side-by-side.
![Screenshot 2024-02-10 at 12 13 46 PM](https://github.com/mon-recette/mon-recette-fe/assets/119434450/5a51db3e-8492-4e68-8a7b-ae6834a7a379)


### Saving a recipe
When searching for recipes or pasting a recipe link, there will be a button to save the recipe. It will then show up in your "Saved Recipes" list which can be accessed in the navbar.
<img width="1379" alt="Screenshot 2024-02-10 at 9 47 54 AM" src="https://github.com/mon-recette/mon-recette-fe/assets/119434450/de74127d-39ea-4269-a7ab-261eb159286e">


### Editing Recipes
Feel like the recipe needs tweaking? We will be adding the ability to edit the recipe soon!

## Wireframes
1. ![Login](/src/Images%20/wireframes/Login.png)
2. ![Dashboard](/src/Images%20/wireframes/dashboard.png)
3. ![Recipes using key ingredient search term](/src/Images%20/wireframes/Filtered-recipes.png)
4. ![Individual recipe](/src/Images%20/wireframes/Individual-recipe.png)
5. ![Saved list of recipes](/src/Images%20/wireframes/Individual-recipe.png)
5. ![Error page](/src/Images%20/wireframes/Error.png)
6. <img width="1165" alt="Screenshot 2024-02-10 at 7 07 52 AM" src="https://github.com/mon-recette/mon-recette-fe/assets/119434450/bac6c52c-fc5a-4430-be50-13daac1571d6">



## 🔧 Setup
Download both our [front end](https://github.com/mon-recette/mon-recette-fe) and [back end](https://github.com/mon-recette/mon_recette_be) applications.

Run the following code in your terminal to install the gems required to use this application:

```sh
npm install
```

Start the server on the front end application by typing the following in the terminal.

```sh
npm start
```

NOTE: The back-end application should be running on PORT 5000,
while the front-end application should be running on PORT 3000.


Check to make sure all the tests are passing by running the following code in your terminal:
```sh
npm run cypress:open

-or-

npx cypress run
```

## Production Sites
[Frontend](https://mon-recette-fe.vercel.app/) is deployed with vercel

[Backend](https://mon-recette-be.herokuapp.com/) is deployed with heroku (note: there is nothing interesting to see here, as be is purely a microservice for frontend).


### Testing
Our application is tested using [Cypress](https://www.cypress.io/). 

## Wins/challenges
- Implementing typescript
- Sending requests to the back end in order for them to return the data rather than all of the data being returned and then filtering through that on the front end side.



## Contributors

Sooyung Kim: [GitHub](https://github.com/skim1027) [LinkedIn](https://www.linkedin.com/in/sooyung-kim/)

Allan Evans: [GitHub](https://github.com/aevans27) [LinkedIn](https://www.linkedin.com/in/allan-evans-2c/)

Nathan Trautenberg: [GitHub](https://github.com/WagglyDessert) [LinkedIn](https://www.linkedin.com/in/nathan-trautenberg-9106271a7/)

Amy Siu: [GitHub](https://github.com/amysiu1028) [LinkedIn](https://www.linkedin.com/in/amy-siu-206a71a8/)

Jen Nguyen [GitHub](https://github.com/Jnguyen615) [LinkedIn](https://www.linkedin.com/in/jennifer-nguyen0615/)



