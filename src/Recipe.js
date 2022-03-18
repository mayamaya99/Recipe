import React from 'react'
import style from './recipe.module.css'

export const Recipe = ({ title, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={ style.img} src={image} alt="" />
            <ul>
            {ingredients.map(ingredient =>(
                <li>{ ingredient.text}</li>
            ))}
            </ul>
        </div>
    )
}
export default Recipe;

