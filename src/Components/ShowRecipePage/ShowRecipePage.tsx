import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'

const ShowRecipePage = () => {
    // const displayIndividualRecipe = 
    // <IndividualRecipeCard/>
  return (
    <div>
      <Header/>
      <BackToSearchBtn/> //add this button to FilteredRecipe page, Saved Recipes, 
      <h2>Recipe name</h2>
      <img>Heart image</img>
      <div>
        <section>
            ingredients go here...
        </section>
        <section>
            instructions
        </section>
      </div>
    </div>
  )
}

export default ShowRecipePage
