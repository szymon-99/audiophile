const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query Categories {
      categories: allStrapiProductsPanel {
        nodes {
          panelItem {
            type
          }
        }
      }
    }
  `)
  console.log(result)
  result.data.categories.nodes[0].panelItem.forEach(({ type }) => {
    createPage({
      path: type,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        type,
      },
    })
  })
}
