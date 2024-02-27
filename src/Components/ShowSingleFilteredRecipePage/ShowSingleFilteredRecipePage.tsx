import './ShowSingleFilteredRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import { ShowSingleFilteredRecipePageProps } from '../../types'
import { postDataProp } from '../../types';
import { useState } from 'react';
        
const ShowSingleFilteredRecipePage: React.FC<ShowSingleFilteredRecipePageProps> = ({ selectedFilteredRecipe, postData }) => {
  
  const [savedMessage, setSavedMessage] = useState('');
    
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
        <button
          className="saved_btn"
          type="submit"
          onClick={() => addToSavedRecipe()}
        >
          Save Recipe
        </button>
        <div className="scroll">
          <h2>{selectedFilteredRecipe?.name}</h2>
          {selectedFilteredRecipe?.image_url && (
            <img
              className="filtered-page-img"
              src={selectedFilteredRecipe?.image_url || ""}
              alt={selectedFilteredRecipe?.name || "Recipe Image"}
            />
          )}

          <section>
            <h2>Ingredients</h2>
            {selectedFilteredRecipe?.ingredients.map(
              (ingredient: string, index: number) => (
                <div key={index}>{ingredient}</div>
              )
            )}
          </section>
          <section>
            <h2>Instructions</h2>
            {selectedFilteredRecipe?.instructions}
          </section>
        </div>
        {savedMessage && <h3>{savedMessage}</h3>}
      </div>
    );
  };

export default ShowSingleFilteredRecipePage
