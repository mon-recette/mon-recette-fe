import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'
import { ShowRecipePageProps, postDataProp } from '../../types'
import { Recipe } from '../../types'

const ShowRecipePage: React.FC<ShowRecipePageProps> = ({singleRecipe, postData}) => {
  console.log("singleRecipe in ShowRecipePage", singleRecipe)
  
    const addToSavedRecipe = () => {
      const newRecipe: React.FC<postDataProp> = {
        user_id: 1, //for now, q user has user_id 1
        //but has to be tied with the email??? how do we get the email?
        name: singleRecipe?.name,
        ingredients: singleRecipe?.ingredients,
        instructions: singleRecipe?.instructions
      }
      postData(newRecipe)
    }

    console.log("singleRecipe?.data.attributes.instructions",singleRecipe?.data.attributes.instructions)



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
            <div>{singleRecipe?.data.attributes.instructions}
            {/* {singleRecipe?.data.attributes.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{index + 1}. {ingredient}</div> */}
            </div>
          </section>
        </div>
        <button onClick={()=> addToSavedRecipe()}>Saved button</button>
      </div>
    );
  };

export default ShowRecipePage
