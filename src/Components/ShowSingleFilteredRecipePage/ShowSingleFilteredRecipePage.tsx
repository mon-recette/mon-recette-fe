import './ShowSingleFilteredRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import { postDataProp } from '../../types';
import { useState } from 'react';

const ShowSingleFilteredRecipePage = ({selectedFilteredRecipe, postData}) => {
  const [isSaved, setIsSaved] = useState(false);

  const addToSavedRecipe = () => {
    if (isSaved) {
      // Delete the recipe if it's already saved
      // You need to implement a delete functionality, e.g., deleteData(selectedFilteredRecipe.id);
      console.log('Recipe deleted:', selectedFilteredRecipe);
      setIsSaved(false);
    } else {
      // Save the recipe if it's not saved
      const newRecipe: React.FC<postDataProp> = {
        user_id: 1, // for now, a user has user_id 1
        name: selectedFilteredRecipe?.name,
        ingredients: selectedFilteredRecipe?.ingredients,
        instructions: selectedFilteredRecipe?.instructions
      };

      console.log('Recipe saved:', newRecipe);
      postData(newRecipe);
      setIsSaved(true);
    }
  };

    // const addToSavedRecipe = () => {
    //   const newRecipe: React.FC<postDataProp> = {
    //     user_id: 1, //for now, q user has user_id 1
    //     name: selectedFilteredRecipe?.name,
    //     ingredients: selectedFilteredRecipe?.ingredients,
    //     instructions: selectedFilteredRecipe?.instructions
    //   }
    //   console.log("newRecipe",newRecipe)
    //   postData(newRecipe)
    // }

    return (
      <div>
        <Header />
        <BackToSearchBtn />
        <h2>{selectedFilteredRecipe?.name}</h2>
        { selectedFilteredRecipe?.image_url && <img src={selectedFilteredRecipe?.image_url || ''}alt="Recipe" />}
        <div>
          <section>
            {selectedFilteredRecipe?.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ))}
          </section>
          <section>
            <div>{selectedFilteredRecipe?.instructions}</div>
          </section>
        </div>
        <button onClick={()=> addToSavedRecipe()}>Saved button</button>
      </div>
    );
  };

export default ShowSingleFilteredRecipePage
