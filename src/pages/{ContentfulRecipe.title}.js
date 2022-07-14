import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    cookTime,
    prepTime,
    servings,
    tags,
    tools,
    ingredients,
    instructions,
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* {hero} */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* {icons} */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep: {prepTime}min</h5>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook: {cookTime}min</h5>
                </article>
                <article>
                  <BsPeople />
                  <h5>Serves: {servings}</h5>
                </article>
              </div>
              {/* {tags} */}
              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tag, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/tags/${slugify(tag, { lower: true })}`}
                    >
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* {rest of content} */}
          <section className="recipe-content">
            <article>
              {instructions.map(({ title, instructions }, index) => {
                return (
                  <div key={index}>
                    <h4>Instruction: {title}</h4>
                    {instructions.map((item, index) => {
                      return (
                        <div className="single-instruction" key={index}>
                          <header>
                            <p>step {index + 1}</p>
                            <div></div>
                          </header>
                          <p>{item}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              {ingredients.map(({ title, ingredients }, index) => {
                return (
                  <div key={index}>
                    <h4>Ingredients: {title}</h4>
                    {ingredients.map((item, index) => {
                      return (
                        <p className="single-ingredient" key={index}>
                          <p>{item}</p>
                        </p>
                      )
                    })}
                  </div>
                )
              })}
              <div className="tools">
                <h4>Tools</h4>
                {tools?.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      description {
        description
      }
      title
      cookTime
      prepTime
      servings
      tags
      tools
      ingredients {
        ingredients
        title
      }
      instructions {
        instructions
        title
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
export default RecipeTemplate
