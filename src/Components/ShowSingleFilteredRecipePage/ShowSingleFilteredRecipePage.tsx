import './ShowSingleFilteredRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'
import { ShowSingleFilteredRecipePageProps } from '../../types'
import { Recipe } from '../../types'

const ShowSingleFilteredRecipePage: React.FC<ShowSingleFilteredRecipePageProps> = ({ selectedFilteredRecipe, postData }) => {
  console.log("selectedFilterecRecipe in ShowSingleRecipePage:", selectedFilteredRecipe)
    
    const addToSavedRecipe = () => {
      const newRecipe = {
        user_id: 1, //for now, q user has user_id 1
        //but has to be tied with the email??? how do we get the email?
        name: selectedFilteredRecipe?.name,
        ingredients: selectedFilteredRecipe?.ingredients,
        instructions: selectedFilteredRecipe?.instructions
      }
      postData(newRecipe)
    }

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
