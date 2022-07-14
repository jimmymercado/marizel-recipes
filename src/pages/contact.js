import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import { graphql } from "gatsby"
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
const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby neutra man bun gochujang air plant heirloom vape.
              Whatever letterpress ennui cold-pressed food truck lomo 8-bit, DIY
              stumptown biodiesel.
            </p>
            <p>
              YOLO skateboard salvia actually, readymade photo booth post-ironic
              you probably haven't heard of them keffiyeh schlitz flexitarian
              crucifix lyft.
            </p>
            <p>
              You probably haven't heard of them ramps yuccie, kitsch flannel
              8-bit twee intelligentsia.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" cols="30" rows="10" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomeness!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default Contact
