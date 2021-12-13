import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Ingredients from '../Components/Ingredients';
import Methods from '../Components/Methods';
import '../Css/RecipeDetails.css'

function RecipeDetails() {
const {id}=useParams()
const product=useSelector(state=>state.recipes.recipes)  ;
return (
        <div className="recipe_details">
            {product.map((el,index)=>el.id===id && <div key={index}>
                {el.dishName}
                <img src={el.recipe.imgUrl} alt="dishImage"/>
    <div className="details_wrapper">
        {el.recipe.ingredients.map(ingredient=>(<Ingredients ingredient={ingredient}/>))}
        {el.recipe.methods.map(method=>(<Methods method={method}step={index} />))}
</div>

                </div>)}
        
        </div>
    )
}

export default RecipeDetails
