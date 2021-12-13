import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function RecipeDetails() {
const {id}=useParams()
const product=useSelector(state=>state.recipes.recipes)  ;
console.log('info from detils ');  
return (
        <div>
            {product.map((el,index)=>el.id===id && <div key={index}>
                {el.dishName}<img src={el.ImgUrl} alt="dishImage"/>sfjfjfdjfdjdfjfffdgfg</div>)}
        </div>
    )
}

export default RecipeDetails
