import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

export const data = graphql`
  {
    allContentfulRecipe(
      filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
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
      }
    }
  }
`
const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="About" description="This is About page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p>
              What does the commonly-accepted commonly-accepted standard
              industry term 'back-end'. The capability to implement wirelessly
              leads to the capacity to harness without devaluing our capability
              to transform without devaluing our power to deliver. Without
              interfaces, you will lack architectures. Without
              micro-resource-constrained performance, you will lack
              architectures.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </article>
          <StaticImage
            src="../assets/images/big-image.jpg"
            alt="person pouring salt"
            placeholder="blurred"
            className="about-img"
          />
        </section>
        <br />
        <br />
        <section className="featured-recipes">
          <h5>Look at this awesomeness!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default About
