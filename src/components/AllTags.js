import React from "react"
import setupTags from "../utils/setupTags"
import { Link, useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"

const AllTags = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/tags/${slugify(text, { lower: true })}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const query = graphql`
  {
    allContentfulRecipe(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        tags
      }
    }
  }
`
export default AllTags
