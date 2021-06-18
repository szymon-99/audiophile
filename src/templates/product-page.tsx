import React, { FC } from "react"
import { graphql } from "gatsby"
import {
  Categories,
  AboutCard,
  Featured,
  Gallery,
  Product,
  ProductInfo,
} from "../components"
import { FeaturedProduct, IProduct } from "../../types"
import { sortProducts } from "../utils/helpers"

interface ProductProps {
  data: {
    product: IProduct
    featured: {
      nodes: FeaturedProduct[]
    }
  }
}

const ProductPage: FC<ProductProps> = ({ data }) => {
  const { product, featured } = data
  const { included, gallery, features } = product
  return (
    <main>
      <Product product={product} />
      <ProductInfo info={{ features, included }} />
      <Gallery images={gallery} />
      <Featured featured={sortProducts(featured.nodes).slice(0, 3)} />
      <Categories />
      <AboutCard />
    </main>
  )
}

export const query = graphql`
  query ProductQuery($slug: String) {
    product: strapiProducts(slug: { eq: $slug }) {
      price
      slug
      type
      new
      name
      id
      description
      features {
        desc
      }
      included {
        name
        quantity
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      gallery {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    featured: allStrapiProducts(filter: { slug: { ne: $slug } }) {
      nodes {
        name
        new
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default ProductPage
