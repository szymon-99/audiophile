import React, { FC } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import {
  CategoryHero,
  AboutCard,
  Categories,
  CategoryProducts,
  Seo,
} from "../components"
import { CategoryProduct } from "../../types"

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
      <Seo title={category} />
      <CategoryHero category={category} />
      <CategoryProducts products={products} />
      <Categories />
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
