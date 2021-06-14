import React, { FC } from "react"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"
import Product from "./Product"
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
export type FeaturedItem = {
  id: number
  type: string
  image: Image
}

interface FeaturedQuery {
  data: {
    nodes: [
      {
        panelItem: FeaturedItem[]
      }
    ]
  }
}

const FeaturedProducts: FC = () => {
  const {
    data: { nodes },
  } = useStaticQuery<FeaturedQuery>(query)
  const featuredItems = nodes[0].panelItem

  return (
    <Wrapper className="section">
      {featuredItems.map(item => {
        return <Product key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-gap: 2rem;
  }
`

export default FeaturedProducts
