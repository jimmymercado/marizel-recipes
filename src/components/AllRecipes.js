import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"

const query = graphql`
  {
    allContentfulRecipe(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
        cookTime
        prepTime
        servings
        title
        tags
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
