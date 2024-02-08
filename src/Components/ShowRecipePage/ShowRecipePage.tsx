import './ShowRecipePage.css';
import Header from '../Header/Header';
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn';
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'
import { ShowRecipePageProps, postDataProp } from '../../types';
import { Recipe } from '../../types';
import { useState } from 'react';

const ShowRecipePage: React.FC<ShowRecipePageProps> = ({singleRecipe, postData}) => {
  // console.log("singleRecipe in ShowRecipePage", singleRecipe)
  const [isSaved, setIsSaved] = useState(false);

  const addToSavedRecipe = () => {
    if (isSaved) {
      // Delete the recipe if it's already saved
      // You need to implement a delete functionality, e.g., deleteData(selectedFilteredRecipe.id);
      console.log('Recipe deleted:', singleRecipe);
      setIsSaved(false);
    } else {
      // Save the recipe if it's not saved
      const newRecipe: React.FC<postDataProp> = {
        user_id: 1, // for now, a user has user_id 1
        name: singleRecipe?.name,
        ingredients: singleRecipe?.ingredients,
        instructions: singleRecipe?.instructions
      };

      console.log('Recipe saved:', newRecipe);
      postData(newRecipe);
      setIsSaved(true);
    }
  };

    // const addToSavedRecipe = () => {
    //   const newRecipe: React.FC<postDataProp> = {
    //     user_id: 1, //for now, q user has user_id 1
    //     //but has to be tied with the email??? how do we get the email?
    //     name: singleRecipe?.name,
    //     ingredients: singleRecipe?.ingredients,
    //     instructions: singleRecipe?.instructions
    //   }
    //   console.log("newRecipe",newRecipe)
    //   postData(newRecipe)
    // }

    return (
      <div>
        <Header />
        <BackToSearchBtn />
        <h2>{singleRecipe?.data.attributes.name}</h2>
        { singleRecipe?.image_url && <img src={singleRecipe?.image_url || ''}alt="Recipe" />}
        
        <div className="recipe_info">
          <section>
            <h3>Ingredients</h3>
            {singleRecipe?.data.attributes.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ))}
          </section>
          <section>
            <h3>Instructions</h3>
            <div>{singleRecipe?.data.attributes.instructions}
            {/* {singleRecipe?.data.attributes.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{index + 1}. {ingredient}</div> */}
            </div>
          </section>
        </div>
        <button type="submit" onClick={()=> addToSavedRecipe()}>Saved button</button>
      </div>
    );
  };

export default ShowRecipePage
