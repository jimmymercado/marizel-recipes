import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import AllTags from "../components/AllTags"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.tag}`} />
      <main className="page">
        <section className="recipes-container">
          <AllTags />
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      filter: { tags: { eq: $tag }, node_locale: { eq: "en-US" } }
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

export default TagTemplate
