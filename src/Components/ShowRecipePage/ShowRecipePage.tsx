import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'
import { ShowRecipePageProps } from '../../types'
import { Recipe } from '../../types'

const ShowRecipePage: React.FC<ShowRecipePageProps> = (
  {singleRecipe}
  ) => {

    // const typedSingleRecipe = singleRecipe as Recipe;
    console.log("typedSingleRecipe",singleRecipe)

    return (
      <div>
        <Header />
        <BackToSearchBtn />
        <h2>{singleRecipe.name}</h2>
=        <img src={singleRecipe.image_url || ''} alt="Recipe" />
        <div>
          <section>
=            {singleRecipe.ingredients.map((ingredient: string, index: number) => (
              <div key={index}>{ingredient}</div>
            ))}
          </section>
          <section>
            <div>{singleRecipe.instructions}</div>
          </section>
        </div>
      </div>
    );
  };

export default ShowRecipePage
