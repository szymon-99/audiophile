import React, { FC } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import {
  CategoryHero,
  AboutCard,
  FeaturedProducts,
  CategoryProducts,
} from "../components"
import { Image } from "../../types"

export type CategoryProduct = {
  name: string
  type: string
  slug: string
  description: string
  image: Image
  new: boolean
  id: string
}
interface CategoryPageProps {
  pageContext: {
    type: string
  }
  data: {
    strapi: {
      products: CategoryProduct[]
    }
  }
}

const Category: FC<CategoryPageProps> = ({ pageContext, data }) => {
  const category = pageContext.type
  const { products } = data.strapi
  return (
    <Wrapper>
      <CategoryHero category={category} />
      <CategoryProducts products={products} />
      <FeaturedProducts />
      <AboutCard />
    </Wrapper>
  )
}

export const query = graphql`
  query MyQuery($type: String) {
    strapi: allStrapiProducts(filter: { type: { eq: $type } }) {
      products: nodes {
        name
        type
        slug
        description
        new
        id
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

export default Category
