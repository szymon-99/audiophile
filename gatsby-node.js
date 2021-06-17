const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query Pages {
      categories: allStrapiProductsPanel {
        nodes {
          panelItem {
            type
          }
        }
      }
      products: allStrapiProducts {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.categories.nodes[0].panelItem.forEach(({ type }) => {
    createPage({
      path: type,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        type,
      },
    })
  })
  result.data.products.nodes.forEach(({ slug }) => {
    createPage({
      path: `/products/${slug}`,
      component: path.resolve(`./src/templates/product-page.tsx`),
      context: {
        slug,
      },
    })
  })
}
