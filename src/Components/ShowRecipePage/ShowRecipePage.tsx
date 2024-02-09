import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import { ShowRecipePageProps, postDataProp } from '../../types'
import { useState } from 'react'

const ShowRecipePage: React.FC<ShowRecipePageProps> = ({singleRecipe, postData, updateSavedRecipes}) => {
  const [savedMessage, setSavedMessage] = useState('');

  const addToSavedRecipe = () => {
    if (singleRecipe && singleRecipe.data && singleRecipe.data.attributes) {
      const newRecipe: postDataProp = {
        user_id: 1,
        name: singleRecipe?.data.attributes.name || '',
        image_url: singleRecipe.data.attributes.image_url || '',
        ingredients: singleRecipe.data.attributes.ingredients || [],
        instructions: singleRecipe.data.attributes.instructions || [],
      };
      postData(newRecipe);
      updateSavedRecipes([newRecipe]); 
      setSavedMessage('Recipe has been saved');
    } else {
      console.error("Unable to save recipe - data attributes not available:", singleRecipe);
    }
  };

  const renderInstructions = () => {
    const instructions = singleRecipe?.data.attributes.instructions;
  
    if (Array.isArray(instructions)) {
      return instructions.map((instruction, index) => (
        <div key={index}>{index + 1}. {instruction}</div>
      ));
    } else if (typeof instructions === 'string') {
      return <div>{instructions}</div>;
    } else {
      return <div>Sorry, unable to load instructions.</div>;
    }
  };

    return (
      <div>
        <Header />
        <BackToSearchBtn />
        <h2>{singleRecipe?.data.attributes.name}</h2>
        { singleRecipe?.image_url && <img src={singleRecipe?.image_url || ''}alt="Recipe" />}
        <div>
          <section>
            {singleRecipe?.data.attributes.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ))}
          </section>
          <section>
            {renderInstructions()}
              {/* {singleRecipe?.data.attributes.instructions && (
            <section>
              {singleRecipe.data.attributes.instructions.map((instructions: string, index: number) => (
                <div key={index}>{index + 1}. {instructions}</div>
              ))}
            </section>
          )} */}
          </section>
        </div>
        <button className='saved_btn' type="submit"  onClick={()=> addToSavedRecipe()}>Saved button</button>
        { savedMessage && <div>{savedMessage}</div>}
      </div>
    );
  };

export default ShowRecipePage

  //for implementing a delete?
  // const addToSavedRecipe = () => {
    //   if (isSaved) {
      //     // Delete the recipe if it's already saved
      //     // You need to implement a delete functionality, e.g., deleteData(selectedFilteredRecipe.id);
      //      ('Recipe deleted:', singleRecipe);
      //     setIsSaved(false);
      //   } else {
        //     // Save the recipe if it's not saved
        //     const newRecipe: React.FC<postDataProp> = {
          //       user_id: 1, // for now, a user has user_id 1
          //       name: singleRecipe?.name,
          //       ingredients: singleRecipe?.ingredients,
          //       instructions: singleRecipe?.instructions
          //     };
          
          //      ('Recipe saved:', newRecipe);
          //     postData(newRecipe);
          //     setIsSaved(true);
          //   }
          // };
          
          // const addToSavedRecipe = () => {
            //   const newRecipe: postDataProp = {
              //     user_id: 1,
              //     name: singleRecipe?.name || '',
              //     ingredients: singleRecipe?.ingredients || [],
              //     instructions: singleRecipe?.instructions || '',
  //   };
  