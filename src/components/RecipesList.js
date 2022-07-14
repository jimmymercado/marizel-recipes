import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, prepTime, cookTime, image } = recipe
        const pathToImage = getImage(image)
        return (
          <Link
            to={`/${slugify(title, { lower: true })}`}
            key={id}
            className="recipe"
          >
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{recipe.title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
