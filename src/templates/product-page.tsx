import React, { FC } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { FeaturedProducts, AboutCard } from "../components"
import { FeaturedProduct, Product } from "../../types"

interface ProductProps {
  data: {
    product: Product
    featured: FeaturedProduct
  }
}

const ProductPage: FC<ProductProps> = ({ data }) => {
  console.log(data)
  return (
    <Wrapper>
      <FeaturedProducts />
      <AboutCard />
    </Wrapper>
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
    featured: allStrapiProducts(filter: { slug: { ne: $slug } }, limit: 3) {
      nodes {
        name
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

const Wrapper = styled.main``

export default ProductPage
