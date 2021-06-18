import React, { FC } from "react"
import styled from "styled-components"
import Category from "./Category"
import { graphql, useStaticQuery } from "gatsby"
import { Image } from "../../../types"

const query = graphql`
  {
    data: allStrapiProductsPanel {
      nodes {
        panelItem {
          id
          type
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
  }
`
export type CategoryItem = {
  id: number
  type: string
  image: Image
}

const Categories: FC = () => {
  const {
    data: { nodes },
  } = useStaticQuery(query)
  const categoryItems: CategoryItem[] = nodes[0].panelItem

  return (
    <Wrapper className="section">
      {categoryItems.map(item => {
        return <Category key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-row-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  @media screen and (min-width: 992px) {
    grid-gap: 2rem;
  }
`

export default Categories
