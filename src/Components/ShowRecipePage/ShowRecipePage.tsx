import './ShowRecipePage.css';
import Header from '../Header/Header';
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn';
import { ShowRecipePageProps, postDataProp } from '../../types';
import { useState } from 'react';

const ShowRecipePage: React.FC<ShowRecipePageProps> = ({
  singleRecipe,
  postData,
  updateSavedRecipes,
}) => {
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
      console.error(
        'Unable to save recipe - data attributes not available:',
        singleRecipe,
      );
    }
  };

  const renderInstructions = () => {
    const instructions = singleRecipe?.data.attributes.instructions;

    if (Array.isArray(instructions)) {
      return instructions.map((instruction, index) => (
        <div key={index}>
          {index + 1}. {instruction}
        </div>
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
      <button
        className='saved_btn'
        type='submit'
        onClick={() => addToSavedRecipe()}>
        Save Recipe
      </button>
      <h2>{singleRecipe?.data.attributes.name}</h2>
      {singleRecipe?.image_url && (
        <img src={singleRecipe?.image_url || ''} alt='Recipe' />
      )}
      <div className='scroll'>
        <section>
          <h3>Ingredients</h3>
          {singleRecipe?.data.attributes.ingredients.map(
            (ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ),
          )}
        </section>
        <section>
          <h3>Instructions</h3>
          {renderInstructions()}
        </section>
      </div>
      {savedMessage && <h3>{savedMessage}</h3>}
    </div>
  );
};

export default ShowRecipePage;
