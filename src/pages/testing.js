import React from "react"
import Layout from "../components/Layout"
import Gallery from "../examples/gallery"
import AllRecipes from "../components/AllRecipes"

const Testing = () => {
  return (
    <Layout>
      <main className="page">
        <section className="test-page">
          <Gallery />
        </section>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Testing
