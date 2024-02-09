import './ShowSingleFilteredRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import { ShowSingleFilteredRecipePageProps } from '../../types'
import { postDataProp } from '../../types';
import { useState } from 'react';
        
const ShowSingleFilteredRecipePage: React.FC<ShowSingleFilteredRecipePageProps> = ({ selectedFilteredRecipe, postData }) => {
  
  const [savedMessage, setSavedMessage] = useState('');
  // const addToSavedRecipe = () => {
  //   if (isSaved) {
  //     // Delete the recipe if it's already saved
  //     // You need to implement a delete functionality, e.g., deleteData(selectedFilteredRecipe.id);
  //      ('Recipe deleted:', selectedFilteredRecipe);
  //     setIsSaved(false);
  //   } else {
  //     // Save the recipe if it's not saved
  //     const newRecipe: React.FC<postDataProp> = {
  //       user_id: 1, // for now, a user has user_id 1
  //       name: selectedFilteredRecipe?.name,
  //       ingredients: selectedFilteredRecipe?.ingredients,
  //       instructions: selectedFilteredRecipe?.instructions
  //     };

  //      ('Recipe saved:', newRecipe);
  //     postData(newRecipe);
  //     setIsSaved(true);
  //   }
  // };
    
  const addToSavedRecipe = () => {
    if (!selectedFilteredRecipe) {
      console.error('No recipe selected');
      return;
    }

    const newRecipe: postDataProp = {
      user_id: 1, 
      name: selectedFilteredRecipe.name || '',
      ingredients: selectedFilteredRecipe.ingredients || [],
      instructions: selectedFilteredRecipe.instructions || '',
      image_url: selectedFilteredRecipe.image_url || '',
    };

    postData(newRecipe);
    setSavedMessage('Recipe has been saved');
  };

    return (
      <div>
        <Header />
        <BackToSearchBtn />
        <div className='scroll'>
          <h2>{selectedFilteredRecipe?.name}</h2>
          //may have to do if image is null then also display CookingPot
          { selectedFilteredRecipe?.image_url && <img src={selectedFilteredRecipe?.image_url || ''} alt="Recipe Image" width={550}/>}
       
          <section>
            <h2>Ingredients</h2>
            {selectedFilteredRecipe?.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ))}
          </section>
          <section>
            <h2>Instructions</h2>
            {selectedFilteredRecipe?.instructions}
            {/* {selectedFilteredRecipe?.instructions.map((instructions: string, index: number) => (
              <div key={index}>{index + 1}. {instructions}</div>
            ))} */}
            {/* <div>{selectedFilteredRecipe?.instructions}</div> */}
          </section>
        </div>
        <button onClick={()=> addToSavedRecipe()}>Saved button</button>
        { savedMessage && <div>{savedMessage}</div>}
      </div>
    );
  };

export default ShowSingleFilteredRecipePage
