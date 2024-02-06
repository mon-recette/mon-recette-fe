import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'
import { ShowRecipePageProps } from '../../types'
import { Recipe } from '../../types'

const ShowRecipePage: React.FC<ShowRecipePageProps> = ({singleRecipe, postData}) => {
    // const typedSingleRecipe = singleRecipe as Recipe;
    // console.log("typedSingleRecipe",singleRecipe)
    const addToSavedRecipe = () => {
      const newRecipe = {
        user_id: singleRecipe?.name, //but has to be tied with the email??? how do we get the email?
        name: singleRecipe?.name,
        ingredients: singleRecipe?.ingredients,
        instructions: singleRecipe?.instructions
      }
    }
    return (
      <div>
        <Header />
        <BackToSearchBtn />
        <h2>{singleRecipe?.name}</h2>
=        <img src={singleRecipe?.image_url || ''} alt="Recipe" />
        <div>
          <section>
=            {singleRecipe?.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ))}
          </section>
          <section>
            <div>{singleRecipe?.instructions}</div>
          </section>
        </div>
        <button onClick={()=> addToSavedRecipe()}>Saved button</button>
      </div>
    );
  };

export default ShowRecipePage
