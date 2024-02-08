import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'
import { ShowRecipePageProps, postDataProp } from '../../types'
import { Recipe } from '../../types'
import { useState } from 'react'

// const ShowRecipePage: React.FC<ShowRecipePageProps> = ({singleRecipe, postData}) => {
//   // console.log("singleRecipe in ShowRecipePage", singleRecipe)
//   // const [isSaved, setIsSaved] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');
//   console.log("singleRecipe",singleRecipe)

  //for implementing a delete?
  // const addToSavedRecipe = () => {
  //   if (isSaved) {
  //     // Delete the recipe if it's already saved
  //     // You need to implement a delete functionality, e.g., deleteData(selectedFilteredRecipe.id);
  //     console.log('Recipe deleted:', singleRecipe);
  //     setIsSaved(false);
  //   } else {
  //     // Save the recipe if it's not saved
  //     const newRecipe: React.FC<postDataProp> = {
  //       user_id: 1, // for now, a user has user_id 1
  //       name: singleRecipe?.name,
  //       ingredients: singleRecipe?.ingredients,
  //       instructions: singleRecipe?.instructions
  //     };

  //     console.log('Recipe saved:', newRecipe);
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
  
  //   console.log("newRecipe", newRecipe);
  //   postData(newRecipe);
  //   setSavedMessage('Recipe has been saved');
  // };

  // const addToSavedRecipe = () => {
  //   if ('data' in singleRecipe!) {
  //     // Handle the case when singleRecipe is of type RecipesData
  //     const newRecipe: postDataProp = {
  //       user_id: 1,
  //       name: singleRecipe!.data.attributes.recipes[0].name,
  //       image_url: singleRecipe!.data.attributes.recipes[0].image_url || '', // Add this line
  //       ingredients: singleRecipe!.data.attributes.recipes[0].ingredients || [],
  //       instructions: singleRecipe!.data.attributes.recipes[0].instructions || '',
  //     };
  //     postData(newRecipe);
  //   } else {
  //     // Handle the case when singleRecipe is of type Recipe
  //     const newRecipe: postDataProp = {
  //       user_id: 1,
  //       name: singleRecipe!.name,
  //       image_url: singleRecipe!.image_url || '', // Add this line
  //       ingredients: singleRecipe!.ingredients || [],
  //       instructions: singleRecipe!.instructions || '',
  //     };
  //     postData(newRecipe);
  //   }
  // };
  //   return (
  //     <div>
  //       <Header />
  //       <BackToSearchBtn />
  //       <h2>{singleRecipe?.data.attributes.name}</h2>
  //       { singleRecipe?.image_url && <img src={singleRecipe?.image_url || ''}alt="Recipe" />}
  //       <div>
  //         <section>
  //           {singleRecipe?.data.attributes.ingredients.map((ingredient: string, index: number) => (
  //             <div key={index}>{ingredient}</div>
  //           ))}
  //         </section>
  //         <section>
  //           {/* <div>{singleRecipe?.data.attributes.instructions} */}
  //           {/* {singleRecipe?.data.attributes.instructions.map((instructions: string, index: number) => (
  //             <div key={index}>{index + 1}. {instructions}</div>
  //             ))} */}
  //         </section>
  //       </div>
  //       <button type="submit" onClick={()=> addToSavedRecipe()}>Saved button</button>
  //       { savedMessage && <div>{savedMessage}</div>}
  //     </div>
  //   );
  // };

  const ShowRecipePage: React.FC<ShowRecipePageProps> = ({ singleRecipe, postData }) => {
    
    const addToSavedRecipe = () => {
      console.log('single-recipe', singleRecipe)
      if ('data' in singleRecipe && singleRecipe.data.attributes.recipes.length > 0) {
        const firstRecipe = singleRecipe.data.attributes.recipes[0];
        const newRecipe: Recipe = {
          name: firstRecipe.name,
          ingredients: firstRecipe.ingredients || [],
          instructions: firstRecipe.instructions || '',
          image_url: firstRecipe.image_url || null,
        };
        postData(newRecipe);
      } else if ('image_url' in singleRecipe) {
        // Handle the case when singleRecipe is of type Recipe
        const newRecipe: Recipe = {
          name: singleRecipe.name,
          ingredients: singleRecipe.ingredients || [],
          instructions: singleRecipe.instructions || '',
          image_url: singleRecipe.image_url || null,
        };
        postData(newRecipe);
      }
    };
  
    return (
      <div>
        <Header />
        <BackToSearchBtn />
        {singleRecipe && (
          <>
            {'data' in singleRecipe ? (
              <>
                <h2>{singleRecipe.data.attributes.recipes[0].name}</h2>
                {singleRecipe.data.attributes.recipes[0].image_url && (
                  <img src={singleRecipe.data.attributes.recipes[0].image_url || ''} alt="Recipe" />
                )}
                <div>
                  <section>
                    {singleRecipe.data.attributes.recipes[0].ingredients.map((ingredient: string, index: number) => (
                      <div key={index}>{ingredient}</div>
                    ))}
                  </section>
                  <section>
                    {/* {singleRecipe.data.attributes.recipes[0].instructions.map((instructions: string, index: number) => (
                      <div key={index}>{index + 1}. {instructions}</div>
                    ))} */}
                  </section>
                </div>
              </>
            ) : (
              <>
                <h2>{singleRecipe.name}</h2>
                {singleRecipe.image_url && <img src={singleRecipe.image_url || ''} alt="Recipe" />}
                <div>
                  <section>
                    {singleRecipe.ingredients.map((ingredient: string, index: number) => (
                      <div key={index}>{ingredient}</div>
                    ))}
                  </section>
                  <section>
                    {/* {singleRecipe.instructions.map((instructions: string, index: number) => (
                      <div key={index}>{index + 1}. {instructions}</div>
                    ))} */}
                  </section>
                </div>
              </>
            )}
           <button type="submit" onClick={() => addToSavedRecipe()} disabled={!singleRecipe}>
  Saved button
</button>
            {savedMessage && <div>{savedMessage}</div>}
          </>
        )}
      </div>
    );
  };
  
  export default ShowRecipePage;

