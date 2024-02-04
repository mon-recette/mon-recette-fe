import { smallRecipePageProps } from '../../types';

const SmallRecipeCard: React.FC<smallRecipePageProps> = ({name, instructions, image_url, ingredients}) => {
  //{name, instructions, image_url, ingredients}
  return (
    <div className='small-recipe-card'>
      <h3>recipe card</h3>
    </div>
  )
}

export default SmallRecipeCard
