const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const results = await graphql(`
    query getRecipesByTag {
      allContentfulRecipe {
        nodes {
          tags
        }
      }
    }
  `)

  results.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag, { lower: false })}`,
        component: path.resolve(`./src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
