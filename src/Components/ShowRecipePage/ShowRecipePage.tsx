import './ShowRecipePage.css'
import Header from '../Header/Header'
import BackToSearchBtn from '../BackToSearchBtn/BackToSearchBtn'
import IndividualRecipeCard from '../IndividualRecipeCard/IndividualRecipeCard'

const ShowRecipePage = () => {
  return (
    <div>
      <Header/>
      <BackToSearchBtn/> //add this button to FilteredRecipe page, Saved Recipes, 
      <IndividualRecipeCard/>
      
      {/* <section>
        <h2>Recipe name</h2>
        <section></section>
      </section> */}
    </div>
  )
}

export default ShowRecipePage
